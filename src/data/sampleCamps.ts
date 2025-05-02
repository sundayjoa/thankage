export type SampleCamp = {
    id: string;
    image: any;
    name: string;
    description: string;
    isPublic: boolean;
    requiresApproval: boolean;
    usesNickname: boolean;
  };
  
  export const sampleCamps: SampleCamp[] = [
    {
        id: '1',
        image: require('../../assets/post/basic.png'),
        name: '영화감상회',
        description: '주말마다 모여 영화를 보고 감상을 나눠요.',
        isPublic: true,
        requiresApproval: true,
        usesNickname: false,
    },
    {
        id: '2',
        image: require('../../assets/post/basic.png'),
        name: '아침인증 캠프',
        description: '매일 아침 기상 시간 인증하고 루틴을 만들어봐요.',
        isPublic: true,
        requiresApproval: true,
        usesNickname: false,
    },
    {
        id: '3',
        image: require('../../assets/post/basic.png'),
        name: '책 한 권 읽기',
        description: '한 달에 한 권, 함께 책 읽고 느낀 점을 나눠요.',
        isPublic: true,
        requiresApproval: true,
        usesNickname: false,
    },
    {
        id: '4',
        image: require('../../assets/post/basic.png'),
        name: '밸런스게임 톡방',
        description: '친구들과 재미있는 밸런스게임으로 놀아봐요!',
        isPublic: true,
        requiresApproval: true,
        usesNickname: false,
    },
    {
        id: '5',
        image: require('../../assets/post/basic.png'),
        name: '오늘 뭐 먹지?',
        description: '매일 식단 추천 받고, 직접 해 먹은 음식 공유해요.',
        isPublic: true,
        requiresApproval: true,
        usesNickname: false,
    },
    {
        id: '6',
        image: require('../../assets/post/basic.png'),
        name: '그림 그리는 사람들',
        description: '취미로 그림을 그리고 공유하는 캠프입니다.',
        isPublic: true,
        requiresApproval: true,
        usesNickname: false,
    },
    {
        id: '7',
        image: require('../../assets/post/basic.png'),
        name: '퇴근 후 운동기록',
        description: '하루 운동 인증하고 건강한 루틴을 만드세요.',
        isPublic: true,
        requiresApproval: true,
        usesNickname: false,
    },
    {
        id: '8',
        image: require('../../assets/post/basic.png'),
        name: '카페탐방 모임',
        description: '예쁜 카페를 다니며 사진과 후기를 나눠요 ☕',
        isPublic: true,
        requiresApproval: true,
        usesNickname: false,
    },
    {
        id: '9',
        image: require('../../assets/post/basic.png'),
        name: '하루 한 줄 일기',
        description: '매일 짧게라도 내 하루를 기록해보는 모임',
        isPublic: true,
        requiresApproval: true,
        usesNickname: false,
    },
    {
        id: '10',
        image: require('../../assets/post/basic.png'),
        name: '세계여행 드림',
        description: '각자 가고 싶은 나라를 공유하며 정보도 나눠요!',
        isPublic: true,
        requiresApproval: true,
        usesNickname: false,
    },
    {
        id: '11',
        image: require('../../assets/post/basic.png'),
        name: 'MBTI 수다방',
        description: '성격유형별 특징과 경험을 이야기하는 공간입니다.',
        isPublic: true,
        requiresApproval: true,
        usesNickname: false,
    },
    {
        id: '12',
        image: require('../../assets/post/basic.png'),
        name: '자기계발 챌린지',
        description: '매일 목표를 기록하고 서로 응원해요!',
        isPublic: true,
        requiresApproval: true,
        usesNickname: false,
    },
];
  