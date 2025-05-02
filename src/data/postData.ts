export type Post = {
    id: string;
    title: string;
    image: any;
    description: string;
    status: string;
}

export const initialPosts: Post[] = [
    {
        id: '1',
        title: '시사밸런스',
        image: require('../../assets/post/1.png'),
        description: '밸런스를 지키며 시사를 다루는 토크쇼 [시사밸런스:몇대몇?] 많은 관심 부탁드립니다. <br> *땡기지플러스 앱을 통해 매일 다루게 될 정치, 시사 관련 이슈를 함께 투표해주세요!',
        status: 'important'
    },
    {
        id: '2',
        title: '런치타임',
        image: require('../../assets/post/2.png'),
        description: '매주 수요일 금요일 점심시간에 찾오오는 퀴즈쇼 ! 런치타임 가수 우현정MC, 개그맨 이환호MC가 여러분의 점심시간에 찾아갑니다. <br> 점심식사 후 동료들과 함께 퀴즈도 풀고 선물에 도전하세요.',
        status: 'important'
    },
    {
        id: '3',
        title: '한국갈등관리디지털진흥원: 시민헌법교실',
        image: require('../../assets/post/3.png'),
        description: '"우리 헌법 다시 보기 캠페인" <br> 어린이부터 시니어까지 <br> 퀴즈로 풀어보는 <br> 딩동댕~ 헌법퀴즈스쿨',
        status: 'important'
    },
    {
        id: '4',
        title: '땡방라이브',
        image: require('../../assets/post/4.png'),
        description: '매일 매일 퀴즈 상금에 도전하는 토크 게임쇼!!!! <br> mc땜빵이 진행하는 인터넷 게임쇼 땡방라이브입니다. <br> 100만원, 200만원, 500만원...<br> 참가자들이 많아질수록 더 많은 상금을 드립니다. <br><br> 참가자의 다양한 의견을 모으고 모든 참가자가 자신의 생각과 같은 사람의 비율인 동의율을 맞히는 게임이 진행됩니다.',
        status: 'important'
    },
    {
        id: '5',
        title: '동의보감',
        image: require('../../assets/post/5.png'),
        description: '동의율로 세상을 보는 감성퀴즈쇼에 초대합니다. <br><br> 동의보감은 땡기지 동의율 퀴즈를 통해 남녀노소 세상 사람들의 생각을 알아보는 감성충만한 퀴즈쇼입니다.<br><br> 매회 1000만원의 상금을 준비했습니다<br>1등 500만원, 2등 60만원, 3등 60만원<br>20등까지 20만원을 받을 수 있습니다.<br>그리고 추첨을 통해 선물을 드립니다.<br><br>동의율 퀴즈는 참가자들이 각자 의견을 선택하는 실시간 앙케이트와, 앙케이트 결과의 비율을 맞추는 퀴즈로 구성됩니다.<br>동의보감은 똑똑한 사람만이 우승자가 되는 퀴즈게임이 아닙니다. 남녀노소 누구나 1등 상금에 도전할 수 있는 동의율 퀴즈를 통해 세상을 보는 시야를 키워주는 프로그램입니다.',
        status: 'important'
    },
    {
        id: '6',
        title: '미래도시포럼',
        image: require('../../assets/post/6.png'),
        description: '시민과 함께 도시의 미래를 그리는 <미래도시포럼>은 지자체장 또는 기업대표가 출연하여 생각을 공유하는 포럼입니다.<br>또 많은 시민들과 함께 땡기지플러스 어플리케이션과 유튜브 생방송을 통해 퀴즈와 설문에 참여하여 자유롭게 의견을 나눌 수 있습니다.<br><br>많은 관심 바랍니다.',
        status: 'important'
    },
    {
        id: '7',
        title: '땡기지 TV',
        image: require('../../assets/post/7.png'),
        description: '땡기지에서 진행한 이벤트를 보실 수 있도록 만든 캠프입니다.',
        status: 'important'
    },
    {
        id: '8',
        title: '도전탑랭커 · 윕뉴스 · 맥앤윕',
        image: require('../../assets/post/8.png'),
        description: '윕뉴스와 맥앤윕의 프로젝트 퀴즈방입니다.<br>상품은 기본, 경품추천은 덤^^',
        status: 'normal'
    },
    {
        id: '9',
        title: '메가토크 코리아',
        image: require('../../assets/post/9.png'),
        description: '메가토크코리아는 매회 토크 주제에 관련한 참가자 여러분들의 의견을 실시간으로 집계하고 집단지성을 논하는 토론과 앙케이트에 대한 결과를 맞히는 게임형식으로 구성되어 진행됩니다.<br>하트로 시청료를 지불하시면 우승 상금의 주인공에 도전하실 수 있습니다.<br>여러분들의 많은 참여와 응원부탁드립니다.',
        status: 'normal'
    },
];