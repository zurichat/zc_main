import React from 'react';
import style from '../styles/searchNotFound.module.css';
import emoji from '../assets/images/thinking.png';

export const NoResult = ( ) => {
    return(
        <div className={style.main}>
            <div className={style.container}>
            
                {/* For Desktop View */}
                <div className={style.desktop}>
                 <div className={style.text__box}>
                    <div className={style.state}>
                        <div className={style.state__title}>Nothing turned up</div>
                        <div className={style.state__description}>
                        You may want to try using different keywords,
                        checking for typos, or adjusting your filters.
                        <a> Learn how to search in Slack</a>
                        </div>
                    </div>
                    <span className={style.feedback}>
                        <span className={style.feedback__text}>Not the results you expected? </span> 
                        <button className={style.feedback__link}>Give feedback</button>
                    </span>
                 </div>
                </div>

                {/* For Mobile View */}
                <div className={style.mobile}>
                    <img 
                    src={emoji}
                    alt="thinking_face smiley"
                    className={style.smiley}
                    />
                    <div className={style.mobile__text}>
                        No message results found for "your search"
                    </div>
                </div>
            </div>
        </div>
    )
}
