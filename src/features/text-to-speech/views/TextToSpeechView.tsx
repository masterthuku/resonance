import React from 'react'
import TextInputPanel from '../components/TextInputPanel'
import VoicePreviewPlaceholder from '../components/VoicePreviewPlaceholder'
import SettingsPanel from '../components/SettingsPanel'

const TextToSpeechView = () => {
  return (
    <div className='flex min-h-0 flex-1 overflow-hidden'>
        <div className='flex min-h-0 flex-1 flex-col'>
            <TextInputPanel/>
            <VoicePreviewPlaceholder/>
        </div>
        <SettingsPanel/>
    </div>
  )
}

export default TextToSpeechView