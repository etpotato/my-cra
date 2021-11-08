import { useState } from 'react';

const words = ['this', 'is', 'my'];
const anotherWords = [...words, 'words'];

export default function Words() {
  const [count, setCount] = useState(1);
  const handleCountClick = (evt) => {
    evt.preventDefault();
    setCount((state) => state + 1);
  };

  return (
    <div>
      <p>{ anotherWords.join(' ') }</p>
      <button onClick={handleCountClick} type="button">{count}</button>
    </div>
  );
}
