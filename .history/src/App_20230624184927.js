import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { Helmet } from "react-helmet";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import NewsForm from "./components/NewsForm";
function App() {
  return (
    <div>
      <Helmet>
        <script src="assets/vendor/purecounter/purecounter.js"></script>
        <script src="assets/vendor/aos/aos.js"></script>
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script>
        <script src="assets/js/main.js" type="text/javascript" />
      </Helmet>
      <h1 className="text-center text-3xl font-bold">FinanceFrenzy</h1>

      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account"element={
              <ProtectedRoute>
                <Account />
                <div className="App">
                  <Hero />
                  <footer id="footer">
                  <NewsForm/>
                  <Footer />
                  </footer>
               </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
