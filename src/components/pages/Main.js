import React from 'react';
import BackCard from 'src/components/cards/BackCard';

import CONST from 'src/assets/js/const';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ButtonBase from '@material-ui/core/ButtonBase';

import 'src/css/pages/Main.scss';

function Main() {
  const handleUpload = e => {
    console.log('file change', e.target.files);
    // const reader = new FileReader();
    // const file = e.target.files[0];
    // const { name, type } = controller.filnameParser(file.name);

    // reader.onloadend = () => {
    //   this.setState({
    //     fileName: name,
    //     fileType: type,
    //   });
    // };
    // reader.readAsDataURL(file);
  };

  const changeFile = () => {
    console.log('changeFile');
    // this.setState({ fileName: e.target.value });
  };

  const changeCategory = (e, value) => {
    console.log('changeCategory', value);
  };

  return (
    <div className="Main">
      <BackCard name="BackCard__Main" />
      <div className="Main__Title SizeRes20 Bold ColorTitle">
        {CONST.TEXT.MAIN_TITLE}
      </div>
      <div className="Main__Upload">
        <input
          className="Hidden"
          id="file-upload"
          type="file"
          onChange={handleUpload}
        />
        <ButtonBase>
          <label htmlFor="file-upload" className="Button MainBody">
            {CONST.TEXT.FILE} {CONST.BUTTON.LABEL.UPLOAD}
          </label>
        </ButtonBase>
      </div>
      <div className="Main__FileName">
        <TextField
          id="file-name"
          style={{ minWidth: 120 }}
          label={`${CONST.TEXT.WORD_LIST} ${CONST.TEXT.NAME}`}
          value=""
          onChange={changeFile}
        />
      </div>
      <div className="Main__Level">레벨선택</div>
      <div className="Main__Amount">단어개수 선택</div>
      <div className="Main__Category">
        <Autocomplete
          id="category"
          style={{ width: 120 }}
          disableClearable
          defaultValue={CONST.DATA.CARD.CATEGORY[1]}
          options={CONST.DATA.CARD.CATEGORY}
          getOptionLabel={option => option.title}
          onChange={changeCategory}
          renderInput={params => {
            return (
              <TextField
                {...params}
                label={`${CONST.TEXT.CATOGORY} ${CONST.TEXT.SELECT}`}
              />
            );
          }}
        />
      </div>
      <div className="MainBody Main__Setting"> </div>
      <div className="Main__Result">
        <div className="Button MainBody">분석</div>
      </div>
    </div>
  );
}

export default Main;
