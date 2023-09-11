import axios from 'axios';
export const fetchAllProducts = async () => {
  try {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://dummyjson.com/products',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let data: any = [];
    await axios.request(config).then(response => {
      if (response.status == 200) {
        data = response.data;
      }
    });
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
export const fetchAllCategories = async () => {
  try {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://dummyjson.com/products/categories',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let data: any = [];
    await axios.request(config).then(response => {
      if (response.status == 200) {
        data = response.data;
      }
    });
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
export const fetchCategoryProducts = async (category: string) => {
  try {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://dummyjson.com/products/category/${category}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let data: any = [];
    await axios.request(config).then(response => {
      if (response.status == 200) {
        data = response.data;
      }
    });
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
export const fetchProductDetails = async (id: number) => {
  try {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://dummyjson.com/products/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let data: any = [];
    await axios.request(config).then(response => {
      if (response.status == 200) {
        data = response.data;
      }
    });
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
