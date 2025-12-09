// import L from "leaflet";
// import { useEffect, useRef } from "react";

export const Map = () => {
  // const mapElement = useRef(null);

  // useEffect(() => {
  //   var map = L.map("map", {
  //     center: [51.505, -0.09],
  //     zoom: 13,
  //   });
  // }, []);

  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="flex flex-1 gap-2">
          <div className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800">
            {/* <div ref={mapElement} /> */}
          </div>
          <div className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800"></div>
        </div>
      </div>
    </div>
  );
};
