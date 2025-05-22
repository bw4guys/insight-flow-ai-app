
import { format, addDays } from 'date-fns';

// Define proper type for Message to fix the TypeScript error
export interface Message {
  role: "assistant" | "user";
  content: string;
}

// Store Location Interface
export interface StoreLocation {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  trend: string;
  statistics: {
    todayFootprints: number;
    footprintChange: number;
    todaySales: number;
    salesChange: number;
    trafficScore: number;
  };
  hourlyFootprints: {
    hour: string;
    count: number;
  }[];
  weeklyFootprints: {
    day: string;
    count: number;
    average: number;
  }[];
  salesByDepartment: {
    department: string;
    amount: number;
  }[];
  weeklySales: {
    day: string;
    amount: number;
    target: number;
  }[];
  forecast: {
    revenueImpact: number;
    trafficImpact: number;
    topRecommendation: string;
    impactFactors: {
      name: string;
      description: string;
    }[];
    aiInsights: string[];
  };
}

// Store Locations Data
export const storeLocations: StoreLocation[] = [
  {
    id: 1,
    name: "Downtown Express",
    address: "123 Main Street, Springfield, IL 62701",
    latitude: 39.799042, 
    longitude: -89.644203,
    trend: "+5.3% this week",
    statistics: {
      todayFootprints: 856,
      footprintChange: 12,
      todaySales: 12450,
      salesChange: 8,
      trafficScore: 8
    },
    hourlyFootprints: [
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
    ],
    weeklyFootprints: [
      { day: "Mon", count: 820, average: 780 },
      { day: "Tue", count: 845, average: 790 },
      { day: "Wed", count: 856, average: 805 },
      { day: "Thu", count: 798, average: 810 },
      { day: "Fri", count: 912, average: 890 },
      { day: "Sat", count: 934, average: 900 },
      { day: "Sun", count: 832, average: 800 }
    ],
    salesByDepartment: [
      { department: "Beverages", amount: 3250 },
      { department: "Snacks", amount: 2180 },
      { department: "Produce", amount: 1950 },
      { department: "Bakery", amount: 1720 },
      { department: "Dairy", amount: 1580 },
      { department: "Personal Care", amount: 1770 }
    ],
    weeklySales: [
      { day: "Mon", amount: 10500, target: 10000 },
      { day: "Tue", amount: 11200, target: 10000 },
      { day: "Wed", amount: 12450, target: 10000 },
      { day: "Thu", amount: 11800, target: 10000 },
      { day: "Fri", amount: 13600, target: 12000 },
      { day: "Sat", amount: 15200, target: 15000 },
      { day: "Sun", amount: 12800, target: 12000 }
    ],
    forecast: {
      revenueImpact: 8,
      trafficImpact: 12,
      topRecommendation: "Increase beverage stock by 25%",
      impactFactors: [
        {
          name: "Basketball Tournament",
          description: "Local tournament this weekend expected to bring 500+ visitors to the area"
        },
        {
          name: "Warm Weather",
          description: "Temperature increase to 78°F will likely boost cold beverage sales"
        },
        {
          name: "Competitor Sale",
          description: "Competitor 2 blocks away running 10% off promotion on snacks"
        }
      ],
      aiInsights: [
        "Based on historical data and upcoming events, we expect a 12% increase in foot traffic and 8% increase in revenue.",
        "The basketball tournament is the primary driver for increased traffic, especially in the afternoon hours (2PM-6PM).",
        "Consider running a beverage bundle promotion to capitalize on the warm weather forecast and sports event."
      ]
    }
  },
  {
    id: 2,
    name: "Westside Market",
    address: "456 Oak Avenue, Springfield, IL 62702",
    latitude: 39.793887, 
    longitude: -89.662934,
    trend: "-2.1% this week",
    statistics: {
      todayFootprints: 712,
      footprintChange: -5,
      todaySales: 9860,
      salesChange: -3,
      trafficScore: 6
    },
    hourlyFootprints: [
      { hour: "8 AM", count: 35 },
      { hour: "9 AM", count: 52 },
      { hour: "10 AM", count: 68 },
      { hour: "11 AM", count: 91 },
      { hour: "12 PM", count: 110 },
      { hour: "1 PM", count: 96 },
      { hour: "2 PM", count: 82 },
      { hour: "3 PM", count: 74 },
      { hour: "4 PM", count: 60 },
      { hour: "5 PM", count: 44 }
    ],
    weeklyFootprints: [
      { day: "Mon", count: 690, average: 710 },
      { day: "Tue", count: 705, average: 715 },
      { day: "Wed", count: 712, average: 720 },
      { day: "Thu", count: 675, average: 700 },
      { day: "Fri", count: 740, average: 780 },
      { day: "Sat", count: 835, average: 850 },
      { day: "Sun", count: 720, average: 760 }
    ],
    salesByDepartment: [
      { department: "Beverages", amount: 2480 },
      { department: "Snacks", amount: 1750 },
      { department: "Produce", amount: 2150 },
      { department: "Bakery", amount: 1320 },
      { department: "Dairy", amount: 1280 },
      { department: "Personal Care", amount: 880 }
    ],
    weeklySales: [
      { day: "Mon", amount: 9200, target: 9500 },
      { day: "Tue", amount: 9500, target: 9500 },
      { day: "Wed", amount: 9860, target: 9500 },
      { day: "Thu", amount: 9400, target: 9500 },
      { day: "Fri", amount: 10200, target: 11000 },
      { day: "Sat", amount: 12400, target: 13000 },
      { day: "Sun", amount: 10100, target: 10500 }
    ],
    forecast: {
      revenueImpact: -3,
      trafficImpact: -5,
      topRecommendation: "Reduce fresh produce inventory by 15%",
      impactFactors: [
        {
          name: "Road Construction",
          description: "Ongoing road work on Oak Avenue reducing accessibility to your location"
        },
        {
          name: "Rain Forecast",
          description: "80% chance of rain tomorrow likely to reduce walk-in traffic"
        },
        {
          name: "New Competitor",
          description: "New store opened 3 blocks away offering grand opening discounts"
        }
      ],
      aiInsights: [
        "Your location is being negatively impacted by the combination of road construction and upcoming poor weather.",
        "Consider running a targeted loyalty promotion to retain regular customers during this challenging period.",
        "Data suggests reducing perishable inventory and focusing on staples that customers specifically seek out."
      ]
    }
  },
  {
    id: 3,
    name: "Northside Express",
    address: "789 Pine Street, Springfield, IL 62703",
    latitude: 39.825320, 
    longitude: -89.641649,
    trend: "+10.7% this week",
    statistics: {
      todayFootprints: 945,
      footprintChange: 18,
      todaySales: 14580,
      salesChange: 15,
      trafficScore: 9
    },
    hourlyFootprints: [
      { hour: "8 AM", count: 55 },
      { hour: "9 AM", count: 78 },
      { hour: "10 AM", count: 92 },
      { hour: "11 AM", count: 120 },
      { hour: "12 PM", count: 142 },
      { hour: "1 PM", count: 125 },
      { hour: "2 PM", count: 110 },
      { hour: "3 PM", count: 95 },
      { hour: "4 PM", count: 82 },
      { hour: "5 PM", count: 68 }
    ],
    weeklyFootprints: [
      { day: "Mon", count: 870, average: 800 },
      { day: "Tue", count: 910, average: 820 },
      { day: "Wed", count: 945, average: 830 },
      { day: "Thu", count: 880, average: 840 },
      { day: "Fri", count: 960, average: 900 },
      { day: "Sat", count: 1050, average: 950 },
      { day: "Sun", count: 920, average: 850 }
    ],
    salesByDepartment: [
      { department: "Beverages", amount: 3650 },
      { department: "Snacks", amount: 2850 },
      { department: "Produce", amount: 2420 },
      { department: "Bakery", amount: 1980 },
      { department: "Dairy", amount: 1780 },
      { department: "Personal Care", amount: 1900 }
    ],
    weeklySales: [
      { day: "Mon", amount: 13200, target: 12500 },
      { day: "Tue", amount: 13800, target: 12500 },
      { day: "Wed", amount: 14580, target: 12500 },
      { day: "Thu", amount: 13900, target: 12500 },
      { day: "Fri", amount: 15600, target: 14000 },
      { day: "Sat", amount: 17800, target: 16000 },
      { day: "Sun", amount: 14500, target: 13000 }
    ],
    forecast: {
      revenueImpact: 15,
      trafficImpact: 20,
      topRecommendation: "Increase all inventory by 25%, focus on ready-to-eat items",
      impactFactors: [
        {
          name: "College Spring Break",
          description: "Local university's spring break starts next week, students leaving town"
        },
        {
          name: "Community Festival",
          description: "Annual festival happening across the street, expecting 2000+ attendees"
        },
        {
          name: "Sunny Weather",
          description: "Perfect weather conditions forecasted for the entire weekend"
        }
      ],
      aiInsights: [
        "The community festival presents a significant opportunity to capture new customers and increase sales.",
        "Historical data from similar events suggests setting up an outdoor sample station could increase sales by up to 30%.",
        "Consider extending store hours during the festival weekend to maximize revenue potential."
      ]
    }
  }
];

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
