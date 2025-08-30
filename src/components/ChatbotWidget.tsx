"use client";
import { useEffect } from 'react';

const ChatbotWidget = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.id = 'hs-script-loader';
      script.async = true;
      script.defer = true;
      script.src = '//js-na1.hs-scripts.com/50291038.js';
      document.body.appendChild(script);
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);
  return <div />;
};

export default ChatbotWidget;
