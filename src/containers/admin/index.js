import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Tab, Tabs } from "react-bootstrap";

import NavBar from "../../components/Navbar";
import Instruments from "../instruments";
import Users from "../users";
import Requests from "../request";
import Nav from "../../components/Nav";



export default function IndexAd () {

  const [key, setKey] = useState('home');

  const location = useLocation();

  const changeKey = (e) => {
    e.preventDefault();

  }

  return(
    <>
      <NavBar/>
      <Nav/>
      {
        location.pathname === '/admin/users'?
          <Users/>
        : location.pathname === '/admin/instruments'?
          <Instruments/>
        : location.pathname === '/admin/requests'?
          <Requests/>
        :null
      }
    </>
  );
}