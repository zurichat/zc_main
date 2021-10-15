import React, { useState } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

import './Emoji.css';


const Em = ({ handleEmojiClicked }) => {

  const [chosenEmoji, setChosenEmoji] = useState('');
  const addEmoji = (e) => {
    
    setChosenEmoji(e.native);
  };
  const resetEmoji = () => {
    setChosenEmoji('');
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <Picker onSelect={(e) => handleEmojiClicked(e)} />
    </div>
  );
};
export const RenderEmoji = ({ chosenEmoji }) => <div>{chosenEmoji}</div>;
export default Em;
