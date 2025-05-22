
import React from 'react';
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import AppNav from './AppNav';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
 
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  
  return (
    <SidebarProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="flex min-h-screen w-full">
          <Sidebar defaultCollapsed={isMobile}>
            <SidebarHeader className="p-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-brand-teal flex items-center justify-center text-white font-bold">RI</div>
                <span className="text-white font-semibold">Retail Intelligence</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <AppNav />
            </SidebarContent>
          </Sidebar>
          <div className="flex-1">
            <div className="p-4">
              {children}
            </div>
          </div>
        </div>
      </TooltipProvider>
    </SidebarProvider>
  );
};

export default Layout;
