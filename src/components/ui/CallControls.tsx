import React from 'react';
import { cn } from '@/src/lib/utils';
import { Mic, PhoneOff, Video, MicOff, VideoOff } from 'lucide-react';

export interface CallControlsProps extends React.HTMLAttributes<HTMLDivElement> {
  muted?: boolean;
  videoOff?: boolean;
  onEnd?: () => void;
  onMute?: () => void;
  onVideoToggle?: () => void;
}

export const CallControls = React.forwardRef<HTMLDivElement, CallControlsProps>(
  ({ className, muted, videoOff, onEnd, onMute, onVideoToggle, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex justify-center gap-4", className)} {...props}>
        <button 
          onClick={onMute}
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
            muted ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          )}
        >
          {muted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </button>
        <button 
          onClick={onEnd}
          className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-md"
        >
          <PhoneOff className="w-6 h-6" />
        </button>
        <button 
          onClick={onVideoToggle}
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
            videoOff ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          )}
        >
          {videoOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
        </button>
      </div>
    );
  }
);
CallControls.displayName = "CallControls";
