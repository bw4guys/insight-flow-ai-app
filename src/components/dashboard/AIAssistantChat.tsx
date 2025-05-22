
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DashboardCard from './DashboardCard';
import { aiChatHistory, Message } from '@/services/mockData';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';

const AIAssistantChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(aiChatHistory);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      let response = '';
      
      // Simple response logic based on keywords
      const lowercaseInput = inputValue.toLowerCase();
      
      if (lowercaseInput.includes('sales') && lowercaseInput.includes('low')) {
        response = "Based on our analysis, today's lower sales are likely due to the rainy weather forecast and ongoing road construction on Main Street. Historical data shows a 15-20% decrease in foot traffic during similar conditions. Consider running a promotion tomorrow when weather improves.";
      } 
      else if (lowercaseInput.includes('weather') || lowercaseInput.includes('forecast')) {
        response = "Tomorrow's forecast shows rain with 80% precipitation probability. This typically reduces foot traffic by 15-20%. Consider adjusting inventory for perishable items and potentially running a rainy day promotion.";
      }
      else if (lowercaseInput.includes('inventory') || lowercaseInput.includes('stock')) {
        response = "Based on upcoming events and weather forecast, I recommend increasing bottled water inventory by 30% and energy drinks by 20% for the basketball tournament this weekend. You should consider reducing fresh produce by 15% due to tomorrow's rain forecast.";
      }
      else if (lowercaseInput.includes('event') || lowercaseInput.includes('tournament')) {
        response = "There's a local basketball tournament this Saturday expected to bring 500+ visitors to the area. Historical data shows a 25% increase in beverages and snacks sales during similar events.";
      }
      else {
        response = "I'm your Retail Intelligence assistant. I can help with sales analysis, inventory recommendations, weather impact predictions, and upcoming event information. What specific insights do you need today?";
      }
      
      const aiMessage: Message = { role: 'assistant', content: response };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <DashboardCard 
      title="AI Business Assistant" 
      description="Ask questions about your business"
      className="col-span-1 md:col-span-2 lg:col-span-3"
    >
      <div className="flex flex-col h-[300px]">
        <div className="flex-1 overflow-y-auto mb-4">
          <div className="space-y-4 px-1">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`
                    flex max-w-[80%] items-start space-x-2 rounded-lg px-3 py-2
                    ${message.role === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted'}
                  `}
                >
                  {message.role === 'assistant' && (
                    <Bot className="h-5 w-5 mt-1" />
                  )}
                  <div className="space-y-1">
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                  {message.role === 'user' && (
                    <User className="h-5 w-5 mt-1" />
                  )}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg px-4 py-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="animate-pulse-slow h-2 w-2 rounded-full bg-slate-400"></div>
                    <div className="animate-pulse-slow h-2 w-2 rounded-full bg-slate-400" style={{ animationDelay: '0.2s' }}></div>
                    <div className="animate-pulse-slow h-2 w-2 rounded-full bg-slate-400" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <Separator className="my-2" />
        
        <div className="flex space-x-2">
          <Input
            placeholder="Ask about sales, inventory, weather impact..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={!inputValue.trim() || isLoading}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </DashboardCard>
  );
};

export default AIAssistantChat;
