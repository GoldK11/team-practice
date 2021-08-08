import React, { useState } from 'react';
import CONST from 'src/assets/js/const';
import BackCard from 'src/components/cards/BackCard';
import 'src/css/pages/Login.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import Navigation from 'src/components/utils/Navigation';
import { getterOne } from 'src/assets/js/router';

const useStyles = makeStyles(() => ({
  root: {
    background: 'white',
    borderRadius: '5px',
  },
  input: {
    color: 'black',
  },
}));

function Login() {
  const [state, setState] = useState(false);
  const handleChange = event => {
    setState(event.target.checked);
  };
  const classes = useStyles();
  return (
    <div className="Login">
      <BackCard name="BackCard__Login" />
      <div className="Login__ID">
        <TextField
          required
          fullWidth
          label={`${CONST.TEXT.ID}`}
          className={classes.root}
          variant="outlined"
          InputProps={{ className: classes.input }}
        />
      </div>
      <div className="Login__PassWord">
        <TextField
          required
          label={`${CONST.TEXT.PASSWORD}`}
          type="password"
          autoComplete="current-password"
          fullWidth
          className={classes.root}
          variant="outlined"
          InputProps={{ className: classes.input }}
        />
      </div>
      <div className="Login__Maintain">
        <FormControlLabel
          control={
            <Checkbox checked={state} onChange={handleChange} name="checked" />
          }
          label="로그인상태유지"
        />
      </div>
      <div className="Login__Find">아이디/비밀번호찾기</div>
      <div className="Login__Button">
        <button
          type="button"
          className="Button MainBody Login__Button__B
        "
        >
          로그인
        </button>
        <Navigation
          item={getterOne(CONST.ROUTER.NAME.SIGNUP)}
          customClass="Button MainBody MainColorText"
        />
        {/* <button type="button" >
          회원가입
        </button> */}
      </div>
    </div>
  );
}

export default Login;
