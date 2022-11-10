import api from "./api";


const instruments = {
  postInstrument: (data) => {
    return api('/instrument',{
      method: 'POST',
      body: JSON.stringify(data)
    })
  },
  getInstruments: () => {
    return api('/instruments');
  }
}

export default instruments;