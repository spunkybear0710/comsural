
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-60 animate-pulse-light" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-60 animate-pulse-light" />
      
      {/* Content */}
      <div className="max-w-4xl mx-auto text-center z-10 animate-fade-in">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
          Breaking communication barriers
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Indian Sign Language <br /> Translation Model
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          A seamless bridge between Indian Sign Language and text/audio communication, using advanced AI models for accurate, real-time translation.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto px-8 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 ease-in-out transform hover:scale-105">
            Start Translating
          </button>
          <button className="w-full sm:w-auto px-8 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300">
            Learn More
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { value: "95%", label: "Translation Accuracy" },
            { value: "Real-time", label: "Processing Speed" },
            { value: "10,000+", label: "Sign Vocabulary" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-6 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
