import { Navigate, Route, Routes } from "react-router-dom";

import React, { Suspense, lazy } from "react";

// components
import AboutUs from "./components/AboutUs";
import { AccordionCustomIcon } from "./components/Accordion";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HomeProducts from "./components/HomeProducts";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import Store from "./components/Store";
import ScrollTop from "./components/shared/ScrollTop";
import ShopCart from "./components/ShopCart";
import ProductSlider from "./components/ProductSlider";
import Forms from "./components/Forms";

// loader
import { RotatingSquare } from "react-loader-spinner";

// lazy
const Table = lazy(() => import("./components/Table"));

// Toast
import { Toaster } from "react-hot-toast";

// context
import { CartContextProvider } from "./context/CartContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";

function App() {
  return (
    <div className="h-full min-h-screen">
      <div className="flex relative flex-col min-h-screen">
        <ProductContextProvider>
          <CartContextProvider>
            <Toaster position="top-center" />
            <ScrollTop />
            <Navbar />
            <main className="main flex flex-col items-center p-0 md:p-6 max-w-6xl mx-auto">
              <Routes>
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<ShopCart />} />
                <Route path="/form" element={<Forms />} />

                <Route path="/products" element={<Store />} />
                <Route
                  path="/"
                  element={
                    <>
                      <Table />
                      <HeroSection />
                      <HomeProducts />
                    </>
                  }
                />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>

              <AccordionCustomIcon />
              <AboutUs />
            </main>
            <Footer />
          </CartContextProvider>
        </ProductContextProvider>
      </div>
    </div>
  );
}

export default App;
