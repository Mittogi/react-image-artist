
import { Button } from "@/components/ui/button";
import { Plus, Users, Mail, Phone, MapPin } from "lucide-react";

export const ProfilePanel = () => {
  return (
    <div className="w-80 p-6 bg-white border-l border-gray-200">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-800 text-lg mb-4">LianH</h3>
        <p className="text-gray-600 mb-4">@luanlyhai</p>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-center space-x-3 text-gray-600">
            <Users className="w-4 h-4" />
            <span>31 thg 3, 2003</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <Mail className="w-4 h-4" />
            <span>luanlyhai13@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <Phone className="w-4 h-4" />
            <span>0987654321</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>Vinhome Grand Park, Nguyen Xien</span>
          </div>
        </div>

        <Button className="w-full mt-6 bg-white border border-teal-500 text-teal-500 hover:bg-teal-50">
          <Plus className="w-4 h-4 mr-2" />
          Cập nhật hồ sơ
        </Button>
      </div>
    </div>
  );
};
