import { Globe } from "@/components/feed/globe";
import { CircleGauge, ScanEyeIcon } from "lucide-react";

export const Dashboard = () => {
  return (
    <div className="flex flex-1 w-[95vw] h-screen">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="flex gap-2">
          <div className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 flex justify-center items-center relative gap-2 ">
            <ScanEyeIcon />
            <h1 className="text-2xl">
              Sedinet <span className="text-primaryc"> Model</span>
            </h1>
          </div>
          <div className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 flex justify-center items-center relative gap-2">
            <CircleGauge />
            <h1 className="text-2xl">
              8% <span className="text-primary">Accuracy</span>
            </h1>
          </div>
          <div className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"></div>
          <div className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"></div>
        </div>
        <div className="flex flex-1 gap-2">
          <div className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800"></div>
          <div className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
};
