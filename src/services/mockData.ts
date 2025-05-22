
import { format, addDays } from 'date-fns';

// Define proper type for Message to fix the TypeScript error
export interface Message {
  role: "assistant" | "user";
  content: string;
}

// Weather Data
export const weatherData = {
  current: {
    temp: 75,
    condition: "Partly Cloudy",
    humidity: 62,
    wind: 8,
    feelsLike: 76
  },
  forecast: [
    { 
      day: "Today", 
      high: 78, 
      low: 62, 
      condition: "Partly Cloudy",
      precipProbability: 10 
    },
    { 
      day: "Tomorrow", 
      high: 72, 
      low: 58, 
      condition: "Rain",
      precipProbability: 80 
    },
    { 
      day: format(addDays(new Date(), 2), 'EEE'), 
      high: 68, 
      low: 54, 
      condition: "Rain",
      precipProbability: 70 
    },
    { 
      day: format(addDays(new Date(), 3), 'EEE'), 
      high: 70, 
      low: 56, 
      condition: "Partly Cloudy",
      precipProbability: 20 
    },
    { 
      day: format(addDays(new Date(), 4), 'EEE'), 
      high: 75, 
      low: 60, 
      condition: "Sunny",
      precipProbability: 0 
    },
    { 
      day: format(addDays(new Date(), 5), 'EEE'), 
      high: 82, 
      low: 64, 
      condition: "Sunny",
      precipProbability: 0 
    },
    { 
      day: format(addDays(new Date(), 6), 'EEE'), 
      high: 85, 
      low: 68, 
      condition: "Sunny",
      precipProbability: 0 
    }
  ],
  hourlyForecast: [
    { hour: "8 AM", temp: 65, precip: 0 },
    { hour: "9 AM", temp: 67, precip: 0 },
    { hour: "10 AM", temp: 70, precip: 0 },
    { hour: "11 AM", temp: 72, precip: 0 },
    { hour: "12 PM", temp: 75, precip: 10 },
    { hour: "1 PM", temp: 76, precip: 20 },
    { hour: "2 PM", temp: 77, precip: 30 },
    { hour: "3 PM", temp: 78, precip: 50 },
    { hour: "4 PM", temp: 76, precip: 70 },
    { hour: "5 PM", temp: 74, precip: 80 },
    { hour: "6 PM", temp: 72, precip: 60 },
    { hour: "7 PM", temp: 70, precip: 40 }
  ]
};

// Footprint data
export const footprintData = {
  today: 856,
  yesterday: 795,
  weeklyAverage: 812,
  monthlyTrend: "+8.3%",
  hourly: [
    { hour: "8 AM", count: 42 },
    { hour: "9 AM", count: 65 },
    { hour: "10 AM", count: 84 },
    { hour: "11 AM", count: 107 },
    { hour: "12 PM", count: 130 },
    { hour: "1 PM", count: 112 },
    { hour: "2 PM", count: 98 },
    { hour: "3 PM", count: 86 },
    { hour: "4 PM", count: 72 },
    { hour: "5 PM", count: 60 }
  ]
};

// Sales Data
export const salesData = {
  today: 5240,
  yesterday: 4980,
  weeklyAverage: 5100,
  monthlyTrend: "+4.6%",
  byCategory: [
    { category: "Beverages", amount: 1250 },
    { category: "Snacks", amount: 980 },
    { category: "Produce", amount: 850 },
    { category: "Bakery", amount: 620 },
    { category: "Dairy", amount: 780 },
    { category: "Personal Care", amount: 760 }
  ],
  hourlyTrends: [
    { hour: 8, amount: 320 },
    { hour: 9, amount: 480 },
    { hour: 10, amount: 530 },
    { hour: 11, amount: 650 },
    { hour: 12, amount: 740 },
    { hour: 13, amount: 680 },
    { hour: 14, amount: 580 },
    { hour: 15, amount: 490 },
    { hour: 16, amount: 420 },
    { hour: 17, amount: 350 }
  ]
};

// News & Events Data
export const newsEvents = [
  {
    id: 1,
    title: "Local Basketball Tournament",
    date: "2025-05-25T09:00:00",
    description: "Annual regional basketball tournament expected to bring 500+ visitors to the area.",
    impact: "High"
  },
  {
    id: 2,
    title: "Main Street Road Construction",
    date: "2025-05-23T07:00:00",
    description: "Road construction begins, potentially disrupting traffic to your location.",
    impact: "Medium"
  },
  {
    id: 3,
    title: "School Spring Break",
    date: "2025-05-27T00:00:00",
    description: "Local schools begin spring break, expect increased daytime foot traffic.",
    impact: "High"
  },
  {
    id: 4,
    title: "New Competitor Opening",
    date: "2025-06-01T10:00:00",
    description: "New convenience store opening 3 blocks away.",
    impact: "Medium"
  },
  {
    id: 5,
    title: "Local Festival",
    date: "2025-06-05T11:00:00",
    description: "Annual community festival at the park across from your location.",
    impact: "High"
  }
];

// Inventory Suggestions
export const inventorySuggestions = [
  {
    id: 1,
    item: "Bottled Water",
    currentStock: 120,
    suggestion: "Increase by 30%",
    reason: "Upcoming basketball tournament + warm weather forecast"
  },
  {
    id: 2,
    item: "Energy Drinks",
    currentStock: 85,
    suggestion: "Increase by 20%",
    reason: "Basketball tournament weekend"
  },
  {
    id: 3,
    item: "Fresh Produce",
    currentStock: 45,
    suggestion: "Reduce by 15%",
    reason: "Rain forecast for tomorrow"
  },
  {
    id: 4,
    item: "Umbrellas",
    currentStock: 12,
    suggestion: "Increase by 50%",
    reason: "80% rain probability tomorrow"
  },
  {
    id: 5,
    item: "Seasonal Allergy Medicine",
    currentStock: 30,
    suggestion: "Increase by 25%",
    reason: "High pollen count expected this week"
  }
];

// AI Chat History
export const aiChatHistory: Message[] = [
  {
    role: "assistant",
    content: "Hello! I'm your retail intelligence assistant. How can I help you today?"
  },
  {
    role: "user",
    content: "What insights do you have about today's sales?"
  },
  {
    role: "assistant",
    content: "Today's sales are 12% higher than yesterday. Your beverage category is performing particularly well with a 24% increase. This might be related to the warmer weather forecast today."
  }
];
