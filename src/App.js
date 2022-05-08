import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <div className="app_body">
          <Sidebar />
          <Routes>
            <Route path="/room/:roomId" element={<Chat />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
