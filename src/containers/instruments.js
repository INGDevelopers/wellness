import { useState, useEffect } from "react";
import {useForm} from 'react-hook-form'
import NavBar from "../components/Navbar";
import CardI from "../components/card";

import instruments from "../config/instruments";
import Alert from '../components/alert';

import '../components/styles/instrument.css';


const Instrument = () => {

  const {register, handleSubmit} = useForm();

  const [name, setName] = useState('Nombre');
  const [amount, setAmount] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [viewImg, setViewImg] = useState(null);


  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    instruments.getInstruments().then((res) => {
      setData(res.res);
    })

  },[isLoading]);


  const onSubmit = (data) => {
    // console.log(selectedFile);
    if(name !== String('Nombre') || amount !== Number(0) || selectedFile !== null){
      setIsLoading(true);
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('amount', data.amount);
      formData.append('image', data.image[0]);
      // setViewImg(data.image[0].name);

      instruments.postInstrument(formData).then((res) => {
        if(res.success)
          setIsLoading(false);

          //Limpiamos
          setName('');
          setAmount(0);
          setSelectedFile(null);

      })
    }
    // console.log(data.image)
    
  }

  const reset = () =>{
    setName('');
    setAmount(0);
    setSelectedFile(null);
  }


  return(
    <>
      <div className="div-principal-admin">
        <div className="div-form-instrument">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h5 style={{textAlign: "center"}}>Registrar intrumento</h5>
            <div>
              <h6>Nombre</h6>
              <input type='text' {...register("name")} value={name === 'Nombre'?'':name} onChange={(e) => setName(e.target.value) }/>
            </div>
              
            <div>
              <h6>disponible</h6>
              <input type='number' {...register("amount")} value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div>

            <div>
              <h6>Imagen</h6>
              <input type='file' {...register("image")} value={selectedFile} onChange={(e) => setSelectedFile(e.target.value)}/>
            </div>
            <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}>
              <button type='submit' className='button-primary'>Subir instrumento</button>
              <button type='reset' className="button-primary" onClick={() => reset()}>Limpiar campos</button>
            </div>
          </form>

          <CardI title={name} disp={amount} data={viewImg}/>
        </div>

        <div className="title">
					<h2>Instrumentos</h2>
				</div>
        <div className="div-home-items">
          {
            data.length?
              data.map((el, i) => (
                <CardI  key={i} title={el.name} disp={el.amount} inUse={el.inUse} contentType={el.img.contentType} data={el.img.data}/>
              ))
            :
            <Alert/>
          }
        </div>

      </div>
    </>
  );
}

export default Instrument;