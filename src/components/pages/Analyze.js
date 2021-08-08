import React from 'react';
import BackCard from 'src/components/cards/BackCard';
import CusRadio from 'src/components/utils/CusRadio';
import CusCheck from 'src/components/utils/CusCheck';
import Controller from 'src/components/utils/Controller';
import CONST from 'src/assets/js/const';
import DATA from 'src/assets/js/tempData';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ButtonBase from '@material-ui/core/ButtonBase';

import 'src/css/pages/Analyze.scss';

function Analyze() {
  const [file, setFile] = React.useState({ filename: '', filetype: '' });
  const [level, setLevel] = React.useState(DATA.UTILS.LEVEL.checked);
  const [amount, setAmount] = React.useState(DATA.UTILS.AMOUNT[0]);
  const [scope, setScope] = React.useState(DATA.UTILS.SCOPE[0]);
  const [category, setCategory] = React.useState(DATA.UTILS.CATEGORY[0]);

  const amountRadios = (
    <CusRadio
      items={DATA.UTILS.AMOUNT}
      options={{
        value: amount,
        onChange: e => setAmount(e.target.value),
        row: true,
      }}
    />
  );

  const scopeRadios = (
    <CusRadio
      items={DATA.UTILS.SCOPE}
      options={{
        value: scope,
        onChange: e => setScope(e.target.value),
        row: true,
      }}
    />
  );

  const levelChecks = (
    <CusCheck
      items={DATA.UTILS.LEVEL.items}
      checkd={level}
      func={e => setLevel({ ...level, [e.target.name]: e.target.checked })}
    />
  );

  const handleUpload = e => {
    const reader = new FileReader();
    const targetFile = e.target.files[0];
    const { name, type } = Controller.filnameParser(targetFile.name);

    reader.onloadend = () => {
      setFile({ filename: name, filetype: type });
    };
    reader.readAsDataURL(targetFile);
  };

  const handleClick = () => {
    console.log(amount, level, scope, file, category);
  };

  return (
    <div className="Analyze">
      <BackCard name="Main" />
      <div className="Title Size32 Bold ColorTitle">
        {CONST.TEXT.MAIN_TITLE}
      </div>
      <div className="Upload">
        <input
          className="Hidden"
          id="file-upload"
          type="file"
          onChange={handleUpload}
        />
        <ButtonBase className="MainBody Size16">
          <label htmlFor="file-upload">
            {CONST.TEXT.FILE} {CONST.BUTTON.LABEL.UPLOAD}
          </label>
        </ButtonBase>
      </div>
      <div className="FileName ">
        <TextField
          id="file-name"
          style={{ minWidth: 120 }}
          label={`${CONST.TEXT.WORD_LIST} ${CONST.TEXT.NAME}`}
          value={file.filename}
          onChange={e => setFile({ ...file, filename: e.target.value })}
        />
      </div>
      <div className="Item Level">
        <div className="Title">{CONST.TEXT.DIFFICULTY + CONST.TEXT.SELECT}</div>
        <div className="Contents">{levelChecks}</div>
      </div>
      <div className="Item Amount">
        <div className="Title">{CONST.TEXT.WORD + CONST.TEXT.NUMBER}</div>
        <div className="Contents">{amountRadios}</div>
      </div>
      <div className="Item Scope">
        <div className="Title">{CONST.TEXT.SCOPE}</div>
        <div className="Contents">{scopeRadios}</div>
      </div>
      <div className="Category">
        <Autocomplete
          id="category"
          style={{ width: 160 }}
          disableClearable
          defaultValue={DATA.UTILS.CATEGORY[0]}
          options={DATA.UTILS.CATEGORY}
          getOptionLabel={option => option}
          onChange={(e, value) => setCategory(value)}
          renderInput={params => {
            return <TextField {...params} label={CONST.TEXT.CATOGORY} />;
          }}
        />
      </div>
      <div className="Result">
        <ButtonBase className="MainBody Size16">
          <div aria-hidden="true" onClick={handleClick}>
            {CONST.BUTTON.LABEL.ANALYSIS}
          </div>
        </ButtonBase>
      </div>
    </div>
  );
}

export default Analyze;
