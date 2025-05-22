
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { AlertCircle } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <div className="mb-6 p-4 rounded-full bg-muted">
          <AlertCircle className="h-12 w-12 text-muted-foreground" />
        </div>
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl mb-6">This page is under construction</p>
        <p className="text-muted-foreground mb-8 max-w-md">
          We're still building this feature of the Retail Intelligence platform. Check back soon for updates.
        </p>
        <div className="flex gap-4">
          <Button onClick={() => navigate('/')} variant="default">
            Return to Dashboard
          </Button>
          <Button onClick={() => window.history.back()} variant="outline">
            Go Back
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
