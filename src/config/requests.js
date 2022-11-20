import api from './api';


const requests = {
  create: (data) => {
    return api(`/request/${data}`,{
      method: 'POST'
    });
  },
  getRequestsByRequest: () =>{
    return api('/request/:request');
  },
  getRequests: () => {
    return api('/request');
  },
  updateRequest: (id, data) => {
    return api(`/request/${id}`,{
      method: 'PUT',
      body: JSON.stringify(data)
    });

  }
}

export default requests;