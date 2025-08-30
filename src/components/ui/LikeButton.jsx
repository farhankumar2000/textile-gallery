import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LikeButton() {
    const [liked, setLiked] = useState(false);

    return (
        <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8"
            onClick={() => setLiked(!liked)}>
            <motion.div
                animate={{
                    scale: liked ? [1, 1.3, 1] : 1, // pop animation
                }}
                transition={{ duration: 0.3 }}>
                <Heart
                    className={`h-4 w-4 transition-colors duration-300 ${
                        liked ? "fill-red-500 text-red-500" : "text-gray-500"
                    }`}
                    fill={liked ? "red" : "none"} // ✅ this makes it solid red
                    stroke={liked ? "red" : "black"} // ✅ outline color
                />
            </motion.div>
        </Button>
    );
}
