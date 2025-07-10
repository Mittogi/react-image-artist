
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MainContent = () => {
  return (
    <div className="flex-1 p-6 bg-white">
      {/* Colabnity Header */}
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
          </div>
        </div>
        <span className="text-xl font-semibold text-gray-800">Colabnity</span>
      </div>

      {/* Profile Section */}
      <div className="flex items-start space-x-4">
        {/* Profile Image */}
        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold text-lg">
          LH
        </div>
        
        {/* Profile Info */}
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h2 className="text-lg font-semibold text-gray-800">LianH</h2>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Beginner</span>
          </div>
          
          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-gray-400 rounded-sm"></span>
              <span>luanlyhai13@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-teal-500 rounded-sm"></span>
              <span>0944590434</span>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <Heart className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <MessageCircle className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <Share2 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
