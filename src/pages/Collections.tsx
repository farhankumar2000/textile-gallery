import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, Grid, List, SortAsc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";

// Import product images
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

// Mock product data
const products = [
  {
    id: "1",
    name: "Essential Cotton Tee",
    price: 45,
    originalPrice: 55,
    image: product1,
    category: "women",
    colors: ["white", "black", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true
  },
  {
    id: "2", 
    name: "Wool Knit Sweater",
    price: 120,
    image: product2,
    category: "men",
    colors: ["gray", "navy", "black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: false
  },
  {
    id: "3",
    name: "Linen Summer Dress",
    price: 85,
    image: product3,
    category: "women", 
    colors: ["sage", "white", "beige"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true
  },
  {
    id: "4",
    name: "Denim Jacket",
    price: 95,
    image: product4,
    category: "men",
    colors: ["navy", "black"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false
  },
  {
    id: "5",
    name: "Kids Cotton Sweater",
    price: 35,
    image: product5,
    category: "kids",
    colors: ["pink", "white", "beige"],
    sizes: ["XS", "S", "M"],
    isNew: true
  },
  {
    id: "6",
    name: "Wool Winter Coat",
    price: 185,
    image: product6,
    category: "women",
    colors: ["black", "navy", "beige"],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: false
  }
];

const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Initialize filters from URL params
  const [filters, setFilters] = useState({
    category: searchParams.getAll("category"),
    color: searchParams.getAll("color"),
    size: searchParams.getAll("size"),
    priceRange: [
      parseInt(searchParams.get("minPrice") || "0"),
      parseInt(searchParams.get("maxPrice") || "500")
    ] as [number, number]
  });

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Category filter
      if (filters.category.length > 0 && !filters.category.includes(product.category)) {
        return false;
      }

      // Color filter  
      if (filters.color.length > 0 && !product.colors.some(color => filters.color.includes(color))) {
        return false;
      }

      // Size filter
      if (filters.size.length > 0 && !product.sizes.some(size => filters.size.includes(size))) {
        return false;
      }

      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      return true;
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    
    // Update URL params
    const params = new URLSearchParams();
    newFilters.category.forEach(cat => params.append("category", cat));
    newFilters.color.forEach(color => params.append("color", color));
    newFilters.size.forEach(size => params.append("size", size));
    if (newFilters.priceRange[0] > 0) params.set("minPrice", newFilters.priceRange[0].toString());
    if (newFilters.priceRange[1] < 500) params.set("maxPrice", newFilters.priceRange[1].toString());
    
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-display font-semibold mb-2">Collections</h1>
          <p className="text-muted-foreground">
            Discover our carefully curated selection of modern classics
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            filters={filters}
            onFiltersChange={handleFiltersChange}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                
                <span className="text-sm text-muted-foreground">
                  {filteredAndSortedProducts.length} products found
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* View Mode Toggle */}
                <div className="flex items-center border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>

                {/* Sort Dropdown */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SortAsc className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest Arrivals</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`
              ${viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-4"
              }
            `}>
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">
                  No products found matching your criteria
                </p>
                <Button onClick={() => handleFiltersChange({
                  category: [],
                  color: [],
                  size: [],
                  priceRange: [0, 500]
                })}>
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;