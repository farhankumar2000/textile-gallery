import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard1 = ({ product }: ProductCardProps) => {
  const { id, name, price, originalPrice, image, category, isNew } = product;

  return (
    <div className="group product-card bg-card rounded-lg overflow-hidden shadow-subtle">
      <div className="relative overflow-hidden">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-[300px] md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-accent text-accent-foreground">New</Badge>
          )}
          {originalPrice && (
            <Badge className="bg-highlight text-highlight-foreground">Sale</Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="icon" variant="secondary" className="h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="h-8 w-8">
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${id}`}>
            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
              {name}
            </h3>
          </Link>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 capitalize">{category}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-foreground">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard1;