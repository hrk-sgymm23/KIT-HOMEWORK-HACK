import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import CreateHomework from "./components/projects/CreateProject";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            {/* <Route path='/' component={Dashboard} /> */}
            <Route exact path='/' element={<Dashboard/>} />
            <Route path='/homework/:id' element={<ProjectDetails/>} />
            <Route path='/create' element={<CreateHomework/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
