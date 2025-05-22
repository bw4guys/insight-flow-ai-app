
import React from 'react';
import Layout from '@/components/layout/Layout';
import WeatherCard from '@/components/dashboard/WeatherCard';
import NewsEventsCard from '@/components/dashboard/NewsEventsCard';
import FootprintsCard from '@/components/dashboard/FootprintsCard';
import SalesOverviewCard from '@/components/dashboard/SalesOverviewCard';
import InventorySuggestionsCard from '@/components/dashboard/InventorySuggestionsCard';
import AIAssistantChat from '@/components/dashboard/AIAssistantChat';

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Retail Intelligence Dashboard</h1>
          <p className="text-sm text-muted-foreground">Last updated: May 22, 2025 10:30 AM</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <WeatherCard />
          <NewsEventsCard />
          <FootprintsCard />
          <SalesOverviewCard />
          <InventorySuggestionsCard />
          <AIAssistantChat />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
