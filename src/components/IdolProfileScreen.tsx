import { ArrowLeft } from 'lucide-react';
import type { IdolType, IdolGender } from '../App';
import imgMaleVirtual from 'figma:asset/c4ac8df5dc9eb39c9cf970338d5b4368e72c693c.png';
import imgMaleHuman from 'figma:asset/018123da5dea1537ae3193ea47e4c69d04ec7b72.png';
import imgFemaleHuman from 'figma:asset/ed2a1058e160e717dfdb2499945eaf76d564de37.png';
import imgFemaleVirtual from 'figma:asset/7c1f6f57187cbbddf28d5f4ed9d526d88be06535.png';
import svgPaths from '../imports/svg-73sf2v2u35';

interface IdolProfileScreenProps {
  idolType: IdolType;
  idolGender: IdolGender;
  onNext: () => void;
  onBack: () => void;
}

type IdolProfile = {
  name: string;
  typeLabel: string;
  realName: string;
  agency: string;
  group: string;
  image: string;
  stats: {
    vocal: number;
    dance: number;
    performance: number;
    charisma: number;
    composition: number;
    fanCommunication: number;
  };
  traits: string[];
  background: {
    debutDate: string;
    description: string[];
    story: string;
    quote: string;
  };
  personality: {
    daily: string;
    onStage: string;
    summary: string;
  };
  essence: {
    description: string;
    details: string[];
  };
  interests: {
    description: string;
    items: Array<{ title: string; description: string; color: string }>;
  };
  musicGenre: {
    title: string;
    descriptions: string[];
  };
  hobbies: {
    description: string;
    items: Array<{ text: string; color: string }>;
    summary: string;
  };
};

