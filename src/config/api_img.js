
const img = async(url, options = {}) =>{
  options.headers = {
    // "Content-Type": "multipart/form-data",
    // Accept: "application/json",
    "Authorization": sessionStorage.getItem('token')
  };

  try{
    const res = await fetch(`http://localhost:5000/api${url}`, options);
    // Codigo correcto
    // if(res.status == 200 || res.status == 201){  
      const jsondata = await res.json();
      // console.log(jsondata)
      return jsondata;
    // }

  }catch(e){
    console.log(e);
  }
}

export default img;