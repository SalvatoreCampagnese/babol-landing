import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define the constant text
const text = "Managing an event can be a chaotic experience with information scattered across different platforms and channels.\n" +
  "Important details often get lost, leading to confusion and inefficiencies.\n" +
  "There's no single place to handle all the activities before, during, and after the event.\n" +
  "This can result in disorganized events and a stressful experience for both organizers and attendees.";

const TextComponent = () => {
  const textRef = useRef<any>(null);

  useEffect(() => {
    const characters = textRef.current.querySelectorAll('span');

    characters.forEach((char:string, i:number) => {
      gsap.fromTo(
        char,
        { opacity: 0.2 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          },
        }
      );
    });
  }, []);

  // Split text into lines, words, and then characters
  const splitText = text.split('\n').map((line, lineIndex) => (
    <p key={lineIndex} style={{ margin: '0', padding: '0', wordBreak: 'break-word', marginBottom: 25 }}>
      {line.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>&nbsp;
          {word.split('').map((char, charIndex) => (
            <span key={charIndex} style={{ display: 'inline-block' }}>
              {char}
            </span>
          ))}
          {' '}
        </span>
      ))}
    </p>
  ));

  return (
    <div className="container" style={{ letterSpacing: '0' }}>
      <div className="content p-4">
        <div ref={textRef} style={{ letterSpacing: '0.5px' }} className='text-[26px] md:text-[56px] font-bold'>
          {splitText}
        </div>
      </div>
    </div>
  );
};

export default TextComponent;
