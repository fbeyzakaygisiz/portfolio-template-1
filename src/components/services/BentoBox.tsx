import  { useRef } from 'react';
import styled from 'styled-components';
import { dt } from '../../../lib/mixins/layoutMixins';
import gsap from 'gsap';


// Define types for BentoBoxContainerProps
interface BentoBoxContainerProps {
  $column?: string;
  $row?: string;
}

// BentoBoxContainer styled component
const BentoBoxContainer = styled.div<BentoBoxContainerProps>`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 12px;
  grid-column: 1 / -1;
  grid-row: auto;
  aspect-ratio: 4 / 3;

  &:hover {
    transform: scale(1.05);
  }

  // Ensure TypeScript knows the types when using the dt mixin
  ${dt`
    width: 100%;
    height: 100%;
    grid-column: ${({ $column }: BentoBoxContainerProps) => $column || 'auto'};
    grid-row: ${({ $row }: BentoBoxContainerProps) => $row || 'auto'};
    aspect-ratio: auto;
  `}
`;



const BentoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
`;

const BentoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0, 0, 0);
  opacity: 0.2;
  backdrop-filter: var(--blur-md);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--gap-md);
  transition: opacity 0.3s ease;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 2;
  overflow: hidden;
  flex-wrap: wrap;
`;

const DetailItem = styled.span`
  font-size: 1rem;
  font-weight: 400;
  font-family: var(--font-secondary);

  padding: 4px 8px;
  width: 100%;
  position: relative;
  opacity: 0;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BentoBox = ({
  id,
  imgSrc,
  overlayText,
  onMouseEnter,
  onMouseLeave,
  column,
  row,
  details,
}: {
  id?: string;
  imgSrc?: string;
  overlayText?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  column?: string;
  row?: string;
  details?: string[];
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    onMouseEnter?.();
  
    if (!containerRef.current) return;
    const detailItems = gsap.utils.toArray<HTMLElement>(
      containerRef.current.querySelectorAll('.item-detail')
    );
  
    gsap.to(overlayRef.current, { opacity: 0.7, duration: 0.4, ease: "power2.out" });
    gsap.to(textRef.current, { y: -20, duration: 0.4, ease: "power2.out" });
  
    gsap.fromTo(
      detailItems,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        scale: 1.2,
        rotate: -5,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };
  
  const handleMouseLeave = () => {
    onMouseLeave?.();
  
    if (!containerRef.current) return;
    const detailItems = gsap.utils.toArray<HTMLElement>(
      containerRef.current.querySelectorAll('.item-detail')
    );

  
    gsap.to(detailItems, {
      y: 20,
      opacity: 0,
      duration: 0.3,
      stagger: { amount: 0.2, from: 'end' },
      ease: "power2.inOut",
    });
  
    gsap.to(overlayRef.current, { opacity: 0.3, duration: 0.3, ease: "power2.inOut" });
    gsap.to(textRef.current, { opacity: 1, y: 0, duration: 0.3, ease: "power2.inOut" });
  
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        scale: 1,
        rotate: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  };
  

  return (
    <BentoBoxContainer
      id={id}
      ref={containerRef}
      $column={column}
      $row={row}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <BentoImg ref={imgRef} src={imgSrc} />
      <BentoOverlay ref={overlayRef}>
        <div className="text-center max-w-full" ref={textRef}>
          {overlayText}
        </div>
        <div className="details max-w-full flex flex-col items-center">
          {details?.map((detail, i) => (
            <DetailItem className="item-detail" key={i}>
              {detail}
            </DetailItem>
          ))}
        </div>
      </BentoOverlay>
    </BentoBoxContainer>
  );
};

export default BentoBox;
