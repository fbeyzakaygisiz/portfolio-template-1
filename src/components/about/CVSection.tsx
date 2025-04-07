import { HTMLAttributes, Ref, useRef, useState } from 'react';
import styled from 'styled-components';
import CVItem from './CVItem';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import CVDetailsBox from './CCDetailsBox';
import useOutsideClick from "../../../lib/hooks/useOutsideClick";
gsap.registerPlugin(ScrollTrigger);

type CVItemType = {
  id?:string;
  title: string;
  details?: string;
  // Add other properties that each item should have
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  items: CVItemType[];
  triggerRef: Ref<HTMLElement | null>
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: var(--gap-lg);
  padding-top: 40px;
`;

const CVSection = ({ title, items }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<HTMLHeadingElement>(null);

  const [details, setDetails] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useOutsideClick(containerRef, () => setDetails(null));

  useGSAP(() => {
    const ctx = gsap.context((self) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          end: "bottom 80%",
          scrub: true,
          once: true, // Only trigger once
        }
      });

      // Animate the title
      tl.from(ref.current, {
        y: 80,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });

      if (!self.selector) return;
      // Animate only .cv-item children within this component
      tl.from(self?.selector(".cv-item"), {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.5,
        ease: "power3.in",
        pointerEvents: "none"
      }, "+=0.2");
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  const handleMouseEnter = (itemDetails: string | undefined) => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear any existing timeout
    }

    const newTimeoutId = setTimeout(() => {
      setDetails(itemDetails || null);
    }, 800); // 0.8 seconds delay

    setTimeoutId(newTimeoutId);
  };

  const handleMouseLeave = (itemDetails: string | undefined) => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear timeout when mouse leaves
    }

    if (details === itemDetails) setDetails(null);
  };

  return (
    <Container ref={containerRef}>
      <h5 className="text-text-tertiary" ref={ref}>
        {title}
      </h5>
      <div className="ml-4 flex flex-col w-full">
        {items?.map((item, i) => (
          <CVItem
            key={`cv-item-${i}`}
            className={`cv-item`}
            {...item}
            onMouseEnter={() => handleMouseEnter(item.details)}
            onMouseLeave={() => handleMouseLeave(item.details)}
          />
        ))}
      </div>
      {details && <CVDetailsBox isOpen={!!details}>{details}</CVDetailsBox>}
    </Container>
  );
};

export default CVSection;
