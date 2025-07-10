
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { MainContent } from "@/components/MainContent";
import { ProfilePanel } from "@/components/ProfilePanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <div className="flex flex-1">
              <MainContent />
              <ProfilePanel />
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
