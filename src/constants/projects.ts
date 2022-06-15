import shuffle from 'lodash/shuffle';

export type TProject = {
  id: number;
  key: string;
  title: string;
  visible: boolean;
  inlineStyle?: any;
};

export const PROJECTS: TProject[] = shuffle([
  { id: 1, key: `reverselab`, title: `GPS TRACKING`, visible: true },
  {
    id: 2,
    key: `reverselab`,
    title: `Admin2.0 전체 프론트환경구축`,
    visible: true,
  },
  { id: 3, key: `reverselab`, title: `사용자정보수집웹`, visible: true },
  {
    id: 4,
    key: `reverselab`,
    title: `Admin2.0 로그인,태블릿관리,공지사항,운영자관리 작업`,
    visible: true,
  },
  {
    id: 5,
    key: `reverselab`,
    title: `Yellowbus & Reverselab 홈페이지관리`,
    visible: true,
  },
  {
    id: 6,
    key: `reverselab`,
    title: `Academy Admin 로그인환경 변경 및 API전체교체 작업`,
    visible: true,
  },

  {
    id: 100,
    key: `koreacenter`,
    title: `관세청API를 통한 개인통관고유부호 유효성 검증 기능 개발`,
    visible: true,
  },
  {
    id: 101,
    key: `koreacenter`,
    title: `sweettracker API를 통한 몰테일 택배배송추적 연동 작업`,
    visible: true,
  },
  {
    id: 102,
    key: `koreacenter`,
    title: `pincrux API를 통한 몰테일 광고적립 연동 작업`,
    visible: true,
  },
  {
    id: 103,
    key: `koreacenter`,
    title: `okvit plus앱 개발 진행`,
    visible: true,
  },
  {
    id: 104,
    key: `koreacenter`,
    title: `summernote 에디터기 연동`,
    visible: true,
  },
  {
    id: 105,
    key: `koreacenter`,
    title: `malltail APP 리뉴얼 진행`,
    visible: true,
  },
  {
    id: 106,
    key: `koreacenter`,
    title: `amazon, gap, taobao, ralph lauren 파싱작업`,
    visible: true,
  },

  {
    id: 200,
    key: `hakyungsoft`,
    title: `Paypal checkout 간편결제`,
    visible: true,
  },
  {
    id: 201,
    key: `hakyungsoft`,
    title: `트래킹등록프로그램 개발`,
    visible: true,
  },
  {
    id: 202,
    key: `hakyungsoft`,
    title: `트래킹수집프로그램 개발`,
    visible: true,
  },
  {
    id: 203,
    key: `hakyungsoft`,
    title: `배대지연동서비스 개발`,
    visible: true,
  },
  {
    id: 204,
    key: `hakyungsoft`,
    title: `XImg(리스트이미지 자동생성 및 불필요한 이미지 삭제 프로그램) 개발`,
    visible: true,
  },
  {
    id: 205,
    key: `hakyungsoft`,
    title: `국내 SNS 다중 로그인 연동`,
    visible: true,
  },
  { id: 206, key: `hakyungsoft`, title: `번역프로그램(XTrans)`, visible: true },
  {
    id: 207,
    key: `hakyungsoft`,
    title: `배대지물류창고프로그램(Elibox)`,
    visible: true,
  },
  { id: 208, key: `hakyungsoft`, title: `사내업무일지(HTask)`, visible: true },
  {
    id: 209,
    key: `hakyungsoft`,
    title: `이니페이에스크로배송등록`,
    visible: true,
  },
  {
    id: 210,
    key: `hakyungsoft`,
    title: `국외 SNS Weibo 간편로그인 연동`,
    visible: true,
  },
  {
    id: 211,
    key: `hakyungsoft`,
    title: `지식쇼핑 EP 3.0연동 / 다중아이디`,
    visible: true,
  },
  {
    id: 212,
    key: `hakyungsoft`,
    title: `Orange(구매대행솔루션관리자)`,
    visible: true,
  },
  {
    id: 213,
    key: `hakyungsoft`,
    title: `상품외부등록-네이버카페`,
    visible: true,
  },
  {
    id: 214,
    key: `hakyungsoft`,
    title: `고넬로(배대지창고관리프로그램)`,
    visible: true,
  },
  {
    id: 300,
    key: `kocore`,
    title: `한국산업기술평가관리원(KEIT) 사내경영정보시스템(MIS) 재구축 및 모바일개발`,
    visible: true,
  },
  {
    id: 301,
    key: `kocore`,
    title: `인천 & 충남소방서 소방장비관리프로그램`,
    visible: true,
  },
  {
    id: 400,
    key: `nolbal`,
    title: `이벤트모아보기, 우리아이 페이지`,
    visible: true,
  },
  {
    id: 401,
    key: `nolbal`,
    title: `회원가입 전환율 상승을 위한 로그인/회원가입 프로세스 개선 작업`,
    visible: true,
  },
  {
    id: 402,
    key: `nolbal`,
    title: `짝꿍쌤 검색엔진 노출을 위해 진행된 랜딩페이지 작업`,
    visible: true,
  },
  {
    id: 403,
    key: `nolbal`,
    title: `구매형 상품에대해 고객 방문 날짜 확정 니즈 충족을 위해 진행된 선사용 티켓 CPM 작업`,
    visible: true,
  },
  {
    id: 404,
    key: `nolbal`,
    title: `라운지 스토어 놀발웹으로 이식하는 작업`,
    visible: true,
  },
  {
    id: 406,
    key: `nolbal`,
    title: `클럽포인트/P포인트(=웅진포인트) 연동 작업`,
    visible: true,
  },
  {
    id: 407,
    key: `nolbal`,
    title: `부분취소/부분사용 작업`,
    visible: true,
  },
]);

