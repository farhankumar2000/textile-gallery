import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    category: string[];
    color: string[];
    size: string[];
    priceRange: [number, number];
  };
  onFiltersChange: (filters: any) => void;
}

const FilterSidebar = ({ isOpen, onClose, filters, onFiltersChange }: FilterSidebarProps) => {
  const categories = ["men", "women", "kids"];
  const colors = ["black", "white", "gray", "navy", "beige", "sage", "pink"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.category, category]
      : filters.category.filter(c => c !== category);
    
    onFiltersChange({ ...filters, category: newCategories });
  };

  const handleColorChange = (color: string, checked: boolean) => {
    const newColors = checked
      ? [...filters.color, color]
      : filters.color.filter(c => c !== color);
    
    onFiltersChange({ ...filters, color: newColors });
  };

  const handleSizeChange = (size: string, checked: boolean) => {
    const newSizes = checked
      ? [...filters.size, size]
      : filters.size.filter(s => s !== size);
    
    onFiltersChange({ ...filters, size: newSizes });
  };

  const handlePriceChange = (value: number[]) => {
    onFiltersChange({ ...filters, priceRange: [value[0], value[1]] });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      category: [],
      color: [],
      size: [],
      priceRange: [0, 500]
    });
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-80 bg-background border-r transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Filters</h2>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearAllFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              Clear All
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="lg:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="p-4 space-y-6 max-h-[calc(100vh-80px)] overflow-y-auto">
          {/* Category Filter */}
          <div className="filter-section">
            <h3 className="font-medium mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={filters.category.includes(category)}
                    onCheckedChange={(checked) => 
                      handleCategoryChange(category, checked as boolean)
                    }
                  />
                  <Label 
                    htmlFor={`category-${category}`}
                    className="text-sm capitalize cursor-pointer"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div className="filter-section">
            <h3 className="font-medium mb-3">Color</h3>
            <div className="grid grid-cols-2 gap-2">
              {colors.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox
                    id={`color-${color}`}
                    checked={filters.color.includes(color)}
                    onCheckedChange={(checked) => 
                      handleColorChange(color, checked as boolean)
                    }
                  />
                  <Label 
                    htmlFor={`color-${color}`}
                    className="text-sm capitalize cursor-pointer"
                  >
                    {color}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div className="filter-section">
            <h3 className="font-medium mb-3">Size</h3>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox
                    id={`size-${size}`}
                    checked={filters.size.includes(size)}
                    onCheckedChange={(checked) => 
                      handleSizeChange(size, checked as boolean)
                    }
                  />
                  <Label 
                    htmlFor={`size-${size}`}
                    className="text-sm cursor-pointer"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="filter-section">
            <h3 className="font-medium mb-3">Price Range</h3>
            <div className="space-y-4">
              <Slider
                value={filters.priceRange}
                onValueChange={handlePriceChange}
                max={500}
                min={0}
                step={10}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;