const idolProfiles: Record<string, IdolProfile> = {
  'virtual-male': {
    name: '리안',
    typeLabel: '버추얼 아이돌',
    realName: '한리안',
    agency: 'LUMINA 엔터테인먼트',
    group: 'SOLEN(5인조)',
    image: imgMaleVirtual,
    stats: {
      vocal: 92,
      dance: 78,
      performance: 95,
      charisma: 88,
      composition: 85,
      fanCommunication: 90,
    },
    traits: ['감성 보컬리스트', '무대 장악력', '완벽주의자', '섬세한 감성'],
    background: {
      debutDate: '2022년 3월 18일 데뷔',
      description: [
        '부드러운 얼굴 뒤에 예상 못 한 카리스마를 숨긴',
        '트렌디 아이콘',
        '평소엔 차분하지만, 무대 위에서는 완전히 다른 사람. 팬들은 이 간극을 리안의 진짜 매력이라 부른다.',
      ],
      story: '연습생 시절, 조용한 성격 탓에 처음엔 주목받지 못했다. 하지만 한 번의 평가 무대에서 폭발적인 감정 표현을 보여주며 프로듀서들을 놀라게 했다. 데뷔를 반대하던 임원진을 설득하기 위해 직접 작곡한 곡으로 프레젠테이션을 진행했고, 그 진정성에 감동한 대표가 즉석에서 데뷔를 결정했다는 일화가 유명하다. 겉으로는 소심하고 냉소적으로 보여도, 사실 누구보다 먼저 다가가고 싶어하고 사람을 진심으로 좋아하는 성격이다. 팬들의 작은 메시지 하나하나를 기억하고, 그들의 이야기에 귀 기울이는 모습에서 진정성 있는 아티스트의 면모를 느낄 수 있다.',
      quote: '감성 음악을 넘어 스토리 기반 퍼포먼스, 새로운 사운드 실험까지 미래가 가장 궁금한 아이돌',
    },
    personality: {
      daily: '조용하고 차분한 관찰자. 감정과 소리에 민감한 섬세한 성격',
      onStage: '집중력과 활발함 폭발. 표정과 에너지가 완전히 바뀌는 무대체질',
      summary: '두 가지 매력 — 섬세한 사람 & 몰입력 있는 퍼포머',
    },
    essence: {
      description: '따뜻하고 배려심 깊지만, 좋아하는 것 앞에서는 적극적인 에너지',
      details: [
        '🎵 음악 이야기할 때 말이 빨라지고 손짓이 커짐',
        '💜 팬과 스태프에게 에너지를 아끼지 않는 스타일',
      ],
    },
    interests: {
      description: '리안은 사람들의 감정뿐 아니라, 무대·퍼포먼스·콘셉트 작업 자체에도 큰 흥미를 가진다.',
      items: [
        {
          title: '팬과의 소통',
          description: '팬들의 하루 이야기를 들으며 음악 아이디어 찾기',
          color: '#FB64B6',
        },
        {
          title: '공연 기획',
          description: '공연 구성 아이디어 짜기(조명, 동선, 분위기 컬러 등)',
          color: '#C27AFF',
        },
        {
          title: '무대 연구',
          description: '다른 아티스트들의 무대 분석하는 걸 좋아함',
          color: '#51A2FF',
        },
        {
          title: '디테일 작업',
          description: '의상·안무 디테일에도 나름 의견을 적극적으로 냄',
          color: '#00D3F2',
        },
      ],
    },
    musicGenre: {
      title: '도시 감성 pop / soft R&B',
      descriptions: [
        '리안의 음악은 도시 감성 pop / soft R&B를 기반으로 한다.',
        '담백한 보컬과 세심한 가사로 감정의 결을 부드럽게 표현한다.',
        '사람들의 작은 말 한마디에서 착안해 음악적 이미지를 만드는 능력이 뛰어나며,',
        '완성도에 대한 집착이 있어 데모를 여러 번 수정하는 완벽주의자 면도 있다.',
      ],
    },
    hobbies: {
      description: '취미 또한 내향적 안정 + 아이돌다운 활동성이 적절히 섞여 있다.',
      items: [
        { text: '밤 산책 & 도시 분위기 기록하기', color: '#fb64b6' },
        { text: '공연 영상 분석하며 내 스타일에 맞는 퍼포먼스 연구', color: '#c27aff' },
        { text: '연습실에서 혼자 즉흥 안무 만들어보기', color: '#51a2ff' },
        { text: '팬들이 준 편지나 메시지 읽으며 감정 포인트 메모', color: '#00d3f3' },
      ],
      summary: '조용한 취미를 가지면서도, 무대에서는 센스 있고 몸으로 표현하는 걸 즐기는 사람이다.',
    },
  },
  'virtual-female': {
    name: '리안',
    typeLabel: '버추얼 아이돌',
    realName: '박리안',
    agency: 'LUMINA 엔터테인먼트',
    group: 'SOLEN(5인조)',
    image: imgFemaleVirtual,
    stats: {
      vocal: 95,
      dance: 88,
      performance: 92,
      charisma: 90,
      composition: 82,
      fanCommunication: 94,
    },
    traits: ['천상의 보컬', '우아한 카리스마', '창의적 예술가', '따뜻한 소통'],
    background: {
      debutDate: '2022년 6월 15일 데뷔',
      description: [
        '우아하면서도 강렬한 무대 매너로',
        '천상의 아이돌',
        '평소엔 부드럽지만, 무대 위에서는 압도적인 카리스마. 팬들은 이 변화를 리안의 진정한 힘이라 말한다.',
      ],
      story: '연습생 초기, 실력은 뛰어났지만 자신감 부족으로 고전했다. 멘토 프로듀서가 포기하라 권유했을 때, 팀원들 앞에서 자작곡을 불러 자신의 음악적 비전을 보여주었다. 이 무대를 본 소속사 대표가 데뷔 계획을 전면 수정하며 리안을 중심으로 새 그룹을 기획했고, 결국 SOLEN의 핵심 멤버가 되었다. 겉으로는 완벽해 보이지만, 사실 팬들의 응원에 가장 큰 힘을 얻는 성격이다. 팬들이 보내는 편지 한 장 한 장을 소중히 간직하고, 그들과의 교감을 가장 중요하게 생각하는 진심 어린 아티스트다.',
      quote: '전통과 현대를 넘나드는 음악 세계 새로운 시도를 두려워하지 않는 아티스트',
    },
    personality: {
      daily: '사려 깊고 친절한 성격. 사람들의 이야기를 경청하는 따뜻한 사람',
      onStage: '강렬한 카리스마와 우아함이 공존. 무대를 완전히 장악하는 퍼포머',
      summary: '이중성의 매력 — 따뜻한 마음 & 강렬한 무대 존재감',
    },
    essence: {
      description: '배려심 깊고 섬세하지만, 예술 앞에서는 과감하고 열정적인 에너지',
      details: [
        '🎵 음악 작업할 때 완전히 몰입하는 집중력',
        '💜 팬들에게 진심 어린 관심과 사랑을 보여주는 스타일',
      ],
    },
    interests: {
      description: '리안은 음악과 퍼포먼스 외에도 다양한 예술 장르에 관심이 많다.',
      items: [
        {
          title: '팬 커뮤니케이션',
          description: '팬들과의 진솔한 대화를 통해 영감 얻기',
          color: '#FB64B6',
        },
        {
          title: '무대 연출',
          description: '조명, 의상, 안무 등 무대 전체를 아우르는 연출 구상',
          color: '#C27AFF',
        },
        {
          title: '보컬 연구',
          description: '다양한 장르의 보컬 테크닉 연구하고 적용하기',
          color: '#51A2FF',
        },
        {
          title: '창작 활동',
          description: '작곡과 작사에 직접 참여하며 자신만의 색깔 만들기',
          color: '#00D3F2',
        },
      ],
    },
    musicGenre: {
      title: '도시 감성 pop / soft R&B',
      descriptions: [
        '리안의 음악은 도시 감성 pop / soft R&B를 기반으로 한다.',
        '담백한 보컬과 세심한 가사로 감정의 결을 부드럽게 표현한다.',
        '사람들의 작은 말 한마디에서 착안해 음악적 이미지를 만드는 능력이 뛰어나며,',
        '완성도에 대한 집착이 있어 데모를 여러 번 수정하는 완벽주의자 면도 있다.',
      ],
    },
    hobbies: {
      description: '취미 또한 예술적 감수성 + 실용적 활동이 균형있게 섞여 있다.',
      items: [
        { text: '갤러리 방문하며 예술적 영감 받기', color: '#fb64b6' },
        { text: '다양한 장르의 음악 듣고 분석하기', color: '#c27aff' },
        { text: '보컬 연습과 새로운 테크닉 시도하기', color: '#51a2ff' },
        { text: '팬레터 읽으며 감사 메시지 작성하기', color: '#00d3f3' },
      ],
      summary: '예술적 감성을 가지면서도, 무대에서는 프로페셔널한 퍼포먼스를 보여주는 사람이다.',
    },
  },
  'human-male': {
    name: '리안',
    typeLabel: '아이돌',
    realName: '이리안',
    agency: 'LUMINA 엔터테인먼트',
    group: 'SOLEN(5인조)',
    image: imgMaleHuman,
    stats: {
      vocal: 88,
      dance: 92,
      performance: 90,
      charisma: 85,
      composition: 78,
      fanCommunication: 87,
    },
    traits: ['파워풀 댄서', '열정적 퍼포머', '노력파', '긍정 에너지'],
    background: {
      debutDate: '2021년 11월 3일 데뷔',
      description: [
        '에너지 넘치는 퍼포먼스와 밝은 미소로',
        '무대의 태양',
        '평소에도 활발하지만, 무대 위에서는 더욱 폭발적인 에너지. 팬들은 이 열정을 리안의 빛이라 부른다.',
      ],
      story: '연습생 기간 중 부상으로 6개월간 활동을 중단해야 했다. 재활하며 포기를 고민했지만, 팀원들이 기다려준다는 말에 다시 일어섰다. 복귀 후 첫 평가에서 눈물을 흘리며 춤을 췄고, 그 모습을 본 대표이사가 즉시 데뷔 라인업에 포함시켰다. 이 이야기는 팬들 사이에서 가장 감동적인 일화로 전해진다. 항상 밝고 긍정적인 모습 뒤에는 팀원들과 팬들을 진심으로 아끼는 마음이 있다. 힘든 일이 있어도 먼저 다가가 위로하고, 팬들의 응원 하나하나에 진심으로 감사하는 따뜻한 성격의 소유자다.',
      quote: '노력으로 만들어가는 무대 멈추지 않는 성장과 도전의 아이콘',
    },
    personality: {
      daily: '활발하고 긍정적인 에너지. 주변 사람들에게 웃음을 주는 밝은 성격',
      onStage: '폭발적인 에너지와 정확한 퍼포먼스. 무대를 즐기는 진정한 엔터테이너',
      summary: '열정의 아이콘 — 밝은 에너지 & 완벽한 무대 장악력',
    },
    essence: {
      description: '긍정적이고 외향적이지만, 연습과 노력 앞에서는 진지하고 집중하는 에너지',
      details: [
        '🎵 춤 연습할 때는 완벽을 추구하는 프로페셔널',
        '💜 팬과 멤버들에게 긍정 에너지를 전파하는 스타일',
      ],
    },
    interests: {
      description: '리안은 퍼포먼스 외에도 다양한 신체 활동과 창작에 관심이 많다.',
      items: [
        {
          title: '팬 미팅',
          description: '팬들과 직접 소통하며 에너지 교환하기',
          color: '#FB64B6',
        },
        {
          title: '안무 창작',
          description: '새로운 안무 동작 만들고 팀에 제안하기',
          color: '#C27AFF',
        },
        {
          title: '퍼포먼스 연구',
          description: '다양한 아티스트들의 무대 매너와 움직임 분석',
          color: '#51A2FF',
        },
        {
          title: '체력 관리',
          description: '운동 건강 관리로 최상의 컨디션 유지하기',
          color: '#00D3F2',
        },
      ],
    },
    musicGenre: {
      title: '도시 감성 pop / soft R&B',
      descriptions: [
        '리안의 음악은 도시 감성 pop / soft R&B를 기반으로 한다.',
        '담백한 보컬과 세심한 가사로 감정의 결을 부드럽게 표현한다.',
        '사람들의 작은 말 한마디에서 착안해 음악적 이미지를 만드는 능력이 뛰어나며,',
        '완성도에 대한 집착이 있어 데모를 여러 번 수정하는 완벽주의자 면도 있다.',
      ],
    },
    hobbies: {
      description: '취미 또한 활동적인 에너지 + 창의적 표현이 조화롭게 섞여 있다.',
      items: [
        { text: '새벽 러닝과 체력 단련하기', color: '#fb64b6' },
        { text: '안무 영상 보며 새로운 동작 연구하기', color: '#c27aff' },
        { text: '연습실에서 프리스타일 댄스 즐기기', color: '#51a2ff' },
        { text: '팬들의 응원 메시지 보며 동기부여 받기', color: '#00d3f3' },
      ],
      summary: '활동적인 취미를 가지면서도, 무대에서는 완벽한 퍼포먼스를 보여주는 프로페셔널이다.',
    },
  },
  'human-female': {
    name: '리안',
    typeLabel: '아이돌',
    realName: '김리안',
    agency: 'LUMINA 엔터테인먼트',
    group: 'SOLEN(5인조)',
    image: imgFemaleHuman,
    stats: {
      vocal: 94,
      dance: 90,
      performance: 88,
      charisma: 92,
      composition: 80,
      fanCommunication: 95,
    },
    traits: ['천사 보컬', '우아한 퍼포머', '친화력 갑', '진정성'],
    background: {
      debutDate: '2021년 8월 20일 데뷔',
      description: [
        '맑고 청아한 목소리와 우아한 매너로',
        '하늘이 내린 목소리',
        '평소엔 친근하지만, 무대 위에서는 프로페셔널한 카리스마. 팬들은 이 조화를 리안의 완벽함이라 칭한다.',
      ],
      story: '연습생 시절, 음악 스타일이 트렌드에 맞지 않는다는 이유로 여러 번 탈락 위기를 겪었다. 하지만 포기하지 않고 자신만의 스타일을 지켰고, 최종 심사에서 심사위원들을 눈물 짓게 만드는 무대를 선보였다. 그날 저녁, 대표가 직접 전화를 걸어 앞으로 회사가 리안의 색깔을 지켜주겠다고 약속했고, 그 약속은 데뷔 후에도 계속되고 있다. 친근하고 따뜻한 외면 아래에는 팬들과의 진정한 유대를 소중히 여기는 마음이 있다. 조용히 팬들의 이야기에 귀 기울이고, 그들에게 위로와 힘이 되어주고 싶어하는 진심 어린 성격의 소유자다.',
      quote: '진심을 담은 음악 노래로 사람들의 마음을 위로하는 아티스트',
    },
    personality: {
      daily: '친절하고 상냥한 성격. 주변 사람들을 편안하게 만드는 따뜻한 사람',
      onStage: '우아하고 안정적인 무대 매너. 노래에 진심을 담는 진정한 아티스트',
      summary: '완벽한 조화 — 친근한 매력 & 프로페셔널한 무대',
    },
    essence: {
      description: '따뜻하고 친화적이지만, 음악 앞에서는 진지하고 열정적인 에너지',
      details: [
        '🎵 노래할 때는 감정을 온전히 표현하는 진정성',
        '💜 팬들에게 진심 어린 사랑과 관심을 보여주는 스타일',
      ],
    },
    interests: {
      description: '리안은 음악 외에도 사람들과의 소통과 다양한 문화에 관심이 많다.',
      items: [
        {
          title: '팬과의 교감',
          description: '팬들의 이야기를 진심으로 듣고 공감하기',
          color: '#FB64B6',
        },
        {
          title: '보컬 훈련',
          description: '다양한 장르를 소화할 수 있는 보컬 실력 키우기',
          color: '#C27AFF',
        },
        {
          title: '무대 표현',
          description: '감정을 효과적으로 전달하는 표현 방법 연구',
          color: '#51A2FF',
        },
        {
          title: '작사 활동',
          description: '진솔한 가사로 사람들의 마음에 닿는 노래 만들기',
          color: '#00D3F2',
        },
      ],
    },
    musicGenre: {
      title: '도시 감성 pop / soft R&B',
      descriptions: [
        '리안의 음악은 도시 감성 pop / soft R&B를 기반으로 한다.',
        '담백한 보컬과 세심한 가사로 감정의 결을 부드럽게 표현한다.',
        '사람들의 작은 말 한마디에서 착안해 음악적 이미지를 만드는 능력이 뛰어나며,',
        '완성도에 대한 집착이 있어 데모를 여러 번 수정하는 완벽주의자 면도 있다.',
      ],
    },
    hobbies: {
      description: '취미 또한 감성적 여유 + 진실된 소통이 자연스럽게 어우러져 있다.',
      items: [
        { text: '카페에서 음악 듣고 여유 즐기기', color: '#fb64b6' },
        { text: '다양한 장르의 노래 커버하며 실력 키우기', color: '#c27aff' },
        { text: '작사 노트에 감정과 생각 기록하기', color: '#51a2ff' },
        { text: '팬레터 하나하나 정성껏 읽고 답장하기', color: '#00d3f3' },
      ],
      summary: '여유로운 취미를 가지면서도, 무대에서는 진심을 다해 노래하는 진정한 아티스트이다.',
    },
  },
};

