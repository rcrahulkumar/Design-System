import React, { useState } from 'react';
import { CallControls, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function CallControlsPage() {
  const [muted, setMuted] = useState(false);
  const [videoOff, setVideoOff] = useState(false);

  return (
    <div className="space-y-12">
      <Heading 
        title="Call Controls" 
        description="Telehealth interface controls for video and audio consultations." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Interactive Controls"
          description="Call controls with toggleable states."
          code={`<CallControls 
  muted={isMuted} 
  videoOff={isVideoOff} 
  onMute={() => setMuted(!isMuted)}
  onVideoToggle={() => setVideoOff(!isVideoOff)}
  onEnd={() => endCall()}
/>`}
        >
          <div className="p-16 bg-gray-900 rounded-xl flex justify-center">
            <CallControls 
              muted={muted} 
              videoOff={videoOff}
              onMute={() => setMuted(!muted)}
              onVideoToggle={() => setVideoOff(!videoOff)}
              onEnd={() => alert('Call ended')}
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
