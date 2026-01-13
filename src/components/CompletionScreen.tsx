import { ArrowLeft } from 'lucide-react';

interface CompletionScreenProps {
  onContinue: () => void;
  onBack: () => void;
}

export function CompletionScreen({ onContinue, onBack }: CompletionScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-3">
      <div className="max-w-md w-full space-y-4">
        <button
          onClick={onBack}
          className="flex items-center space-x-1.5 text-purple-200 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          <span className="text-xs">뒤로가기</span>
        </button>

        <div className="space-y-2.5 text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-white text-lg sm:text-xl">채팅이 종료되었습니다</h1>
          
          <p className="text-purple-200 text-xs">
            연구에 참여해 주셔서 감사합니다. 다음 단계로 이동해주세요.
          </p>
        </div>

        <button
          onClick={onContinue}
          className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white transition-all hover:shadow-lg hover:shadow-purple-500/50 text-xs"
        >
          계속하기
        </button>
      </div>
    </div>
  );
}