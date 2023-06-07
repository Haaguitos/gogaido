import axios, { AxiosResponse, AxiosError, Method } from 'axios';

export const api = axios.create({
  baseURL: 'http://airi.space',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

interface ErrorResponse {
  message: string;
};

interface Anime {
  name: string;
  image: string;
  genres: string[];
}

export const fetcher = async (
  url: string,
  method: Method,
  body?: any
): Promise<Anime[]> => {
  try {
    const response: AxiosResponse<Anime[]> = await api.request<Anime[]>({
      url,
      method,
      data: body,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      throw new Error(axiosError.response?.data?.message || 'An error occurred');
    } else {
      throw new Error('An error occurred');
    }
  }
};