import React, { useState , useRef} from 'react';

const Conversation = ({ conversationId }) => {
  const soundFiles = {
    'conversation1': require('./sounds/q1.wav'),
    'conversation2': require('./sounds/q2.mp3'),
    'conversation3': require('./sounds/q3.mp3'),
    // Add more sound files for each conversation ID
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(soundFiles[conversationId]));

  const styles = {
    button: {
      backgroundColor: '#58CC02',
      color: '#fff',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '700',
      cursor: 'pointer',
      boxShadow: '0 4px 0 #46A302',
      transition: 'all 0.1s ease',
      ':active': {
        transform: 'translateY(4px)',
        boxShadow: 'none',
      },
    },
  };

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Access audio using audioRef.current
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  audioRef.current.onended = () => { 
    setIsPlaying(false);
  };

  return (
    <button style={styles.button} onClick={handleClick}>
      {isPlaying ? 'Pause' : 'Listen'}
    </button>
  );
};

// Example usage:
const App = () => {
  return (
    <div>
      <Conversation conversationId="conversation1" />
      {/* Other components or content */}
     
    </div>
  );
};

export default App;
