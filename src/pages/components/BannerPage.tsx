import React from 'react';
import { Banner, Alert, Button, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function BannerPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Banner System" 
        description="Banners are high-impact components used for growth, engagement, and marketing." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Image Right (Default)"
          description="A banner with the image positioned on the right side."
          code={`<Banner
  title="Unlock JIVI Premium"
  description="Get personalized AI health insights, unlimited lab report analysis, and 24/7 priority support."
  image="https://picsum.photos/seed/premium/400/400"
  primaryCTA={{ label: 'Upgrade Now', onClick: () => {} }}
  secondaryCTA={{ label: 'Learn More', onClick: () => {} }}
/>`}
        >
          <div className="w-full">
            <Banner
              title="Unlock JIVI Premium"
              description="Get personalized AI health insights, unlimited lab report analysis, and 24/7 priority support."
              image="https://picsum.photos/seed/premium/400/400"
              primaryCTA={{ label: 'Upgrade Now', onClick: () => {} }}
              secondaryCTA={{ label: 'Learn More', onClick: () => {} }}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Image Left"
          description="A banner with the image positioned on the left side."
          code={`<Banner
  title="Connect Your Wearables"
  description="Sync your Apple Watch or Fitbit to get real-time health tracking and automated logs."
  image="https://picsum.photos/seed/watch/400/400"
  imagePosition="left"
  primaryCTA={{ label: 'Connect Device', onClick: () => {} }}
/>`}
        >
          <div className="w-full">
            <Banner
              title="Connect Your Wearables"
              description="Sync your Apple Watch or Fitbit to get real-time health tracking and automated logs."
              image="https://picsum.photos/seed/watch/400/400"
              imagePosition="left"
              primaryCTA={{ label: 'Connect Device', onClick: () => {} }}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Image Center (Hero)"
          description="A hero banner with the image centered."
          code={`<Banner
  title="Welcome to JIVI AI"
  description="Your personal health companion is ready to help you live a better, healthier life. Start your journey today."
  image="https://picsum.photos/seed/welcome/400/400"
  imagePosition="center"
  primaryCTA={{ label: 'Get Started', onClick: () => {} }}
/>`}
        >
          <div className="w-full">
            <Banner
              title="Welcome to JIVI AI"
              description="Your personal health companion is ready to help you live a better, healthier life. Start your journey today."
              image="https://picsum.photos/seed/welcome/400/400"
              imagePosition="center"
              primaryCTA={{ label: 'Get Started', onClick: () => {} }}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Alert Inside"
          description="A banner that includes an inline alert component."
          code={`<Banner
  title="Complete Your Profile"
  description="We need a few more details to provide accurate health recommendations tailored to your body."
  alert={<Alert status="warning" size="sm">Profile 60% complete</Alert>}
  primaryCTA={{ label: 'Complete Now', onClick: () => {} }}
  variant="noBG"
  className="border-2 border-dashed border-gray-200"
/>`}
        >
          <div className="w-full">
            <Banner
              title="Complete Your Profile"
              description="We need a few more details to provide accurate health recommendations tailored to your body."
              alert={<Alert status="warning" size="sm">Profile 60% complete</Alert>}
              primaryCTA={{ label: 'Complete Now', onClick: () => {} }}
              variant="noBG"
              className="border-2 border-dashed border-gray-200"
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
