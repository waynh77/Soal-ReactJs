
import './App.css';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListPelangganComponent from './components/ListPelangganComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreatePelangganComponent from './components/CreatePelangganComponent';
import UpdatePelangganComponent from './components/UpdatePelangganComponent';
import ViewPelangganComponent from './components/ViewPelangganComponent';
import ListProductComponent from './components/ListProductComponent';
import CreateProductComponent from './components/CreateProductComponent';
import ViewProductComponent from './components/ViewProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import ListTransaksiComponent from './components/ListTransaksiComponent';
// import ListTransaksiDetailComponent from './components/ListTransaksiDetailComponent';
import ViewTransaksiComponent from './components/ViewTransaksiComponent';

function App() {
  return (
    <div>
       <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListPelangganComponent}></Route>
                          <Route path = "/Pelanggan" component = {ListPelangganComponent}></Route>
                          <Route path = "/add-Pelanggan/:id" component = {CreatePelangganComponent}></Route>
                          <Route path = "/view-Pelanggan/:id" component = {ViewPelangganComponent}></Route>
                          <Route path = "/update-Pelanggan/:id" component = {UpdatePelangganComponent}></Route>
                          <Route path = "/Product" component = {ListProductComponent}></Route>
                          <Route path = "/add-Product/:id" component = {CreateProductComponent}></Route>
                          <Route path = "/view-Product/:id" component = {ViewProductComponent}></Route>
                          <Route path = "/update-Product/:id" component = {UpdateProductComponent}></Route>
                          <Route path = "/Transaksi" component = {ListTransaksiComponent}></Route>
                          <Route path = "/view-Transaksi/:id" component = {ViewTransaksiComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
