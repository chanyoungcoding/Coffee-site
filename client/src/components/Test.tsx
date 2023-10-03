import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const Test:React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddMessage = () => {
    if (inputValue) {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  const transitions = useTransition(messages, {
    from: { opacity: 0, transform: 'translateX(-30px)' },
    enter: { opacity: 1, transform: 'translateX(30px)' },
    leave: { opacity: 0, transform: 'translateX(-30px)' },
  });

  return (
    <div>
      <h1>Message List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddMessage}>Add Message</button>

      <div>
        {transitions((style, item) =>
          item ? (
            <animated.div style={style} className="message">
              {item}
            </animated.div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Test;
