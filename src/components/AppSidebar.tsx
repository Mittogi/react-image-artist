
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import { 
  Droplet, 
  Bookmark, 
  Clock, 
  ChevronDown,
  HelpCircle,
  BookOpen,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppSidebar() {
  return (
    <Sidebar className="w-64 bg-white border-r border-gray-200">
      <SidebarContent className="p-4">
        {/* User Profile Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-medium">LH</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">LianH</h3>
              <p className="text-sm text-gray-500">Beginner</p>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="text-teal-500">✉</span>
              <span>luanlyhai13@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-teal-500">📱</span>
              <span>0944590434</span>
            </div>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                  <Droplet className="w-5 h-5 text-teal-500" />
                  <span>Xu hướng</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                  <Bookmark className="w-5 h-5 text-teal-500" />
                  <span>Đánh dấu</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-teal-500" />
                  <span>Lịch sử</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Categories Section */}
        <div className="mt-6">
          <Button variant="ghost" className="w-full justify-between p-3 h-auto">
            <span className="font-medium">Thể loại</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
          <div className="mt-2 space-y-1 text-sm text-gray-600 pl-3">
            <div className="py-1">Math</div>
            <div className="py-1">Software Engineering</div>
            <div className="py-1">Economy</div>
            <div className="py-1">AI</div>
            <div className="py-1">Technology</div>
            <div className="py-1">SWD</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 space-y-2">
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
              <HelpCircle className="w-5 h-5 text-teal-500" />
              <span>Trợ giúp</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
              <BookOpen className="w-5 h-5 text-teal-500" />
              <span>Góp ý</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
              <Settings className="w-5 h-5 text-teal-500" />
              <span>Cài đặt</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </div>

        {/* Advertisement */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg text-center">
          <p className="text-sm text-gray-500">Advertisement</p>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
