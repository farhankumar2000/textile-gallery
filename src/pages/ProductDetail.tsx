import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingBag, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";

// Import product images
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

// Mock product data
const products = {
  "1": {
    id: "1",
    name: "Essential Cotton Tee",
    price: 45,
    originalPrice: 55,
    image: product1,
    category: "women",
    colors: ["white", "black", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
    description: "Crafted from premium organic cotton, this essential tee combines comfort with timeless style. The relaxed fit and soft texture make it perfect for everyday wear or layering.",
    features: [
      "100% Organic Cotton",
      "Pre-shrunk for lasting fit",
      "Reinforced seams",
      "Machine washable"
    ],
    rating: 4.8,
    reviews: 124
  },
  "2": {
    id: "2", 
    name: "Wool Knit Sweater",
    price: 120,
    originalPrice: null,
    image: product2,
    category: "men",
    colors: ["gray", "navy", "black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: false,
    description: "A sophisticated wool knit sweater that effortlessly bridges casual and formal wear. The premium merino wool construction ensures warmth without bulk.",
    features: [
      "100% Merino Wool",
      "Ribbed cuffs and hem",
      "Classic crew neck",
      "Dry clean only"
    ],
    rating: 4.9,
    reviews: 87
  },
  "3": {
    id: "3",
    name: "Linen Summer Dress",
    price: 85,
    originalPrice: null,
    image: product3,
    category: "women", 
    colors: ["sage", "white", "beige"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
    description: "Embrace effortless elegance with this flowing linen dress. The breathable fabric and relaxed silhouette make it perfect for warm weather occasions.",
    features: [
      "100% European Linen",
      "Adjustable waist tie",
      "Side pockets",
      "Machine washable"
    ],
    rating: 4.7,
    reviews: 156
  }
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const product = id ? products[id as keyof typeof products] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
          <Link to="/collections">
            <Button>Back to Collections</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Set default selections
  if (!selectedColor && product.colors.length > 0) {
    setSelectedColor(product.colors[0]);
  }
  if (!selectedSize && product.sizes.length > 0) {
    setSelectedSize(product.sizes[0]);
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/collections" className="flex items-center hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Collections
          </Link>
          <span>/</span>
          <span className="capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title and badges */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.isNew && (
                  <Badge className="bg-accent text-accent-foreground">New</Badge>
                )}
                {product.originalPrice && (
                  <Badge className="bg-highlight text-highlight-foreground">Sale</Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-display font-semibold mb-2">
                {product.name}
              </h1>
              
              <p className="text-muted-foreground capitalize">
                {product.category}'s Clothing
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-accent text-accent"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-semibold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-medium mb-3">Color: {selectedColor}</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`
                      w-8 h-8 rounded-full border-2 transition-colors capitalize
                      ${selectedColor === color ? "border-primary" : "border-muted"}
                      ${color === "white" ? "bg-white" : ""}
                      ${color === "black" ? "bg-black" : ""}
                      ${color === "gray" ? "bg-gray-400" : ""}
                      ${color === "navy" ? "bg-blue-900" : ""}
                      ${color === "beige" ? "bg-amber-100" : ""}
                      ${color === "sage" ? "bg-green-300" : ""}
                      ${color === "pink" ? "bg-pink-300" : ""}
                    `}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-medium mb-3">Size: {selectedSize}</h3>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      px-4 py-2 border rounded-md transition-colors
                      ${selectedSize === size 
                        ? "border-primary bg-primary text-primary-foreground" 
                        : "border-border hover:border-primary"
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="flex-1 btn-hero">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-medium mb-3">Features</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1 h-1 bg-muted-foreground rounded-full mt-2 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;