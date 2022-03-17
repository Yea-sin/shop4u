import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home/Home";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Register from "./Pages/Shared/Header/Register/Register";
import Login from "./Pages/Shared/Login/Login";

function App() {
  return (
    <div className="text-center">
      <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<PrivateRoute><Blog/></PrivateRoute> }/>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
