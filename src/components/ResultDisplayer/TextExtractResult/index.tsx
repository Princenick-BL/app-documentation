import { ExtractedObject } from '@/services/text-extractor';
import React from 'react'
import TypingTextComponent from './TypingTextComponent';
import styles from './index.module.scss'
type Props = {
    data:  ExtractedObject | null;
}


export default function TextExtractresult({data}: Props) {
  return (
    <div className={styles.result}>
        <TypingTextComponent
            segments={data?.segments}
        />
    </div>
  )
}