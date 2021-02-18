import Home from 'src/components/pages/Home';
import Main from 'src/components/pages/Main';
import Setting from 'src/components/pages/Setting';
import WordCheck from 'src/components/pages/WordCheck';
import WordDetail from 'src/components/pages/WordDetail';
import WordBook from 'src/components/pages/WordBook';
import WordList from 'src/components/pages/WordList';
import Quiz from 'src/components/pages/Quiz';
import NotFound from 'src/components/pages/NotFound';
import Login from 'src/components/pages/Login';
import Signup from 'src/components/pages/Signup';
import Mypage from 'src/components/pages/Mypage';
import CONST from 'src/assets/js/const';

const Router = [
  {
    index: 1,
    path: CONST.ROUTER.PATH.HOME,
    component: Home,
    name: CONST.ROUTER.NAME.HOME,
    meta: {
      // position: CONST.ROUTER.META.POSITION.LEFT,
      // category: CONST.ROUTER.META.CATEGORY.APPLICATION,
      home: true,
      authorization: false,
    },
  },
  {
    index: 2,
    path: CONST.ROUTER.PATH.MAIN,
    component: Main,
    name: CONST.ROUTER.NAME.MAIN,
    meta: {
      // position: CONST.ROUTER.META.POSITION.RIGHT,
      // category: CONST.ROUTER.META.CATEGORY.APPLICATION,
      center: true,
      authorization: false,
    },
  },
  {
    index: 21,
    path: CONST.ROUTER.PATH.Quiz,
    component: Quiz,
    name: CONST.ROUTER.NAME.Quiz,
    meta: {
      // position: CONST.ROUTER.META.POSITION.RIGHT,
      // category: CONST.ROUTER.META.CATEGORY.APPLICATION,
      center: true,
      authorization: false,
    },
  },
  {
    index: 11,
    path: CONST.ROUTER.PATH.WORD_CHECK,
    component: WordCheck,
    name: CONST.ROUTER.NAME.WORD_CHECK,
    meta: {
      // position: CONST.ROUTER.META.POSITION.CENTER,
      // category: CONST.ROUTER.META.CATEGORY.APPLICATION,
      authorization: false,
    },
  },
  {
    index: 12,
    path: CONST.ROUTER.PATH.WORD_DETAIL,
    component: WordDetail,
    name: CONST.ROUTER.NAME.WORD_DETAIL,
    meta: {
      // position: CONST.ROUTER.META.POSITION.CENTER,
      // category: CONST.ROUTER.META.CATEGORY.APPLICATION,
      authorization: false,
    },
  },
  {
    index: 13,
    path: CONST.ROUTER.PATH.WORD_BOOK,
    component: WordBook,
    name: CONST.ROUTER.NAME.WORD_BOOK,
    meta: {
      // position: CONST.ROUTER.META.POSITION.CENTER,
      // category: CONST.ROUTER.META.CATEGORY.APPLICATION,
      center: true,
      authorization: false,
    },
  },
  {
    index: 14,
    path: CONST.ROUTER.PATH.WORD_LIST,
    component: WordList,
    name: CONST.ROUTER.NAME.WORD_LIST,
    meta: {
      // position: CONST.ROUTER.META.POSITION.RIGHT,
      // category: CONST.ROUTER.META.CATEGORY.APPLICATION,
      authorization: false,
    },
  },
  {
    index: 101,
    path: CONST.ROUTER.PATH.SIGNUP,
    component: Signup,
    name: CONST.ROUTER.NAME.SIGNUP,
    meta: {
      // position: CONST.ROUTER.META.POSITION.RIGHT,
      // category: CONST.ROUTER.META.CATEGORY.ACCOUNT,
      right: true,
      authorization: false,
    },
  },
  {
    index: 102,
    path: CONST.ROUTER.PATH.LOGIN,
    component: Login,
    name: CONST.ROUTER.NAME.LOGIN,
    meta: {
      // position: CONST.ROUTER.META.POSITION.RIGHT,
      // category: CONST.ROUTER.META.CATEGORY.ACCOUNT,
      right: true,
      authorization: false,
    },
  },
  {
    index: 103,
    path: CONST.ROUTER.PATH.MYPAGE,
    component: Mypage,
    name: CONST.ROUTER.NAME.MYPAGE,
    meta: {
      // position: null,
      // category: CONST.ROUTER.META.CATEGORY.MAIN,
      authorization: true,
      redirect: CONST.ROUTER.PATH.LOGIN,
    },
  },
  {
    index: 104,
    path: CONST.ROUTER.PATH.SETTING,
    component: Setting,
    name: CONST.ROUTER.NAME.SETTING,
    meta: {
      // position: null,
      // category: CONST.ROUTER.META.CATEGORY.MAIN,
      authorization: true,
      redirect: CONST.ROUTER.PATH.LOGIN,
    },
  },
  {
    index: 404,
    path: CONST.ROUTER.PATH.NOT_FOUND,
    component: NotFound,
    name: CONST.ROUTER.NAME.NOT_FOUND,
    meta: {
      // position: null,
      // category: CONST.ROUTER.META.CATEGORY.ETC,
      authorization: false,
    },
  },
];

const getter = (target, value) => {
  return Router.filter(ob => ob.meta[target] === value);
};

export { getter };
export default Router;
