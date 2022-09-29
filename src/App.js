import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Password from './pages/Password';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='password' element={<Password />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;