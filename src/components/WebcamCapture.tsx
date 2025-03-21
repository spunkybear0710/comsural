
import React, { useRef, useEffect, useState } from "react";

interface WebcamCaptureProps {
  onFrame?: (imageData: ImageData) => void;
  isActive: boolean;
}

const WebcamCapture = ({ onFrame, isActive }: WebcamCaptureProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [permission, setPermission] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;
    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setPermission(true);
          setError(null);
        }
      } catch (err) {
        console.error(err);
        setPermission(false);
        setError("Camera access denied. Please enable camera permissions.");
      }
    };

    if (isActive) {
      startCamera();
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isActive]);

  useEffect(() => {
    if (!isActive || !permission) return;
    
    let animationFrameId: number;
    const processFrame = () => {
      if (videoRef.current && canvasRef.current && onFrame) {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          const ctx = canvas.getContext("2d");
          if (ctx) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            onFrame(imageData);
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(processFrame);
    };

    processFrame();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive, permission, onFrame]);

  if (error) {
    return (
      <div className="w-full h-64 rounded-xl bg-secondary flex flex-col items-center justify-center p-6 text-center">
        <svg className="w-12 h-12 text-muted-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p className="text-muted-foreground">{error}</p>
        <button 
          className="mt-4 px-4 py-2 bg-accent text-white rounded-lg"
          onClick={() => setError(null)}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
      <canvas ref={canvasRef} className="hidden" />
      
      {!permission && isActive && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
          <div className="loading-dots flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;
