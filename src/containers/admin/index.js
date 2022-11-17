import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Tab, Tabs } from "react-bootstrap";

import NavBar from "../../components/Navbar";
import Instrument from "../instruments";
import Users from "../users";
import Nav from "../../components/Nav";



export default function IndexAd () {

  const [key, setKey] = useState('home');

  const changeKey = (e) => {
    e.preventDefault();

  }

  return(
    <>
      <NavBar/>
      <Nav/>
      <div className="div-principal">
        <Users/>
      </div>
    </>
  );
}