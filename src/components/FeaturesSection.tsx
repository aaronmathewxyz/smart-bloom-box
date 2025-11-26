import { Brain, QrCode, Package, Bell, Droplets, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI Plant Advisor",
    description: "Get personalized care recommendations powered by advanced AI that learns your plants' unique needs.",
  },
  {
    icon: QrCode,
    title: "QR Code Guides",
    description: "Scan QR codes on your plants for instant care instructions, watering schedules, and troubleshooting tips.",
  },
  {
    icon: Package,
    title: "Smart Garden Box",
    description: "Monthly curated boxes with seasonal plants, premium soil, and all the supplies you need to grow.",
  },
  {
    icon: Bell,
    title: "Care Reminders",
    description: "Never forget to water again with smart notifications tailored to each plant's specific requirements.",
  },
  {
    icon: Droplets,
    title: "Watering Schedules",
    description: "Automated watering plans adjusted for weather, season, and your local climate conditions.",
  },
  {
    icon: Sun,
    title: "Light Analysis",
    description: "Find the perfect spot for each plant with our light requirement matching technology.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Why Choose Botanic
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-card-foreground mb-4">
            Everything Your Garden Needs
          </h2>
          <p className="text-muted-foreground">
            A complete ecosystem designed to help your plants thrive, whether you're a beginner or expert gardener.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border bg-background"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
