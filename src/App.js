import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import LogIn from './pages/Login';
import Member from './pages/Membership';
import KakaoLogin from './pages/KakaoLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/member' element={<Member />} />
          <Route path='/kakaoLogin' element={<KakaoLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
