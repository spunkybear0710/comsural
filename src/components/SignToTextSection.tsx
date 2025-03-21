
import React, { useState } from "react";
import TranslationCard from "./TranslationCard";
import WebcamCapture from "./WebcamCapture";

const SignToTextSection = () => {
  const [isActive, setIsActive] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleToggleCamera = () => {
    setIsActive(!isActive);
    if (isActive) {
      setResult(null);
      setIsTranslating(false);
    }
  };

  const handleFrame = (imageData: ImageData) => {
    // In a real implementation, this would process the frame and detect sign language
    // For now, we're just simulating the process
    if (isTranslating && !result) {
      setTimeout(() => {
        setResult("Hello, how are you today?");
        setIsTranslating(false);
      }, 3000);
    }
  };

  const handleStartTranslation = () => {
    if (!isActive) return;
    setIsTranslating(true);
    setResult(null);
  };

  const handlePlayAudio = () => {
    if (!result || isAudioPlaying) return;
    
    setIsAudioPlaying(true);
    
    // Simulate text-to-speech
    const utterance = new SpeechSynthesisUtterance(result);
    utterance.lang = 'en-IN';
    utterance.onend = () => setIsAudioPlaying(false);
    
    window.speechSynthesis.speak(utterance);
  };

  return (
    <TranslationCard
      title="Indian Sign Language to Text"
      description="Capture sign language gestures through your camera to convert to text and audio."
      icon={
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
      }
    >
      <div className="space-y-6">
        <WebcamCapture isActive={isActive} onFrame={handleFrame} />
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleToggleCamera}
            className={`flex-1 py-3 rounded-lg ${
              isActive 
                ? "bg-destructive text-white hover:bg-destructive/90" 
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            } transition-colors font-medium`}
          >
            {isActive ? "Turn Off Camera" : "Turn On Camera"}
          </button>
          
          <button
            onClick={handleStartTranslation}
            disabled={!isActive || isTranslating}
            className="flex-1 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors disabled:bg-accent/50 disabled:cursor-not-allowed"
          >
            {isTranslating ? (
              <span className="flex items-center justify-center">
                <span className="loading-dots flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </span>
              </span>
            ) : (
              "Start Translation"
            )}
          </button>
        </div>
        
        {result && (
          <div className="mt-6 rounded-lg overflow-hidden bg-secondary/30 p-4 animate-fade-in">
            <div className="text-sm font-medium mb-2">Translation Result:</div>
            <div className="w-full rounded-lg bg-white/50 p-4 relative">
              <p className="text-lg">{result}</p>
              
              <button
                onClick={handlePlayAudio}
                disabled={isAudioPlaying}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center hover:bg-accent/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Play audio"
              >
                {isAudioPlaying ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </TranslationCard>
  );
};

export default SignToTextSection;
