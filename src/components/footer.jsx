import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
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
                            <img
                                src="/logo1.webp"
                                alt=""
                                className="mt-5 h-14"
                            />
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
                        <p>&copy; 2025 Arora. All rights reserved.</p>
                    </div>
                </div>
            </footer>
    );
}

export default Footer;
