import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import CreateUser from "./Components/CreateUser";
import Users from "./Components/Users";
import UpdateUser from "./Components/UpdateUser";

function App() {
  return (

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CreateUser />} />
          <Route path="/users" element={<Users />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
