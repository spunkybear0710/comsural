
import React, { useState, useEffect } from "react";
import TranslationCard from "./TranslationCard";
import WebcamCapture from "./WebcamCapture";
import { signLanguageToText, textToSpeech, getHandTrackingModel } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { AlertCircle, Volume2 } from "lucide-react";
import { toast } from "sonner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { supabase } from "@/integrations/supabase/client";

const SignToTextSection = () => {
  const [isActive, setIsActive] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [modelLoading, setModelLoading] = useState(false);

  useEffect(() => {
    // Load the TensorFlow.js and MediaPipe models when the component mounts
    const loadModels = async () => {
      if (isActive && !modelLoaded && !modelLoading) {
        try {
          setModelLoading(true);
          await getHandTrackingModel();
          setModelLoaded(true);
          toast.success("Hand tracking model loaded successfully");
        } catch (error) {
          console.error("Error loading hand tracking model:", error);
          toast.error("Failed to load hand tracking model");
        } finally {
          setModelLoading(false);
        }
      }
    };
    
    loadModels();
  }, [isActive, modelLoaded, modelLoading]);

  const handleToggleCamera = () => {
    setIsActive(!isActive);
    if (isActive) {
      setResult(null);
      setIsTranslating(false);
    }
  };

  const handleFrame = async (imageData: ImageData) => {
    // Only process the frame if we're actively translating and the model is loaded
    if (isTranslating && modelLoaded && !result) {
      try {
        const translationResult = await signLanguageToText(imageData);
        if (translationResult) {
          setResult(translationResult.text);
          
          // Save translation to Supabase
          const { error } = await supabase
            .from('translation_history')
            .insert({
              input_type: 'sign_to_text',
              recognized_text: translationResult.text,
              confidence_score: Math.round(translationResult.confidence * 100),
            });
            
          if (error) {
            console.error("Error saving translation:", error);
          }
          
          setIsTranslating(false);
          toast.success(`Sign language recognized with ${Math.round(translationResult.confidence * 100)}% confidence`);
        }
      } catch (error) {
        console.error("Error processing frame:", error);
        setIsTranslating(false);
        toast.error("Failed to recognize sign language");
      }
    }
  };

  const handleStartTranslation = () => {
    if (!isActive || !modelLoaded) return;
    
    setIsTranslating(true);
    setResult(null);
    toast.info("Analyzing sign language gestures...");
  };

  const handlePlayAudio = async () => {
    if (!result || isAudioPlaying) return;
    
    setIsAudioPlaying(true);
    
    try {
      await textToSpeech(result);
      toast.success("Audio played successfully");
    } catch (error) {
      console.error("Error playing audio:", error);
      toast.error("Failed to play audio");
    } finally {
      setIsAudioPlaying(false);
    }
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
        {modelLoading && (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Loading Google MediaPipe and TensorFlow.js models for sign language recognition...
            </AlertDescription>
          </Alert>
        )}
        
        <WebcamCapture isActive={isActive} onFrame={handleFrame} />
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleToggleCamera}
            variant={isActive ? "destructive" : "secondary"}
            className="flex-1"
          >
            {isActive ? "Turn Off Camera" : "Turn On Camera"}
          </Button>
          
          <Button
            onClick={handleStartTranslation}
            disabled={!isActive || isTranslating || !modelLoaded}
            className="flex-1 bg-accent text-white hover:bg-accent/90 disabled:bg-accent/50"
          >
            {isTranslating ? (
              <span className="flex items-center justify-center">
                <span className="loading-dots flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-white animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                </span>
              </span>
            ) : (
              "Start Translation"
            )}
          </Button>
        </div>
        
        {result && (
          <div className="mt-6 rounded-lg overflow-hidden bg-secondary/30 p-4 animate-fade-in">
            <div className="text-sm font-medium mb-2">Translation Result (via Google Cloud Vision):</div>
            <div className="w-full rounded-lg bg-white/50 p-4 relative">
              <p className="text-lg">{result}</p>
              
              <Button
                onClick={handlePlayAudio}
                disabled={isAudioPlaying}
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent/10 text-accent hover:bg-accent/20 disabled:opacity-50"
                title="Play audio"
              >
                {isAudioPlaying ? (
                  <span className="w-4 h-4 rounded-full bg-accent animate-pulse"></span>
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </TranslationCard>
  );
};

export default SignToTextSection;
