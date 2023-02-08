import './App.css';
import React from 'react';
import NavbarSite from './components/Navbar';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavbarSite />
      <div className="child">
        <h1 className="h1"> Hastanelere Getirilen Kişiler</h1>
        <h2>
          Lütfen Görmek İstediğiniz Şehri Seçiniz
          <Link className="nav-link" to="/mersinPage">
            Mersin
          </Link>
          <Link className="nav-link" to="/kayseriPage">
            Kayseri
          </Link>
          <Link className="nav-link" to="/adanaPage">
            Adana
          </Link>
          <Link className="nav-link" to="/ankaraPage">
            Ankara
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default App;
