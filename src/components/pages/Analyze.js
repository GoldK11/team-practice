import React from 'react';
import BackCard from 'src/components/cards/BackCard';

import CONST from 'src/assets/js/const';
import DATA from 'src/assets/js/tempData';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ButtonBase from '@material-ui/core/ButtonBase';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import 'src/css/pages/Analyze.css';

function Analyze() {
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

  const changeAmount = () => {
    console.log('changeAmount');
  };
  const changeScope = () => {
    console.log('changeScope');
  };

  const value = 1;
  const value2 = 2;

  return (
    <div className="Analyze">
      <BackCard />
      <div className="Title SizeRes20 Bold ColorTitle">
        {CONST.TEXT.MAIN_TITLE}
      </div>
      <div className="Upload">
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
      <div className="FileName ">
        <TextField
          id="file-name"
          style={{ minWidth: 120 }}
          label={`${CONST.TEXT.WORD_LIST} ${CONST.TEXT.NAME}`}
          value=""
          onChange={changeFile}
        />
      </div>
      <div className="Item Level">
        <div className="Title">{CONST.TEXT.DIFFICULTY + CONST.TEXT.SELECT}</div>
        <div className="Contents">
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="CheckA"
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="CheckB"
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="CheckC"
          />
        </div>
      </div>
      <div className="Item Amount">
        <div className="Title">{CONST.TEXT.WORD + CONST.TEXT.NUMBER}</div>
        <div className="Contents">
          <RadioGroup
            row
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={changeAmount}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            />
          </RadioGroup>
        </div>
      </div>
      <div className="Item Scope">
        <div className="Title">{CONST.TEXT.SCOPE}</div>
        <div className="Contents">
          <RadioGroup
            row
            aria-label="gender"
            name="gender1"
            value={value2}
            onChange={changeScope}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </div>
      </div>
      <div className="Category">
        <Autocomplete
          id="category"
          style={{ width: 120 }}
          disableClearable
          defaultValue={DATA.CARD.CATEGORY[1]}
          options={DATA.CARD.CATEGORY}
          getOptionLabel={option => option}
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
      <div className="Result">
        <div className="Button MainBody">분석</div>
      </div>
    </div>
  );
}

export default Analyze;
