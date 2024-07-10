import React, { useEffect, useState } from 'react'; 
import './timedisplay.css';

const TimeDisplay = () => { 
const [currentTime, setCurrentTime] = useState(''); 

useEffect(() => { 
const intervalId = setInterval(() => { 
const date = new Date(); 

// Получение информации о времени и дате 
const weekday = date.toLocaleDateString('ru', { weekday: 'long' }); 
const month = date.toLocaleDateString('ru', { month: 'long' }); 
const day = date.getDate(); 
const year = date.getFullYear(); 
const hours = date.getHours(); 
const minutes = date.getMinutes(); 
const seconds = date.getSeconds(); 
// const timezone = date.toLocaleTimeString('ru', { timeZoneName: 'short' });   ${timezone}

// Форматирование вывода времени 
const formattedTime = `${weekday} ${month} ${day} ${year} ${hours}:${minutes}:${seconds} Moscow`; 

setCurrentTime(formattedTime); 
}, 1000); 

// Очистка интервала при размонтировании компонента 
return () => clearInterval(intervalId); 
}, []); 

return <div className='time'>{currentTime}</div>; 
}; 

export default TimeDisplay; 