import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function CusCheck(props) {
  const { items, checkd, func } = props;
  const checks = items.map(value => {
    const check = (
      <Checkbox
        checked={checkd[value]}
        name={value}
        onChange={func}
        color="primary"
      />
    );

    return <FormControlLabel key={value} label={value} control={check} />;
  });

  return checks;
}

export default CusCheck;
