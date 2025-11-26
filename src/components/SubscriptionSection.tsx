import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import gardenBox from "@/assets/garden-box.jpg";

const benefits = [
  "Curated seasonal plants hand-picked by experts",
  "Premium soil and growing supplies included",
  "QR-coded care guides for every plant",
  "AI-powered care recommendations",
  "Cancel or pause anytime",
];

const SubscriptionSection = () => {
  return (
    <section id="subscribe" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={gardenBox}
                alt="Smart Garden Box subscription contents"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-8 md:right-8 bg-background rounded-2xl p-4 shadow-xl">
              <p className="text-sm text-muted-foreground">Starting at</p>
              <p className="text-3xl font-bold text-primary">$29<span className="text-lg font-normal">/mo</span></p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-8">
            <p className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider mb-3">
              Subscription Service
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Smart Garden Box
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Get everything you need to start and grow your perfect garden, 
              delivered monthly. Each box is customized based on your skill level, 
              space, and local climate.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button 
              size="lg" 
              variant="secondary"
              className="group"
            >
              Subscribe Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
