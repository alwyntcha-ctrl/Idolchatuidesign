import { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';

export type PreSurveyData = {
  favoriteIdol: string;
  todayMeal: string;
  currentMood: string;
  recentInterest: string;
  musicGenre: string;
  hobbyActivity: string;
  stressRelief: string;
};

interface PreSurveyScreenProps {
  onNext: (data: PreSurveyData) => void;
  onBack: () => void;
}

export function PreSurveyScreen({ onNext, onBack }: PreSurveyScreenProps) {
  const [surveyData, setSurveyData] = useState<PreSurveyData>({
    favoriteIdol: '',
    todayMeal: '',
    currentMood: '',
    recentInterest: '',
    musicGenre: '',
    hobbyActivity: '',
    stressRelief: '',
  });

  const [customInputs, setCustomInputs] = useState<Record<string, string>>({
    favoriteIdol: '',
    todayMeal: '',
    currentMood: '',
    recentInterest: '',
    musicGenre: '',
    hobbyActivity: '',
    stressRelief: '',
  });

  const updateField = (field: keyof PreSurveyData, value: string) => {
    if (value === '그 외') {
      // "그 외" 선택 시, surveyData에 '그 외'를 저장하고 customInput은 유지
      setSurveyData((prev) => ({ ...prev, [field]: '그 외' }));
    } else {
      // 일반 옵션 선택 시, surveyData에 값 저장하고 customInput 클리어
      setSurveyData((prev) => ({ ...prev, [field]: value }));
      setCustomInputs((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const updateCustomInput = (field: keyof PreSurveyData, value: string) => {
    // 커스텀 입력이 변경되면 customInput과 surveyData 모두 업데이트
    setCustomInputs((prev) => ({ ...prev, [field]: value }));
    setSurveyData((prev) => ({ ...prev, [field]: value }));
  };

  const isComplete = Object.values(surveyData).every((value) => value !== '');

  const handleSubmit = () => {
    if (isComplete) {
      onNext(surveyData);
    }
  };

  const questions = [
    {
      id: 'favoriteIdol',
      title: '당신의 즐겨찾는 아이돌은 누구인가요?',
      options: [
        { value: '방탄소년단', label: '방탄소년단' },
        { value: '블랙핑크', label: '블랙핑크' },
        { value: '레드벨벳', label: '레드벨벳' },
        { value: '트와이', label: '트와이스' },
        { value: '그 외', label: '그 외' },
      ],
    },
    {
      id: 'todayMeal',
      title: '오늘의 식사는 무엇인가요?',
      options: [
        { value: '한식', label: '한식' },
        { value: '양식', label: '양식' },
        { value: '중식', label: '중식' },
        { value: '일식', label: '일식' },
        { value: '그 외', label: '그 외' },
      ],
    },
    {
      id: 'currentMood',
      title: '현재 기분은 어떤가요?',
      options: [
        { value: '기쁨', label: '기쁨' },
        { value: '슬픔', label: '슬픔' },
        { value: '평온', label: '평온' },
        { value: '불안', label: '불안' },
        { value: '그 외', label: '그 외' },
      ],
    },
    {
      id: 'recentInterest',
      title: '최근 관심 있는 주제는 무엇인가요?',
      options: [
        { value: '영화', label: '영화' },
        { value: '책', label: '책' },
        { value: '음악', label: '음악' },
        { value: '여행', label: '여행' },
        { value: '그 외', label: '그 외' },
      ],
    },
    {
      id: 'musicGenre',
      title: '선호하는 음악 장르는 무엇인가요?',
      options: [
        { value: '발라드', label: '발라드' },
        { value: '힙합', label: '힙합' },
        { value: '록', label: '록' },
        { value: 'R&B', label: 'R&B' },
        { value: '그 외', label: '그 외' },
      ],
    },
    {
      id: 'hobbyActivity',
      title: '취미 활동은 무엇인가요?',
      options: [
        { value: '그림 그리기', label: '그림 그리기' },
        { value: '요리', label: '요리' },
        { value: '운동', label: '운동' },
        { value: '독서', label: '독서' },
        { value: '그 외', label: '그 외' },
      ],
    },
    {
      id: 'stressRelief',
      title: '스트레스 해소 방법은 무엇인가요?',
      options: [
        { value: '산책', label: '산책' },
        { value: '음악 감상', label: '음악 감상' },
        { value: '친구와 이야기', label: '친구와 이야기' },
        { value: '독서', label: '독서' },
        { value: '그 외', label: '그 외' },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-3" style={{
      background: 'linear-gradient(135deg, #5c1f5d 0%, #4a2c6b 25%, #6b3d7a 50%, #7a4c8a 75%, #8a5c9a 100%)'
    }}>
      <div className="max-w-3xl w-full py-4">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent mb-1.5">
            사전 설문
          </h1>
          <p className="text-white/80 text-xs">
            연구 참여에 앞서 몇 가지 질문에 답변해 주세요
          </p>
          <p className="text-white/60 text-[10px] mt-1">
            모든 항목에 응답해 주셔야 다음 단계로 진행할 수 있습니다
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="bg-white/10 rounded-full h-1 overflow-hidden">
            <div
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 h-full transition-all duration-500"
              style={{
                width: `${(Object.values(surveyData).filter((v) => v !== '').length / 7) * 100}%`,
              }}
            />
          </div>
          <p className="text-white/70 text-[10px] text-center mt-1">
            {Object.values(surveyData).filter((v) => v !== '').length} / 7 완료
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-4">
          {questions.map((question, qIndex) => (
            <div
              key={question.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-purple-500/30 hover:border-white/30"
            >
              <div className="flex items-start gap-2 mb-2">
                <div className="w-5 h-5 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-[10px]">{qIndex + 1}</span>
                </div>
                <h3 className="text-white text-xs font-semibold pt-0.5">
                  {question.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {question.options.map((option) => {
                  const isSelected = surveyData[question.id as keyof PreSurveyData] === option.value || 
                    (option.value === '그 외' && surveyData[question.id as keyof PreSurveyData] !== '' && 
                     !question.options.slice(0, -1).some(o => o.value === surveyData[question.id as keyof PreSurveyData]));
                  
                  if (option.value === '그 외') {
                    return (
                      <div key={option.value} className="sm:col-span-2 flex gap-1.5">
                        <button
                          onClick={() => updateField(question.id as keyof PreSurveyData, option.value)}
                          className={`
                            relative p-2 rounded-lg border-2 text-left transition-all duration-300 flex-shrink-0
                            ${
                              isSelected
                                ? 'bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30 border-white/60 shadow-lg shadow-purple-500/30'
                                : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/40'
                            }
                          `}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`
                              w-3 h-3 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all
                              ${
                                isSelected
                                  ? 'border-white bg-white'
                                  : 'border-white/40 bg-transparent'
                              }
                            `}
                            >
                              {isSelected && <Check className="w-2 h-2 text-purple-600" />}
                            </div>
                            <span className={`text-[11px] ${isSelected ? 'text-white font-medium' : 'text-white/80'}`}>
                              {option.label}
                            </span>
                          </div>
                        </button>
                        {isSelected && (
                          <input
                            type="text"
                            value={customInputs[question.id as keyof PreSurveyData]}
                            onChange={(e) => updateCustomInput(question.id as keyof PreSurveyData, e.target.value)}
                            className="flex-1 p-2 rounded-lg border-2 border-white/40 bg-white/10 text-white text-[11px] placeholder:text-white/50 focus:outline-none focus:border-white/60 focus:bg-white/15"
                            placeholder="다른 답변을 입력하세요"
                            autoFocus
                          />
                        )}
                      </div>
                    );
                  }
                  
                  return (
                    <button
                      key={option.value}
                      onClick={() => updateField(question.id as keyof PreSurveyData, option.value)}
                      className={`
                        relative p-2 rounded-lg border-2 text-left transition-all duration-300
                        ${
                          isSelected
                            ? 'bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30 border-white/60 shadow-lg shadow-purple-500/30'
                            : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/40'
                        }
                      `}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`
                          w-3 h-3 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all
                          ${
                            isSelected
                              ? 'border-white bg-white'
                              : 'border-white/40 bg-transparent'
                          }
                        `}
                        >
                          {isSelected && <Check className="w-2 h-2 text-purple-600" />}
                        </div>
                        <span className={`text-[11px] ${isSelected ? 'text-white font-medium' : 'text-white/80'}`}>
                          {option.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            onClick={handleSubmit}
            disabled={!isComplete}
            className={`
              w-full py-2 rounded-xl text-white text-xs font-bold transition-all
              ${
                isComplete
                  ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-[1.02] cursor-pointer'
                  : 'bg-white/10 cursor-not-allowed opacity-50'
              }
            `}
          >
            {isComplete ? '다음 단계로' : '모든 항목에 응답해 주세요'}
          </button>
        </div>
      </div>
    </div>
  );
}