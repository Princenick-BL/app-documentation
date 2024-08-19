import { MODEL_TYPE, ModelResult } from '@/services/models'
import React from 'react'
import styles from './index.module.scss'
import ThreeDAnimResult from './ThreeDAnimResult'
import PlaceholderResult from './PlaceholderResult'
import ProgressShower from './ProgessShower'
import TextExtractresult from './TextExtractResult'

type Props = {
    result : ModelResult | null
}

export default function ResultDisplayer({result}: Props) {

    // console.log("ResultDisplayer",result)

    if(result?.progress && result?.progress > 0 && result?.progress < 100 && !result.result){
        return <ProgressShower/>
    }
    if(!result?.result){
        return <PlaceholderResult/>
    }
    
    switch(result?.type){
        case  MODEL_TYPE.THREE_DIMENSION_ANIMATIOR :
            return <ThreeDAnimResult data={result?.result}/>
        case MODEL_TYPE.MEDIA_TEXT_EXTRACTOR:
            return <TextExtractresult data={result?.result}/>
        default :
            return <PlaceholderResult/>
    }
}