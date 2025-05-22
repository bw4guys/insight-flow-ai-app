
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface DashboardCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
  actionButton?: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ 
  title, 
  description, 
  icon, 
  className = '',
  children,
  loading = false,
  actionButton
}) => {
  return (
    <Card className={`shadow-md hover:shadow-lg transition-all animate-fade-in ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <div>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </div>
        <div className="flex items-center space-x-2">
          {actionButton}
          {icon && <div>{icon}</div>}
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center p-6">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
          </div>
        ) : (
          children
        )}
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
