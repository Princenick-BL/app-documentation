import { TextSegment } from '@/services/text-extractor';
import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

type Props = {}

export default function  TypingTextComponent ({
    segments,
  }: {
    segments: TextSegment[] | null | undefined;
  })  {
    const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentTexts, setCurrentTexts] = useState<JSX.Element[]>([]);
    const oldSegmentIndexRef = useRef(-1);
  
    useEffect(() => {
      if (!(segments && segments?.length > 0)) return;
      const segment = segments[currentSegmentIndex];
      if (!segment) return;
  
      const currentWord = segment.words[currentWordIndex];
  
      if (currentWord && currentSegmentIndex !== oldSegmentIndexRef.current) {
        // console.log(
        //   "Here",
        //   currentSegmentIndex,
        //   currentWordIndex,
        //   segments,
        //   oldSegmentIndexRef.current
        // );
        setCurrentTexts((prevTexts) => [
          ...prevTexts,
          <p
            // key={currentWordIndex+1}
            className={styles.timing}
          >{`${segment?.start} --- ${segment?.end}\n`}</p>,
        ]); // Add line break
        oldSegmentIndexRef.current = currentSegmentIndex;
        return;
      }
  
      const interval = setInterval(() => {
        if (currentWord) {
          setCurrentTexts((prevTexts) => [
            ...prevTexts,
            <span key={currentWordIndex}>{currentWord.word + " "}</span>,
          ]);
          setCurrentWordIndex((prevIndex) => prevIndex + 1);
        } else {
          setCurrentTexts((prevTexts) => [...prevTexts, <p>{""}</p>]);
          setCurrentWordIndex(0);
          setCurrentSegmentIndex((prevIndex) => prevIndex + 1);
          clearInterval(interval);
        }
      }, 150); // Adjust the interval as needed
  
      return () => clearInterval(interval);
    }, [
      currentSegmentIndex,
      currentWordIndex,
      segments,
      oldSegmentIndexRef.current,
      currentTexts,
    ]);
  
    return <pre>{currentTexts}</pre>;
  };