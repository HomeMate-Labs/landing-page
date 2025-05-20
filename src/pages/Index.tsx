
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Settings, Award, LineChart, ExternalLink } from "lucide-react";
import BenefitCard from "@/components/BenefitCard";
import SmartHomeIllustration from "@/components/SmartHomeIllustration";
import QRCodeComponent from "@/components/QRCodeComponent";
import { Separator } from "@/components/ui/separator";
import TokenIcon from "@/components/TokenIcon";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Turn your smart home into <span className="bg-gradient-to-r from-homemate-accent to-purple-400 bg-clip-text text-transparent">passive income.</span>
            </h1>
            <p className="text-lg text-homemate-gray dark:text-gray-300">
              Securely share your smart home data and earn rewards - no disruptions, full control.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button className="btn-primary">Get Started</Button>
              <Button variant="outline" className="btn-secondary flex items-center gap-2">
                <ExternalLink size={18} />
                <a target="_blank" href="https://app.thehomemate.xyz">
                  Try Demo
                </a>
              </Button>
            </div>
          </div>
          <div className="order-first lg:order-last">
            <SmartHomeIllustration />
          </div>
        </div>
      </section>

      {/* Data Goldmine Section - Moved up */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center section-container">
        <div className="space-y-6 py-16 bg-gradient-to-br from-homemate-accent/10 to-purple-400/5">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your home's data is a gold mine.</h2>
            <p className="text-homemate-gray dark:text-gray-300 max-w-2xl mx-auto">
              Smart devices generate valuable data 24/7. It's time you benefit from it.
            </p>
          </div>
        </div>
        <div className="relative order-last lg:order-first lg:scale-75">
          <img
            src="/home_coins.png"
            alt="Smart home with money icons"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
          {/* <div className="absolute bottom-4 right-4">
            <Button variant="outline" className="bg-black/50 backdrop-blur-sm border-homemate-accent/30 text-white flex items-center gap-2">
              <ExternalLink size={16} />
              Try Demo App
            </Button>
          </div> */}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50/50 dark:bg-gray-900/30 section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Benefits</h2>
          <p className="text-homemate-gray dark:text-gray-300 max-w-2xl mx-auto">
            Revolutionize how your smart home devices work for you - earn while maintaining privacy and control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            title="Control"
            description="You decide what data to share, when, and for what purpose. Your privacy, your terms - always."
            icon={Settings}
          />
          <BenefitCard
            title="Real Rewards"
            description="Earn HMNT tokens as your smart home data powers valuable insights across industries - from research to innovation."
            icon={Award}
          />
          <BenefitCard
            title="Impact"
            description="Contribute to advancing smart home innovations while earning from the data you're already generating."
            icon={LineChart}
          />
        </div>
      </section>

      {/* Token Section */}
      <section id="token" className="py-16 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-homemate-accent/10 rounded-full filter blur-3xl"></div>

              <h2 className="text-3xl font-bold mb-6">
                <div className="flex items-center gap-3">
                  <img
                    src="/hmnt-token-nobg.png"
                    alt="HMNT Token"
                    className="w-8 h-8 object-contain"
                  />
                  Token
                </div>
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-homemate-accent">Required for Data Purchase</h3>
                  <p className="text-homemate-gray dark:text-gray-300">
                    Access to smart home data requires HMNT tokens - driving real utility and demand.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-homemate-accent">Decaying Emission Model</h3>
                  <p className="text-homemate-gray dark:text-gray-300">
                    Token emissions follow a predictable curve that decreases over time, promoting long-term sustainability and scarcity.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-homemate-accent">Backed by Real Demand</h3>
                  <p className="text-homemate-gray dark:text-gray-300">
                    Unlike speculative cryptocurrencies, HMNT is backed by real demand for high-quality smart home data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-homemate-accent/20 to-purple-400/10 rounded-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center mb-6">
                  <TokenIcon className="platform-token-token-icon-container" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Platform Economy Token</h3>
                <p className="text-homemate-gray dark:text-gray-300 max-w-md mx-auto">
                  A circular economy where data providers earn and ecosystem partners create value through insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-20 section-container">
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't miss the next big thing — your golden ticket starts here.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                Join the HomeMate community today and be first in line when we launch.
              </p>
              <div className="space-y-4">
                <Button className="btn-primary w-full">
                  <a href="https://t.me/mihi1108" target="_blank" >
                    Join Waitlist
                  </a>
                </Button>
                <Button variant="outline" className="btn-secondary w-full">
                  <a href="https://x.com/HomeMateX" target="_blank" >
                    Follow us on X
                  </a>
                </Button>
                <Button variant="outline" className="btn-secondary w-full flex justify-center items-center gap-2">
                  <ExternalLink size={18} />
                  <a target="_blank" href="https://app.thehomemate.xyz">
                    Try Demo App
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <QRCodeComponent
                url="https://t.me/mihi1108"
                logoUrl="/hmnt-token-nobg.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900/70 py-8">
        <div className="section-container">
          {/* <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-homemate-accent to-purple-400 bg-clip-text text-transparent">HomeMate</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-homemate-gray hover:text-homemate-accent">
                Privacy
              </a>
              <a href="#" className="text-homemate-gray hover:text-homemate-accent">
                Terms
              </a>
              <a href="#" className="text-homemate-gray hover:text-homemate-accent">
                Contact
              </a>
            </div>
          </div> */}
          <div className="text-center text-sm text-homemate-gray">
            &copy; 2025 HomeMate. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
