import { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, Send, FileEdit, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import type { PostStatus } from './types';

interface StatusSelectorProps {
  status: PostStatus;
  scheduledAt: string | null;
  onStatusChange: (status: PostStatus, scheduledAt?: string) => void;
}

const StatusSelector = ({ status, scheduledAt, onStatusChange }: StatusSelectorProps) => {
  const [showScheduler, setShowScheduler] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    scheduledAt ? new Date(scheduledAt) : undefined
  );
  const [selectedTime, setSelectedTime] = useState<string>(
    scheduledAt ? format(new Date(scheduledAt), 'HH:mm') : '09:00'
  );

  const handleScheduleConfirm = () => {
    if (selectedDate) {
      const [hours, minutes] = selectedTime.split(':').map(Number);
      const scheduledDateTime = new Date(selectedDate);
      scheduledDateTime.setHours(hours, minutes, 0, 0);
      onStatusChange('scheduled', scheduledDateTime.toISOString());
      setShowScheduler(false);
    }
  };

  const statusOptions: { value: PostStatus; label: string; icon: React.ReactNode; description: string }[] = [
    { 
      value: 'draft', 
      label: 'Draft', 
      icon: <FileEdit className="h-4 w-4" />,
      description: 'Save as draft, not visible on blog'
    },
    { 
      value: 'published', 
      label: 'Published', 
      icon: <Send className="h-4 w-4" />,
      description: 'Publish immediately'
    },
    { 
      value: 'scheduled', 
      label: 'Scheduled', 
      icon: <Clock className="h-4 w-4" />,
      description: 'Schedule for later'
    },
  ];

  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-5">
        <Send className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">Publishing</h2>
      </div>

      <div className="space-y-3">
        {statusOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              if (option.value === 'scheduled') {
                setShowScheduler(true);
              } else {
                onStatusChange(option.value);
                setShowScheduler(false);
              }
            }}
            className={cn(
              "w-full flex items-start gap-3 p-3 rounded-xl border transition-all text-left",
              status === option.value
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary/50 hover:bg-secondary/50"
            )}
          >
            <div className={cn(
              "mt-0.5",
              status === option.value ? "text-primary" : "text-muted-foreground"
            )}>
              {option.icon}
            </div>
            <div className="flex-1">
              <div className={cn(
                "font-medium",
                status === option.value ? "text-primary" : "text-foreground"
              )}>
                {option.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {option.description}
              </div>
            </div>
          </button>
        ))}

        {/* Scheduler UI */}
        {(showScheduler || status === 'scheduled') && (
          <div className="mt-4 p-4 bg-secondary/50 rounded-xl border border-border space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Clock className="h-4 w-4 text-primary" />
              Schedule Publication
            </div>
            
            <div className="flex gap-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "flex-1 justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>

              <input
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="px-3 py-2 bg-secondary border border-border rounded-lg text-foreground text-sm"
              />
            </div>

            <Button
              onClick={handleScheduleConfirm}
              disabled={!selectedDate}
              className="w-full"
              size="sm"
            >
              Confirm Schedule
            </Button>

            {status === 'scheduled' && scheduledAt && (
              <div className="text-xs text-muted-foreground text-center">
                Scheduled for {format(new Date(scheduledAt), "PPP 'at' p")}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusSelector;
