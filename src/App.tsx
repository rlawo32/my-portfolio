import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./view/Main";

function App() {
  return (
    <>
      <div style={{backgroundColor: '#282c34'}}>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/my-portfolio" element={<Main />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
