import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const ReactTypingEffect1 = () => (
    <>
      <ReactTypingEffect
        text={["Welcome to Where's My Par", "Select 'Find Courses' to get started", 'Sign in to unlock more features']}
        typingDelay= '1000'
        speed= '100'
        eraseDelay= '1000'
        eraseSpeed= '50'
        cursor=''
        cursorRenderer={(cursor) => <h1 style={{ color: '#212529' }}>{cursor}</h1>}
        displayTextRenderer={(text, i) => (
            <h1>
              {text.split('').map((char) => {
                const key = `${i}`;
                return (
                  <span className='typewriter' key={key} style={{ color: '#212529', fontFamily: "'Special Elite', cursive" }}>
                    {char}
                  </span>
                );
              })}
            </h1>
        )}
      />
    </>
);

export default ReactTypingEffect1;
