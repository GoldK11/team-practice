// all of these contents are temporal

const CONST = {
  APPLICATION: 'WORDATA',

  PLACEHOLDER: {
    TITLE: '제목',
    CATEGORY: '카테고리',
    EMPTY_TABLE: 'No Data',
  },

  TEXT: {
    PERSONAL: '개인',
    ACCOUNT: '계정',
    DIFFICULTY: '난이도',
    MY: '내',
    WORD_LIST: '단어장',
    MAIN_TITLE: '단어장 분석 연구 신청서',
    MORE: '더보기',
    GRADE: '등급',
    MAIL: '메일',
    NAME_: '명',
    PASSWORD: '비밀번호',
    SELECT: '선택',
    ID: '아이디',
    ABOUT: '안내',
    MOVE: '으로 이동',
    NAME: '이름',
    INPUT: '입력',
    INFO: '정보',
    CATOGORY: '카테고리',
    TYPE: '타입',
    FILE: '파일',
    PROFILE: '프로필',
    SETTING: '환경설정',
    LEVEL: 'Lv',
    NOT_FOUND: '404 Page Not Found',
  },

  BUTTON: {
    ID: {
      IMAGE: 'image',
      UPLOAD: 'upload',
      DOWNLOAD: 'download',
      ADD: 'add',
      CREATE: 'create',
      DELETE: 'delete',
      CHANGE: 'change',
      SAVE: 'save',
      ANALYSIS: 'analysis',
      EDIT: 'edit',
      SEARCH: 'search',
      CONFIRM: 'confirm',
      CANCEL: 'cancel',
      MANAGE: 'manage',
      LOGOUT: 'logout',
      LOGIN: 'login',
      PRINT: 'print',
    },
    LABEL: {
      IMAGE: '사진',
      UPLOAD: '업로드',
      DOWNLOAD: '다운로드',
      ADD: '추가',
      CREATE: '생성',
      DELETE: '삭제',
      CHANGE: '변경',
      SAVE: '저장',
      ANALYSIS: '분석',
      EDIT: '수정',
      SEARCH: '검색',
      CONFIRM: '확인',
      CANCEL: '취소',
      MANAGE: '관리',
      LOGOUT: '로그아웃',
      LOGIN: '로그인',
      PRINT: '프린트',
    },
  },

  SELECT: {
    DIFFICULTY: {
      EXPERT: '고급',
      ADVANCED: '상급',
      INTERMEDIATE: '중급',
      BASIC: '초급',
      BEGINNER: '기초',
    },
    CATEGORY: {
      EXAM: '수능',
      NOVEL: '소설',
      ESSAY: '논문',
      ARTICLE: '뉴스',
    },
  },

  ALERT: {
    ERROR: {
      SEARCH: {
        TITLE: '제목을 입력해주세요',
      },
    },
    INFO: {
      //
    },
    SUCCESS: {
      SAVE: '저장되었습니다',
    },
    CONFIRM: {
      //
    },
  },

  TABLE: {
    COLUMNS: {
      LABEL: {},
      VALUE: {},
    },
  },

  ROUTER: {
    PATH: {
      HOME: '/home',
      LOGIN: '/login',
      MAIN: '/main',
      WORD_CHECK: '/word/check',
      WORD_DETAIL: '/word/detail',
      WORD_BOOK: '/word/books',
      WORD_LIST: '/word/list',
      MYPAGE: '/mypage',
      SETTING: '/mypage/setting',
      NOT_FOUND: '*',
    },
    NAME: {
      HOME: 'WORDATA',
      LOGIN: 'Login',
      MAIN: 'Main',
      WORD_CHECK: 'WordCheck',
      WORD_DETAIL: 'WordDetail',
      WORD_BOOK: 'WordBook',
      WORD_LIST: 'WordList',
      MYPAGE: 'Mypage',
      SETTING: 'Setting',
      NOT_FOUND: 'NotFound',
    },
    META: {
      POSITION: {
        RIGHT: 'r',
        CENTER: 'c',
        LEFT: 'l',
      },
      CATEGORY: {
        ETC: null,
        APPLICATION: 1,
        ACCOUNT: 2,
      },
    },
  },
};

export default CONST;
