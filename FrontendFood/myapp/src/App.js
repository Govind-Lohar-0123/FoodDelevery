import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminDash from "./components/pages/Admin/AdminDash";
import ProfileDash from "./components/pages/UserProfile/ProfileDash";
import Profile from "./components/pages/UserProfile/profile";
import MyOrder from "./components/pages/UserProfile/myorder";
import store from "./app/store.js";
import { Provider } from "react-redux";
import CardProvider from "./components/pages/CardProvider.js";

export default function App() {
  return (
    <Provider store={store}>
      <CardProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/" element={<ProfileDash />}>
                <Route path="profile" element={<Profile />} />
                <Route path="/myorder" element={<MyOrder />} />
              </Route>
              <Route path="/" element={<AdminDash />}>
                <Route path="" element={<MyOrder />} />
              </Route>
            </Route>
        </Routes>

        </BrowserRouter>
      </CardProvider>
    </Provider>
  );
}


