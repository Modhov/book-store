import './App.css'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'redux'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route index path='/home' element={<Home />} />
          <Route path='/seller-home' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </HashRouter>
    </Provider>
  )
}

export default App
