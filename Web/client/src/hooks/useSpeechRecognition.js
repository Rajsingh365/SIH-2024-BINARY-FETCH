import { useState, useCallback, useEffect } from 'react';

const useSpeechRecognition = (onResult) => {
  const [recognition, setRecognition] = useState(null);

  // Initialize the SpeechRecognition instance only once
  const initializeRecognition = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn('Speech Recognition API not supported.');
      return;
    }

    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.lang = 'en-US'; // Set the language here
    recognitionInstance.interimResults = false;
    recognitionInstance.maxAlternatives = 1;
    
    recognitionInstance.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      onResult(speechResult);
    };

    recognitionInstance.onerror = (event) => {
      console.error('Speech Recognition error:', event.error);
    };

    recognitionInstance.onend = () => {
      console.log('Speech Recognition service disconnected');
    };

    setRecognition(recognitionInstance);
  }, [onResult]);

  // Initialize recognition on mount
  useEffect(() => {
    initializeRecognition();
  }, [initializeRecognition]);

  const startListening = () => {
    if (recognition) {
      recognition.start();
      console.log('Speech Recognition started');
    }
  };

  return { startListening };
};

export default useSpeechRecognition;