export const PROJECTS_DETAIL = [
  // reverselab
  {
    id: 1,
    duties: ['Front-End'],
    mainTitle: 'GPS Tracking',
    subTitle: '매니저앱에서 기록한 GPS Tracking 정보를 관리하기 위해 진행된 작업입니다.',
    task: '화면 구현 및 API 연동',
    workingTime: '1주 이내',
    frontend: 'React With JavaScript, Redux, HTML5, CSS, Bootstrap, Figma',
    backend: 'AWS ELB & EC2, Amazon S3, AWS Cloud front, Docker, Radis, Python, MySQL',
    otherTools: 'Bitbucket, Sourcetree, Swagger, Jira, Notion, Slack',
  },
  {
    id: 2,
    duties: ['Front-End'],
    mainTitle: 'Admin2.0 환경구축',
    subTitle:
      '사내 백오피스 프로그램으로 기존  PHP & jquery 등으로 이루어진 Admin1.0을 새로운 환경으로 구축하기 위해 진행된 작업입니다.',
    task: '전체 프론트단 환경구축',
    workingTime: '2주 이내',
    frontend: 'React With JavaScript, MobX, HTML5, Scss, Material-UI, Storybook, Figma, Zeplin',
    backend: 'AWS ELB & EC2, Amazon S3, AWS Cloud front, Spring Boot, JWT Web Token, MySQL',
    otherTools: 'Bitbucket, Sourcetree, Swagger, Jira, Notion, Slack',
  },
  {
    id: 3,
    duties: ['Front-End'],
    mainTitle: '사용자 정보수집웹',
    subTitle:
      '학부모들에게 발송되는 문자내에 포함된 링크를 통하여 각 자녀의 요일별 등하원정보를 네이버지도를 활용하여 기재할 수 있습니다.',
    task: '환경구축 & 배포환경구축 & 개발',
    workingTime: '3주 이내',
    frontend:
      'React With JavaScript, MobX, HTML5, Scss, Material-UI, Storybook, Figma, Zeplin, Naver Map',
    backend: 'AWS ELB & EC2, Amazon S3, AWS Cloud front, Spring Boot, JWT Web Token, MySQL',
    otherTools: 'Bitbucket, Sourcetree, Swagger, Jira, Notion, Slack',
  },
  {
    id: 4,
    duties: ['Front-End'],
    mainTitle: 'Admin2.0 개발',
    subTitle: '로그인 & 태블릿관리 & 공지사항 & 운영자관리 페이지에 대한 작업입니다.',
    task: 'JWT토큰활용 로그인 & 태블릿관리 & 공지사항 & 운영자관리 페이지에대한 작업진행을 하면서 전반적인 공통 컴포넌트개발(toast, modal, table, button...등)도 같이 진행되었습니다.',
    workingTime: '∞',
    frontend:
      'React With JavaScript, MobX, HTML5, Scss, Material-UI, Storybook, Figma, Zeplin, react-quill editor',
    backend: 'AWS ELB & EC2, Amazon S3, AWS Cloud front, Spring Boot, JWT Web Token, MySQL',
    otherTools: 'Bitbucket, Sourcetree, Swagger, Jira, Notion, Slack',
  },
  {
    id: 5,
    duties: ['Front-End'],
    mainTitle: ' Yellowbus & Reverselab 홈페이지 관리',
    subTitle: '옐로우버스 및 리버스랩 홈페이지에 대한 전반적인 유지보수 작업입니다.',
    task: '홈페이지 유지보수',
    workingTime: '∞',
    frontend: 'Vanilla JavaScript, HTML5, CSS',
    backend: 'AWS ELB & EC2, Amazon S3, AWS Cloud front, Docker',
    otherTools: 'Bitbucket, Sourcetree, Swagger, Jira, Notion, Slack',
  },
  {
    id: 6,
    duties: ['Front-End'],
    mainTitle: 'Academy Admin API 교체 및 로그인인증환경 변경',
    subTitle:
      '기존에 Apollo + GraphQL로 되어있던 로그인처리 및 데이터처리부분을 JWT Web Token방식과 REST API로 교체하는작업 입니다.',
    task: '개발 및 유지보수',
    workingTime: '2주 이내',
    frontend: 'React With TypeScript, Context API, HTML5, styled-components',
    backend: 'AWS ELB & EC2, Amazon S3, AWS Cloud front, Spring Boot, JWT Web Token, MySQL',
    otherTools: 'Bitbucket, Sourcetree, Swagger, Jira, Notion, Slack',
  },

  // koreacenter
  {
    id: 100,
    mainTitle: '관세청API를 통한 개인통관고유부호 유효성 검증 기능 개발',
    subTitle:
      '몰테일을 통하여 배송대행진행시, 기재하는 개인통관고유부호에대해 관세청API를 통해 유효성 검증을 하는 작업을 진행했습니다.',
    task: '개발 및 유지보수',
    workingTime: '1주 이내',
    frontend: 'HTML5, JavaScript, jQuery, CSS',
    backend: 'Linux(Nginx), PHP4, Mysql',
    otherTools: 'SVN',
  },
  {
    id: 101,
    duties: ['Front-End', 'Back-End'],
    mainTitle: 'sweettracker API를 통한 몰테일 택배배송추적 연동 작업',
    subTitle: 'sweettracker API를 이용하여 몰테일내에 택배배송조회기능을 개발하였습니다.',
    task: '개발 및 유지보수',
    workingTime: '1주 이내',
    frontend: 'HTML5, JavaScript, jQuery, CSS',
    backend: 'Linux(Nginx), PHP4, Mysql',
    otherTools: 'SVN',
  },
  {
    id: 102,
    duties: ['Front-End', 'Back-End'],
    mainTitle: 'pincrux API를 통한 몰테일 광고적립 연동 작업',
    subTitle: 'pincrux API를 이용하여 몰테일내에 광고적립기능을 개발하였습니다.',
    task: '개발 및 유지보수',
    workingTime: '1주 이내',
    frontend: 'HTML5, JavaScript, jQuery, CSS',
    backend: 'Linux(Nginx), PHP4, Mysql',
    otherTools: 'SVN',
  },
  {
    id: 103,
    duties: ['Front-End', 'Back-End'],
    mainTitle: 'okvit plus앱 개발 진행',
    subTitle:
      '약 200여곳의 국내쇼핑몰(젝시믹스,뮬라웨어,모코블링,체리코코등)에 판매하는 상품에 대한 역직구앱입니다.',
    task: '개발 및 유지보수',
    workingTime: '한개월 소요',
    frontend: 'HTML5, JavaScript, jQuery, CSS',
    backend: 'Linux(Nginx), PHP4, Mysql',
    otherTools: 'SVN',
  },
  {
    id: 104,
    duties: ['Front-End', 'Back-End'],
    mainTitle: 'summernote 에디터기 연동',
    subTitle: '몰테일내에있는 핫딜게시판에 썸머노트에디터기연동을 진행하였습니다.',
    task: '개발 및 유지보수',
    workingTime: '1주 이내',
    frontend: 'HTML5, JavaScript, jQuery, CSS',
    backend: 'Linux(Nginx), PHP4, Mysql',
    otherTools: 'SVN',
  },
  {
    id: 105,
    duties: ['Front-End', 'Back-End'],
    mainTitle: 'malltail APP 리뉴얼 진행',
    subTitle: '몰테일앱 전체 리뉴얼 진행에 모든 부분을 참여하였습니다.',
    task: '개발 및 유지보수',
    workingTime: '2개월 소요',
    frontend: 'HTML5, JavaScript, jQuery, CSS',
    backend: 'Linux(Nginx), PHP4, Mysql',
    otherTools: 'SVN',
  },
  {
    id: 106,
    duties: ['Front-End', 'Back-End'],
    mainTitle: 'amazon, gap, taobao, ralph lauren 파싱작업',
    subTitle:
      '몰테일 다해줌서비스(구매및배송대행을 해주는 서비스) 제공 상점으로 위 사이트의 파싱작업을 진행하였습니다.',
    task: '개발 및 유지보수',
    workingTime: '∞',
    frontend: 'HTML5, JavaScript, jQuery, CSS',
    backend: 'Linux(Nginx), PHP4, Mysql',
    otherTools: 'SVN',
  },

  // hakyungsoft
  {
    id: 200,
    duties: ['Front-End', 'Back-End'],
    mainTitle: 'Paypal checkout 간편결제',
    subTitle:
      '고객사중 페이팔결제방식연동 요청업체가 존재하여 paypal에서제공해주는 checkout방식으로 연동진행',
    task: '개발 및 유지보수',
    workingTime: '1주 이내',
    frontend: 'HTML5, JavaScript, jQuery, CSS',
    backend: 'Windows, PHP4, Mysql',
    otherTools: 'FTP',
  },
  {
    id: 201,
    duties: ['Front-End', 'Back-End'],
    mainTitle: '트래킹등록프로그램',
    subTitle:
      '트래킹등록프로그램을 통해 수집된 트래킹정보를 selenium을 활용하여 배송업체(ex. Akworld)로부터 트래킹정보를 등록하는프로그램을 개발하였습니다.',
    task: '개발 및 유지보수',
    workingTime: '1주 이내',
    frontend: 'HTML5, JavaScript, jQuery, CSS',
    backend:
      'Windows, Linux(CentOS 6), Python, PHP4, Python36, pyinstaller 3.3, selenium 3.6.0, mysql-connector-python 2.1.7, mysqlclient, flask 0.12.2, chromedriver',
    otherTools: 'FTP',
  },
  {
    id: 202,
    duties: ['Front-End', 'Back-End'],
    mainTitle: '트래킹수집프로그램',
    subTitle:
      'selenium을 활용하여 해외쇼핑몰(ex. 아마존)로부터 트래킹정보를 가져오는 프로그램을 개발하였습니다.',
    task: '개발 및 유지보수',
    workingTime: '2주 이내',
    frontend: 'HTML5, JavaScript, jQuery, CSS',
    backend:
      'Windows, Linux(CentOS 6), Python, PHP4, Python36, pyinstaller 3.3, selenium 3.6.0, mysql-connector-python 2.1.7, mysqlclient, flask 0.12.2, chromedriver',
    otherTools: 'FTP',
  },
  {
    id: 203,
    duties: ['Front-End', 'Back-End'],
    mainTitle: '배대지연동서비스(Elihub)',
    subTitle:
      '쇼핑몰과 배송업체간에 데이터가 전송될 때 원하는 형태(ex. xml, json)로 가공 후 전송하고, 배송업체에서 변경된 배송단계에대해서도 주기적으로 동기화가 이루어지는 솔루션으로 프로그램개발 및 Elihub와 배송업체(Akword, luckybox) 연동작업을 진행하였습니다.',
    task: '퍼블리싱/개발 및 유지보수 & AKworld, luckybox 연동작업 진행',
    workingTime: '2주 이내',
    frontend: 'HTML5, JavaScript, jQuery, CSS, XML',
    backend: 'Windows, Linux(CentOS 6), PHP4, MariaDB',
    otherTools: 'FTP',
  },
  {
    id: 204,
    duties: ['Front-End', 'Back-End'],
    mainTitle: 'XImg(리스트이미지 자동생성 및 불필요한 이미지 삭제 프로그램)',
    subTitle:
      '해외 쇼핑몰에서 서버 아이피 차단 등 여러가지 이유로 인해 수집된 상품의 이미지가 쇼핑몰에서 제대로 보이지 않는 경우 PC에서 이미지를 다운로드 하여 서버로 전송하는 프로그램개발을 진행하였습니다.',
    task: '퍼블리싱/개발 및 유지보수',
    workingTime: '2개월 이내',
    frontend: 'HTML5, JavaScript, jQuery, Bootstrap, CSS',
    backend:
      'Windows, PHP4, MariaDB, Flask, Python36, InstallFactory 2.70, Pyodbc, requests, Pillow, Pyinstaller, PyQt5, Flask, pyodbc',
    otherTools: 'FTP',
  },
  {
    id: 205,
    duties: ['Front-End', 'Back-End'],
    mainTitle: '국내 SNS 다중 로그인 연동',
    subTitle:
      '기존에 존재하는 SNS 로그인 연동방식은 하나의 도메인에 대해서만 로그인연동이 가능했는데, 다중으로 도메인을 사용하는 업체들이 늘어나면서 도메인별로 SNS(Naver, Google, Facebook, Kakao) 키값을 다르게 저장하여 로그인처리할 수 있도록 개발을 진행하였습니다.',
    task: '퍼블리싱/개발 및 유지보수',
    workingTime: '2개월 이내',
    frontend: 'HTML5, JavaScript, jQuery, Bootstrap, CSS',
    backend: 'Windows, PHP4, Mssql',
    otherTools: 'FTP',
  },
  {
    id: 206,
    duties: ['Front-End', 'Back-End'],
    mainTitle: '번역프로그램(XTrans)',
    subTitle:
      '타솔루션을 이용하여 수집된 상품들의 상품명, 브랜드명등이 한글이 아닌상태로 넘어와 업체에서 번역솔루션 요청을 많이하여 진행된 프로젝트로 구글 및 파파고를 활용하여 상품정보를 번역하는 기능을 개발하였습니다.',
    task: '퍼블리싱/개발 및 유지보수',
    workingTime: '1개월 이내',
    frontend: 'HTML5, JavaScript, jQuery, Bootstrap, CSS',
    backend:
      'Windows, Linux(CentOS 6), Python, PHP4, Mssql, Mysql, Python36, pyinstaller 3.3.1, selenium 2.18.4, mysql.connector 2.1.7, flask 0.12.2, chromedriver, googletrans 2.3.0',
    otherTools: 'FTP',
  },
  {
    id: 207,
    duties: ['Front-End', 'Back-End'],
    mainTitle: '배대지물류창고프로그램(Elibox)',
    subTitle:
      '배송대행지에 있는 창고에서 사용되는 프로그램으로 입고-검수-포장-발송마감-출고까지의 과정들 관리가 가능한 프로그램을 개발하였습니다.',
    task: '전반적인 모든 물류창고 관리 로직 기획 및 개발, 관리자/사용자 UI 기획 및 개발, 유지보수, 커스터마이징',
    workingTime: '3개월 이내',
    frontend: 'HTML5, JavaScript, jQuery, Bootstrap, CSS, jqGrid',
    backend: 'Linux(CentOS 6), Python, PHP4, Codeigniter',
    otherTools: 'FTP',
  },
  {
    id: 208,
    duties: ['Front-End', 'Back-End'],
    mainTitle: '사내업무일지(HTask)',
    subTitle:
      '직원별 업무관리를 웹에서 간편하게 일일업무보고를 할 수 있도록 만든 프로그램을 개발하였습니다.',
    task: '기획 & 개발 & 퍼블리싱 및 유지보수',
    workingTime: '1개월 이내',
    frontend: 'HTML5, JavaScript, jQuery, Bootstrap, CSS, jqGrid',
    backend: 'Linux(CentOS 6), Python, PHP4, Codeigniter, Mssql',
    otherTools: 'FTP',
  },
  {
    id: 209,
    duties: ['Front-End', 'Back-End'],
    mainTitle: '이니페이에스크로배송등록',
    subTitle:
      '이니시스 에스크로 배송등록 및 수정을 쇼핑몰관리자페이지에서 가능하도록 하는 기능을 개발하였습니다.',
    task: '기획 & 개발 & 퍼블리싱 및 유지보수',
    workingTime: '1개월 이내',
    frontend: 'HTML5, JavaScript, jQuery, CSS',
    backend: 'Windows, PHP4, Mssql',
    otherTools: 'FTP',
  },
  {
    id: 210,
    duties: ['Front-End', 'Back-End'],
    mainTitle: '국외 SNS Weibo 간편로그인 연동',
    subTitle:
      '해외구매대행 솔루션을 이용하는 업체 쇼핑몰내에 중국 메신저인 Weibo 간편로그인기능을 개발하였습니다.',
    task: 'Weibo API를 이용한 간편로그인 연동작업',
    workingTime: '1주 이내',
    frontend: 'HTML5, JavaScript, jQuery, CSS',
    backend: 'Windows, PHP4, Mssql',
    otherTools: 'FTP',
  },
  {
    id: 211,
    duties: ['Front-End', 'Back-End'],
    mainTitle: '지식쇼핑 EP 3.0연동 / 다중아이디',
    subTitle:
      '기존 지식쇼핑 EP2.0버전에서 EP3.0 버전으로 변경됨에 따른 연동작업이 진행되었으며, 그 후 지식쇼핑다중아이디 EP 생성과관련된 개발작업을 진행하였습니다.',
    task: '화면 UI 제작/ 유지보수 및 커스터마이징진행',
    workingTime: '1개월 이내',
    frontend: 'HTML5, JavaScript, jQuery, CSS, XML',
    backend: 'Windows, Linux(CentOS 6), PHP4, Mssql',
    otherTools: 'FTP',
  },
  {
    id: 212,
    duties: ['Front-End', 'Back-End'],
    mainTitle: 'Orange(구매대행솔루션관리자)',
    subTitle:
      '해외구매 대행 업무에 최적화된 쇼핑몰 프로그램으로 유지보수 및 커스터마이징을 진행하였습니다. ',
    task: '전반적인 모든 부분에 대한 유지보수 및 커스터마이징진행',
    workingTime: '∞',
    frontend: 'HTML5, JavaScript, jQuery, CSS, XML',
    backend: 'Windows, Linux(CentOS 6), PHP4, Mssql',
    otherTools: 'FTP',
  },
  {
    id: 213,
    duties: ['Front-End', 'Back-End'],
    mainTitle: '[프론트] 상품외부등록-네이버카페',
    subTitle:
      '해외 구매대행솔루션내에 존재하는 상품들을 네이버카페에 전송하는 기능으로 전송을 위해 필요한 UI제작을 진행하였습니다. ',
    task: '퍼블리싱 및 유지보수',
    workingTime: '2주 이내',
    frontend: 'HTML5, JavaScript, jQuery, CSS',
    backend: 'Windows, PHP4, Mssql',
    otherTools: 'FTP',
  },
  {
    id: 214,
    duties: ['Front-End', 'Back-End'],
    mainTitle: '고넬로(배대지창고관리프로그램)',
    subTitle:
      '배송대행지의 물류창고에서 사용되는 입고부터 출고까지의 모든 과정을 관리하는 프로그램으로 유지보수 및 커스터마이징을 진행하였습니다.',
    task: '전반적인 모든 부분에 대한 유지보수 및 커스터마이징진행',
    workingTime: '∞',
    frontend:
      'MVC 기반으로 자체 개발 된 사내 프레임워크, HTML5, JavaScript, jQuery, jqGrid, CSS, XML',
    backend: 'Windows, PHP4, CUBRID',
    otherTools: 'FTP',
  },

  // kocore
  {
    id: 300,
    duties: ['Front-End', 'Back-End'],
    mainTitle: '한국산업기술평가관리원(KEIT) 사내경영정보시스템(MIS) 재구축 및 모바일개발참여',
    subTitle:
      '기존 ASP로 되어있던 시스템을 Xplatform & 전자정부프레임워크로 변경하는 프로젝트입니다.',
    task: 'Xplatform을 이용한 기본메뉴개발 / Rexpert를 이용한 메뉴별 문서서식작성 및 데이터매칭작업 / 사내경영정보시스템 모바일버전 개발',
    workingTime: '7개월 소요',
    frontend: 'JSP, HTML, JavaScript, jQuery, CSS',
    backend: 'Windows, JAVA, Oracle',
    otherTools: 'egovframework, Xplatform, Rexpert',
  },
  {
    id: 301,
    duties: ['Front-End', 'Back-End'],
    mainTitle: '인천 & 충남소방서 소방장비관리프로그램',
    subTitle:
      '인천 & 중남소방서에서 사용되는 소방장비관리프로그램에 대해 유지보수 및 커스터마이징을 진행하였습니다.',
    task: '유지보수 및 커스터마이징작업',
    workingTime: '∞',
    frontend: 'egovframework, MVC2, JSP, HTML, JavaScript, jQuery, CSS.',
    backend: 'Windows, JAVA, MS-SQL',
  },
  // nolbal
  {
    id: 400,
    duties: ['Front-End'],
    mainTitle: '라운지 이식 작업',
    subTitle: '[놀발웹] 라운지에서 놀발웹으로 이식하기위해 진행된 작업입니다.',
    task: '이벤트모아보기, 우리아이 페이지 기능 개발',
    workingTime: '1개월 이내',
    frontend:
      'React With TypeScript, NextJs, Redux, Redux-Toolkit, styled-components, Figma, Zeplin',
    otherTools: 'Github, Sourcetree, Postman, Jira, Notion, Confluence, Slack',
  },
  {
    id: 401,
    duties: ['Front-End'],
    mainTitle: '[놀발웹] 회원가입 간편로그인 작업',
    subTitle: '회원가입 전환율 상승을 위한 로그인/회원가입 프로세스 개선 작업입니다.',
    task: '퍼블리싱/기능 개발',
    workingTime: '1개월 이내',
    frontend:
      'React With TypeScript, NextJs, Redux, Redux-Toolkit, styled-components, Figma, Zeplin',
    otherTools: 'Github, Sourcetree, Postman, Jira, Notion, Confluence, Slack',
  },
  {
    id: 402,
    duties: ['Front-End'],
    mainTitle: '짝꿍쌤 랜딩페이지 작업',
    subTitle: '[CPM] 짝꿍쌤 검색엔진 노출을 위해 진행된 랜딩페이지 작업입니다.',
    task: '퍼블리싱/기능 개발',
    workingTime: '1개월 이내',
    frontend: 'React With TypeScript, CRA, Redux, Redux-Toolkit, styled-components, Figma, Zeplin',
    backend: 'django, poetry 등...',
    otherTools: 'Github, Sourcetree, Postman, Jira, Notion, Confluence, Slack',
  },
  {
    id: 403,
    duties: ['Front-End'],
    mainTitle: '[CPM] 선사용티켓관련 작업',
    subTitle:
      '구매형 상품에대해 고객 방문 날짜 확정 니즈 충족을 위해 진행된 선사용 티켓 기능개발 작업입니다.',
    task: '퍼블리싱/기능 개발',
    workingTime: '1개월 이내',
    frontend: 'React With TypeScript, CRA, Redux, Redux-Toolkit,styled-components, Figma, Zeplin',
    otherTools: 'Github, Sourcetree, Postman, Jira, Notion, Confluence, Slack',
  },
  {
    id: 404,
    duties: ['Front-End'],
    mainTitle: '[놀발웹] 라운지 이식 작업',
    subTitle: '라운지내에 있는 스토어기능을 놀발웹으로 이식하기위해 진행된 작업입니다.',
    task: '퍼블리싱/기능 개발',
    workingTime: '4개월 이내',
    frontend:
      'React With TypeScript, NextJs, Redux, Redux-Toolkit,styled-components, Figma, Zeplin',
    otherTools: 'Github, Sourcetree, Postman, Jira, Notion, Confluence, Slack',
  },
  {
    id: 406,
    duties: ['Front-End'],
    mainTitle: '[놀발웹] 클럽포인트/P포인트(=웅진포인트) 연동',
    subTitle:
      '결제시 결제수단으로 클럽포인트/P포인트(=웅진포인트)를 사용할 수 있도록 하기위해 진행된 작업입니다.',
    task: '퍼블리싱/기능 개발',
    workingTime: '1개월 이내',
    frontend:
      'React With TypeScript, NextJs, Redux, Redux-Toolkit,styled-components, Figma, Zeplin',
    otherTools: 'Github, Sourcetree, Postman, Jira, Notion, Confluence, Slack',
  },
  {
    id: 407,
    duties: ['Front-End'],
    mainTitle: '[놀발웹] 부분취소/부분사용 작업',
    subTitle: '결제후 부분취소 혹은 부분사용이 가능하도록 하기위해 진행된 작업입니다.',
    task: '퍼블리싱/기능 개발',
    workingTime: '3개월 이내',
    frontend:
      'React With TypeScript, NextJs, Redux, Redux-Toolkit,styled-components, Figma, Zeplin',
    otherTools: 'Github, Sourcetree, Postman, Jira, Notion, Confluence, Slack',
  },
];
