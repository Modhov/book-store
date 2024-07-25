import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import store from "./redux/store";
import SellerForm from "./pages/SellerForm";
import SellerHome from "./pages/SellerHome";
import BookList from "./pages/BookList";


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route index path="/home" element={<Home />} />
          <Route path="/seller-home" element={<SellerHome />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/add-book" element={<SellerForm />} />
          <Route path="/store" element={<BookList />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
