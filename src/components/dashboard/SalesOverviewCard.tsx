
import React from 'react';
import { ChartBar, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DashboardCard from './DashboardCard';
import { salesData } from '@/services/mockData';

const SalesOverviewCard: React.FC = () => {
  const { today, yesterday, weeklyAverage, monthlyTrend, byCategory } = salesData;
  
  const chartData = byCategory.map((cat) => ({
    name: cat.category,
    amount: cat.amount,
  }));
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };
  
  return (
    <DashboardCard 
      title="Sales Overview" 
      icon={<ChartBar className="h-5 w-5 text-brand-teal" />}
      className="col-span-1 lg:col-span-2"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Today</p>
            <p className="text-2xl font-semibold">{formatCurrency(today)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Yesterday</p>
            <p className="text-2xl font-semibold">{formatCurrency(yesterday)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Weekly Avg</p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold">{formatCurrency(weeklyAverage)}</p>
              <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                {monthlyTrend}
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-[200px] pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `$${value}`}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                formatter={(value) => [`$${value}`, 'Sales']}
                contentStyle={{ fontSize: '12px' }}
              />
              <Bar 
                dataKey="amount" 
                fill="#1a365d" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardCard>
  );
};

export default SalesOverviewCard;
