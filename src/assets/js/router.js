import Main from 'src/components/pages/Main';
import Analyze from 'src/components/pages/Analyze';
import WordList from 'src/components/pages/WordList';
import WordBook from 'src/components/pages/WordBook';
import WordShare from 'src/components/pages/WordShare';
import QuizSelect from 'src/components/pages/QuizSelect';
import QuizFlip from 'src/components/pages/QuizFlip';
import QuizFlipR from 'src/components/pages/QuizFlipR';
import QuizMul from 'src/components/pages/QuizMul';
import QuizMulR from 'src/components/pages/QuizMulR';
import QuizDeform from 'src/components/pages/QuizDeform';
import QuizDeformR from 'src/components/pages/QuizDeformR';
import Join from 'src/components/pages/Join';
import Login from 'src/components/pages/Login';
import Find from 'src/components/pages/Find';
import Mypage from 'src/components/pages/Mypage';
import NotFound from 'src/components/pages/NotFound';

import CONST from 'src/assets/js/const';

const Router = [
  {
    index: 1,
    path: CONST.ROUTER.PATH.MAIN,
    component: Main,
    name: CONST.ROUTER.NAME.MAIN,
    meta: {
      header: CONST.ROUTER.META.POSITION.LEFT,
      authorization: false,
    },
  },
  {
    index: 2,
    path: CONST.ROUTER.PATH.ANALYZE,
    component: Analyze,
    name: CONST.ROUTER.NAME.ANALYZE,
    meta: {
      header: CONST.ROUTER.META.POSITION.RIGHT,
      quick: true,
      authorization: true,
    },
  },
  {
    index: 3,
    path: CONST.ROUTER.PATH.WORD_LIST,
    component: WordList,
    name: CONST.ROUTER.NAME.WORD_LIST,
    meta: {
      // header: CONST.ROUTER.META.POSITION.LEFT,
      authorization: true,
    },
  },
  {
    index: 4,
    path: CONST.ROUTER.PATH.WORD_BOOK,
    component: WordBook,
    name: CONST.ROUTER.NAME.WORD_BOOK,
    meta: {
      // header: CONST.ROUTER.META.POSITION.LEFT,
      authorization: true,
    },
  },
  {
    index: 5,
    path: CONST.ROUTER.PATH.WORD_SHARE,
    component: WordShare,
    name: CONST.ROUTER.NAME.WORD_SHARE,
    meta: {
      header: CONST.ROUTER.META.POSITION.CENTER,
      authorization: false,
    },
  },
  {
    index: 11,
    path: CONST.ROUTER.PATH.QUIZ_SELECT,
    component: QuizSelect,
    name: CONST.ROUTER.NAME.QUIZ_SELECT,
    meta: {
      header: CONST.ROUTER.META.POSITION.CENTER,
      authorization: true,
    },
  },
  {
    index: 12,
    path: CONST.ROUTER.PATH.QUIZ_FLIP,
    component: QuizFlip,
    name: CONST.ROUTER.NAME.QUIZ_FLIP,
    meta: {
      // header: CONST.ROUTER.META.POSITION.LEFT,
      authorization: true,
    },
  },
  {
    index: 13,
    path: CONST.ROUTER.PATH.QUIZ_FLIP_R,
    component: QuizFlipR,
    name: CONST.ROUTER.NAME.QUIZ_FLIP_R,
    meta: {
      // header: CONST.ROUTER.META.POSITION.LEFT,
      authorization: true,
    },
  },
  {
    index: 14,
    path: CONST.ROUTER.PATH.QUIZ_MUL,
    component: QuizMul,
    name: CONST.ROUTER.NAME.QUIZ_MUL,
    meta: {
      // header: CONST.ROUTER.META.POSITION.LEFT,
      authorization: true,
    },
  },
  {
    index: 15,
    path: CONST.ROUTER.PATH.QUIZ_MUL_R,
    component: QuizMulR,
    name: CONST.ROUTER.NAME.QUIZ_MUL_R,
    meta: {
      // header: CONST.ROUTER.META.POSITION.LEFT,
      authorization: true,
    },
  },
  {
    index: 16,
    path: CONST.ROUTER.PATH.QUIZ_DEFORM,
    component: QuizDeform,
    name: CONST.ROUTER.NAME.QUIZ_DEFORM,
    meta: {
      // header: CONST.ROUTER.META.POSITION.LEFT,
      authorization: true,
    },
  },
  {
    index: 17,
    path: CONST.ROUTER.PATH.QUIZ_DEFOR_R,
    component: QuizDeformR,
    name: CONST.ROUTER.NAME.QUIZ_DEFOR_R,
    meta: {
      // header: CONST.ROUTER.META.POSITION.LEFT,
      authorization: true,
    },
  },
  {
    index: 101,
    path: CONST.ROUTER.PATH.JOIN,
    component: Join,
    name: CONST.ROUTER.NAME.JOIN,
    meta: {
      // header: CONST.ROUTER.META.POSITION.RIGHT,
      authorization: false,
    },
  },
  {
    index: 102,
    path: CONST.ROUTER.PATH.LOGIN,
    component: Login,
    name: CONST.ROUTER.NAME.LOGIN,
    meta: {
      header: CONST.ROUTER.META.POSITION.RIGHT,
      authorization: false,
    },
  },
  {
    index: 103,
    path: CONST.ROUTER.PATH.FIND,
    component: Find,
    name: CONST.ROUTER.NAME.FIND,
    meta: {
      // header: CONST.ROUTER.META.POSITION.LEFT,
      authorization: false,
    },
  },
  {
    index: 104,
    path: CONST.ROUTER.PATH.MYPAGE,
    component: Mypage,
    name: CONST.ROUTER.NAME.MYPAGE,
    meta: {
      // header: CONST.ROUTER.META.POSITION.LEFT,
      authorization: true,
    },
  },
  {
    index: 404,
    path: CONST.ROUTER.PATH.NOT_FOUND,
    component: NotFound,
    name: CONST.ROUTER.NAME.NOT_FOUND,
    meta: {
      // header: CONST.ROUTER.META.POSITION.LEFT,
      authorization: false,
    },
  },
];

const getter = (target, value) => {
  return Router.filter(ob => ob.meta[target] === value);
};
const getterHeader = () => {
  return [
    Router.filter(ob => ob.meta.header === CONST.ROUTER.META.POSITION.LEFT),
    Router.filter(ob => ob.meta.header === CONST.ROUTER.META.POSITION.CENTER),
    Router.filter(ob => ob.meta.header === CONST.ROUTER.META.POSITION.RIGHT),
  ];
};

export { getter, getterHeader };
export default Router;
