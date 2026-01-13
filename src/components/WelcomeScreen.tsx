import { useState } from 'react';
import type { ParticipantInfo } from '../App';

interface WelcomeScreenProps {
  onNext: (info: ParticipantInfo) => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  const [participantId, setParticipantId] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [consent, setConsent] = useState(false);

  const isValid = participantId.trim() !== '' && birthDate.trim() !== '' && gender !== '' && consent;

  const handleNext = () => {
    if (isValid) {
      onNext({
        id: participantId,
        age: birthDate,
        gender,
        consent,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-3">
      <div className="max-w-md w-full space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-white text-lg sm:text-xl">연구 참여를 환영합니다</h1>
          <p className="text-purple-200 text-xs">
            본 연구에서는 아이돌과의 짧은 채팅 상호작용이 진행됩니다.
            모든 응답은 연구 목적으로만 사용되며, 개인 식별 정보는 수집되지 않습니다.
          </p>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-purple-100 mb-1 text-xs">성함</label>
            <input
              type="text"
              value={participantId}
              onChange={(e) => setParticipantId(e.target.value)}
              placeholder="성함을 입력해주세요"
              className="w-full px-2.5 py-1.5 rounded-lg bg-white/10 border border-purple-300/30 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-400 text-xs"
            />
          </div>

          <div>
            <label className="block text-purple-100 mb-1 text-xs">생년월일</label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              placeholder="생년월일을 선택해주세요"
              min="1900-01-01"
              max="2024-12-31"
              className="w-full px-2.5 py-1.5 rounded-lg bg-white/10 border border-purple-300/30 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-400 text-xs"
            />
          </div>

          <div>
            <label className="block text-purple-100 mb-1 text-xs">성별</label>
            <div className="space-y-1">
              {['남성', '여성', '응답하지 않음'].map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={gender === option}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-3 h-3 text-purple-500"
                  />
                  <span className="text-purple-100 text-xs">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-start space-x-2 cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 w-3 h-3 text-purple-500"
              />
              <span className="text-purple-100 text-xs">
                본인은 만 18세 이상이며, 연구 참여에 동의합니다.
              </span>
            </label>
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={!isValid}
          className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/50 text-xs"
        >
          다음
        </button>
      </div>
    </div>
  );
}