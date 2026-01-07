import { useState } from 'react';
import type { ParticipantInfo } from '../App';

interface WelcomeScreenProps {
  onNext: (info: ParticipantInfo) => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  const [participantId, setParticipantId] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [consent, setConsent] = useState(false);

  const isValid = participantId.trim() !== '' && age.trim() !== '' && gender !== '' && consent;

  const handleNext = () => {
    if (isValid) {
      onNext({
        id: participantId,
        age,
        gender,
        consent,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-white">연구 참여를 환영합니다</h1>
          <p className="text-purple-200">
            본 연구에서는 아이돌과의 짧은 채팅 상호작용이 진행됩니다.
            모든 응답은 연구 목적으로만 사용되며, 개인 식별 정보는 수집되지 않습니다.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-purple-100 mb-2">참가자 ID</label>
            <input
              type="text"
              value={participantId}
              onChange={(e) => setParticipantId(e.target.value)}
              placeholder="참가자 ID를 입력해주세요"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-300/30 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-purple-100 mb-2">나이</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="나이를 입력해주세요"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-300/30 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-purple-100 mb-2">성별</label>
            <div className="space-y-2">
              {['남성', '여성', '응답하지 않음'].map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={gender === option}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-4 h-4 text-purple-500"
                  />
                  <span className="text-purple-100">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-start space-x-3 cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-colors">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-4 h-4 text-purple-500"
              />
              <span className="text-purple-100">
                본인은 만 18세 이상이며, 연구 참여에 동의합니다.
              </span>
            </label>
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={!isValid}
          className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/50"
        >
          다음
        </button>
      </div>
    </div>
  );
}
