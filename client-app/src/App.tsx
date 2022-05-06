import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import ButtonCustom from './components/ButtonCustom/ButtonCustom';
import Toolbar from './components/Toolbar/Toolbar';
import Search from './components/Search/Search';
import Table from './components/Table/Table';
import Khachhang from './pages/KhachHang/KhachHang';
import DSKhachHang from './pages/DSKhachHang/DSKhachHang';
import ChonVaccine from './pages/DSTiemChung/DSVaccine/DanhSachVaccine';
import ChonGoiTiemChung from './pages/DSTiemChung/DSGoiTiemChung/DanhSachGoiTiemChung';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path='/khach-hang/:id'
          element={
            <Khachhang/>
          }
        />
        <Route
          path='/khach-hang'
          element={
            <DSKhachHang/>
          }
        />
        <Route
          path='/chon-vaccine/:id'
          element={
            <ChonVaccine/>
          }
        />
        <Route
          path='/chon-goi-tc/:id'
          element={
            <ChonGoiTiemChung/>
          }
        />
        <Route
          path='/'
          element={
            <DSKhachHang/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
