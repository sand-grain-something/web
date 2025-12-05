import { Metadata } from 'next';
import { Microscope, Map, Database, Code, Lightbulb, Github } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - Sand Analysis Mapping System',
  description: 'Learn about the Sand Analysis Mapping System project, automated grain size estimation techniques, and technology stack.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-blue-950 dark:to-cyan-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                About
              </span>{' '}
              <span className="text-foreground">Sand Analysis</span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
              Automated Mapping System for Beach Sediment Grain Size Estimation
            </p>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Project Purpose</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-6">
                Grain size is a fundamental property used to classify beach types and plays a critical role in
                influencing coastal morphodynamic processes. However, measuring grain size is particularly
                challenging, as it requires scientists to visit each site to collect sediment samples. These
                samples must then undergo time-consuming physical processing in the laboratory to determine
                their characteristics.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-6">
                Moreover, because beach sediments are dynamic and constantly changing due to wave action, tides,
                and weather events, this process must be repeated regularly to maintain accurate and up-to-date
                data.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                The Sand Analysis Mapping System addresses this challenge by developing a low-cost camera-based
                automated mapping system to estimate sediment grain size distribution of sandy beach areas
                (berm, intertidal, and dune) and classify beach categories. This system incorporates GNSS/GPS
                receivers to map geographic positions of measurement locations, making coastal monitoring more
                efficient and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sand Analysis Technique */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-10">
              <Microscope className="w-10 h-10 md:w-12 md:h-12 text-cyan-500" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Sand Analysis Technique</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">1. Camera-Based Image Capture</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  A low-cost camera system captures high-resolution images of beach sediment samples directly
                  at the measurement location. This eliminates the need for physical sample collection and
                  laboratory processing.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">2. GNSS/GPS Positioning</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Each measurement location is automatically geotagged using integrated GNSS/GPS receivers,
                  enabling precise mapping of beach areas including berm, intertidal zones, and dunes.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">3. Automated Image Processing</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Advanced automated image processing algorithms analyze captured images to detect and measure
                  individual sand grains, estimating their size distribution without manual intervention.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">4. Grain Size Classification</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-3">
                  Grains are automatically classified according to standard sedimentology scales:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-muted-foreground">
                  <li>Fine: 0.062 - 0.25 mm</li>
                  <li>Medium: 0.25 - 0.5 mm</li>
                  <li>Coarse: 0.5 - 2 mm</li>
                </ul>
              </div>
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">5. Beach Category Classification</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Based on grain size distribution analysis, beaches are automatically classified into
                  appropriate categories, providing insights into coastal morphodynamic processes and beach
                  characteristics.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">6. Interactive Mapping & Visualization</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  All measurement data is visualized on interactive maps with detailed grain size
                  distributions, enabling researchers and coastal managers to monitor beach changes over time
                  efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-10">
              <Database className="w-10 h-10 md:w-12 md:h-12 text-cyan-500" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Data Sources</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">GNSS/GPS Coordinates</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Measurement locations are geotagged using integrated GNSS/GPS receivers, providing precise
                  geographic positioning for each sediment sample analysis.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Camera-Based Images</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  High-resolution images captured by low-cost camera systems at measurement locations, eliminating
                  the need for physical sample collection and laboratory processing.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Automated Analysis Results</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Grain size distribution data generated through automated image processing algorithms, providing
                  real-time analysis of beach sediment characteristics.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Beach Classification</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Beach category classifications based on grain size distribution, helping understand coastal
                  morphodynamic processes and beach characteristics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-10">
              <Code className="w-10 h-10 md:w-12 md:h-12 text-cyan-500" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Technology Stack</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Frontend</h3>
                <ul className="space-y-3 text-lg md:text-xl text-muted-foreground">
                  <li>• Next.js 16 (App Router)</li>
                  <li>• React 19</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Motion (Framer Motion)</li>
                  <li>• GSAP</li>
                </ul>
              </div>
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Maps & Visualization</h3>
                <ul className="space-y-3 text-lg md:text-xl text-muted-foreground">
                  <li>• Leaflet</li>
                  <li>• React Leaflet</li>
                  <li>• GeoJSON</li>
                  <li>• Custom Charts</li>
                </ul>
              </div>
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">UI/UX</h3>
                <ul className="space-y-3 text-lg md:text-xl text-muted-foreground">
                  <li>• Radix UI</li>
                  <li>• Lucide Icons</li>
                  <li>• Glassmorphism</li>
                  <li>• Dark/Light Themes</li>
                </ul>
              </div>
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Features</h3>
                <ul className="space-y-3 text-lg md:text-xl text-muted-foreground">
                  <li>• Responsive Design</li>
                  <li>• Accessibility (ARIA)</li>
                  <li>• Keyboard Navigation</li>
                  <li>• Reduced Motion Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Improvements */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-10">
              <Lightbulb className="w-10 h-10 md:w-12 md:h-12 text-cyan-500" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Future Improvements</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Real-time Data Updates</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Integration with live environmental monitoring systems for real-time water quality and
                  beach condition updates.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Advanced Analytics</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Machine learning models to predict beach erosion, seasonal changes, and environmental
                  impact analysis.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">User Contributions</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Community-driven data collection allowing users to submit sand samples and beach
                  information.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Mobile App</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Native mobile applications for iOS and Android with offline capabilities and GPS
                  integration.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 md:p-8 border border-border">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">3D Visualization</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Interactive 3D models of beaches and sand grain structures for enhanced scientific
                  visualization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

