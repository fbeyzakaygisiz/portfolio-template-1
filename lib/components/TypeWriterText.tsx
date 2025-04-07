import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/all';
import styled from 'styled-components';

gsap.registerPlugin(TextPlugin);

type Props = {
  text: string | string[];
  id: string;
  fs?: number | string;
  loop?:boolean,
  yoyo?:boolean;
  cursor?:boolean;
  delay?:number;
  duration?:number;
  className?:string;
};

const Container = styled.div<{ fs: number | string }>`

  min-height: ${({ fs }) => (typeof fs === 'number' ? `${fs}px` : fs)};
  font-size: ${({ fs }) => (typeof fs === 'number' ? `${fs}px` : fs)};
  display: inline-flex;
`;

const Cursor = styled.div<{ fs: number | string }>`
  height: ${({ fs }) => (typeof fs === 'number' ? `${fs}px` : fs)};
  width: 2px;
  background-color: currentColor;
  animation: blink 1s step-start infinite;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

function TypeWriterText({
  text,
  id,
  fs = 40,
  loop=true,
  yoyo=true,
  cursor=true,
  delay=0,
  duration=2,
  className=""
}: Props) {
  const textRef = useRef(null);
  const [isComplete, setIsComplete] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const handleRepeat = (timeline: any) => {
    // Get the current iteration count from the timeline
    const iterationCount = timeline.iteration();

    // Only change text every 2nd iteration
    if (iterationCount % 2 === 1) {
        setTextIndex((prevIndex) => (prevIndex === text.length - 1 ? 0 : prevIndex + 1));
    }

    setIsComplete(false);
  };

  useEffect(() => {
    if (textRef.current) {
      // Create a GSAP Timeline
      const timeline = gsap.timeline({
        repeat: loop ? -1: typeof text !== "string" ? text.length -1: 0,
        yoyo:yoyo,
        repeatDelay: 0.5,

        onStart: () => setIsComplete(false),
        onRepeat: () => handleRepeat(timeline),
        onComplete:()=> setIsComplete(true)
      });

      timeline.to(`#${id}`, {
        delay: 1 + delay,
        duration: duration,
        text: {
          value: Array.isArray(text) ? text[textIndex] : text,
        },
      });
    }
  }, [textIndex, text, id, loop]);

  return (
    <Container className={className} fs={fs} ref={textRef}>
      <span id={id}></span>
      {!isComplete && cursor && <Cursor fs={fs} />}
    </Container>
  );
}

export default TypeWriterText;
