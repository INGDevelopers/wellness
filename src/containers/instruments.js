import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'
import QRCode from "react-qr-code";

import NavBar from "../components/Navbar";
import CardI from "../components/card";
import ModalM from '../components/modalM';

import instruments from "../config/instruments";
import Alert from '../components/alert';

import '../components/styles/instrument.css';


const Instrument = () => {

  const { register, handleSubmit } = useForm();

  const [name, setName] = useState('Nombre');
  const [cod, setCod] = useState('0');
  const [selectedFile, setSelectedFile] = useState(null);
  const [viewImg, setViewImg] = useState(null);
  const [show, setShow] = useState(false);
  const [qr, setQr] = useState('12546');

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    instruments.getInstruments().then((res) => {
      setData(res.res);
    })

  }, [isLoading]);

  const getNumber = () => {
    let number = '';
    for (let i = 0; i < 5; i++) {
      number += String(Math.floor(Math.random() * (9 - 1 + 1) + 1));
    }
    setCod(number);
  }


  const onSubmit = (data) => {
    // console.log(selectedFile);
    if (name !== String('Nombre') || cod !== String(0) || selectedFile !== null) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('cod', cod);
      formData.append('image', data.image[0]);
      // setViewImg(data.image[0].name);

      instruments.postInstrument(formData).then((res) => {
        if (res.success)
          setIsLoading(false);

        //Limpiamos
        setName('');
        setCod(0);
        setSelectedFile(null);

      })
    }
    // console.log(data.image)

  }

  const reset = () => {
    setName('');
    setCod(0);
    setSelectedFile(null);
  }

  const getQrCode = (cod) => {
    // setQr(cod);
    setShow(true);
  }

  return (
    <>
    
      {/* {console.log(qr)} */}
      {
        show&&
        <ModalM show={show} onHide={() => setShow(false)} size={'sm'} 
          element={<QRCode value={qr} size={256} bgColor="#282c34" fgColor="#fff" level="H" />}
        />
      } 
        
      <div className="div-principal-admin">
        <div className="div-form-instrument">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h5 style={{ textAlign: "center" }}>Registrar intrumento</h5>
            <div>
              <h6>Nombre</h6>
              <input type='text' {...register("name")} value={name === 'Nombre' ? '' : name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
              <h6>Codigo</h6>
              <input type='number' {...register("amount")} value={cod} onChange={(e) => setCod(e.target.value)} disabled/>
            </div>

            <div>
              <h6>Imagen</h6>
              <input type='file' {...register("image")} value={selectedFile} onChange={(e) => setSelectedFile(e.target.value)} />
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

          <button style={{
            width: "120px",
            height: "40px",
          }} type='' className="button-primary" onClick={() => getNumber()}>Generar codigo</button>
          <CardI title={name} cod={cod} data={viewImg} />
        </div>

        <div className="title">
          <h2>Instrumentos</h2>
        </div>
        <div className="div-home-items">
          {
            data.length ?
              data.map((el, i) => (
                <CardI key={i} title={el.name} cod={el.cod} inUse={el.inUse} contentType={el.img.contentType} data={el.img.data} 
                  elementB={<button className="button-primary" onClick={() => getQrCode(el.cod)}>Ver codigo QR</button>}
                />
              ))
              :
              <Alert />
          }
        </div>

      </div>
    </>
  );
}

export default Instrument;