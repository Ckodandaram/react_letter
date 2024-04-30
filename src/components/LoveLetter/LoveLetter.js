import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './kushi.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`} style={{ maxHeight: isFullSize ? 'none' : '200px', overflowY: 'auto' }}>
      
          My dearest Kundanapu Bomma 🖤,<br/><br/>

          &emsp;&emsp;&emsp;&emsp;Never before have I felt so fortunate as to have fallen for someone as extraordinary as you... I adore you beyond words! 😊<br/>

          &emsp;&emsp;&emsp;&emsp;The first time I laid eyes on you during the pooja, I was simply amazed by your beauty. From that moment onward, I yearned to engage in conversation with you. The anticipation only intensified my feelings for you, and when I found myself seated next to you in the exam hall and in the tempo,You can't imagine the whirlwind of emotions that swept over me each time you were near.<br/>

          &emsp;&emsp;&emsp;&emsp;After much contemplation, I finally mustered the courage to confess my feelings to you. However, I understand that I might not have received a response from you at that time.<br/>
          .<br/>
          .<br/>
          .<br/>
          .<br/>
          .<br/>
          .<br/>
          .<br/>
          &emsp;Now, I'd like to pose a question to you based entirely on your comfort and interest: Would you be open to meeting with me?<br/>
          .<br/>
          .<br/>
          .<br/>
          .<br/>
          .<br/>
          .<br/>
          .<br/>
          Always yours,<br/>
          -R@nil<br/>
        .<br/>
        .<br/>
        .<br/>
        .<br/>
        .<br/>
        .<br/>
        .<br/>
        .<br/>
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
