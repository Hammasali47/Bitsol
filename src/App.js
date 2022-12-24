import './App.css';
import { Route, Routes,Navigate } from 'react-router-dom';
import Ref from './Components/Ref';
import InputFocus from './Components/InputFocus';
function App() {
  return(
  <div>
    {console.log("hello")}
  <Routes>
    <Route path='/' element={<Navigate replace to="/ref" />} />
    <Route path='/ref' element={<Ref/>} />
    <Route path='/input' element={<InputFocus/>} />
  </Routes>
  </div>
  );
}

export default App;
