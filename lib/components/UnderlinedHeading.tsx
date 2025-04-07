import React, { useEffect, useRef } from 'react';
import animationData from '../assets/animations/underline.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lottie, { AnimationItem } from 'lottie-web';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
};

function UnderlinedHeading({ children }: Props) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lottieContainerRef = useRef<HTMLDivElement>(null);
  const lottieInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!lottieContainerRef.current) return;

    const animation =  lottie?.loadAnimation({
      container: lottieContainerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: animationData,
    });
    if(!animation) return
    // Load the Lottie animation
    lottieInstance.current = animation;

    // ScrollTrigger animation
    if (headingRef.current) {
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: 'top center',
        onEnter: () => {
          const instance = lottieInstance.current;
          if (!instance) return;

          const midFrame = instance.totalFrames * 0.5;

          instance.goToAndPlay(0, true);

          setTimeout(() => {
            instance.goToAndStop(midFrame, true);
          }, (midFrame / instance.frameRate) * 1000);
        },
      });
    }

    // Cleanup
    return () => {
      lottieInstance.current?.destroy();
    };
  }, []);

  return (
    <div className="relative h-fit w-fit">
      <h2 ref={headingRef} className="relative">
        {children}
      </h2>
      <div
        ref={lottieContainerRef}
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[-40px] w-[140%] h-[40px]"
      />
    </div>
  );
}

export default UnderlinedHeading;
