// Simplified India states GeoJSON - focusing on coastal states
export const indiaStatesGeoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Gujarat", isCoastal: true },
      geometry: {
        type: "Polygon",
        coordinates: [[[68.0, 23.0], [74.0, 23.0], [74.0, 24.5], [68.0, 24.5], [68.0, 23.0]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Maharashtra", isCoastal: true },
      geometry: {
        type: "Polygon",
        coordinates: [[[72.0, 15.0], [80.0, 15.0], [80.0, 22.0], [72.0, 22.0], [72.0, 15.0]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Goa", isCoastal: true },
      geometry: {
        type: "Polygon",
        coordinates: [[[73.5, 14.5], [74.5, 14.5], [74.5, 15.8], [73.5, 15.8], [73.5, 14.5]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Karnataka", isCoastal: true },
      geometry: {
        type: "Polygon",
        coordinates: [[[74.0, 11.0], [78.5, 11.0], [78.5, 18.0], [74.0, 18.0], [74.0, 11.0]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Kerala", isCoastal: true },
      geometry: {
        type: "Polygon",
        coordinates: [[[74.5, 8.0], [77.5, 8.0], [77.5, 12.8], [74.5, 12.8], [74.5, 8.0]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Tamil Nadu", isCoastal: true },
      geometry: {
        type: "Polygon",
        coordinates: [[[76.0, 8.0], [80.5, 8.0], [80.5, 13.5], [76.0, 13.5], [76.0, 8.0]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Andhra Pradesh", isCoastal: true },
      geometry: {
        type: "Polygon",
        coordinates: [[[76.5, 12.0], [84.5, 12.0], [84.5, 19.5], [76.5, 19.5], [76.5, 12.0]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Odisha", isCoastal: true },
      geometry: {
        type: "Polygon",
        coordinates: [[[81.0, 17.5], [87.5, 17.5], [87.5, 22.5], [81.0, 22.5], [81.0, 17.5]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "West Bengal", isCoastal: true },
      geometry: {
        type: "Polygon",
        coordinates: [[[86.5, 21.5], [89.5, 21.5], [89.5, 27.0], [86.5, 27.0], [86.5, 21.5]]]
      }
    }
  ]
};

