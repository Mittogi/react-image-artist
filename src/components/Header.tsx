
import { Home, Globe, Users, Copy, MessageSquare, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
          </div>
        </div>
        <span className="text-xl font-semibold text-gray-800">Colabnity</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="w-10 h-10 bg-teal-500 hover:bg-teal-600 text-white rounded-full">
          <Home className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="w-10 h-10 bg-teal-500 hover:bg-teal-600 text-white rounded-full">
          <Globe className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="w-10 h-10 bg-teal-500 hover:bg-teal-600 text-white rounded-full">
          <Users className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="w-10 h-10 bg-teal-500 hover:bg-teal-600 text-white rounded-full">
          <Copy className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="w-10 h-10 bg-teal-500 hover:bg-teal-600 text-white rounded-full">
          <MessageSquare className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="w-10 h-10 bg-teal-500 hover:bg-teal-600 text-white rounded-full">
          <Lock className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};
