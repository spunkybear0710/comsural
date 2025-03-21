
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-xl">
                ISL
              </div>
              <span className="font-medium text-lg">Sign Bridge</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Breaking communication barriers through technology, our Indian Sign Language translation platform connects communities and empowers individuals.
            </p>
            <div className="flex space-x-4">
              {["twitter", "github", "linkedin", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-accent transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 11-5.656 5.656l-1.102-1.101" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              {["Documentation", "API Reference", "Tutorials", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              {["About", "Research", "Contact", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sign Bridge. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
