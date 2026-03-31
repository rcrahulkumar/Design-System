import React from 'react';
import { Card, CardContent, CardFooter } from './Card';
import { Button } from './Button';
import { Badge } from './Badge';
import { Calendar, Clock, MapPin, Video } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export interface AppointmentCardProps {
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  location?: string;
  isVideo?: boolean;
  imageUrl?: string;
  status?: 'upcoming' | 'completed' | 'canceled';
  onReschedule?: () => void;
  onJoin?: () => void;
  className?: string;
}

export const AppointmentCard: React.FC<AppointmentCardProps> = ({
  doctorName,
  specialty,
  date,
  time,
  location,
  isVideo,
  imageUrl,
  status = 'upcoming',
  onReschedule,
  onJoin,
  className,
}) => {
  return (
    <Card className={cn("flex flex-col", className)}>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-4">
            {imageUrl ? (
              <img src={imageUrl} alt={doctorName} className="w-14 h-14 rounded-full object-cover border border-gray-100" referrerPolicy="no-referrer" />
            ) : (
              <div className="w-14 h-14 rounded-full bg-primary-subtle text-primary flex items-center justify-center font-bold text-xl">
                {doctorName.charAt(0)}
              </div>
            )}
            <div>
              <h3 className="font-bold text-gray-900 leading-tight text-lg">{doctorName}</h3>
              <p className="text-sm font-medium text-gray-500 mt-0.5">{specialty}</p>
            </div>
          </div>
          {status === 'upcoming' && (
            <Badge status="primary" variant="light" size="sm">Upcoming</Badge>
          )}
          {status === 'completed' && (
            <Badge status="success" variant="light" size="sm">Completed</Badge>
          )}
          {status === 'canceled' && (
            <Badge status="error" variant="light" size="sm">Canceled</Badge>
          )}
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 flex flex-col gap-3">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-700 font-bold">
              <Calendar className="w-4 h-4 text-primary" />
              {date}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700 font-bold">
              <Clock className="w-4 h-4 text-primary" />
              {time}
            </div>
          </div>
          {(location || isVideo) && (
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              {isVideo ? <Video className="w-4 h-4 text-gray-400" /> : <MapPin className="w-4 h-4 text-gray-400" />}
              <span className="truncate">{isVideo ? 'Video Consultation' : location}</span>
            </div>
          )}
        </div>
      </CardContent>
      
      {status === 'upcoming' && (onReschedule || onJoin) && (
        <CardFooter className="gap-3 pt-0 border-none pb-6 px-6 mt-0">
          {onReschedule && (
            <Button variant="secondary" className="flex-1" onClick={onReschedule}>
              Reschedule
            </Button>
          )}
          {onJoin && (
            <Button className="flex-1" onClick={onJoin}>
              Join Video
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
};
