import { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { IdolGenderSelection } from './components/IdolGenderSelection';
import { IdolProfileScreen } from './components/IdolProfileScreen';
import { ChatInterface } from './components/ChatInterface';
import { CompletionScreen } from './components/CompletionScreen';

export type ParticipantInfo = {
  id: string;
  age: string;
  gender: string;
  consent: boolean;
};

export type IdolType = 'human' | 'virtual' | null;
export type IdolGender = 'male' | 'female' | null;

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [participantInfo, setParticipantInfo] = useState<ParticipantInfo>({
    id: '',
    age: '',
    gender: '',
    consent: false,
  });
  const [idolType, setIdolType] = useState<IdolType>(null);
  const [idolGender, setIdolGender] = useState<IdolGender>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setMousePosition({ x, y });
  };

  const handleWelcomeNext = (info: ParticipantInfo) => {
    setParticipantInfo(info);
    setCurrentScreen(1);
  };

  const handleIdolGenderNext = (gender: IdolGender) => {
    setIdolGender(gender);
    // Randomly assign idol type
    const randomType: IdolType = Math.random() < 0.5 ? 'human' : 'virtual';
    setIdolType(randomType);
    setCurrentScreen(2);
  };

  const handleProfileNext = () => {
    setCurrentScreen(3);
  };

  const handleChatEnd = () => {
    setCurrentScreen(4);
  };

  const handleCompletion = () => {
    console.log('Study completed');
  };

  const handleBack = () => {
    setCurrentScreen((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="min-h-screen cosmic-background" onMouseMove={handleMouseMove}>
      <div
        className="cosmic-gradient-overlay"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(139, 92, 246, 0.4) 0%, 
              rgba(59, 130, 246, 0.3) 25%, 
              transparent 50%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
              rgba(168, 85, 247, 0.4) 0%, 
              rgba(236, 72, 153, 0.3) 25%, 
              transparent 50%),
            radial-gradient(circle at ${mousePosition.y}% ${mousePosition.x}%, 
              rgba(79, 70, 229, 0.3) 0%, 
              transparent 40%)
          `,
        }}
      />
      {currentScreen === 0 && (
        <WelcomeScreen onNext={handleWelcomeNext} />
      )}
      {currentScreen === 1 && (
        <IdolGenderSelection onNext={handleIdolGenderNext} onBack={handleBack} />
      )}
      {currentScreen === 2 && (
        <IdolProfileScreen 
          idolType={idolType} 
          idolGender={idolGender}
          onNext={handleProfileNext}
          onBack={handleBack}
        />
      )}
      {currentScreen === 3 && (
        <ChatInterface 
          idolType={idolType} 
          idolGender={idolGender}
          onEnd={handleChatEnd}
          onBack={handleBack}
        />
      )}
      {currentScreen === 4 && (
        <CompletionScreen onContinue={handleCompletion} onBack={handleBack} />
      )}
    </div>
  );
}