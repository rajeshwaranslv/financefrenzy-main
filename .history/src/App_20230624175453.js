import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>
FinanceFrenzy
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
                <div>
 
 <div className="App">
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
 
   
   <Route exact path="/" component={Hero} />

  
     <main id="main">
       <Route exact path="/About" component={About} />
       
       <Route exact path="/Services" component={Services} />
       <Route exact path="/Careers" component={Careers} />
       <Route exact path="/Contact" component={Contact} />
       <Route exact path="/Products" component={Products} />
     </main>
 
   <footer id="footer">
     <div class="footer-top">
       <Footer />
     </div>
     <End />
   </footer>
   <a
     href="#"
     class="back-to-top d-flex align-items-center justify-content-center"
   >
     <i class="bi bi-arrow-up-short"></i>
   </a>
 </div>



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
