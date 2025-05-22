
import React from 'react';
import { ShoppingBag, TrendingDown, TrendingUp } from 'lucide-react';
import DashboardCard from './DashboardCard';
import { inventorySuggestions } from '@/services/mockData';
import { Badge } from '@/components/ui/badge';

const InventorySuggestionsCard: React.FC = () => {
  return (
    <DashboardCard 
      title="Inventory Suggestions" 
      icon={<ShoppingBag className="h-5 w-5 text-brand-teal" />}
    >
      <div className="space-y-3">
        {inventorySuggestions.slice(0, 3).map((suggestion) => (
          <div 
            key={suggestion.id}
            className="flex items-center justify-between border-b border-border pb-2 last:border-0"
          >
            <div className="space-y-1">
              <p className="font-medium text-sm">{suggestion.item}</p>
              <p className="text-xs text-muted-foreground">Current: {suggestion.currentStock} units</p>
            </div>
            <div className="text-right space-y-1">
              <Badge
                variant="outline"
                className={`flex items-center space-x-1 ${
                  suggestion.suggestion.includes('Increase') ? 'text-green-500 border-green-500' : 'text-amber-500 border-amber-500'
                }`}
              >
                {suggestion.suggestion.includes('Increase') ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {suggestion.suggestion}
              </Badge>
              <p className="text-xs text-muted-foreground truncate max-w-[180px]">{suggestion.reason}</p>
            </div>
          </div>
        ))}
        <div className="text-center pt-1">
          <a 
            href="/inventory" 
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            View all suggestions
          </a>
        </div>
      </div>
    </DashboardCard>
  );
};

export default InventorySuggestionsCard;
