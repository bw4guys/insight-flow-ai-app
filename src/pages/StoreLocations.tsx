
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StoreMap from '@/components/maps/StoreMap';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin } from 'lucide-react';
import { storeLocations } from '@/services/mockData';
import StoreFootprintDetails from '@/components/maps/StoreFootprintDetails';

const StoreLocations: React.FC = () => {
  const [searchAddress, setSearchAddress] = useState('');
  const [selectedStore, setSelectedStore] = useState(storeLocations[0]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would geocode the address and find the nearest store
    // For now, we'll just use our mock data
    const foundStore = storeLocations.find(store => 
      store.name.toLowerCase().includes(searchAddress.toLowerCase()) || 
      store.address.toLowerCase().includes(searchAddress.toLowerCase())
    );
    
    if (foundStore) {
      setSelectedStore(foundStore);
    }
  };
  
  return (
    <Layout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Store Locations</h1>
          <p className="text-sm text-muted-foreground">Last updated: May 22, 2025 10:30 AM</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Find Store</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter address or store name"
                    value={searchAddress}
                    onChange={(e) => setSearchAddress(e.target.value)}
                  />
                  <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </form>
              
              <div className="mt-4 space-y-2">
                <h3 className="font-medium">Store Locations</h3>
                <div className="max-h-[300px] overflow-y-auto space-y-2">
                  {storeLocations.map((store) => (
                    <div 
                      key={store.id} 
                      className={`p-2 rounded-md cursor-pointer flex items-start space-x-2 ${
                        selectedStore.id === store.id ? 'bg-muted' : 'hover:bg-muted/50'
                      }`}
                      onClick={() => setSelectedStore(store)}
                    >
                      <MapPin className="h-5 w-5 text-brand-teal mt-1" />
                      <div>
                        <p className="font-medium">{store.name}</p>
                        <p className="text-sm text-muted-foreground">{store.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2">
            <CardContent className="p-0 overflow-hidden">
              <StoreMap selectedStore={selectedStore} stores={storeLocations} />
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-lg">Store Performance Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <StoreFootprintDetails store={selectedStore} />
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default StoreLocations;
