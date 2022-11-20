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
    return api(`/user/history/id`);
  },
  getHistoryCreatedId: (id) => {
    return api(`/user/history/${id}`);
  },
  deleteInUseUser: (id) => {
    return api(`/deleteinuse/${id}`,{
      method: 'PUT'
    });
  }
}

export default users;