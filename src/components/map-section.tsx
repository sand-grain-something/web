'use client';

import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { beaches, type Beach } from '@/data/beaches';
import { indiaStatesGeoJSON } from '@/data/india-geojson';
import { Filter, X } from 'lucide-react';
import { Button } from './ui/button';

// Dynamically import Leaflet to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });
const GeoJSON = dynamic(() => import('react-leaflet').then((mod) => mod.GeoJSON), { ssr: false });


interface MapSectionProps {
  onBeachSelect: (beach: Beach) => void;
}

export default function MapSection({ onBeachSelect }: MapSectionProps) {
  const [selectedBeach, setSelectedBeach] = useState<Beach | null>(null);
  const [filters, setFilters] = useState({
    familyFriendly: false,
    waterQuality: [] as string[],
    popularity: [] as string[],
  });
  const [showFilters, setShowFilters] = useState(false);
  const [filteredBeaches, setFilteredBeaches] = useState(beaches);
  const [isClient, setIsClient] = useState(false);

  // Fix Leaflet icon issue and load CSS on client side only
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      // Import Leaflet CSS
      import('leaflet/dist/leaflet.css');
      // Fix default marker icons
      import('leaflet').then((L) => {
        delete (L.default.Icon.Default.prototype as any)._getIconUrl;
        L.default.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
      });
    }
  }, []);

  useEffect(() => {
    let filtered = beaches;

    if (filters.familyFriendly) {
      filtered = filtered.filter((b) => b.familyFriendly);
    }

    if (filters.waterQuality.length > 0) {
      filtered = filtered.filter((b) => filters.waterQuality.includes(b.waterQuality));
    }

    if (filters.popularity.length > 0) {
      filtered = filtered.filter((b) => filters.popularity.includes(b.popularity));
    }

    setFilteredBeaches(filtered);
  }, [filters]);

  const handleMarkerClick = (beach: Beach) => {
    setSelectedBeach(beach);
    onBeachSelect(beach);
  };

  const geoJsonStyle = (feature: any) => {
    const isCoastal = feature?.properties?.isCoastal;
    return {
      fillColor: isCoastal ? '#06b6d4' : '#e5e7eb',
      fillOpacity: isCoastal ? 0.3 : 0.1,
      color: isCoastal ? '#0891b2' : '#9ca3af',
      weight: isCoastal ? 2 : 1,
    };
  };

  return (
    <section id="map" className="relative min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Interactive
            </span>{' '}
            <span className="text-foreground">Beach Map</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Interactive map showing GPS-tagged measurement locations with automated grain size distribution analysis
          </p>
        </div>

        <div className="relative h-[600px] md:h-[700px] rounded-2xl overflow-hidden border border-border shadow-xl">
          {/* Filter Button */}
          <div className="absolute top-4 right-4 z-[1000]">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="bg-background/90 backdrop-blur-sm"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="absolute top-16 right-4 z-[1000] bg-background/95 backdrop-blur-md border border-border rounded-lg p-4 shadow-xl w-64">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-1 hover:bg-muted rounded"
                  aria-label="Close filters"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.familyFriendly}
                    onChange={(e) => setFilters({ ...filters, familyFriendly: e.target.checked })}
                    className="rounded"
                  />
                  <span className="text-sm">Family Friendly</span>
                </label>
                <div>
                  <p className="text-sm font-medium mb-2">Water Quality</p>
                  {['Excellent', 'Good', 'Fair', 'Poor'].map((quality) => (
                    <label key={quality} className="flex items-center space-x-2 cursor-pointer mb-1">
                      <input
                        type="checkbox"
                        checked={filters.waterQuality.includes(quality)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters({
                              ...filters,
                              waterQuality: [...filters.waterQuality, quality],
                            });
                          } else {
                            setFilters({
                              ...filters,
                              waterQuality: filters.waterQuality.filter((q) => q !== quality),
                            });
                          }
                        }}
                        className="rounded"
                      />
                      <span className="text-sm">{quality}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Popularity</p>
                  {['High', 'Medium', 'Low'].map((pop) => (
                    <label key={pop} className="flex items-center space-x-2 cursor-pointer mb-1">
                      <input
                        type="checkbox"
                        checked={filters.popularity.includes(pop)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters({
                              ...filters,
                              popularity: [...filters.popularity, pop],
                            });
                          } else {
                            setFilters({
                              ...filters,
                              popularity: filters.popularity.filter((p) => p !== pop),
                            });
                          }
                        }}
                        className="rounded"
                      />
                      <span className="text-sm">{pop}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {isClient && typeof window !== 'undefined' && (
            <MapContainer
              center={[20.5937, 78.9629]}
              zoom={5}
              style={{ height: '100%', width: '100%' }}
              className="z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <GeoJSON
                data={indiaStatesGeoJSON as any}
                style={geoJsonStyle}
                onEachFeature={(feature, layer) => {
                  if (feature.properties) {
                    layer.bindTooltip(feature.properties.name || '');
                    layer.on({
                      click: (e) => {
                        // Zoom to state on click using the layer's bounds
                        const map = e.target._map || layer._map;
                        if (map) {
                          try {
                            // Use the layer's getBounds() method which properly handles coordinate conversion
                            const bounds = layer.getBounds();
                            if (bounds.isValid()) {
                              map.flyToBounds(bounds, {
                                padding: [100, 100],
                                duration: 1,
                              });
                            }
                          } catch (error) {
                            console.error('Error zooming to bounds:', error);
                            // Fallback: try to get bounds from feature geometry
                            if (feature.geometry && feature.geometry.type === 'Polygon') {
                              import('leaflet').then((L) => {
                                const coords = (feature.geometry as any).coordinates[0];
                                // Convert GeoJSON [lng, lat] to Leaflet [lat, lng]
                                const latLngs = coords.map((coord: [number, number]) => [coord[1], coord[0]]);
                                const bounds = L.default.latLngBounds(latLngs);
                                map.flyToBounds(bounds, {
                                  padding: [100, 100],
                                  duration: 1,
                                });
                              });
                            }
                          }
                        }
                      },
                    });
                  }
                }}
              />
              {filteredBeaches.map((beach) => (
                <Marker
                  key={beach.id}
                  position={beach.coordinates}
                  eventHandlers={{
                    click: () => handleMarkerClick(beach),
                  }}
                >
                  <Popup>
                    <div className="p-3">
                      <h3 className="font-bold text-base md:text-lg mb-2">{beach.name}</h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-2">{beach.location}</p>
                      <p className="text-sm md:text-base font-semibold">Rating: {beach.rating} ⭐</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>
      </div>
    </section>
  );
}

