import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34698788-1fb19bd01d6f7a604f851830b';

export const fetchImages = async ({ query = '', page = 1, perPage = 12 }) => {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&per_page=${perPage}`;

  try {
    const response = await axios.get(url);
    return response.data.hits;
  } catch (error) {
    return console.log(error);
  }
};