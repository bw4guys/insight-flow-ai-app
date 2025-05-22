
import React from 'react';
import Layout from '@/components/layout/Layout';
import { weatherData } from '@/services/mockData';
import { CloudRain, CloudSun, Droplets, Thermometer, Wind } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const WeatherDetails: React.FC = () => {
  const { current, forecast, hourlyForecast } = weatherData;

  // Historical weekly data (simulated)
  const historicalData = [
    { day: 'Monday', temp: 72, precipitation: 10 },
    { day: 'Tuesday', temp: 68, precipitation: 5 },
    { day: 'Wednesday', temp: 75, precipitation: 0 },
    { day: 'Thursday', temp: 80, precipitation: 0 },
    { day: 'Friday', temp: 82, precipitation: 0 },
    { day: 'Saturday', temp: 76, precipitation: 30 },
    { day: 'Sunday', temp: 70, precipitation: 80 },
  ];

  const getWeatherIcon = (condition: string) => {
    return condition.toLowerCase().includes('rain') ? 
      <CloudRain className="h-6 w-6 text-blue-500" /> : 
      <CloudSun className="h-6 w-6 text-amber-500" />;
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Weather Intelligence</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="col-span-1 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Current Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center p-4">
                <div className="bg-sky-100 p-6 rounded-full mb-4">
                  {getWeatherIcon(current.condition)}
                </div>
                <div className="text-4xl font-bold mb-2">{current.temp}°F</div>
                <div className="text-muted-foreground mb-4">{current.condition}</div>
                
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="flex items-center">
                    <Wind className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{current.wind} mph</span>
                  </div>
                  <div className="flex items-center">
                    <Droplets className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{current.humidity}% humidity</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1 md:col-span-2 lg:col-span-3">
            <Tabs defaultValue="forecast">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Weather Analysis</CardTitle>
                  <TabsList>
                    <TabsTrigger value="forecast">7-Day Forecast</TabsTrigger>
                    <TabsTrigger value="historical">Historical</TabsTrigger>
                    <TabsTrigger value="impact">Business Impact</TabsTrigger>
                  </TabsList>
                </div>
              </CardHeader>
              <CardContent>
                <TabsContent value="forecast" className="mt-0 pt-3">
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {forecast.map((day) => (
                      <div key={day.day} className="p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="text-sm font-medium mb-2">{day.day}</div>
                        <div className="mb-1">
                          {getWeatherIcon(day.condition)}
                        </div>
                        <div className="text-lg">{day.high}°</div>
                        <div className="text-sm text-muted-foreground">{day.low}°</div>
                        <div className="text-xs mt-1 font-medium">
                          {day.precipProbability}%
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="historical" className="mt-0 pt-2">
                  <div className="h-[220px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={historicalData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Line
                          yAxisId="left"
                          type="monotone"
                          dataKey="temp"
                          name="Temperature (°F)"
                          stroke="#8884d8"
                          activeDot={{ r: 8 }}
                        />
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="precipitation"
                          name="Precipitation (%)"
                          stroke="#82ca9d"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
                
                <TabsContent value="impact" className="mt-0 pt-2">
                  <div className="h-[220px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { day: 'Monday', footfall: 320, sales: 4200 },
                          { day: 'Tuesday', footfall: 300, sales: 4000 },
                          { day: 'Wednesday', footfall: 340, sales: 4500 },
                          { day: 'Thursday', footfall: 350, sales: 4800 },
                          { day: 'Friday', footfall: 370, sales: 5000 },
                          { day: 'Saturday', footfall: 280, sales: 3800 },
                          { day: 'Sunday', footfall: 250, sales: 3400 },
                        ]}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Bar
                          yAxisId="left"
                          dataKey="footfall"
                          name="Foot Traffic"
                          fill="#8884d8"
                        />
                        <Bar
                          yAxisId="right"
                          dataKey="sales"
                          name="Sales ($)"
                          fill="#82ca9d"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 bg-amber-50 border-l-4 border-amber-400 p-3 rounded">
                    <p className="text-sm text-amber-700">
                      <strong>AI Insight:</strong> Weather trends indicate a 15% decrease in foot traffic during rainy days, with a corresponding 12% reduction in sales. Consider adjusting inventory and running weather-based promotions.
                    </p>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Hourly Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { time: '8 AM', temp: 65, precip: 0 },
                    { time: '9 AM', temp: 67, precip: 0 },
                    { time: '10 AM', temp: 70, precip: 0 },
                    { time: '11 AM', temp: 72, precip: 0 },
                    { time: '12 PM', temp: 75, precip: 10 },
                    { time: '1 PM', temp: 76, precip: 20 },
                    { time: '2 PM', temp: 77, precip: 30 },
                    { time: '3 PM', temp: 78, precip: 50 },
                    { time: '4 PM', temp: 76, precip: 70 },
                    { time: '5 PM', temp: 74, precip: 80 },
                    { time: '6 PM', temp: 72, precip: 60 },
                    { time: '7 PM', temp: 70, precip: 40 },
                  ]}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="time" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="temp"
                    name="Temperature (°F)"
                    stroke="#ff7300"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="precip"
                    name="Precipitation (%)"
                    stroke="#0088fe"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default WeatherDetails;
