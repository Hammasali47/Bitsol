import './App.css';
import ApiCaller from './Components/ApiCaller';
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes,Navigate } from "react-router-dom"
import Post from './Components/Post';
import Form1 from './Components/Form';
import UpdateForm from './Components/UpdateForm';
import ReduceForm from './Components/reduceForm';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Navigate replace to="/post"/>}/>
        <Route path='/post' element={<ApiCaller/>}/>
        <Route path='/post/:id' element={<Post/>}/>
        <Route path='/form' element={<Form1/>}/>
        <Route path='/reduceForm' element={<ReduceForm/>}/>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
