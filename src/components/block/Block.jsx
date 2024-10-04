import React from 'react';
import { useDispatch } from 'react-redux';
import { flipBlock } from '../../store/blocks-slice';

export const Block = ({ id, variant, color, isFlip, isReady }) => {
  const dispatch = useDispatch();

  const defaultColor = 'bg-orange-500';

  function blockHandle() {
    dispatch(flipBlock({ variant, isFlip, id, isReady }));
  }

  return (
    <div
      onClick={isReady === false ? blockHandle : null}
      className={`bg- flex w-32 h-32 cursor-pointer ease-in duration-200  ${
        isFlip === false && isReady === false ?  `${defaultColor} hover:${defaultColor}/50 hover:-translate-y-px` : isReady === true ? `bg-slate-950 cursor-default` : color
      }`}></div>
  );
};
