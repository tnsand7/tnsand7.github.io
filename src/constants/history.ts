export type THistory = {
  date: string;
  company: string;
  title: string;
  description: string[];
};

export const HISTORY = [
  {
    date: '2022.08 ~ 2024.11',
    company: '씨제이대한통운',
    title: '더 운반',
    description: ['"더 운반" 어드민 & 화주웹 개발 및 유지보수'],
  },
  {
    date: '2022.12 ~ 2023.03',
    company: '씨제이대한통운',
    title: '더 운반',
    description: ['"더 운반" 어드민 신규 개발'],
  },
  {
    date: '2022.08 ~ 2023.07',
    company: '씨제이대한통운',
    title: '더 운반',
    description: ['"더 운반" 화주웹 신규 개발 및 그랜드오픈 참여'],
  },
  {
    date: '2022.04 ~ 2022.08',
    company: '놀이의 발견',
    title: '놀발웹, 라운지',
    description: ['부분취소/부분사용 작업'],
  },
  {
    date: '2022.03 ~ 2022.04',
    company: '놀이의 발견',
    title: '놀발웹',
    description: ['클럽포인트/P포인트(=웅진포인트) 연동 작업'],
  },
  {
    date: '2021.12 ~ 2022.03',
    company: '놀이의 발견',
    title: '놀발웹',
    description: ['라운지 스토어 놀발웹으로 이식하는 작업'],
  },
  {
    date: '2021.12',
    company: '놀이의 발견',
    title: 'CPM',
    description: ['구매형 상품에대해 고객 방문 날짜 확정 니즈 충족을 위해 진행된 선사용 티켓 CPM 작업'],
  },
  {
    date: '2021.11',
    company: '놀이의 발견',
    title: '랜딩페이지',
    description: ['짝꿍쌤 검색엔진 노출을 위해 진행된 랜딩페이지 작업'],
  },
  {
    date: '2021.10 ~ 2021.11',
    company: '놀이의 발견',
    title: '놀발웹',
    description: ['회원가입 전환율 상승을 위한 로그인/회원가입 프로세스 개선 작업'],
  },
  {
    date: '2021.09 ~ 2021.10',
    company: '놀이의 발견',
    title: '라운지에서 놀발웹으로 이전하는 작업',
    description: ['이벤트모아보기', '우리아이 페이지'],
  },
  {
    date: '2021.07',
    company: '리버스랩',
    title: 'Yellow Bus',
    description: [
      'Admin2.0 환경구축 및 개발 진행',
      '사용자 정보수집 프로젝트 환경 구축 및 개발 진행',
      '옐로우버스 및 리버스랩 홈페이지 관리',
      '학원관리자 Apollo + GraphQL → REST API 변경',
      'Admin2.0 리뉴얼',
    ],
  },
  {
    date: '2020.11',
    company: '리버스랩',
    title: 'Admin 1.0 GPS Tracking',
    description: ['매니저앱에서 기록한 GPS Tracking 정보관리화면 구현'],
  },
  {
    date: '2020.01',
    company: '몰테일',
    title: '관세청API를 통한 개인통관고유부호 유효성 검증 기능 개발',
    description: ['개발 및 유지보수'],
  },
  {
    date: '2020.01',
    company: '몰테일',
    title: 'sweettracker API를 통한 몰테일 택배배송추적 연동 작업',
    description: ['개발 및 유지보수'],
  },
  {
    date: '2020.01',
    company: '몰테일',
    title: 'pincrux API를 통한 몰테일 광고적립 연동 작업',
    description: ['개발 및 유지보수'],
  },

  {
    date: '2019.12',
    company: '몰테일',
    title: 'okvit plus앱 개발 진행',
    description: ['개발 및 유지보수'],
  },
  {
    date: '2019.11',
    company: '몰테일',
    title: 'summernote 에디터기 연동',
    description: ['개발 및 유지보수'],
  },
  {
    date: '2019.07',
    company: '몰테일',
    title: 'malltail app 리뉴얼 진행',
    description: ['개발 및 유지보수'],
  },
  {
    date: '2019.05',
    company: '몰테일',
    title: 'amazon, gap, taobao, ralph lauren 파싱작업',
    description: ['개발 및 유지보수'],
  },
  {
    date: '2018.08',
    company: '하경소프트',
    title: 'Paypal checkout 간편결제',
    description: ['연동 및 유지보수'],
  },

  {
    date: '2018.07',
    company: '하경소프트',
    title: '트래킹등록프로그램',
    description: ['개발 및 유지보수진행'],
  },
  {
    date: '2018.04',
    company: '하경소프트',
    title: '트래킹수집프로그램',
    description: ['개발 및 유지보수진행'],
  },
  {
    date: '2018.03',
    company: '하경소프트',
    title: '배대지연동서비스',
    description: ['UI제작/개발 및 유지보수 & AKworld, luckybox 연동작업'],
  },
  {
    date: '2017.12',
    company: '하경소프트',
    title: 'XImg(리스트이미지 자동생성 및 불필요한 이미지 삭제 프로그램)',
    description: ['FTP 관련공통함수 개발/배포구현/UI 제작 및 유지보수진행'],
  },
  {
    date: '2017.11',
    company: '하경소프트',
    title: '국내 SNS 다중 로그인 연동',
    description: ['개발 및 유지보수(Naver, Google, Facebook, Kakao)'],
  },

  {
    date: '2017.10',
    company: '하경소프트',
    title: 'XTrans(번역프로그램)',
    description: ['UI제작/파파고를 활용한 개발/유지보수'],
  },
  {
    date: '2017.08',
    company: '하경소프트',
    title: 'Elibox',
    description: ['전반적인 모든 물류창고 관리 로직 기획 및 개발, 관리자/사용자 UI 기획 및 개발, 유지보수'],
  },
  {
    date: '2017.06',
    company: '하경소프트',
    title: 'HTask(사내업무일지)',
    description: ['기획/개발/UI제작 및 유지보수'],
  },
  {
    date: '2017.05',
    company: '하경소프트',
    title: '이니페이에스크로배송등록',
    description: ['기획/개발/UI제작 및 유지보수'],
  },
  {
    date: '2017.03',
    company: '하경소프트',
    title: '국외 SNS Weibo 간편로그인 연동',
    description: ['개발 및 유지보수진행'],
  },

  {
    date: '2017.03',
    company: '하경소프트',
    title: '지식쇼핑 EP 3.0연동 / 다중아이디',
    description: ['화면 UI 제작/유지보수 및 커스터마이징진행'],
  },
  {
    date: '2017.01',
    company: '하경소프트',
    title: 'Orange(구매대행솔루션관리자)',
    description: ['전반적인 모든 부분에 대한 유지보수 및 커스터마이징진행'],
  },
  {
    date: '2016.12',
    company: '하경소프트',
    title: '상품외부등록-네이버카페',
    description: ['UI제작 및 유지보수진행'],
  },
  {
    date: '2016.03',
    company: '하경소프트',
    title: 'Gonelo(배대지창고관리프로그램)',
    description: ['전반적인 모든 부분에 대한 유지보수 및 커스터마이징진행'],
  },
  {
    date: '2014.09 ~ 2015.03',
    company: '코코아',
    title: '한국산업기술평가관리원(KEIT) 사내경영정보시스템(MIS) 재구축 및 모바일개발참여',
    description: ['유지보수 및 커스터마이징'],
  },
  {
    date: '2014.07 ~ 2015.03',
    company: '코코아',
    title: '인천 & 충남소방서 소방장비관리프로그램',
    description: ['유지보수 및 커스터마이징'],
  },

  { date: 'MY HISTORY START', company: '', title: '', description: [''] },
];
