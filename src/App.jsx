// App.js
import styles from "./style";
import { Business, Footer, Navbar, Hero } from "./components";
import AboutUs from "./components/About Us";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewPage from './components/NewPage';

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      <Analytics />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={
          <>
            <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>
        
            <div className={`bg-primary ${styles.paddingPageX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <div className="app-container">
                  <div className="app-container flex flex-col items-center justify-center min-h-screen">
                    {/* Video options box */}
                    <div className="camera-container flex justify-center items-center">
                      <Business />
                    </div>
                  </div>
                </div>
                <AboutUs />
                <Footer />
              </div>
            </div>
          </>
        } />
        
        <Route path="/new-page" element={<NewPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
