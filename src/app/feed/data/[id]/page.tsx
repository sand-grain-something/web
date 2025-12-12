"use client";

import Image from "next/image";
import { use, useEffect, useState } from "react";
import CDF from "./cdf";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { calculateSandType } from "../prediction-data";

export interface ItemDataType {
  id: number;
  image_id: string;
  data: {
    grain_prediction: {
      size_mm: number;
      distribution_mm: {
        D10: number;
        D16: number;
        D25: number;
        D50: number;
        D50mean: number;
        D65: number;
        D75: number;
        D84: number;
        D90: number;
      };
    };
    coin_prediction: {
      mm_per_pixel: number;
      coin_label: string;
      coin_center_x: number;
      coin_center_y: number;
      coin_radius_px: number;
    };
  };
}

export default function SingleDataPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [imageData, setImageData] = useState<ItemDataType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://127.0.0.1:8080/image/${id}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setImageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center h-screen items-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  const sandType = calculateSandType(imageData?.data.grain_prediction.size_mm);

  return (
    <div className="p-8 gap-4">
      <Link href={"/feed/data"}>
        <Button variant={"ghost"}>
          <ChevronLeft />
          <span>Go Back</span>
        </Button>
      </Link>
      <div className="grid grid-cols-2">
        <div>
          <h4 className="font-bold mt-2">Sand Type: </h4>
          <p>{sandType}</p>
          <h4 className="font-bold mt-2">GPS Coordinates</h4>
          <ul className="list-disc list-inside pl-2">
            <li>Latitude: 12.9580006</li>
            <li>Longitude: 80.0588028</li>
          </ul>
          <h4 className="font-bold mt-2">Coin Model Prediction</h4>
          <ul className="list-disc list-inside pl-2">
            <li>
              mm/pixel: {imageData?.data?.coin_prediction?.mm_per_pixel ?? ""}
            </li>
            <li>Label: {imageData?.data?.coin_prediction?.coin_label ?? ""}</li>
            <li>
              Center: ({imageData?.data?.coin_prediction?.coin_center_x ?? ""},{" "}
              {imageData?.data?.coin_prediction?.coin_center_y ?? ""})
            </li>
            <li>
              Radius (px):{" "}
              {imageData?.data?.coin_prediction?.coin_radius_px ?? ""}
            </li>
          </ul>
          <h4 className="font-bold mt-2">Grain Model Prediction</h4>
          <ul className="list-disc list-inside pl-2">
            <li>
              Size (mm): {imageData?.data?.grain_prediction.size_mm ?? ""}
            </li>
          </ul>
          <h4 className="font-bold mt-2">Grain Size Distribution (mm)</h4>
          <ul className="list-disc list-inside pl-2 grid grid-cols-2 gap-x-4">
            <li>
              D10: {imageData?.data?.grain_prediction.distribution_mm.D10 ?? ""}
            </li>
            <li>
              D16: {imageData?.data?.grain_prediction.distribution_mm.D16 ?? ""}
            </li>
            <li>
              D25: {imageData?.data?.grain_prediction.distribution_mm.D25 ?? ""}
            </li>
            <li>
              D50: {imageData?.data?.grain_prediction.distribution_mm.D50 ?? ""}
            </li>
            <li>
              D50mean:{" "}
              {imageData?.data?.grain_prediction.distribution_mm.D50mean ?? ""}
            </li>
            <li>
              D65: {imageData?.data?.grain_prediction.distribution_mm.D65 ?? ""}
            </li>
            <li>
              D75: {imageData?.data?.grain_prediction.distribution_mm.D75 ?? ""}
            </li>
            <li>
              D84: {imageData?.data?.grain_prediction.distribution_mm.D84 ?? ""}
            </li>
            <li>
              D90: {imageData?.data?.grain_prediction.distribution_mm.D90 ?? ""}
            </li>
          </ul>
        </div>
        <Image
          src={`http://127.0.0.1:8080/image/1`}
          alt=""
          width={400}
          height={300}
          className="bg-muted w-full"
        />
      </div>
      <div className="grid grid-cols-2 py-16">
        <div className="pr-8">
          <h1 className="text-2xl">CDF (Cumulative Distribution Function)</h1>
          <p className="font-normal">
            The Cumulative Distribution Function (CDF) graph, or grain size
            distribution curve, for sand grain analysis is a vital tool in soil
            mechanics and geology used to visually represent the distribution of
            different particle sizes within a sample. It helps determine a
            soil's engineering properties and classification
          </p>
        </div>
        <CDF imageData={imageData} />
      </div>
    </div>
  );
}
