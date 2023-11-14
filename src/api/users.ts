import { User } from '../types/user.types';
const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl)
export type UsersApiResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
};

const getUsers = async (page: number = 1): Promise<UsersApiResponse> => {
  const url = `${apiUrl}/users?page=${page}?delay=3`;

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`API returned status code ${res.status}`);
      }

      return res.json();
    })
    .catch((err) => {
      console.warn(err);

      // We have no users to process, return a default object
      return {
        page: 1,
        total: 1,
        data: [],
      };
    });
};

export default getUsers;
