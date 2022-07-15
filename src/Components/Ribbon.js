import React from 'react';

const Ribbon = (props) => {
  return (
    <div className="new-ribbon absolute top-2 font-bold right-0 text-xs bg-red-600 text-white">
      {props.message}
    </div>
  );
};

export default Ribbon;