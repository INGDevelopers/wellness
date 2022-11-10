import api from './api';


const users = {
  getUserById: () =>{
    return api('/user/id');
  },
  getUsers: () => {
    return api('/users');
  }
}

export default users;