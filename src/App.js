import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import DivisionManagement from "./pages/division/DivisionManagement/DivisionManagement";
import WarehouseSite from "./pages/warehouse/warehousesite/WarehouseSite";
import Parts from "./pages/part/parts/Parts";
import CreateDivision from "./pages/division/CreateDivision/CreateDivision";
import UpdateDivision from "./pages/division/CreateDivision/UpdateDivision";
import AssociateClient from "./pages/division/AssociateClient/AssociateClient";
import ListedWarehouse from "./pages/division/ListedWarehouse/ListedWarehouse";
import DivisionUsers from "./pages/division/DivisionUsers/DivisionUsers";
import AddClient from "./pages/division/CreateDivision/AddClient";
import AddSite from "./pages/warehouse/Site/AddSite";
import ViewSite from "./pages/warehouse/Site/ViewSite";
import UpdateSite from "./pages/warehouse/Site/UpdateSite";
import AddPart from "./pages/part/AddPart/AddPart";
import EditPart from "./pages/part/AddPart/EditPart";
import AddUserClient from "./pages/division/AddUserClient/AddUserClient";
import EditUserClient from "./pages/division/AddUserClient/EditUserClient";
import ClientDetail from "./pages/division/ClientDetail/ClientDetail";
import AddAssociateClient from "./pages/division/AddAssociateClient/AddAssociateClient";
import Layout from "./layout/Layout";


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Signup/>}></Route>
        <Route exact path="/Login" element={<Login/>}></Route>
        <Route exact path="/ForgotPassword" element={<ForgotPassword/>}></Route>
        <Route exact path="/Dashboard" element={<Dashboard/>}></Route>
        <Route exact path="/DivisionManagement" element={<DivisionManagement/>}></Route>
        <Route exact path="/WarehouseSite" element={<WarehouseSite/>}></Route>
        <Route exact path="/Parts" element={<Parts/>}></Route>
        <Route exact path="/CreateDivision" element={<CreateDivision/>}></Route>
        <Route exact path="/UpdateDivision" element={<UpdateDivision/>}></Route>
        <Route exact path="/AssociateClient" element={<AssociateClient/>}></Route>
        <Route exact path="/ListedWarehouse" element={<ListedWarehouse/>}></Route>
        <Route exact path="/DivisionUsers" element={<DivisionUsers/>}></Route>
        <Route exact path="/AddClient" element={<AddClient/>}></Route>
        <Route exact path="/AddSite" element={<AddSite/>}></Route>
        <Route exact path="/ViewSite" element={<ViewSite/>}></Route>
        <Route exact path="/UpdateSite" element={<UpdateSite/>}></Route>
        <Route exact path="/AddPart" element={<AddPart/>}></Route>
        <Route exact path="/EditPart" element={<EditPart/>}></Route>
        <Route exact path="/AddUserClient" element={<AddUserClient/>}></Route>
        <Route exact path="/EditUserClient" element={<EditUserClient/>}></Route>
        <Route exact path="/ClientDetail" element={<ClientDetail/>}></Route>
        <Route exact path="/AddAssociateClient" element={<AddAssociateClient/>}></Route>
        <Route exact path="/Layout" element={<Layout />}></Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
