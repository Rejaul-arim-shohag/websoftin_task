import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UserInfo from "./Pages/UserInfo";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<UserInfo />} />
    </Routes>
  );
}

export default App;
