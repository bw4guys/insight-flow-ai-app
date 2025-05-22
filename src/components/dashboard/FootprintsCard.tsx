
import React from 'react';
import { MapPin, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import DashboardCard from './DashboardCard';
import { footprintData } from '@/services/mockData';

const FootprintsCard: React.FC = () => {
  const { today, yesterday, weeklyAverage, monthlyTrend, hourly } = footprintData;
  
  const trendClassName = monthlyTrend.startsWith('+') ? 'text-green-500' : 'text-red-500';
  
  return (
    <DashboardCard 
      title="Store Footprints" 
      icon={<MapPin className="h-5 w-5 text-brand-teal" />}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Today</p>
            <div className="text-2xl font-semibold">{today}</div>
            <div className="text-xs text-muted-foreground">vs Yesterday: {yesterday}</div>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Weekly Average</p>
            <div className="text-2xl font-semibold">{weeklyAverage}</div>
            <div className="text-xs flex items-center gap-1">
              <TrendingUp className={`h-3 w-3 ${trendClassName}`} />
              <span className={trendClassName}>{monthlyTrend} this month</span>
            </div>
          </div>
        </div>
        
        <div className="h-32 pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={hourly} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <XAxis 
                dataKey="hour" 
                tick={{ fontSize: 10 }} 
                interval="preserveStartEnd"
                tickCount={5}
              />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ fontSize: '12px' }}
                formatter={(value) => [`${value} visitors`, 'Count']}
              />
              <Area 
                type="monotone" 
                dataKey="count" 
                stroke="#2c7a7b" 
                fill="#2c7a7b20"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardCard>
  );
};

export default FootprintsCard;
