
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TextToSignSection from "@/components/TextToSignSection";
import SignToTextSection from "@/components/SignToTextSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <section id="technology" className="py-20 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-secondary text-foreground text-sm font-medium">
                Translation Technology
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bridging Communication Gaps
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform uses advanced AI models to provide seamless, real-time 
                translation between Indian Sign Language and text/speech.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="animate-slide-up">
                <TextToSignSection />
              </div>
              <div className="animate-slide-up animate-delay-200">
                <SignToTextSection />
              </div>
            </div>
          </div>
        </section>
        
        <section id="research" className="py-20 px-6 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                Research & Development
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                AI Models Powering Our Platform
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Learn about the cutting-edge AI models and research that make our translation system possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Computer Vision Model",
                  description: "Specialized deep learning model trained on Indian Sign Language gestures with 95% accuracy in real-world conditions.",
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )
                },
                {
                  title: "NLP Translation Engine",
                  description: "Advanced natural language processing model that understands context and nuances in both textual and sign language expressions.",
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  )
                },
                {
                  title: "Animation Generation",
                  description: "Real-time animation system that converts text to fluid, natural-looking Indian Sign Language gestures.",
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                    </svg>
                  )
                }
              ].map((model, index) => (
                <div 
                  key={index} 
                  className="glass rounded-2xl p-8 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                    {model.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{model.title}</h3>
                  <p className="text-muted-foreground">{model.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="about" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-secondary text-foreground text-sm font-medium">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Empowering Through Accessibility
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're dedicated to making communication accessible for everyone, breaking down barriers 
                between the deaf community and the broader society.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="glass rounded-2xl p-6 sm:p-8 animate-slide-up">
                <h3 className="text-2xl font-semibold mb-4">Why Indian Sign Language?</h3>
                <p className="text-muted-foreground mb-6">
                  Indian Sign Language (ISL) is used by millions of deaf people across India, yet it remains 
                  largely inaccessible to the hearing population. Our technology bridges this gap, fostering 
                  greater inclusion and communication across communities.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Over 5 million deaf individuals in India use ISL",
                    "Distinct from other sign languages with unique grammar and vocabulary",
                    "Regional variations across different states",
                    "Limited awareness and access to learning resources"
                  ].map((fact, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-foreground">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6 animate-slide-up animate-delay-200">
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Technological Innovation</h3>
                  <p className="text-muted-foreground">
                    Our models are trained on extensive datasets of Indian Sign Language, capturing the nuances 
                    of hand gestures, facial expressions, and body language that are essential to sign language communication.
                  </p>
                </div>
                
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Community Collaboration</h3>
                  <p className="text-muted-foreground">
                    Developed in partnership with deaf community organizations and sign language experts to ensure 
                    accuracy, cultural sensitivity, and practical utility.
                  </p>
                </div>
                
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Accessibility First</h3>
                  <p className="text-muted-foreground">
                    Built with accessibility as a core principle, ensuring our platform is usable by everyone, 
                    regardless of hearing ability or technical expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
