"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PredictionData } from "./prediction-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface ImageDataType {
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
  } | null;
}

export default function DataPage() {
  const [imagesData, setImagesData] = useState<ImageDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [responseTime, setResponseTime] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const startTime = performance.now();
      try {
        const response = await fetch("http://localhost:8080/image");
        const data = await response.json();
        console.log(data);
        setImagesData(data);
        const endTime = performance.now();
        setResponseTime(endTime - startTime);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-1 scroll-auto">
      <div className="flex h-full w-full flex-1 flex-col gap-2 p-2 md:p-10">
        <div className="flex gap-2 space-y-2">
          <div className="h-20 w-full rounded-lg bg-muted flex justify-center items-center relative gap-2 ">
            <h1>
              Total Images: {imagesData.length}
              <br />
              <span className="text-xs font-light tracking-tight">
                Total number of images processed.
              </span>
            </h1>
          </div>
          <div className="h-20 w-full rounded-lg bg-muted flex justify-center items-center relative gap-2">
            <h1>
              Avg model res time:
              <br />
              <span className="text-xs font-light tracking-tight">
                Average time it takes to analyize image.
              </span>
            </h1>
          </div>
          <div className="h-20 w-full rounded-lg bg-muted flex justify-center items-center relative gap-2">
            <h1>
              Avg Res Time:{" "}
              {responseTime ? `${responseTime.toFixed(2)} ms` : "N/A"}
              <br />
              <span className="text-xs font-light tracking-tight">
                Average time it takes to fetch data.
              </span>
            </h1>
          </div>
        </div>
        <div className="flex flex-1 gap-2">
          <div className="h-full w-full">
            <div className="grid grid-cols-3 gap-6">
              {loading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="rounded-lg overflow-hidden bg-gray-200 dark:bg-neutral-700 animate-pulse"
                    >
                      <div className="w-full h-48 bg-muted"></div>
                      <div className="p-4">
                        <div className="h-4 bg-muted"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-muted rounded w-1/2"></div>
                          <div className="h-3 bg-muted rounded w-5/6"></div>
                          <div className="h-3 bg-muted rounded w-4/6"></div>
                        </div>
                      </div>
                    </div>
                  ))
                : imagesData.map((image) => (
                    <div
                      key={image.id}
                      className="rounded-lg overflow-hidden bg-muted flex flex-col"
                    >
                      <div
                        className="relative w-full"
                        style={{ paddingTop: "60%" }}
                      >
                        <Image
                          src={`https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg`}
                          alt=""
                          layout="fill"
                          className="object-cover"
                        />
                        {image.data === null && (
                          <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-[1px] z-10">
                            <h1 className="animate-pulse">
                              Analyzing The Image...
                            </h1>
                          </div>
                        )}
                      </div>
                      <div className="p-4 grow">
                        <Link href={`/feed/data/${image.id}`}>
                          <Button className="w-full">Know More</Button>
                        </Link>
                        <PredictionData data={image.data} />
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
