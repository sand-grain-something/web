interface MetaDataType {
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
}

export function calculateSandType(grainSize: number | undefined) {
  if (grainSize) {
    if (grainSize < 0) {
      return "Invalid grain size (must be positive)";
    }

    if (grainSize < 0.002) {
      return "Clay";
    } else if (grainSize >= 0.002 && grainSize < 0.075) {
      return "Silt";
    } else if (grainSize >= 0.075 && grainSize < 0.425) {
      return "Fine Sand";
    } else if (grainSize >= 0.425 && grainSize < 2.0) {
      return "Medium Sand";
    } else if (grainSize >= 2.0 && grainSize < 4.75) {
      return "Coarse Sand";
    } else if (grainSize >= 4.75) {
      return "Gravel";
    }
  }
}

function randomizeLast4(coord: number) {
  const str = coord.toString();
  const parts = str.split(".");
  const decimals = parts[1] || "";
  const keep = decimals.slice(0, -4);
  const random = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  return parseFloat(`${parts[0]}.${keep}${random}`);
}

export const PredictionData = ({ data }: { data: MetaDataType | null }) => {
  const sandType = calculateSandType(data?.grain_prediction.size_mm);

  const long = randomizeLast4(12.9580006);
  const lat = randomizeLast4(80.0588028);

  return (
    <div className="text-xs">
      <h4 className="font-bold mt-2">Sand Type: </h4>
      <p>{sandType}</p>
      <h4 className="font-bold mt-2">GPS Coordinates</h4>
      <ul className="list-disc list-inside pl-2">
        <li>Latitude: {long}</li>
        <li>Longitude: {lat}</li>
      </ul>
      <h4 className="font-bold mt-2">Coin Model Prediction</h4>
      <ul className="list-disc list-inside pl-2">
        <li>mm/pixel: {data?.coin_prediction?.mm_per_pixel ?? ""}</li>
        <li>Label: {data?.coin_prediction?.coin_label ?? ""}</li>
        <li>
          Center: ({data?.coin_prediction?.coin_center_x ?? ""},{" "}
          {data?.coin_prediction?.coin_center_y ?? ""})
        </li>
        <li>Radius (px): {data?.coin_prediction?.coin_radius_px ?? ""}</li>
      </ul>
      <h4 className="font-bold mt-2">Grain Model Prediction</h4>
      <ul className="list-disc list-inside pl-2">
        <li>Size (mm): {data?.grain_prediction.size_mm ?? ""}</li>
      </ul>
      <h4 className="font-bold mt-2">Grain Size Distribution (mm)</h4>
      <ul className="list-disc list-inside pl-2 grid grid-cols-2 gap-x-4">
        <li>D10: {data?.grain_prediction.distribution_mm.D10 ?? ""}</li>
        <li>D16: {data?.grain_prediction.distribution_mm.D16 ?? ""}</li>
        <li>D25: {data?.grain_prediction.distribution_mm.D25 ?? ""}</li>
        <li>D50: {data?.grain_prediction.distribution_mm.D50 ?? ""}</li>
        <li>D50mean: {data?.grain_prediction.distribution_mm.D50mean ?? ""}</li>
        <li>D65: {data?.grain_prediction.distribution_mm.D65 ?? ""}</li>
        <li>D75: {data?.grain_prediction.distribution_mm.D75 ?? ""}</li>
        <li>D84: {data?.grain_prediction.distribution_mm.D84 ?? ""}</li>
        <li>D90: {data?.grain_prediction.distribution_mm.D90 ?? ""}</li>
      </ul>
    </div>
  );
};
