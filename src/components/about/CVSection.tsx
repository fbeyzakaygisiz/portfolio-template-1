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

      if(!self.selector) return;
      // Animate only .cv-item children within this component
      tl.from(self?.selector(".cv-item"), {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.5,
        ease: "power3.in",
      }, "+=0.2");
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <Container ref={containerRef}>
      <h5 className='text-text-tertiary' ref={ref}>{title}</h5>
      <div className='ml-4 flex flex-col w-full'>
        {items?.map((item, i) => (
          <CVItem
            key={`cv-item-${i}`}
            className={`cv-item`}
            {...item}
            onMouseEnter={() => setDetails(item?.details ? item.details : null)}
            onMouseLeave={() => {
              if (details === item?.details) setDetails(null);
            }}
          />
        ))}
      </div>
     { details &&  <CVDetailsBox isOpen={!!details}>{details}</CVDetailsBox>}
    </Container>
  );
};

export default CVSection;
