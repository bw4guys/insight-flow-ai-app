
// Mock data for the dashboard components

export const weatherData = {
  current: {
    temp: 72,
    condition: "Partly Cloudy",
    humidity: 45,
    windSpeed: 8,
    icon: "cloud-sun"
  },
  forecast: [
    { day: "Today", high: 72, low: 58, condition: "Partly Cloudy", precipProbability: 10 },
    { day: "Tomorrow", high: 68, low: 52, condition: "Rain", precipProbability: 80 },
    { day: "Wednesday", high: 64, low: 50, condition: "Rain", precipProbability: 60 },
    { day: "Thursday", high: 70, low: 54, condition: "Sunny", precipProbability: 0 },
    { day: "Friday", high: 74, low: 56, condition: "Sunny", precipProbability: 0 }
  ]
};

export const newsEvents = [
  {
    id: 1,
    title: "Local Basketball Tournament",
    date: "2025-05-25",
    description: "High school basketball tournament expected to bring 500+ visitors",
    impact: "high"
  },
  {
    id: 2,
    title: "Downtown Street Fair",
    date: "2025-06-02",
    description: "Annual street fair with local vendors and entertainment",
    impact: "high"
  },
  {
    id: 3,
    title: "Road Construction Main St",
    date: "2025-05-23",
    description: "Road work may reduce foot traffic by 20%",
    impact: "medium"
  },
  {
    id: 4,
    title: "New Restaurant Opening",
    date: "2025-06-10",
    description: "Competitor restaurant opening 2 blocks away",
    impact: "medium"
  }
];

export const footprintData = {
  today: 342,
  yesterday: 287,
  weeklyAverage: 315,
  monthlyTrend: "+8%",
  hourly: [
    { hour: "8AM", count: 12 },
    { hour: "9AM", count: 24 },
    { hour: "10AM", count: 36 },
    { hour: "11AM", count: 48 },
    { hour: "12PM", count: 65 },
    { hour: "1PM", count: 72 },
    { hour: "2PM", count: 45 },
    { hour: "3PM", count: 38 },
    { hour: "4PM", count: 42 },
    { hour: "5PM", count: 38 },
    { hour: "6PM", count: 30 },
    { hour: "7PM", count: 20 },
  ]
};

export const salesData = {
  today: 4218.65,
  yesterday: 3842.12,
  weeklyAverage: 4105.78,
  monthlyTrend: "+5.2%",
  byCategory: [
    { category: "Beverages", amount: 1245.32, trend: "+12%" },
    { category: "Snacks", amount: 876.90, trend: "+4%" },
    { category: "Prepared Foods", amount: 1532.55, trend: "+2%" },
    { category: "Household", amount: 563.88, trend: "-3%" }
  ]
};

export const inventorySuggestions = [
  {
    id: 1,
    item: "Bottled Water",
    currentStock: 120,
    suggestion: "Increase by 30%",
    reason: "Hot weather forecast + basketball tournament"
  },
  {
    id: 2,
    item: "Fresh Produce",
    currentStock: 45,
    suggestion: "Reduce by 15%",
    reason: "Rain forecast tomorrow will reduce foot traffic"
  },
  {
    id: 3,
    item: "Energy Drinks",
    currentStock: 85,
    suggestion: "Increase by 20%",
    reason: "Trending sales increase + sports event"
  },
  {
    id: 4,
    item: "Prepared Sandwiches",
    currentStock: 32,
    suggestion: "Reduce by 25%",
    reason: "Low foot traffic expected due to road construction"
  }
];

export const aiChatHistory = [
  { 
    role: "assistant", 
    content: "Hello! I'm your Retail Intelligence assistant. How can I help optimize your business today?"
  },
];

export interface Message {
  role: "user" | "assistant";
  content: string;
}
