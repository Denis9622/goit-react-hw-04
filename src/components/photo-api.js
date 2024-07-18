import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const ACCESS_KEY = '0_4BlHPUdH78TtPyVP-vG17s85yghi2nXnMyT45ulfU';

export const fetchImages = async (topic, currentPage) => {
  try {
    const res = await axios.get(`search/photos`, {
      params: {
        query: topic,
        page: currentPage,
        per_page: 12,
      },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
