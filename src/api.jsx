import axios from 'axios';

const API_KEY = '9389833c288dfe53e1cb377ecbcc1ba0';



export const fetchWeather = async (city) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  };
