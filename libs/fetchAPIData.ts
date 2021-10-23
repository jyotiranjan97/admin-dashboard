import { User } from '@/types/user';

const URL =
  'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';

export const fetchAllUsersFromAPI = async () => {
  var allUsers = [] as User[];
  try {
    const res = await fetch(URL);
    if (res.status === 200) {
      const results = await res.json();
      for (let i = 0; i < results.length; i++) {
        const user = {
          id: results[i].id,
          name: results[i].name,
          email: results[i].email,
          role: results[i].role,
        };
        allUsers.push(user);
      }
    } else {
      throw new Error(res.status.toString());
    }
  } catch (err) {
    console.log('Error fetching data from API - ', err);
  }
  return allUsers;
};
