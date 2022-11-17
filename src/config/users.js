import api from './api';


const users = {
  postUser: (data) => {
    return api('/user',{
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  getUserById: () =>{
    return api('/user/id');
  },
  getUsers: () => {
    return api('/users');
  },
  getHistoryCreated: (id) => {
    return api(`/user/history/${id}`);
  }
}

export default users;