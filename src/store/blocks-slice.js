import { createSlice } from '@reduxjs/toolkit';

const defaultBlockVariants = [
  { variant: 1, color: 'bg-yellow-400', id: 1, isFlip: false, isReady: false },
  { variant: 2, color: 'bg-white', id: 2, isFlip: false, isReady: false },
  { variant: 3, color: 'bg-green-300', id: 3, isFlip: false, isReady: false },
  { variant: 4, color: 'bg-red-700', id: 4, isFlip: false, isReady: false },
  { variant: 5, color: 'bg-lime-500', id: 5, isFlip: false, isReady: false },
  { variant: 6, color: 'bg-cyan-400', id: 6, isFlip: false, isReady: false },
  { variant: 7, color: 'bg-indigo-700', id: 7, isFlip: false, isReady: false },
  { variant: 8, color: 'bg-pink-500', id: 8, isFlip: false, isReady: false },
  { variant: 1, color: 'bg-yellow-400', id: 9, isFlip: false, isReady: false },
  { variant: 2, color: 'bg-white', id: 10, isFlip: false, isReady: false },
  { variant: 3, color: 'bg-green-300', id: 11, isFlip: false, isReady: false },
  { variant: 4, color: 'bg-red-700', id: 12, isFlip: false, isReady: false },
  { variant: 5, color: 'bg-lime-500', id: 13, isFlip: false, isReady: false },
  { variant: 6, color: 'bg-cyan-400', id: 14, isFlip: false, isReady: false },
  { variant: 7, color: 'bg-indigo-700', id: 15, isFlip: false, isReady: false },
  { variant: 8, color: 'bg-pink-500', id: 16, isFlip: false, isReady: false },
];

function randomElementsPosition(array) {
  const order = array.map((element) => element.id);
  order.sort(() => Math.random() - 0.5);

  const newArray = [];

  order.map((number) => {
    newArray.push(array[number - 1]);
  });

  return newArray;
}

const randomBlockVariants = randomElementsPosition(defaultBlockVariants);

function flipFalse(array) {
  array.map((value) => {
    value.isFlip = false;
  });
}

const blocksSlice = createSlice({
  name: 'blocks',
  initialState: {
    blocksVariants: randomBlockVariants,
  },
  reducers: {
    flipBlock(state, action) {
      state.blocksVariants.map((block) => {
        if (block.isFlip === true) {
          if (block.variant === action.payload.variant && block.id != action.payload.id) {
            block.isFlip = true;
            state.blocksVariants.map((value) => {
              if (value.variant === action.payload.variant) {
                value.isReady = true;
                flipFalse(state.blocksVariants);
              }
            });
          } else {
            state.blocksVariants.map((value) => {
              if (value.id === action.payload.id) {
              } else value.isFlip = false;
            });
          }
        } else if (action.payload.id === block.id) {
          block.isFlip = true;
        }
      });
    },
  },
});

export const { flipBlock } = blocksSlice.actions;
export default blocksSlice.reducer;
