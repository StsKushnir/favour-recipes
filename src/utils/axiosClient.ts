import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
});

export const client = {
  async get<T>(url: string) {
    const response = await instance.get<T>(url);

    return response.data;
  },
};

