import axios from 'axios';
async function getImages() {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '36013837-3d9990b0614e4049bfc16c19d',
        q: 'cat',
        page: '1',
        per_page: '12',
        image_type: 'photo',
        orientation: 'horizontal',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getImages;
