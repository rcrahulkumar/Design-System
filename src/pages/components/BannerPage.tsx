import React from 'react';
import { Banner, Alert, Button } from "@/src/components/ui";

export default function BannerPage() {
  return (
    <div className="p-10 max-w-5xl">
      <h1 className="text-3xl font-bold mb-2">Banner System</h1>
      <p className="text-gray-500 mb-10">Banners are high-impact components used for growth, engagement, and marketing.</p>

      <div className="space-y-16">
        {/* Layout Variants */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Layout Variants</h2>
          <div className="space-y-8">
            <div>
              <span className="text-xs text-gray-400 uppercase mb-2 block font-bold">Image Right (Default)</span>
              <Banner
                title="Unlock JIVI Premium"
                description="Get personalized AI health insights, unlimited lab report analysis, and 24/7 priority support."
                image="https://picsum.photos/seed/premium/400/400"
                primaryCTA={{ label: 'Upgrade Now', onClick: () => {} }}
                secondaryCTA={{ label: 'Learn More', onClick: () => {} }}
              />
            </div>

            <div>
              <span className="text-xs text-gray-400 uppercase mb-2 block font-bold">Image Left</span>
              <Banner
                title="Connect Your Wearables"
                description="Sync your Apple Watch or Fitbit to get real-time health tracking and automated logs."
                image="https://picsum.photos/seed/watch/400/400"
                imagePosition="left"
                primaryCTA={{ label: 'Connect Device', onClick: () => {} }}
              />
            </div>

            <div>
              <span className="text-xs text-gray-400 uppercase mb-2 block font-bold">Image Center (Hero)</span>
              <Banner
                title="Welcome to JIVI AI"
                description="Your personal health companion is ready to help you live a better, healthier life. Start your journey today."
                image="https://picsum.photos/seed/welcome/400/400"
                imagePosition="center"
                primaryCTA={{ label: 'Get Started', onClick: () => {} }}
              />
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Advanced Features</h2>
          <div className="space-y-8">
            <div>
              <span className="text-xs text-gray-400 uppercase mb-2 block font-bold">With Alert Inside</span>
              <Banner
                title="Complete Your Profile"
                description="We need a few more details to provide accurate health recommendations tailored to your body."
                alert={<Alert status="warning" size="sm">Profile 60% complete</Alert>}
                primaryCTA={{ label: 'Complete Now', onClick: () => {} }}
                variant="noBG"
                className="border-2 border-dashed border-gray-200"
              />
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Implementation</h2>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm font-mono overflow-x-auto">
{`import { Banner } from "@/src/components/ui";

<Banner
  title="Banner Title"
  description="Description text goes here."
  image="/path/to/image.png"
  imagePosition="right"
  primaryCTA={{ label: 'Action', onClick: () => {} }}
  secondaryCTA={{ label: 'Secondary', onClick: () => {} }}
  alert={<Alert status="info">Contextual info</Alert>}
/>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
