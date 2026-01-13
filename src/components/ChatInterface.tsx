import { useState, useRef, useEffect } from 'react';
import type { IdolType, IdolGender } from '../App';
import type { PreSurveyData } from './PreSurveyScreen';
import { Send, ArrowLeft, Sparkles } from 'lucide-react';
import imgMaleVirtual from 'figma:asset/c4ac8df5dc9eb39c9cf970338d5b4368e72c693c.png';
import imgMaleHuman from 'figma:asset/018123da5dea1537ae3193ea47e4c69d04ec7b72.png';
import imgFemaleHuman from 'figma:asset/1a33b08dd63061708ce0d7aba7e3d0d9c1a1b11c.png';
import imgFemaleVirtual from 'figma:asset/7c1f6f57187cbbddf28d5f4ed9d526d88be06535.png';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'idol';
  timestamp: Date;
  showTopicButtons?: boolean;
}

interface ChatInterfaceProps {
  idolType: IdolType;
  idolGender: IdolGender;
  preSurveyData: PreSurveyData | null;
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

export function ChatInterface({ idolType, idolGender, preSurveyData, onEnd, onBack }: ChatInterfaceProps) {
  const idolImage = getIdolImage(idolType, idolGender);
  const idolName = getIdolName(idolType);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '안녕하세요! 저를 선택해 주셔서 감사합니다. 무엇이든 궁금한 게 있으신가요?',
      sender: 'idol',
      timestamp: new Date(),
      showTopicButtons: true,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [topicButtonsVisible, setTopicButtonsVisible] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(300); // 5분 = 300초
  const [canEnd, setCanEnd] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 타이머 useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setCanEnd(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 시간을 분:초 형식으로 변환
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleTopicSelect = (topic: string) => {
    setTopicButtonsVisible(false);
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: topic,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate idol response based on topic and preSurveyData
    setTimeout(() => {
      let responseText = '';
      if (topic === '아무 주제나 시작하고 싶어요') {
        if (preSurveyData?.favoriteIdol) {
          responseText = `좋아요! 아까 ${preSurveyData.favoriteIdol} 좋아하신다고 했잖아요. 저도 그 그룹 정말 좋아해요! 어떤 이야기를 나누고 싶으세요?`;
        } else {
          responseText = '좋아요! 편하게 이야기해 주세요. 어떤 주제든 환영합니다!';
        }
      } else if (topic === '나의 활동 기록에 대해 알고 싶어요') {
        if (preSurveyData?.recentInterest) {
          responseText = `최근에 앨범 활동을 하면서 정말 많은 걸 배웠어요. 그런데 ${preSurveyData.recentInterest}에 관심 있으시다고 하셨는데, 저도 요즘 그쪽에 관심이 생겼어요!`;
        } else {
          responseText = '최근에 앨범 활동을 하면서 정말 많은 걸 배웠어요. 팬 여러분과 함께한 시간들이 가장 기억에 남아요!';
        }
      } else if (topic === '앞으로의 방향에 대해 궁금해요') {
        if (preSurveyData?.musicGenre) {
          responseText = `앞으로도 더 좋은 음악과 무대로 보답하고 싶어요. ${preSurveyData.musicGenre} 좋아하신다고 했는데, 다음 앨범에서 그런 느낌을 담아볼까 생각 중이에요!`;
        } else {
          responseText = '앞으로도 더 좋은 음악과 무대로 보답하고 싶어요. 여러분과 함께 성장하는 아티스트가 되고 싶습니다!';
        }
      } else if (topic === '오늘의 나는 어떤가요?') {
        if (preSurveyData?.todayMeal && preSurveyData?.currentMood) {
          responseText = `오늘은 연습도 하고 새로운 안무도 배워서 조금 피곤하지만, 여러분과 이렇게 대화할 수 있어서 행복해요! 오늘 ${preSurveyData.todayMeal} 드셨다고 했는데, 저도 점심으로 그거 먹었어요! 기분이 ${preSurveyData.currentMood}라고 하셨는데, 괜찮으세요?`;
        } else {
          responseText = '오늘은 연습도 하고 새로운 안무도 배워서 조금 피곤하지만, 여러분과 이렇게 대화할 수 있어서 행복해요!';
        }
      }
      
      const idolMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'idol',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, idolMessage]);
    }, 1000);
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userText = inputValue.toLowerCase();
    setInputValue('');
    setTopicButtonsVisible(false);

    // Simulate idol response with memory
    setTimeout(() => {
      let responseText = '네, 그렇군요. 더 자세히 이야기해 주시겠어요?';
      
      // Check for keywords and respond with memory
      if (userText.includes('좋아') || userText.includes('취미')) {
        if (preSurveyData?.hobbyActivity) {
          responseText = `저도 그런 것들 좋아해요! 아까 취미가 ${preSurveyData.hobbyActivity}라고 하셨는데, 저도 가끔 해봐요!`;
        }
      } else if (userText.includes('음악') || userText.includes('노래')) {
        if (preSurveyData?.musicGenre) {
          responseText = `음악 얘기라니 좋아요! ${preSurveyData.musicGenre} 좋아하신다고 했잖아요. 그런 곡 추천해 드릴까요?`;
        }
      } else if (userText.includes('스트레스') || userText.includes('힘들')) {
        if (preSurveyData?.stressRelief) {
          responseText = `힘드시군요... ${preSurveyData.stressRelief}로 스트레스 푸신다고 했는데, 오늘 한번 해보시는 건 어때요?`;
        }
      } else if (userText.includes('아이돌')) {
        if (preSurveyData?.favoriteIdol) {
          responseText = `${preSurveyData.favoriteIdol} 좋아하신다고 했는데, 저도 그 그룹 정말 존경해요!`;
        }
      } else if (userText.includes('기분') || userText.includes('오늘')) {
        if (preSurveyData?.currentMood) {
          responseText = `기분이 ${preSurveyData.currentMood}라고 하데, 제가 힘이 될 수 있으면 좋겠어요!`;
        }
      }
      
      const idolMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
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
          <div className="flex flex-col items-center space-y-1">
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
            <div className={`text-xs px-3 py-1 rounded-full ${canEnd ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'} border ${canEnd ? 'border-green-500/30' : 'border-yellow-500/30'}`}>
              {canEnd ? '종료 가능' : `남은 시간: ${formatTime(timeRemaining)}`}
            </div>
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
          <div className="flex flex-col items-center justify-center py-10 space-y-4">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-purple-300/50 shadow-2xl shadow-purple-500/30">
                <img
                  src={idolImage}
                  alt={idolName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 animate-pulse" />
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white">{idolName}</h2>
              <p className="text-purple-200 text-sm sm:text-base">LUMINA 엔터테인먼트 · SOLEN</p>
              <div className="flex items-center justify-center space-x-2 pt-1.5">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-purple-300 text-sm">온라인</span>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          {messages.map((message) => (
            <div key={message.id}>
              <div
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start items-start space-x-2'}`}
              >
                {message.sender === 'idol' && (
                  <div className="w-[30px] h-[30px] rounded-full overflow-hidden border-2 border-purple-300/50 shadow-md flex-shrink-0 mt-1">
                    <img
                      src={idolImage}
                      alt={idolName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[60%] sm:max-w-[50%] rounded-2xl px-3 py-2 shadow-lg ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-br-md'
                      : 'bg-white/10 backdrop-blur-sm text-purple-50 border border-purple-300/20 rounded-bl-md'
                  }`}
                >
                  <p className="leading-relaxed text-xs sm:text-sm">{message.text}</p>
                </div>
              </div>

              {/* Topic Selection Buttons */}
              {message.sender === 'idol' && message.showTopicButtons && topicButtonsVisible && (
                <div className="flex justify-end mt-2.5 mr-0">
                  <div className="space-y-2 max-w-[500px] w-full sm:w-auto">
                    {/* Main Topic Button */}
                    <button
                      onClick={() => handleTopicSelect('아무 주제나 시작하고 싶어요')}
                      className="w-full px-3 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-1.5 text-xs sm:text-sm"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>아무 주제나 시작하고 싶어요</span>
                    </button>
                    
                    {/* Secondary Topic Buttons */}
                    <div className="grid grid-cols-3 gap-1.5">
                      <button
                        onClick={() => handleTopicSelect('나의 활동 기록에 대해 알고 싶어요')}
                        className="px-2 py-2 rounded-xl bg-white/10 backdrop-blur-sm text-purple-100 text-[10px] sm:text-xs border border-purple-300/30 hover:bg-white/20 hover:border-purple-300/50 transition-all duration-300 hover:scale-105 leading-tight"
                      >
                        나의 활동 기록
                      </button>
                      <button
                        onClick={() => handleTopicSelect('앞으로의 방향에 대해 궁금해요')}
                        className="px-2 py-2 rounded-xl bg-white/10 backdrop-blur-sm text-purple-100 text-[10px] sm:text-xs border border-purple-300/30 hover:bg-white/20 hover:border-purple-300/50 transition-all duration-300 hover:scale-105 leading-tight"
                      >
                        앞으로의 방향
                      </button>
                      <button
                        onClick={() => handleTopicSelect('오늘의 나는 어떤가요?')}
                        className="px-2 py-2 rounded-xl bg-white/10 backdrop-blur-sm text-purple-100 text-[10px] sm:text-xs border border-purple-300/30 hover:bg-white/20 hover:border-purple-300/50 transition-all duration-300 hover:scale-105 leading-tight"
                      >
                        오늘의 나
                      </button>
                    </div>
                  </div>
                </div>
              )}
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
                placeholder="메시를 입력하세요"
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