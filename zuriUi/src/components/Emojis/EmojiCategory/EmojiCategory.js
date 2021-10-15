import React from 'react';
import { FaSmile, FaPrayingHands, FaLeaf, FaHamburger, FaPlaneDeparture, FaFootballBall, FaLightbulb, FaFlag, FaClock, FaPeace } from 'react-icons/fa';

import './EmojiCategory.css';
const EmojiCategory = ({ category, handleCategory }) => {
  const allCategories = ['smileys-emotion', 'people-body', 'animals-nature', 'food-drink', 'travel-places', 'activities', 'objects', 'symbols', 'flags'];
  return (
    <div className='zc-emc-emojicat'>
      <FaSmile className={`zc-emc-emojicatitems ${category === 'smileys-emotion' ? 'zc-emc-active' : ''}`} onClick={() => handleCategory('smileys-emotion')} />
      <FaPrayingHands className={`zc-emc-emojicatitems ${category === 'people-body' ? 'zc-emc-active' : ''}`} onClick={() => handleCategory('people-body')} />
      <FaLeaf className={`zc-emc-emojicatitems ${category === 'animals-nature' ? 'zc-emc-active' : ''}`} onClick={() => handleCategory('animals-nature')} />
      <FaHamburger className={`zc-emc-emojicatitems ${category === 'food-drink' ? 'zc-emc-active' : ''}`} onClick={() => handleCategory('food-drink')} />
      <FaPlaneDeparture className={`zc-emc-emojicatitems ${category === 'travel-places' ? 'zc-emc-active' : ''}`} onClick={() => handleCategory('travel-places')} />
      <FaFootballBall className={`zc-emc-emojicatitems ${category === 'activities' ? 'zc-emc-active' : ''}`} onClick={() => handleCategory('activities')} />
      <FaLightbulb className={`zc-emc-emojicatitems ${category === 'objects' ? 'zc-emc-active' : ''}`} onClick={() => handleCategory('objects')} />
      <FaPeace className={`zc-emc-emojicatitems ${category === 'symbols' ? 'zc-emc-active' : ''}`} onClick={() => handleCategory('symbols')} />
    </div>
  );
};

export default EmojiCategory;
