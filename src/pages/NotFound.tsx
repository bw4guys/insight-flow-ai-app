
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl mb-6">This page is under construction</p>
        <p className="text-muted-foreground mb-8">
          We're still building this feature of the Retail Intelligence platform.
        </p>
        <Button onClick={() => navigate('/')}>
          Return to Dashboard
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
