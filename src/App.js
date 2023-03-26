import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingscreen from "./components/Landingscreen";

function App() {
  return (
    <>
      <Body />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/"   element={<Landingscreen/>} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
