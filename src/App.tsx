import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Assignment } from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='/historical' element={<Assignment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
