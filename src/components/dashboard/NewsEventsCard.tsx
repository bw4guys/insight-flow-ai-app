
import React from 'react';
import { Calendar, FileText } from 'lucide-react';
import DashboardCard from './DashboardCard';
import { newsEvents } from '@/services/mockData';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

const NewsEventsCard: React.FC = () => {
  // Get upcoming events (sorted by date)
  const upcoming = [...newsEvents].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  
  const getImpactBadge = (impact: string) => {
    switch(impact.toLowerCase()) {
      case 'high':
        return <Badge className="bg-orange-500">High Impact</Badge>;
      case 'medium':
        return <Badge variant="outline" className="text-amber-500 border-amber-500">Medium Impact</Badge>;
      default:
        return <Badge variant="outline" className="text-muted-foreground">Low Impact</Badge>;
    }
  };
  
  return (
    <DashboardCard 
      title="News & Events" 
      icon={<FileText className="h-5 w-5 text-brand-teal" />}
    >
      <div className="space-y-4">
        <div className="space-y-2">
          {upcoming.slice(0, 3).map((event) => (
            <div key={event.id} className="flex items-start space-x-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
              <div className="bg-primary/10 p-2 rounded-md">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-start">
                  <p className="font-medium text-sm">{event.title}</p>
                  {getImpactBadge(event.impact)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {format(new Date(event.date), 'MMMM d, yyyy')}
                </p>
                <p className="text-xs">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="/news" 
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            View all events
          </a>
        </div>
      </div>
    </DashboardCard>
  );
};

export default NewsEventsCard;
