import React from 'react';
import SoundButton from './sound';


function ConversationBlog() {
  const styles = {
    container: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"DIN Round Pro", sans-serif',
      backgroundColor: '#fff',
      minHeight: '100vh',
    },
    header: {
      textAlign: 'center',
      padding: '30px 0',
      marginBottom: '40px',
      backgroundColor: '#58CC02',
      color: '#fff',
      borderRadius: '0 0 15px 15px',
      boxShadow: '0 4px 12px rgba(88, 204, 2, 0.3)',
    },
    conversationItem: {
      marginBottom: '25px',
      padding: '20px',
      borderRadius: '15px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
      border: '2px solid #E5E5E5',
      transition: 'all 0.3s ease',
      position: 'relative', // Added to position the button
    },
    english: {
      fontSize: '18px',
      color: '#4B4B4B',
      marginBottom: '12px',
      fontWeight: '700',
      display: 'flex',
      alignItems: 'center',
      '::before': {
        content: '🗣️',
        marginRight: '10px',
      }
    },
    kannada: {
      fontSize: '20px',
      color: '#1CB0F6',
      marginBottom: '8px',
      fontFamily: '"Nirmala UI", sans-serif',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      '::before': {
        content: '🎯',
        marginRight: '10px',
      }
    },
    transliteration: {
      fontSize: '16px',
      color: '#777',
      fontStyle: 'italic',
      paddingLeft: '25px',
      borderLeft: '3px solid #FFC800',
    },
    footer: {
      textAlign: 'center',
      marginTop: '40px',
      padding: '20px',
      backgroundColor: '#F7F7F7',
      borderRadius: '15px',
      color: '#777',
    },
    title: {
      fontSize: '32px',
      fontWeight: '800',
      marginBottom: '10px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    subtitle: {
      fontSize: '18px',
      opacity: '0.9',
    },
    progressBar: {
      height: '8px',
      backgroundColor: '#E5E5E5',
      borderRadius: '4px',
      margin: '20px auto',
      maxWidth: '200px',
    },
    progress: {
      width: '60%',
      height: '100%',
      backgroundColor: '#FFD900',
      borderRadius: '4px',
      transition: 'width 0.3s ease',
    },
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
      position: 'absolute', // Added to position the button
      top: '10px', // Adjust as needed
      right: '10px', // Adjust as needed
      ':active': {
        transform: 'translateY(4px)',
        boxShadow: 'none',
      }
    },
    searchBar: {
      width: '100%',
      padding: '15px',
      fontSize: '16px',
      borderRadius: '12px',
      border: '2px solid #E5E5E5',
      marginBottom: '30px',
      transition: 'border-color 0.3s ease',
      ':focus': {
        outline: 'none',
        borderColor: '#1CB0F6',
      }
    }
  };

  const conversations = [
    {
      english: "Since when have you been driving?",
      kannada: "ನೀವು ಯಾವಾಗಿಂದ ವಾಹನ ಚಾಲನೆ ಮಾಡ್ತಿದ್ದೀರಿ?",
      transliteration: "Neevu yavaginda vahana chalane madtiddiri?"
    },
    {
      english: "Do you own any license?",
      kannada: "ನಿಮ್ಮ ಹತ್ರ ಲೈಸೆನ್ಸ್ ಇದೆಯಾ?",
      transliteration: "Nimma hatra license ideya?"
    },
    {
      english: "I need you to obey all the rules and regulations. Be cautious while on duty.",
      kannada: "ನೀವು ಎಲ್ಲಾ ನಿಯಮಗಳನ್ನು ಪಾಲಿಸಬೇಕು. ಕರ್ತವ್ಯದಲ್ಲಿ ಎಚ್ಚರವಾಗಿರಬೇಕು.",
      transliteration: "Neevu ella niyamagalannu palisabeku. Kartavyadalli eccharavagirabeku."
    },
    
    {
      english: "It's already late, where are you?",
      kannada: " ಈಗಾಗಲೇ ಲೇಟ್ ಆಗಿದೆ, ನೀವು ಎಲ್ಲಿದ್ದೀರಾ?",
      transliteration: " Eegagale late agide, neevu elliddira?"
    },
    {
      english: "We want you to come at the right time in the mornings.",
      kannada: " ನಾವು ಬಯಸುತ್ತೇವೆ ನೀವು ಬೆಳಗ್ಗೆ ಸರಿಯಾದ ಸಮಯಕ್ಕೆ ಬರಬೇಕು.",
      transliteration: " Navu bayasutteve neevu belagge sariyada samayakke barabeku."
    },
    {
      english: "Where is your house?",
      kannada: " ನಿಮ್ಮ ಮನೆ ಎಲ್ಲಿದೆ? ",
      transliteration: " Nimma mane ellide?"
    },
    {
      english: "Where have you been till now?",
      kannada: " ನೀವು ಈವರೆಗೆ ಎಲ್ಲಿದ್ದೀರಾ? ",
      transliteration: " Neevu eevarege elliddira?"
    },
    {
      english: "I have a busy schedule today. I need you all day long.",
      kannada: " ನನಗೆ ಇಂದು ಬಹಳ ಕೆಲಸ ಇದೆ, ನಾನು ನಿಮ್ಮನ್ನು ಇಡೀ ದಿನ ಬೇಕಾಗಿದ್ದೇನೆ. ",
      transliteration: " Nanage indu bahala kelasa ide, nanu nimmannu idee dina bekagiddeene."
    },
    {
      english: "Take the shortcut road, the other road has a traffic jam.",
      kannada: " ಬೇರೆ ದಾರಿಯಲ್ಲಿ ಟ್ರಾಫಿಕ್ ಜಾಮ್ ಇದೆ, ಶಾರ್ಟ್ ಕಟ್ ಮೂಲಕ ಹೋಗಿ.",
      transliteration: " Bere dariyalli traffic jam ide, short cut moolaka hogi."
    },
    {
      english: "I'll pay you salary monthly.",
      kannada: " ನಾನು ನಿಮಗೆ ತಿಂಗಳಿಗೊಮ್ಮೆ ಸಂಬಳ ಕೊಡುತ್ತೇನೆ.",
      transliteration: " Nanu nimage tingaligomme sambala kodutthene."
    },
    {
      english: "Come by 6 AM tomorrow.",
      kannada: " ನಾಳೆ ಬೆಳಗ್ಗೆ ಆರು ಗಂಟೆಗೆ ಬನ್ನಿ.   ",
      transliteration: " Nale belagge aaru gantege banni."
    },
    {
      english: "Go slow.",
      kannada: " ನಿಧಾನವಾಗಿ ಹೋಗಿ.   ",
      transliteration: " Nidhanavagi hogi."
    },
    {
      english: "Go fast.",
      kannada: " ಬೇಗ ಹೋಗಿ.    ",
      transliteration: " Bega hogi."
    },


    // Add all other conversations here...
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Driver-Employer Conversation Guide</h1>
        <p>Learn common phrases in Kannada for communicating with your driver</p>
      </header>

      <div className="conversation-list">
        {conversations.map((item, index) => (
          <div key={index} style={styles.conversationItem}>
            <SoundButton />
            <div style={styles.english}>
              <strong>English:</strong> {item.english}
            </div>
            <div style={styles.kannada}>
              <strong>ಕನ್ನಡ:</strong> {item.kannada}
            </div>
            <div style={styles.transliteration}>
              <strong>Transliteration:</strong> {item.transliteration}
            </div>
          </div>
        ))}
      </div>

      <footer style={{ textAlign: 'center', marginTop: '30px', padding: '20px' }}>
        <p>© 2023 Kannada Learning Blog</p>
      </footer>
    </div>
  );
}

export default ConversationBlog;