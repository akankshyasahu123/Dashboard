import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Components/Main/Layout';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Dashboard/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
