import React from "react";
import About from "../src/Component/About";
import Contact from "../src/Component/Contact";
import Product from "./Component/Product";
import Error from "./Component/Error";
import Home from "./Component/Home";
import Blog from "./Component/Blog";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Component/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />}></Route>

      <Route path="/about" element={<About />}></Route>

      <Route path="/product" element={<Product />}></Route>

      <Route path="/blog" element={<Blog />}></Route>

      <Route path="/contact-us" element={<Contact />}></Route>

      <Route path="*" element={<Error />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
