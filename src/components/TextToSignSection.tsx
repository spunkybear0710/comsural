
import React, { useState } from "react";
import TranslationCard from "./TranslationCard";
import { textToSignLanguage, speechToText } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { toast } from "sonner";

const TextToSignSection = () => {
  const [text, setText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleTranslate = async () => {
    if (!text.trim()) return;
    
    setIsTranslating(true);
    setResult(null);
    
    try {
      const animationUrl = await textToSignLanguage(text);
      setResult(animationUrl);
      toast.success("Text translated to sign language successfully");
    } catch (error) {
      console.error("Translation error:", error);
      toast.error("Failed to translate text to sign language");
    } finally {
      setIsTranslating(false);
    }
  };

  const handleSpeechInput = async () => {
    try {
      setIsListening(true);
      toast.info("Listening...");
      
      const transcript = await speechToText();
      setText(transcript);
      toast.success("Speech recognized successfully");
    } catch (error) {
      console.error("Speech recognition error:", error);
      toast.error("Failed to recognize speech. Please check your microphone permissions.");
    } finally {
      setIsListening(false);
    }
  };

  return (
    <TranslationCard
      title="Text to Indian Sign Language"
      description="Enter text or speak to convert into Indian Sign Language gestures."
      icon={
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
        </svg>
      }
    >
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center focus-within-ring rounded-lg bg-secondary/50">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text to translate..."
              className="flex-1 min-h-[120px] bg-transparent border-0 focus:ring-0 resize-none p-4"
            />
            <button
              onClick={handleSpeechInput}
              disabled={isListening}
              className="p-4 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
              title="Use speech input"
            >
              {isListening ? (
                <div className="w-5 h-5 rounded-full bg-accent animate-pulse"></div>
              ) : (
                <Mic className="w-5 h-5" />
              )}
            </button>
          </div>
          
          <Button
            onClick={handleTranslate}
            disabled={!text.trim() || isTranslating}
            className="w-full py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors disabled:bg-accent/50 disabled:cursor-not-allowed"
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
              "Translate to Sign Language"
            )}
          </Button>
        </div>
        
        {result && (
          <div className="mt-6 rounded-lg overflow-hidden bg-secondary/30 p-4 animate-fade-in">
            <div className="text-sm font-medium mb-2">Translation Result:</div>
            <div className="w-full aspect-video rounded-lg overflow-hidden bg-black flex items-center justify-center">
              <img src={result} alt="Sign language animation" className="max-w-full max-h-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white bg-black/50 px-4 py-2 rounded-lg">Google-powered ISL animation would display here</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </TranslationCard>
  );
};

export default TextToSignSection;
