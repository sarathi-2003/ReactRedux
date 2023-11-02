import "./App.css";
import Cart from "./Componenets/Cart";
import Dashboard from "./Componenets/Dashboard"
import RootLayout from "./Componenets/RootLayout"
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider,} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;