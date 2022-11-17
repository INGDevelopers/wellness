import api from './api';


const requests = {
  create: (data) => {
    return api('/request',{
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  getRequestsByRequest: () =>{
    return api('/request/:request');
  },
  getRequests: () => {
    return api('/request');
  }
}

export default requests;