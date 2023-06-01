import axios, { AxiosResponse, AxiosError, Method } from 'axios';

export const api = axios.create({
  baseURL: 'http://airi.space',
  // baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  // withCredentials: false,
});

interface ErrorResponse {
  message: string;
}

// export const fetcher = (url: string, body: any) => api.get(url, body).then(res => res.data);

export const fetcher = async <T>(
  url: string,
  method: Method,
  body?: any
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.request<T>({
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