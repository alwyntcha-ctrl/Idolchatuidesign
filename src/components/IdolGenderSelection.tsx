import { useState } from 'react';
import type { IdolGender } from '../App';
import { ArrowLeft } from 'lucide-react';

interface IdolGenderSelectionProps {
  onNext: (gender: IdolGender) => void;
  onBack: () => void;
}

export function IdolGenderSelection({ onNext, onBack }: IdolGenderSelectionProps) {
  const [selectedGender, setSelectedGender] = useState<IdolGender>(null);

  const handleNext = () => {
    if (selectedGender) {
      onNext(selectedGender);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-3">
      <div className="max-w-2xl w-full space-y-4">
        <button
          onClick={onBack}
          className="flex items-center space-x-1.5 text-purple-200 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          <span className="text-xs">뒤로가기</span>
        </button>

        <div className="text-center space-y-2">
          <h1 className="text-white text-lg sm:text-xl">아이돌의 성별을 선택해주세요</h1>
          <p className="text-purple-200 text-xs">
            선택한 성별의 아이돌과 채팅이 진행됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <button
            onClick={() => setSelectedGender('male')}
            className={`p-4 rounded-2xl border-2 transition-all ${
              selectedGender === 'male'
                ? 'border-purple-400 bg-purple-500/20 shadow-lg shadow-purple-500/30'
                : 'border-purple-300/30 bg-white/5 hover:bg-white/10'
            }`}
          >
            <div className="space-y-2">
              <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-white text-center text-sm">남성</h3>
            </div>
          </button>

          <button
            onClick={() => setSelectedGender('female')}
            className={`p-4 rounded-2xl border-2 transition-all ${
              selectedGender === 'female'
                ? 'border-purple-400 bg-purple-500/20 shadow-lg shadow-purple-500/30'
                : 'border-purple-300/30 bg-white/5 hover:bg-white/10'
            }`}
          >
            <div className="space-y-2">
              <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-white text-center text-sm">여성</h3>
            </div>
          </button>
        </div>

        <button
          onClick={handleNext}
          disabled={!selectedGender}
          className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/50 text-xs"
        >
          채팅 시작하기
        </button>
      </div>
    </div>
  );
}