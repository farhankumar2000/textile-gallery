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

import beige from "@/assets/product-1beige.jpg";
import black from "@/assets/product-1black.jpg";
import gray from "@/assets/product-1gray.jpg";
import navy from "@/assets/product-1navy.jpg";
import pink from "@/assets/product-1pink.jpg";
import sage from "@/assets/product-1sage.jpg";

import blackTokyoDress from "@/assets/black-tokyo.jpg";
import hm from "@/assets/hm.jpg";
import blackRock from "@/assets/black-rock.jpg";
import cheque from "@/assets/cheque.jpg";

// Mock product data (images grouped by color)
const products = {
    "1": {
        id: "1",
        name: "Essential Cotton Tee",
        price: 45,
        originalPrice: 55,
        category: "women",
        images: {
            white: product1,
            black: black,
            gray: gray,
            navy: navy,
            beige: beige,
            sage: sage,
            pink: pink,
        },
        colors: ["white", "black", "gray", "navy", "beige", "sage", "pink"],
        sizes: ["XS", "S", "M", "L", "XL"],
        isNew: true,
        description:
            "Crafted from premium organic cotton, this essential tee combines comfort with timeless style. The relaxed fit and soft texture make it perfect for everyday wear or layering.",
        features: [
            "100% Organic Cotton",
            "Pre-shrunk for lasting fit",
            "Reinforced seams",
            "Machine washable",
        ],
        rating: 4.8,
        reviews: 124,
    },
    "2": {
        id: "2",
        name: "Wool Knit Sweater",
        price: 120,
        originalPrice: null,
        category: "men",
        images: {
            gray: product4,
            navy: product5,
            black: product6,
        },
        colors: ["gray", "navy", "black"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        isNew: false,
        description:
            "A sophisticated wool knit sweater that effortlessly bridges casual and formal wear. The premium merino wool construction ensures warmth without bulk.",
        features: [
            "100% Merino Wool",
            "Ribbed cuffs and hem",
            "Classic crew neck",
            "Dry clean only",
        ],
        rating: 4.9,
        reviews: 87,
    },
    "3": {
        id: "3",
        name: "Linen Summer Dress",
        price: 85,
        originalPrice: null,
        category: "women",
        images: {
            sage: product3,
            white: product2,
            beige: product3,
        },
        colors: ["sage", "white", "beige"],
        sizes: ["XS", "S", "M", "L"],
        isNew: true,
        description:
            "Embrace effortless elegance with this flowing linen dress. The breathable fabric and relaxed silhouette make it perfect for warm weather occasions.",
        features: [
            "100% European Linen",
            "Adjustable waist tie",
            "Side pockets",
            "Machine washable",
        ],
        rating: 4.7,
        reviews: 156,
    },
    "4": {
        id: "4",
        name: "Denim Jacket",
        price: 95,
        originalPrice: null,
        category: "men",
        images: {
            navy: product4,
            black: product4,
        },
        colors: ["navy", "black"],
        sizes: ["S", "M", "L", "XL"],
        isNew: false,
        description:
            "A timeless denim jacket designed for everyday style. Durable fabric with a comfortable fit makes it perfect for layering across all seasons.",
        features: [
            "100% Cotton Denim",
            "Button-front closure",
            "Multiple pockets",
            "Machine washable",
        ],
        rating: 4.6,
        reviews: 98,
    },
    "5": {
        id: "5",
        name: "Kids Cotton Sweater",
        price: 35,
        originalPrice: null,
        category: "kids",
        images: {
            pink: product5,
            white: product5,
            beige: product5,
        },
        colors: ["pink", "white", "beige"],
        sizes: ["XS", "S", "M"],
        isNew: true,
        description:
            "Soft and cozy cotton sweater for kids, combining comfort with playful style. Gentle on skin and perfect for school or playtime.",
        features: [
            "100% Cotton",
            "Lightweight and breathable",
            "Ribbed cuffs and hem",
            "Machine washable",
        ],
        rating: 4.5,
        reviews: 65,
    },
    "6": {
        id: "6",
        name: "Wool Winter Coat",
        price: 185,
        originalPrice: null,
        category: "women",
        images: {
            black: product6,
            navy: product6,
            beige: product6,
        },
        colors: ["black", "navy", "beige"],
        sizes: ["XS", "S", "M", "L", "XL"],
        isNew: false,
        description:
            "Stay warm in style with this premium wool winter coat. Its tailored fit and luxurious texture make it perfect for both casual and formal occasions.",
        features: [
            "80% Wool, 20% Polyester",
            "Double-breasted design",
            "Side pockets",
            "Dry clean only",
        ],
        rating: 4.9,
        reviews: 142,
    },
    "cheque-shirt": {
        id: "cheque-shirt",
        name: "Essential Cheque Shirt",
        price: 345,
        originalPrice: 255,
        category: "men",
        images: {
            blue: cheque,
            red: cheque,
            green: cheque,
        },
        colors: ["blue", "red", "green"],
        sizes: ["S", "M", "L", "XL"],
        isNew: true,
        description:
            "A versatile cheque shirt crafted from breathable cotton, perfect for both casual and semi-formal occasions. Designed for comfort with a modern fit.",
        features: [
            "100% Cotton",
            "Button-down collar",
            "Machine washable",
            "Slim fit design",
        ],
        rating: 4.7,
        reviews: 98,
    },

    "black-tokyo-dress": {
        id: "black-tokyo-dress",
        name: "Bodycon Black Tokyo",
        price: 285,
        originalPrice: null,
        category: "women",
        images: {
            black: blackTokyoDress,
        },
        colors: ["black"],
        sizes: ["XS", "S", "M", "L"],
        isNew: true,
        description:
            "This elegant Tokyo-inspired bodycon dress enhances your silhouette with a sleek, modern look. Perfect for evening wear and special occasions.",
        features: [
            "Stretchable polyester blend",
            "Bodycon fit",
            "Back zipper closure",
            "Hand wash recommended",
        ],
        rating: 4.8,
        reviews: 76,
    },

    hm: {
        id: "hm",
        name: "Brown Shirt",
        price: 120,
        originalPrice: null,
        category: "men",
        images: {
            brown: hm,
        },
        colors: ["brown"],
        sizes: ["M", "L", "XL"],
        isNew: false,
        description:
            "A classic brown shirt that pairs well with jeans or formal trousers. Made from soft cotton fabric for all-day comfort.",
        features: [
            "100% Cotton",
            "Regular fit",
            "Buttoned cuffs",
            "Machine washable",
        ],
        rating: 4.5,
        reviews: 54,
    },
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
                    <h1 className="text-2xl font-semibold mb-4">
                        Product not found
                    </h1>
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

            <div className="container mx-auto px-4 py-6">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                    <Link
                        to="/collections"
                        className="flex items-center hover:text-foreground transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        <p className="hidden sm:block"> Back to Collections</p>
                        <p className="sm:hidden"> Back</p>
                    </Link>
                    <span>/</span>
                    <Link to={`/collections?category=${product.category}`}>
                        <span className="capitalize">{product.category}</span>
                    </Link>
                    <span>/</span>
                    <span className="text-foreground">{product.name}</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-6   md:gap-12">
                    {/* Product Image */}
                    <div className="space-y-4">
                        <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                            <img
                                src={product.images[selectedColor]}
                                alt={`${product.name} - ${selectedColor}`}
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
                                    <Badge className="bg-accent text-accent-foreground">
                                        New
                                    </Badge>
                                )}
                                {product.originalPrice && (
                                    <Badge className="bg-highlight text-highlight-foreground">
                                        Sale
                                    </Badge>
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
                            <span className="text-3xl font-semibold">
                                ${product.price.toFixed(2)}
                            </span>
                            {product.originalPrice && (
                                <span className="text-xl text-muted-foreground line-through">
                                    ${product.originalPrice.toFixed(2)}
                                </span>
                            )}
                        </div>

                        <Separator />

                        {/* Color Selection */}
                        <div>
                            <h3 className="font-medium mb-3">
                                Color: {selectedColor}
                            </h3>
                            <div className="flex gap-2">
                                {product.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`
                      w-8 h-8 rounded-full border-2 transition-colors capitalize
                      ${
                          selectedColor === color
                              ? "border-primary"
                              : "border-muted"
                      }
                      ${color === "white" ? "bg-white" : ""}
                      ${color === "black" ? "bg-black" : ""}
                      ${color === "gray" ? "bg-gray-400" : ""}
                      ${color === "navy" ? "bg-blue-900" : ""}
                      ${color === "beige" ? "bg-amber-100" : ""}
                      ${color === "sage" ? "bg-green-300" : ""}
                      ${color === "pink" ? "bg-pink-300" : ""}
                      ${color === "brown" ? "bg-amber-900" : ""}
                      ${color === "blue" ? "bg-blue-500" : ""}
                      ${color === "pink" ? "bg-pink-300" : ""}

                    `}
                                        title={color}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className  ="bg-pink font-medium mb-2">Description</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <h3 className="font-medium mb-3">
                                Size: {selectedSize}
                            </h3>
                            <div className="flex gap-2 flex-wrap">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`
                      px-4 py-2 border rounded-md transition-colors
                      ${
                          selectedSize === size
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary"
                      }
                    `}>
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
                                    onClick={() =>
                                        setQuantity(Math.max(1, quantity - 1))
                                    }>
                                    -
                                </Button>
                                <span className="w-12 text-center">
                                    {quantity}
                                </span>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setQuantity(quantity + 1)}>
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
                                    <li
                                        key={index}
                                        className="flex items-start">
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
