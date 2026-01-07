import { useState, useRef, useEffect } from 'react';
import type { IdolType, IdolGender } from '../App';
import { Send, ArrowLeft } from 'lucide-react';
import imgMaleVirtual from 'figma:asset/c4ac8df5dc9eb39c9cf970338d5b4368e72c693c.png';
import imgMaleHuman from 'figma:asset/018123da5dea1537ae3193ea47e4c69d04ec7b72.png';
import imgFemaleHuman from 'figma:asset/1a33b08dd63061708ce0d7aba7e3d0d9c1a1b11c.png';
import imgFemaleVirtual from 'figma:asset/7c1f6f57187cbbddf28d5f4ed9d526d88be06535.png';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'idol';
  timestamp: Date;
}

interface ChatInterfaceProps {
  idolType: IdolType;
  idolGender: IdolGender;
  onEnd: () => void;
  onBack: () => void;
}

const getIdolImage = (idolType: IdolType, idolGender: IdolGender): string => {
  const key = `${idolType}-${idolGender}`;
  const images: Record<string, string> = {
    'virtual-male': imgMaleVirtual,
    'virtual-female': imgFemaleVirtual,
    'human-male': imgMaleHuman,
    'human-female': imgFemaleHuman,
  };
  return images[key] || imgMaleVirtual;
};

const getIdolName = (idolType: IdolType): string => {
  return idolType === 'virtual' ? '버추얼 아이돌 리안' : '아이돌 리안';
};

export function ChatInterface({ idolType, idolGender, onEnd, onBack }: ChatInterfaceProps) {
  const idolImage = getIdolImage(idolType, idolGender);
  const idolName = getIdolName(idolType);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '안녕하세요. 오늘 어떤 이야기를 나누고 싶으신가요?',
      sender: 'idol',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate idol response
    setTimeout(() => {
      const idolMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: '네, 그렇군요. 더 자세히 이야기해 주시겠어요?',
        sender: 'idol',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, idolMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm border-b border-purple-300/20 p-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-2 rounded-lg text-purple-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-300/50 shadow-lg">
              <img
                src={idolImage}
                alt={idolName}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-medium">{idolName}</span>
          </div>
          <button
            onClick={onEnd}
            className="px-4 py-2 rounded-lg bg-white/10 text-purple-100 hover:bg-white/20 transition-colors border border-purple-300/30"
          >
            채팅 종료
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Idol Profile Introduction */}
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-300/50 shadow-2xl shadow-purple-500/30">
                <img
                  src={idolImage}
                  alt={idolName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 animate-pulse" />
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">{idolName}</h2>
              <p className="text-purple-200 text-sm">LUMINA 엔터테인먼트 · SOLEN</p>
              <div className="flex items-center justify-center space-x-2 pt-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-purple-300 text-sm">온라인</span>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start items-end space-x-2'}`}
            >
              {message.sender === 'idol' && (
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-300/50 shadow-md flex-shrink-0">
                  <img
                    src={idolImage}
                    alt={idolName}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'bg-white/10 text-purple-50 border border-purple-300/20'
                }`}
              >
                <p>{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm border-t border-purple-300/20 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-end space-x-3">
            <div className="flex-1 relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="메시지를 입력하세요"
                rows={1}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-purple-300/30 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
              />
            </div>
            <button
              onClick={handleSend}
              disabled={inputValue.trim() === ''}
              className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}