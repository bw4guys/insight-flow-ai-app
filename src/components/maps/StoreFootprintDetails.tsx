
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StoreLocation } from '@/services/mockData';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { ArrowUp, ArrowDown, TrendingUp } from 'lucide-react';

interface StoreFootprintDetailsProps {
  store: StoreLocation;
}

const StoreFootprintDetails: React.FC<StoreFootprintDetailsProps> = ({ store }) => {
  const trendClass = store.trend.includes('+') ? 'text-green-500' : 'text-red-500';

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted/30 p-4 rounded-md">
          <h3 className="text-sm font-medium text-muted-foreground">Total Footprints Today</h3>
          <div className="mt-1">
            <div className="text-3xl font-bold">{store.statistics.todayFootprints}</div>
            <div className="flex items-center text-sm">
              {store.statistics.footprintChange > 0 ? (
                <>
                  <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500">+{store.statistics.footprintChange}%</span>
                </>
              ) : (
                <>
                  <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
                  <span className="text-red-500">{store.statistics.footprintChange}%</span>
                </>
              )}
              <span className="text-muted-foreground ml-1">vs. last week</span>
            </div>
          </div>
        </div>
        
        <div className="bg-muted/30 p-4 rounded-md">
          <h3 className="text-sm font-medium text-muted-foreground">Sales Today</h3>
          <div className="mt-1">
            <div className="text-3xl font-bold">${store.statistics.todaySales.toLocaleString()}</div>
            <div className="flex items-center text-sm">
              {store.statistics.salesChange > 0 ? (
                <>
                  <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500">+{store.statistics.salesChange}%</span>
                </>
              ) : (
                <>
                  <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
                  <span className="text-red-500">{store.statistics.salesChange}%</span>
                </>
              )}
              <span className="text-muted-foreground ml-1">vs. last week</span>
            </div>
          </div>
        </div>
        
        <div className="bg-muted/30 p-4 rounded-md">
          <h3 className="text-sm font-medium text-muted-foreground">Traffic Forecast</h3>
          <div className="mt-1">
            <div className="flex items-center">
              <span className="text-3xl font-bold mr-2">{store.statistics.trafficScore}/10</span>
              <span className={`text-sm font-medium ${trendClass}`}>{store.trend}</span>
            </div>
            <div className="text-sm text-muted-foreground">Based on local events & weather</div>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="footprints">
        <TabsList>
          <TabsTrigger value="footprints">Footprints Analysis</TabsTrigger>
          <TabsTrigger value="sales">Sales Analysis</TabsTrigger>
          <TabsTrigger value="forecast">Business Forecast</TabsTrigger>
        </TabsList>
        
        <TabsContent value="footprints" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-72">
              <h3 className="text-sm font-medium mb-2">Hourly Footprint Distribution</h3>
              <ChartContainer 
                config={{
                  footprints: { theme: { light: '#2c7a7b' } },
                }}
                className="h-full"
              >
                <BarChart data={store.hourlyFootprints}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="count" name="footprints" fill="var(--color-footprints)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </div>
            
            <div className="h-72">
              <h3 className="text-sm font-medium mb-2">Weekly Footprint Trend</h3>
              <ChartContainer 
                config={{
                  footprints: { theme: { light: '#2c7a7b' } },
                  average: { theme: { light: '#94a3b8' } },
                }}
                className="h-full"
              >
                <LineChart data={store.weeklyFootprints}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="count" 
                    name="footprints" 
                    stroke="var(--color-footprints)" 
                    strokeWidth={2} 
                    dot={{ r: 4 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="average" 
                    name="average" 
                    stroke="var(--color-average)" 
                    strokeDasharray="5 5"
                    strokeWidth={2} 
                    dot={{ r: 4 }} 
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="sales" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-72">
              <h3 className="text-sm font-medium mb-2">Sales by Department</h3>
              <ChartContainer 
                config={{
                  sales: { theme: { light: '#2563eb' } },
                }}
                className="h-full"
              >
                <BarChart data={store.salesByDepartment}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="department" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="amount" name="sales" fill="var(--color-sales)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </div>
            
            <div className="h-72">
              <h3 className="text-sm font-medium mb-2">Weekly Sales Trend</h3>
              <ChartContainer 
                config={{
                  sales: { theme: { light: '#2563eb' } },
                  target: { theme: { light: '#94a3b8' } },
                }}
                className="h-full"
              >
                <LineChart data={store.weeklySales}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="amount" 
                    name="sales" 
                    stroke="var(--color-sales)" 
                    strokeWidth={2} 
                    dot={{ r: 4 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="target" 
                    name="target" 
                    stroke="var(--color-target)" 
                    strokeDasharray="5 5"
                    strokeWidth={2} 
                    dot={{ r: 4 }} 
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="forecast" className="mt-4">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-muted/30 p-4 rounded-md">
                <h3 className="text-sm font-medium text-muted-foreground">Revenue Impact</h3>
                <div className="mt-1">
                  <div className="text-3xl font-bold">{store.forecast.revenueImpact}%</div>
                  <div className="text-sm text-muted-foreground">Expected change this week</div>
                </div>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-md">
                <h3 className="text-sm font-medium text-muted-foreground">Traffic Impact</h3>
                <div className="mt-1">
                  <div className="text-3xl font-bold">{store.forecast.trafficImpact}%</div>
                  <div className="text-sm text-muted-foreground">Expected change this week</div>
                </div>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-md">
                <h3 className="text-sm font-medium text-muted-foreground">Top Recommendation</h3>
                <div className="mt-1">
                  <div className="text-xl font-bold">{store.forecast.topRecommendation}</div>
                  <div className="text-sm text-muted-foreground">Based on current trends</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 bg-muted/30 p-4 rounded-md">
              <h3 className="font-medium">Business Impact Analysis</h3>
              <div className="space-y-2">
                {store.forecast.impactFactors.map((factor, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <TrendingUp className="h-5 w-5 text-brand-teal mt-0.5" />
                    <div>
                      <p className="font-medium">{factor.name}</p>
                      <p className="text-sm text-muted-foreground">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-3 bg-muted/30 p-4 rounded-md">
              <h3 className="font-medium">AI Insights</h3>
              <div className="text-sm space-y-2">
                {store.forecast.aiInsights.map((insight, index) => (
                  <p key={index}>{insight}</p>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StoreFootprintDetails;
