import React, {useState} from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState();
  return (
    <div className='light-container d-flex  flex-column justify-content-center align-items-center'>
      <div className={color === 'red' ? 'light red selected' : 'light red'} onClick={() => setColor ('red')}></div>
      <div className={color === 'yellow' ? 'light yellow selected' : 'light yellow'} onClick={() => setColor ('yellow')}></div>
      <div className={color === 'green' ? 'light green selected' : 'light green'} onClick={() => setColor ('green')}></div>
    </div>
  )
}

export default TrafficLight