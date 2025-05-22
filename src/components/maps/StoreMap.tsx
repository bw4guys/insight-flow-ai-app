
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { StoreLocation } from '@/services/mockData';
import { Card } from '@/components/ui/card';

// In a real app, this would come from an environment variable or API key management
// For demo purposes, we'll prompt the user to enter their Mapbox token
const DEFAULT_MAPBOX_TOKEN = '';

interface StoreMapProps {
  selectedStore: StoreLocation;
  stores: StoreLocation[];
}

const StoreMap: React.FC<StoreMapProps> = ({ selectedStore, stores }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState(DEFAULT_MAPBOX_TOKEN);
  const [tokenInput, setTokenInput] = useState('');
  const markers = useRef<mapboxgl.Marker[]>([]);
  
  useEffect(() => {
    // Check if we have a token in localStorage
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
    }
  }, []);
  
  const saveMapboxToken = () => {
    if (tokenInput) {
      localStorage.setItem('mapbox_token', tokenInput);
      setMapboxToken(tokenInput);
    }
  };
  
  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;
    
    // Clean up previous map
    if (map.current) {
      markers.current.forEach(marker => marker.remove());
      markers.current = [];
      map.current.remove();
    }

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [selectedStore.longitude, selectedStore.latitude],
      zoom: 12
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    map.current.on('load', () => {
      // Add markers for all stores
      stores.forEach((store) => {
        // Create marker element
        const markerElement = document.createElement('div');
        markerElement.className = 'store-marker';
        markerElement.style.width = '20px';
        markerElement.style.height = '20px';
        markerElement.style.borderRadius = '50%';
        markerElement.style.backgroundColor = store.id === selectedStore.id ? '#2c7a7b' : '#ccc';
        markerElement.style.border = '2px solid white';
        markerElement.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
        
        // Add popup
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<strong>${store.name}</strong><p>${store.address}</p>`);
        
        // Create marker
        const marker = new mapboxgl.Marker(markerElement)
          .setLngLat([store.longitude, store.latitude])
          .setPopup(popup)
          .addTo(map.current!);
        
        markers.current.push(marker);
        
        // If this is the selected store, show the popup by default
        if (store.id === selectedStore.id) {
          marker.togglePopup();
        }
      });
    });

    // Cleanup
    return () => {
      if (map.current) {
        markers.current.forEach(marker => marker.remove());
        map.current.remove();
      }
    };
  }, [mapboxToken, selectedStore, stores]);
  
  useEffect(() => {
    if (!map.current || !mapboxToken) return;
    
    // Fly to the selected store
    map.current.flyTo({
      center: [selectedStore.longitude, selectedStore.latitude],
      zoom: 14,
      essential: true
    });
    
    // Update marker colors
    markers.current.forEach(marker => {
      const element = marker.getElement();
      const [lng, lat] = marker.getLngLat().toArray();
      const isSelected = lng === selectedStore.longitude && lat === selectedStore.latitude;
      element.style.backgroundColor = isSelected ? '#2c7a7b' : '#ccc';
      
      // Show popup for selected store
      if (isSelected) {
        marker.togglePopup();
      }
    });
  }, [selectedStore, mapboxToken]);
  
  if (!mapboxToken) {
    return (
      <div className="flex flex-col items-center justify-center p-6 h-[400px]">
        <Card className="max-w-md p-6 space-y-4">
          <h3 className="text-lg font-medium">Mapbox Token Required</h3>
          <p className="text-sm text-muted-foreground">
            To use the map feature, please enter your Mapbox public token. 
            You can create one for free at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">mapbox.com</a>
          </p>
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Enter your Mapbox token" 
              className="flex-1 px-3 py-2 border rounded-md" 
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
            />
            <button 
              className="px-4 py-2 bg-brand-teal text-white rounded-md"
              onClick={saveMapboxToken}
            >
              Save
            </button>
          </div>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="relative h-[400px]">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default StoreMap;
