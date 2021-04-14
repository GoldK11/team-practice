// all of these contents are temporal

const CONST = {
  APPLICATION: 'WORDATA',

  PLACEHOLDER: {
    TITLE: '제목',
    CATEGORY: '카테고리',
    EMPTY_TABLE: 'No Data',
  },

  TEXT: {
    NUMBER: '개수',
    PERSONAL: '개인',
    ACCOUNT: '계정',
    SCOPE: '공개범위',
    DIFFICULTY: '난이도',
    MY: '내',
    WORD: '단어',
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
      MAIN: '/',
      ANALYZE: '/w_analyze',
      WORD_LIST: '/w_list',
      WORD_BOOK: '/w_books',
      WORD_SHARE: 'w_share',
      QUIZ_SELECT: '/wq_select',
      QUIZ_FLIP: '/wq_flip',
      QUIZ_FLIP_R: '/wq_flip_result',
      QUIZ_MUL: '/wq_mul',
      QUIZ_MUL_R: '/wq_mul_result',
      QUIZ_DEFORM: '/wq_deform',
      QUIZ_DEFOR_R: '/wq_deform_result',
      JOIN: '/join',
      LOGIN: '/login',
      FIND: '/find',
      MYPAGE: '/mypage',
      SETTING: '/setting',
      NOT_FOUND: '*',
    },
    NAME: {
      MAIN: 'WORDATA',
      ANALYZE: '단어 분석하기',
      WORD_LIST: '단어 리스트',
      WORD_BOOK: '내 단어장 목록',
      WORD_SHARE: '단어 공유 순위',
      QUIZ_SELECT: '퀴즈 선택',
      QUIZ_FLIP: '카드 뒤집기',
      QUIZ_FLIP_R: '카드 뒤집기 결과',
      QUIZ_MUL: '객관식',
      QUIZ_MUL_R: '객관식 결과',
      QUIZ_DEFORM: '시험 변형',
      QUIZ_DEFOR_R: '시험 변형 결과',
      JOIN: '회원가입',
      LOGIN: '로그인',
      FIND: 'ID/PW 찾기',
      MYPAGE: '마이페이지',
      SETTING: '설정',
      NOT_FOUND: '*',
    },
    META: {
      POSITION: {
        RIGHT: 'r',
        CENTER: 'c',
        LEFT: 'l',
      },
    },
  },
};

export default CONST;
