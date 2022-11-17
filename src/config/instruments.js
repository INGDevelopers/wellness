import api from "./api";
import img from "./api_img";

const instruments = {
  postInstrument: (data) => {
    return img('/instrument',{
      method: 'POST',
      body: data
    })
  },
  getInstruments: () => {
    return api('/instruments');
  }
}

export default instruments;