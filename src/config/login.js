import api from "./api";


const login = {
  login: (data) => {
    return api('/login', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
}

export default login;