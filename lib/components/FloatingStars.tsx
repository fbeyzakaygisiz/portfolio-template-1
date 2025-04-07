import  { useEffect, useRef } from "react";
import gsap from "gsap";
import FourSidedStar from "../assets/svgs/FourSidedStar";

type Props = {
    count?: number;
    delay?: number; // New prop for delayed appearance
};

const FloatingStars = ({ count = 20, delay = 0 }: Props) => {
    const starsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!starsRef.current) return;

        // Initially hide stars
        gsap.set(".floating-star", { opacity: 0 });



        
        // Fade-in animation after delay
        gsap.to(".floating-star", {
            opacity: 1,
            duration: 1.5,
            delay: delay, // Uses the delay prop
            stagger: 0.3,
        });

        // Opacity blinking animation
        gsap.to(".floating-star", {
            opacity: 0.2,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            stagger: 0.3,
            delay: delay, // Delay before starting blinking
        });

        // Glowing effect
        gsap.to(".floating-star", {
            filter: "drop-shadow(0px 0px 10px rgba(255,255,255,0.8))",
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            stagger: 0.3,
            delay: delay, // Delay before glowing starts
        });

        // Subtle random movement animation
        document.querySelectorAll(".floating-star").forEach((star) => {
            const randomX = gsap.utils.random(-10, 10);
            const randomY = gsap.utils.random(-10, 10);
            const duration = gsap.utils.random(3, 6);
            const starDelay = gsap.utils.random(0, 2) + delay; // Adds base delay

            gsap.to(star, {
                x: randomX,
                y: randomY,
                duration: duration,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: starDelay,
            });
        });

    }, [delay]);

    // Generate stars with random position & size
    const generateStars = () => {
        return Array.from({ length: count }, (_, i) => {
            const size = Math.random() * 40 + 10;
            const top = Math.random() * 100;
            const left = Math.random() * 100;

            return (
                <FourSidedStar
                    key={i}
                    className="floating-star absolute"
                    size={`${size}px`}
                    fill="white"
                    style={{ top: `${top}%`, left: `${left}%`, position: "absolute" }}
                />
            );
        });
    };

    return <div ref={starsRef} className="absolute top-0 left-0 w-full h-full">{generateStars()}</div>;
};

export default FloatingStars;
