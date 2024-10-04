import React from 'react';
import { useSelector } from 'react-redux';
import { Block } from '../block/Block';

export const GroupBlocks = () => {
  const blocksVariants = useSelector((state) => state.blocks.blocksVariants);

  return (
    <div className="mx-auto  grid grid-cols-4 grid-rows-4 justify-items-center items-center gap-4">
      {blocksVariants.map((block) => {
        return (
          <Block
            key={block.id}
            id={block.id}
            variant={block.variant}
            color={block.color}
            isFlip={block.isFlip}
            isReady={block.isReady}
          />
        );
      })}
    </div>
  );
};
