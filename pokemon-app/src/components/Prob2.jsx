import React from 'react';
import Poke from './Poke';

const Prob2 = ({ name1, name2 }) => {
  return (
    <div className="flex md:flex-row flex-col-reverse align-center justify-center">
      <Poke name={name1} />
      <Poke name={name2} />
    </div>
  );
};

export default Prob2;
