import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard1 from "@/components/ProductCard1";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import product images for featured products
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import blackTokyoDress from "@/assets/black-tokyo.jpg";
import hm from "@/assets/hm.jpg";
import blackRock from "@/assets/black-rock.jpg";
import cheque from "@/assets/cheque.jpg";

const Index = () => {
    console.log("Index component loading - Atelier clothing showcase");
    // Featured products
    const featuredProducts = [
        {
            id: "1",
            name: "Essential Cotton Tee",
            price: 45,
            originalPrice: 55,
            image: product1,
            category: "women",
            isNew: true,
        },
        {
            id: "2",
            name: "Wool Knit Sweater",
            price: 120,
            image: product2,
            category: "men",
            isNew: false,
        },
           {
            id: "hm",
            name: "Wool Knit Sweater",
            price: 120,
            image: hm,
            category: "men",
            isNew: false,
        },
        {
            id: "black-tokyo-dress",
            name: "Bodycon Black Tokyo ",
            price: 285,
            image: blackTokyoDress,
            category: "women",
            isNew: true,
        },

    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main>
                {/* Hero Section */}
                <Hero />

                {/* Shop Introduction */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 animate-slide-up">
                            Crafted for the Modern Individual
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-12 animate-slide-up">
                            At Aurra, we believe in the power of thoughtful
                            design and quality craftsmanship. Our curated
                            collection features timeless pieces that seamlessly
                            blend comfort, style, and sustainability. Each
                            garment is carefully selected to ensure it meets our
                            high standards for both aesthetic appeal and ethical
                            production.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="feature-card animate-slide-up">
                                <h3 className="font-semibold text-accent mb-3">
                                    Quality Materials
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Premium fabrics sourced from trusted
                                    suppliers worldwide
                                </p>
                            </div>
                            <div
                                className="feature-card animate-slide-up"
                                style={{ animationDelay: "0.1s" }}>
                                <h3 className="font-semibold text-accent mb-3">
                                    Timeless Design
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Classic silhouettes that transcend seasonal
                                    trends
                                </p>
                            </div>
                            <div
                                className="feature-card animate-slide-up"
                                style={{ animationDelay: "0.2s" }}>
                                <h3 className="font-semibold text-accent mb-3">
                                    Ethical Production
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Responsibly made with respect for people and
                                    planet
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Products */}
                <section className="py-16 sm:px-4 bg-muted/30">
                    <div className="container mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                                Featured Collection
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Discover our most loved pieces, carefully
                                selected for their exceptional quality and
                                timeless appeal.
                            </p>
                        </div>

                        <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
                            {featuredProducts.map((product) => (
                                <ProductCard1
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>

                        <div className="text-center">
                            <Button asChild className="btn-hero">
                                <Link to="/collections">View All Products</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="py-16 px-4">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12 animate-slide-up">
                            Shop by Category
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Link
                                to="/collections?category=women"
                                className="group relative h-64 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-large animate-slide-up">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-accent/40 group-hover:from-primary/70 group-hover:to-accent/50 transition-all duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="text-2xl font-display font-semibold text-white group-hover:scale-110 transition-transform duration-300">
                                        Women's
                                    </h3>
                                </div>
                            </Link>

                            <Link
                                to="/collections?category=men"
                                className="group relative h-64 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-large animate-slide-up"
                                style={{ animationDelay: "0.1s" }}>
                                <div className="absolute inset-0 bg-gradient-to-br from-highlight/60 to-primary/40 group-hover:from-highlight/70 group-hover:to-primary/50 transition-all duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="text-2xl font-display font-semibold text-white group-hover:scale-110 transition-transform duration-300">
                                        Men's
                                    </h3>
                                </div>
                            </Link>

                            <Link
                                to="/collections?category=kids"
                                className="group relative h-64 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-large animate-slide-up"
                                style={{ animationDelay: "0.2s" }}>
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/60 to-highlight/40 group-hover:from-accent/70 group-hover:to-highlight/50 transition-all duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="text-2xl font-display font-semibold text-white group-hover:scale-110 transition-transform duration-300">
                                        Kids
                                    </h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="py-16 px-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-highlight opacity-90" />
                    <div className="relative container mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-display font-semibold mb-4 text-white animate-slide-up">
                            Stay in Touch
                        </h2>
                        <p className="text-white/90 mb-8 animate-slide-up">
                            Be the first to know about new arrivals, exclusive
                            offers, and styling tips from our team.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-slide-up">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 sm:py-0 rounded-md text-foreground bg-white/95 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white/50 transition-all duration-300"
                            />
                            <Button className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 px-8 py-3">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-12 px-4 bg-muted/50">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-display font-semibold text-lg mb-4">
                                Aurora
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Crafting timeless pieces for the modern
                                individual since 2024.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium mb-4">Shop</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <Link
                                        to="/collections"
                                        className="hover:text-foreground transition-colors">
                                        All Products
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/collections?category=women"
                                        className="hover:text-foreground transition-colors">
                                        Women's
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/collections?category=men"
                                        className="hover:text-foreground transition-colors">
                                        Men's
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/collections?category=kids"
                                        className="hover:text-foreground transition-colors">
                                        Kids
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/collections?category=new-arrivals"
                                        className="hover:text-foreground transition-colors">
                                        New Arrivals
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium mb-4">Support</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-foreground transition-colors">
                                        Size Guide
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-foreground transition-colors">
                                        Shipping
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-foreground transition-colors">
                                        Returns
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-foreground transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium mb-4">Connect</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-foreground transition-colors">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-foreground transition-colors">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-foreground transition-colors">
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-foreground transition-colors">
                                        Pinterest
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                        <p>&copy; 2024 Atelier. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
