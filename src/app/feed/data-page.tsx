import Image from "next/image";
import { data } from "./data";

export default function DataPage() {
  return (
    <div className="flex flex-1 scroll-auto">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="flex gap-2">
          <div className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 flex justify-center items-center relative gap-2 "></div>
          <div className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 flex justify-center items-center relative gap-2"></div>
          <div className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"></div>
          <div className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"></div>
        </div>
        <div className="flex flex-1 gap-2">
          <div className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800 p-6">
            <div className="grid space-y-8 bg-muted p-4 rounded-md">
              {data.layers[0].features.map((d, idx) => (
                <div key={idx} className="grid grid-cols-4">
                  <div>
                    <h1>Coordinates: </h1>
                    <h1>
                      X: <span>{d.geometry.x}</span>
                    </h1>
                    <h1>
                      Y: <span>{d.geometry.y}</span>
                    </h1>
                  </div>
                  <div>
                    <h1>Attributes: </h1>
                    <h1>
                      Object Id: <span>{d.attributes.objectid}</span>
                    </h1>
                    <h1>
                      Global Id: <span>{d.attributes.globalid}</span>
                    </h1>
                    <h1>
                      Location_Town: <span>{d.attributes.location_town}</span>
                    </h1>

                    <h1>
                      location_on_beach:
                      <span>{d.attributes.location_on_beach}</span>
                    </h1>

                    <h1>
                      location_state:
                      <span>{d.attributes.location_state}</span>
                    </h1>

                    <h1>
                      D10:
                      <span>{d.attributes.D10}</span>
                    </h1>

                    <h1>
                      D16:
                      <span>{d.attributes.D16}</span>
                    </h1>

                    <h1>
                      D25:
                      <span>{d.attributes.D25}</span>
                    </h1>

                    <h1>
                      D50:
                      <span>{d.attributes.D50}</span>
                    </h1>

                    <h1>
                      D65:
                      <span>{d.attributes.D65}</span>
                    </h1>

                    <h1>
                      D75:
                      <span>{d.attributes.D75}</span>
                    </h1>

                    <h1>
                      D84:
                      <span>{d.attributes.D84}</span>
                    </h1>

                    <h1>
                      D90:
                      <span>{d.attributes.D90}</span>
                    </h1>

                    <h1>
                      DMEAN:
                      <span>{d.attributes.DMEAN}</span>{" "}
                    </h1>

                    <h1>
                      country:
                      <span>{d.attributes.country}</span>
                    </h1>
                    <h1>
                      Latitude:
                      <span>{d.attributes.Latitude}</span>
                    </h1>
                    <h1>
                      Longitude:
                      <span>{d.attributes.Longitude}</span>
                    </h1>
                    <h1>
                      model_training_date:
                      <span>{d.attributes.model_training_date}</span>
                    </h1>
                    <h1>
                      picture_date:
                      <span>{d.attributes.picture_date}</span>
                    </h1>
                    <h1>
                      latitude_submission:
                      <span>{d.attributes.latitude_submission}</span>
                    </h1>

                    <h1>
                      longitude_submission:
                      <span>{d.attributes.longitude_submission}</span>
                    </h1>

                    <h1>
                      sandsnap_version:
                      <span>{d.attributes.sandsnap_version}</span>
                    </h1>

                    <h1>
                      sandsnap_id:
                      <span>{d.attributes.sandsnap_id}</span>
                    </h1>
                  </div>
                  <div>
                    <Image
                      className="rounded-md"
                      width={300}
                      height={150}
                      src={d.attributes.image}
                      alt=""
                    />
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
