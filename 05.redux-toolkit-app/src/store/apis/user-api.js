import axios from 'axios';

const logInAsync = async (userid) => {
  try {
    let userURL = 'https://jsonplaceholder.typicode.com/users?username=';
    const { data } = await axios.get(userURL + userid);
    return data[0];
  } catch (err) {
    return err;
  }
};

export { logInAsync };
