const api = async(url, options = {}) =>{
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjNkOWRhZmY1ZTA4ZWJmZTY4ODdjNyIsIm5hbWUxIjoiQW5kcmVzIiwiZW1haWwiOiJhbmRyZXNmZWxpcGVAZ21haWwuY29tIiwicm9sIjoiYWRtaW4iLCJpYXQiOjE2NjgwMDQ4MzAsImV4cCI6MTY2ODA5MTIzMH0.pp7wQMCTGLnpo7gbxFQnw99yJ4C0kz4KeTSjwGulmiI'
  };

  try{
    const res = await fetch(`http://localhost:5000/api${url}`, options);
    // Codigo correcto
    // if(res.status == 200 || res.status == 201){  
      const jsondata = await res.json();
      return jsondata;
    // }

  }catch(e){
    console.log(e);
  }
}

export default api;