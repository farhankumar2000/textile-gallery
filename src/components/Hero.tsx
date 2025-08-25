import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Elegant clothing collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 hero-text">
        <h1 className="text-5xl md:text-7xl font-display font-semibold mb-6 text-white leading-tight">
          Timeless
          <br />
          <span className="text-accent animate-float">Elegance</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover our curated collection of modern classics, designed for the discerning individual who values quality and style.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center hero-buttons">
          <Button asChild className="btn-hero text-lg  py-3">
            <Link to="/collections" className="hover:text-black" >View Collection</Link>
          </Button>
          
          <Button 
            variant="outline" 
            asChild 
            className="btn-outline text-black border-white text-lg"
          >
            <Link to="/collections?category=new">New Arrivals</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-px h-12 bg-white/30 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;