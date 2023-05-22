import React, { Suspense, useContext } from "react";
import AppLayout from "./Components/AppLayout/AppLayout";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "Components/Contexts/UserContext";

/* Containers */
const Home = React.lazy(() => import("Containers/Home/Home"));
const Login = React.lazy(() => import("Containers/Login/Login"));
const Products = React.lazy(() => import("Containers/Products/Products"));

function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <AppLayout user={user}>
                <Home />
              </AppLayout>
            }
          />
          <Route
            path="/products"
            element={
              <AppLayout user={user}>
                <Products />
              </AppLayout>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>Lost</div>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
