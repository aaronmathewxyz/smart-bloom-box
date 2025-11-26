import { QrCode } from "lucide-react";
import plantMascot from "@/assets/plant-mascot.png";

const steps = [
  {
    number: "01",
    title: "Get Your QR Code",
    description: "After purchase, enter your plant's name to receive a unique QR code, printable at home or in-store as a sticker.",
  },
  {
    number: "02",
    title: "Scan the QR Code",
    description: "Use your phone camera to scan the QR code and instantly access your plant's personalized care profile.",
  },
  {
    number: "03",
    title: "Receive Smart Care Tips",
    description: "Enjoy useful information, watering reminders, and AI-powered recommendations to keep your plants happy.",
  },
];

const CustomerJourney = () => {
  return (
    <section id="journey" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block w-24 h-1 bg-primary rounded-full mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Customer Journey
          </h2>
        </div>

        {/* Journey Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">
                      {step.number}
                    </span>
                  </div>
                </div>
                {/* Step Content */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* QR Code Demo */}
            <div className="mt-8 p-6 bg-card rounded-2xl border border-border inline-block">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-foreground rounded-lg flex items-center justify-center">
                  <QrCode className="w-16 h-16 text-background" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Scan to try</p>
                  <p className="font-semibold text-foreground">Demo Plant Guide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Phone Mockup with Timeline */}
          <div className="relative flex justify-center">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden lg:block" />
            
            {/* Phone Mockup */}
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 md:w-80 bg-foreground rounded-[3rem] p-3 shadow-2xl">
                {/* Phone Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full z-10" />
                
                {/* Phone Screen */}
                <div className="bg-accent rounded-[2.5rem] overflow-hidden pt-8">
                  {/* Notification Banner */}
                  <div className="bg-card mx-4 mt-4 p-3 rounded-xl shadow-md">
                    <p className="text-sm font-medium text-foreground text-center">
                      🌱 Time to add some water!
                    </p>
                  </div>
                  
                  {/* Mascot Image */}
                  <div className="flex justify-center py-6">
                    <img
                      src={plantMascot}
                      alt="Happy plant mascot"
                      className="w-48 h-48 object-contain"
                    />
                  </div>

                  {/* Plant Info */}
                  <div className="bg-card mx-4 mb-6 p-4 rounded-xl text-center">
                    <h4 className="font-bold text-foreground underline underline-offset-2">
                      LUPIN
                    </h4>
                    <p className="text-sm text-muted-foreground">05/10/2025</p>
                    <p className="text-sm italic text-muted-foreground">
                      Haworthia fasciata
                    </p>
                    <p className="text-sm text-muted-foreground">South Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerJourney;
