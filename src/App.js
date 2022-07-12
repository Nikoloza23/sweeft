import { Route, Routes } from 'react-router-dom'

import Details from './pages/Details';
import Home from "./pages/Home";

//Routes
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
