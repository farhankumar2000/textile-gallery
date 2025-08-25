import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
// import hoodie from "@/assets/hoodie.png";
// import lpp from "@/assets/lpp.webp";
// import sale30 from "@/assets/sale30banner.jpg";
// import palmonass from "@/assets/palmonass.webp";
// import auttom from "@/assets/auttom.png";
// import elevate from "@/assets/elevate.jpg";
// import welcome from "@/assets/welcome.webp";
// import clearence from "@/assets/clearence.webp";
// import ShippingWeb from "@/assets/ShippingWeb.webp";
import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";
import banner3 from "@/assets/banner3.jpg";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel.tsx";
function Banner() {
    const slides = [banner1, banner2, banner3].map((img) => img.toString());

    const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

    const [currentSlide, setCurrentSlide] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const slideRef = useRef(null);

    const goToSlide = (index) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
    };

    const nextSlide = () => goToSlide(currentSlide + 1);
    const prevSlide = () => goToSlide(currentSlide - 1);

    const handleTransitionEnd = () => {
        setIsTransitioning(false);

        if (currentSlide === 0) {
            setCurrentSlide(slides.length);
            disableTransitionTemporarily(slides.length);
        } else if (currentSlide === slides.length + 1) {
            setCurrentSlide(1);
            disableTransitionTemporarily(1);
        }
    };

    const disableTransitionTemporarily = (index) => {
        if (!slideRef.current) return;

        slideRef.current.style.transition = "none";
        slideRef.current.style.transform = `translateX(-${index * 100}%)`;

        // Force reflow to apply the transition instantly
        void slideRef.current.offsetWidth;

        slideRef.current.style.transition = "transform 1000ms ease-in-out";
    };

    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.style.transform = `translateX(-${
                currentSlide * 100
            }%)`;
        }
    }, [currentSlide]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isTransitioning) nextSlide();
        }, 2000);

        return () => clearInterval(timer);
    }, [currentSlide, isTransitioning]);
    return (
        <div className="relative w-full h-[28vh] sm:h-[70vh] md:h-[80vh] lg:h-[600px] overflow-hidden">
            <Link to="/collections">
                <div
                    ref={slideRef}
                    className="flex transition-transform duration-[1000ms] ease-in-out w-full h-full"
                    onTransitionEnd={handleTransitionEnd}>
                    {extendedSlides.map((src, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full h-full">
                            <img
                                src={src}
                                alt={`Slide ${index}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                onError={(e) =>
                                    (e.target.src = "/fallback.jpg")
                                }
                            />
                        </div>
                    ))}
                </div>
            </Link>

            <button
                onClick={prevSlide}
                size="icon"
                className="absolute top-1/2 left-2 transform -translate-y-1/2   border-0  bg-white/40 hover:text-[#B3CCBB]
">
                <ChevronLeftIcon className=" text-white" size={50} />
            </button>

            <button
                onClick={nextSlide}
                size="icon"
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent border-0 md:bg-white/80 hover:bg-[#B3CCBB]">
                <ChevronRightIcon className=" text-white  hover:bg-[#B3CCBB]  " size={50} />
            </button>
        </div>
    );
}

export default Banner;
