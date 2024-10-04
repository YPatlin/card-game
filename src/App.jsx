import React from 'react';
import './App.css';
import { GroupBlocks } from './components/group-blocks/Group-Blocks';

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-950 text-white">
      <GroupBlocks />
    </div>
  );
}

export default App;
