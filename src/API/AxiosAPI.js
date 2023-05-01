import axios from 'axios';

axios.defaults.baseURL = 'https://6441991776540ce2257af115.mockapi.io';

export const fetchUsers = async (page, filter = '') => {
  const result = await axios.get(
    `/users?followStatus=${filter}&page=1&limit=${page}`
  );
  return result.data;
};
export const getTotalUsers = async (filter = '') => {
  const result = await axios.get(`/users?followStatus=${filter}`);
  return result.data;
};
export const setFollowingStatus = async (
  id,
  { changeStatus, changeFollow }
) => {
  const result = await axios.put(`/users/${id}`, {
    followStatus: changeStatus,
    followers: changeFollow,
  });

  return result.data;
};
export const setUnFollowingStatus = async (
  id,
  { changeStatus, changeFollow }
) => {
  const result = await axios.put(`/users/${id}/`, {
    followStatus: changeStatus,
    followers: changeFollow,
  });

  return result.data;
};
