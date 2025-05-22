
import React from 'react';
import { CloudRain, CloudSun } from 'lucide-react';
import DashboardCard from './DashboardCard';
import { weatherData } from '@/services/mockData';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const WeatherCard: React.FC = () => {
  const { current, forecast } = weatherData;
  const tomorrowForecast = forecast[1];
  
  // Determine if we should show a weather alert
  const showAlert = tomorrowForecast.precipProbability > 70;
  
  return (
    <DashboardCard 
      title="Weather Intelligence" 
      icon={<CloudSun className="h-5 w-5 text-brand-teal" />}
    >
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="bg-sky-100 p-3 rounded-full">
            <CloudSun 
              className={`h-8 w-8 ${current.condition.includes('Rain') ? 'text-blue-500' : 'text-amber-500'}`} 
            />
          </div>
          <div>
            <div className="text-2xl font-bold">{current.temp}°F</div>
            <div className="text-muted-foreground">{current.condition}</div>
          </div>
        </div>
        
        {showAlert && (
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded">
            <div className="flex items-center">
              <CloudRain className="h-5 w-5 text-amber-500 mr-2" />
              <p className="text-sm text-amber-700">
                Rain expected tomorrow. Consider inventory adjustments.
              </p>
            </div>
          </div>
        )}
        
        <Separator />
        
        <div className="space-y-1">
          <p className="text-sm font-medium">3-Day Forecast</p>
          
          <div className="grid grid-cols-3 gap-2 text-center">
            {forecast.slice(0, 3).map((day) => (
              <div key={day.day} className="p-1">
                <div className="text-xs font-medium">{day.day}</div>
                <div className="text-sm">{day.high}° | {day.low}°</div>
                <Badge 
                  variant={day.precipProbability > 50 ? "default" : "outline"}
                  className={`text-xs mt-1 ${day.precipProbability > 50 ? 'bg-blue-500' : ''}`}
                >
                  {day.precipProbability}% {day.precipProbability > 0 ? 'Rain' : 'Clear'}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default WeatherCard;
