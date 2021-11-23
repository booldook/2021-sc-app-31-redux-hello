import axios from 'axios';

const getListAsync = async (id) => {
  let userURL = 'https://jsonplaceholder.typicode.com/posts';
  userURL = id ? userURL + '/' + id : userURL;
  const { data } = await axios.get(userURL);
  return data;
};

export { getListAsync };
