import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

function CusRadio(props) {
  const { options, items } = props;
  const radios = items.map(value => (
    <FormControlLabel
      key={value}
      value={value}
      control={<Radio color="primary" />}
      label={value}
    />
  ));

  return <RadioGroup {...options}>{radios}</RadioGroup>;
}

export default CusRadio;
