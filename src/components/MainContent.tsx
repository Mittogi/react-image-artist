
import { Button } from "@/components/ui/button";
import { Plus, ChevronDown } from "lucide-react";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

export const MainContent = () => {
  return (
    <div className="flex-1 p-6">
      {/* Profile Header */}
      <div className="bg-gray-200 rounded-lg h-32 mb-6 relative">
        <div className="absolute bottom-4 left-6 flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center border-4 border-white">
            <span className="text-white font-bold text-xl">LH</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">LianH</h2>
            <p className="text-gray-600">@luanlyhai</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-8">
          <button className="pb-2 border-b-2 border-teal-500 text-teal-600 font-medium">
            Tổng quan
          </button>
          <button className="pb-2 text-gray-500 hover:text-gray-700">
            Bài đăng
          </button>
          <button className="pb-2 text-gray-500 hover:text-gray-700">
            Bình luận
          </button>
          <button className="pb-2 text-gray-500 hover:text-gray-700">
            Đã lưu
          </button>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Tạo bài đăng
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <span>Sắp xếp</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Empty State */}
      <div className="text-center py-16 text-gray-500">
        <p>No posts yet</p>
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