export function IdolProfileScreen({ idolType, idolGender, onNext, onBack }: IdolProfileScreenProps) {
  const profileKey = `${idolType}-${idolGender}`;
  const profile = idolProfiles[profileKey];

  const statItems = [
    { name: '보컬', value: profile.stats.vocal, color: { from: '#f6339a', to: '#fda5d5' } },
    { name: '댄스', value: profile.stats.dance, color: { from: '#ad46ff', to: '#dab2ff' } },
    { name: '퍼포먼스', value: profile.stats.performance, color: { from: '#2b7fff', to: '#8ec5ff' } },
    { name: '카리스마', value: profile.stats.charisma, color: { from: '#00b8db', to: '#53eafd' } },
    { name: '작곡', value: profile.stats.composition, color: { from: '#f0b100', to: '#ffdf20' } },
    { name: '팬 소통', value: profile.stats.fanCommunication, color: { from: '#00c950', to: '#7bf1a8' } },
  ];

  const traitColors = [
    { bg: 'rgba(246,51,154,0.3)', border: 'rgba(253,165,213,0.5)', text: '#fce7f3' },
    { bg: 'rgba(173,70,255,0.3)', border: 'rgba(218,178,255,0.5)', text: '#f3e8ff' },
    { bg: 'rgba(43,127,255,0.3)', border: 'rgba(142,197,255,0.5)', text: '#dbeafe' },
    { bg: 'rgba(0,184,219,0.3)', border: 'rgba(83,234,253,0.5)', text: '#cefafe' },
  ];

  return (
    <div className="min-h-screen overflow-auto">
      {/* Background */}
      <div className="fixed inset-0 -z-10" style={{
        background: 'linear-gradient(146.824deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 50%, rgb(240, 147, 251) 100%)'
      }}>
        {/* Stars */}
        <div className="absolute bg-white left-[7%] opacity-70 rounded-full size-[5px] top-[65%]" />
        <div className="absolute bg-white left-[82%] opacity-40 rounded-full size-[5px] top-[88%]" />
        <div className="absolute bg-white left-[65%] opacity-50 rounded-full size-[6px] top-[52%]" />
        <div className="absolute bg-white left-[91%] opacity-40 rounded-full size-[5px] top-[63%]" />
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-3 py-8 sm:py-0">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-3 left-3 flex items-center space-x-1.5 text-purple-200 hover:text-white transition-colors z-10"
        >
          <ArrowLeft className="w-3 h-3" />
          <span className="text-xs">뒤로가기</span>
        </button>

        {/* Idol Image */}
        <div className="relative mb-4">
          <div className="w-[200px] h-[250px] sm:w-[260px] sm:h-[320px] lg:w-[320px] lg:h-[400px] border-4 border-white/30 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50 hover:border-white/50 group">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 
            className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent"
          >
            {profile.typeLabel} · {profile.name}
          </h1>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white/90 font-normal">About</p>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white/90 italic font-normal">{profile.name}</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-3 flex flex-col items-center">
          <div className="w-4 h-6 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
            <div className="w-0.5 h-1.5 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative bg-transparent px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-5">
          {/* Basic Info Card */}
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/20 shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-purple-500/30 hover:border-white/30">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              <div className="text-center space-y-0.5 sm:space-y-1 group cursor-pointer">
                <p className="text-pink-300 text-[9px] sm:text-[10px] uppercase tracking-wider transition-all group-hover:text-pink-200 group-hover:scale-110">Real Name</p>
                <p className="text-white text-xs sm:text-sm transition-all group-hover:scale-105">{profile.realName}</p>
              </div>
              <div className="text-center space-y-0.5 sm:space-y-1 group cursor-pointer">
                <p className="text-purple-300 text-[9px] sm:text-[10px] uppercase tracking-wider transition-all group-hover:text-purple-200 group-hover:scale-110">Agency</p>
                <p className="text-white text-xs sm:text-sm transition-all group-hover:scale-105">{profile.agency}</p>
              </div>
              <div className="text-center space-y-0.5 sm:space-y-1 group cursor-pointer">
                <p className="text-blue-300 text-[9px] sm:text-[10px] uppercase tracking-wider transition-all group-hover:text-blue-200 group-hover:scale-110">Group</p>
                <p className="text-white text-xs sm:text-sm transition-all group-hover:scale-105">{profile.group}</p>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div 
            className="max-w-3xl mx-auto rounded-2xl p-4 sm:p-5 border border-white/30 shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-purple-500/30 hover:border-white/40"
            style={{
              background: 'linear-gradient(159.894deg, rgba(246, 51, 154, 0.2) 0%, rgba(173, 70, 255, 0.2) 50%, rgba(43, 127, 255, 0.2) 100%)',
            }}
          >
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-3">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <h2 
                className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent"
              >
                아이돌 스탯
              </h2>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {statItems.map((stat, index) => (
                <div key={index} className="space-y-0.5 sm:space-y-1 group">
                  <div className="flex justify-between items-center">
                    <span className="text-white/90 text-[10px] sm:text-xs transition-all group-hover:text-white group-hover:scale-105">{stat.name}</span>
                    <span className="text-white/70 text-[9px] sm:text-[10px] transition-all group-hover:text-white/90">{stat.value}/100</span>
                  </div>
                  <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden group-hover:h-2 sm:group-hover:h-2.5 transition-all">
                    <div
                      className="h-full rounded-full transition-all duration-1000 group-hover:shadow-lg"
                      style={{
                        width: `${stat.value}%`,
                        background: `linear-gradient(to right, ${stat.color.from}, ${stat.color.to})`,
                        boxShadow: `0 0 20px ${stat.color.to}50`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Traits */}
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 mt-2.5 sm:mt-3">
              {profile.traits.map((trait, index) => (
                <div
                  key={index}
                  className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border cursor-pointer transition-all hover:scale-110 hover:shadow-lg text-[9px] sm:text-[10px]"
                  style={{
                    backgroundColor: traitColors[index].bg,
                    borderColor: traitColors[index].border,
                    color: traitColors[index].text,
                  }}
                >
                  {trait}
                </div>
              ))}
            </div>
          </div>

          {/* Background Section */}
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/20 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/30 hover:border-white/30">
            <div className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                배경
              </h3>
            </div>
            
            <div className="space-y-2 sm:space-y-2.5 text-gray-200">
              <p className="text-xs sm:text-sm">
                <span className="text-pink-300 font-bold">{profile.background.debutDate}</span>
                <span className="ml-2">{profile.background.description[0]}</span>
                <span className="text-purple-300 font-bold ml-1">{profile.background.description[1]}</span>
              </p>
              <p className="text-xs sm:text-sm">{profile.background.description[2]}</p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3 mt-2.5 sm:mt-3">
                <p className="text-pink-200 text-[10px] sm:text-xs mb-2">{profile.background.story}</p>
                <p className="text-pink-200 italic text-[10px] sm:text-xs">{profile.background.quote}</p>
              </div>
            </div>
          </div>

          {/* Personality Section */}
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/20 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/30 hover:border-white/30">
            <div className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                성격
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
              <div 
                className="p-3 sm:p-4 rounded-xl border border-white/10"
                style={{ background: 'linear-gradient(168.421deg, rgba(246, 51, 154, 0.2) 0%, rgba(173, 70, 255, 0.2) 100%)' }}
              >
                <p className="text-pink-300 font-bold text-xs sm:text-sm mb-1">일상에서</p>
                <p className="text-gray-200 text-[10px] sm:text-xs">{profile.personality.daily}</p>
              </div>
              <div 
                className="p-3 sm:p-4 rounded-xl border border-white/10"
                style={{ background: 'linear-gradient(168.421deg, rgba(173, 70, 255, 0.2) 0%, rgba(43, 127, 255, 0.2) 100%)' }}
              >
                <p className="text-purple-300 font-bold text-xs sm:text-sm mb-1">무대에서</p>
                <p className="text-gray-200 text-[10px] sm:text-xs">{profile.personality.onStage}</p>
              </div>
            </div>
            <p className="text-center text-pink-200 font-bold text-[10px] sm:text-xs">{profile.personality.summary}</p>
          </div>

          {/* Essence Section */}
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/20 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/30 hover:border-white/30">
            <div className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                본질
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-center mb-2.5 sm:mb-3">
              <span className="text-pink-300">{profile.essence.description.split(',')[0]}</span>
              <span className="text-gray-200">, </span>
              <span className="text-purple-300">{profile.essence.description.split(',')[1]}</span>
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3 space-y-1.5">
              {profile.essence.details.map((detail, index) => (
                <p key={index} className="text-gray-200 text-xs sm:text-sm">{detail}</p>
              ))}
            </div>
          </div>

          {/* Interests Section */}
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/20 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/30 hover:border-white/30">
            <div className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                관심사
              </h3>
            </div>
            
            <p className="text-gray-200 mb-2.5 sm:mb-3 text-[10px] sm:text-xs">{profile.interests.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {profile.interests.items.map((item, index) => (
                <div 
                  key={index}
                  className="p-3 sm:p-4 rounded-xl border border-white/10"
                  style={{
                    background: index % 2 === 0 
                      ? 'linear-gradient(169.298deg, rgba(246, 51, 154, 0.2) 0%, rgba(173, 70, 255, 0.2) 100%)'
                      : 'linear-gradient(169.298deg, rgba(43, 127, 255, 0.2) 0%, rgba(0, 184, 219, 0.2) 100%)',
                  }}
                >
                  <p className="font-bold mb-1.5 text-xs sm:text-sm" style={{ color: item.color }}>{item.title}</p>
                  <p className="text-gray-200 text-[10px] sm:text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Music Genre Section */}
          <div 
            className="max-w-3xl mx-auto rounded-2xl p-4 sm:p-5 border border-white/20 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/30 hover:border-white/30"
            style={{
              background: 'linear-gradient(to right, rgba(246,51,154,0.2) 0%, rgba(173,70,255,0.2) 50%, rgba(43,127,255,0.2) 100%)',
            }}
          >
            <div className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                음악 & 스킬
              </h3>
            </div>

            <h4 
              className="text-base sm:text-lg font-bold text-center mb-2.5 sm:mb-3 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent"
            >
              {profile.musicGenre.title}
            </h4>
            <div className="space-y-1.5 sm:space-y-2">
              {profile.musicGenre.descriptions.map((desc, index) => (
                <p key={index} className={`text-gray-200 text-[10px] sm:text-xs ${index === profile.musicGenre.descriptions.length - 1 ? 'text-purple-300' : ''}`}>
                  {desc}
                </p>
              ))}
            </div>
          </div>

          {/* Hobbies Section */}
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/20 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/30 hover:border-white/30">
            <div className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                취미
              </h3>
            </div>
            
            <p className="text-gray-200 mb-2.5 sm:mb-3 text-[10px] sm:text-xs">{profile.hobbies.description}</p>
            <div className="space-y-2 mb-2.5 sm:mb-3">
              {profile.hobbies.items.map((hobby, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-2 sm:p-2.5 flex items-center gap-2 sm:gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: hobby.color }} />
                  <p className="text-gray-200 text-[10px] sm:text-xs">{hobby.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-blue-200 italic text-[10px] sm:text-xs">{profile.hobbies.summary}</p>
          </div>

          {/* Start Chat Button */}
          <button
            onClick={onNext}
            className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white text-base sm:text-lg font-bold transition-all hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-[1.02]"
          >
            채팅 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}