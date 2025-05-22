
import React from 'react';
import { 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { 
  ChartBar, 
  CloudSun, 
  Database, 
  FileText, 
  MapPin,
  Settings, 
  ShoppingBag, 
  Users 
} from "lucide-react";
import { useLocation, useNavigate } from 'react-router-dom';

const AppNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const mainNavItems = [
    { 
      icon: ChartBar, 
      label: "Dashboard", 
      path: "/" 
    },
    { 
      icon: CloudSun, 
      label: "Weather Intelligence", 
      path: "/weather" 
    },
    { 
      icon: FileText, 
      label: "News & Events", 
      path: "/news" 
    },
    { 
      icon: MapPin, 
      label: "Footprints", 
      path: "/footprints" 
    },
    { 
      icon: ShoppingBag, 
      label: "Inventory", 
      path: "/inventory" 
    },
  ];
  
  const adminNavItems = [
    { 
      icon: Database, 
      label: "Data Sources", 
      path: "/data-sources" 
    },
    { 
      icon: Users, 
      label: "User Management", 
      path: "/users" 
    },
    { 
      icon: Settings, 
      label: "Settings", 
      path: "/settings" 
    },
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {mainNavItems.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton 
                  data-active={isActive(item.path)}
                  onClick={() => navigate(item.path)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      
      <SidebarGroup>
        <SidebarGroupLabel>Administration</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {adminNavItems.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton 
                  data-active={isActive(item.path)}
                  onClick={() => navigate(item.path)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
};

export default AppNav;
