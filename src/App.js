import { Route, Routes } from 'react-router';
import './App.css';
import Signup from './component/SignupForm/Signup';
import Header from './component/layout/Header';
import HomePage from './component/pages/HomePage';
import PricingPage from './component/pages/PricingPage';
import Contact from './component/pages/Contact';
import Footer from './component/Footer';
import Login from './component/LoginForm/Login';
import Dashboard from './component/Dashboard';
import Invoice from './component/pages/Invoice';
import Sidebar from './component/layout/Sidebar';
import AccessBar from './component/pages/AccessBar';
import WrapCom from './component/utils/WrapCom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/loginpage" element={<Login />} />
        <Route path="/dashboard" element={<>
          <Sidebar />
          <AccessBar/>
          <Dashboard />
          
        </>} />
        <Route path="/" element={<>
          <Header />
          <HomePage />
          <PricingPage />
          <Contact />
          <Footer />
        </>
        } />
        <Route path="/PricingPage" element={<PricingPage />} />
        <Route path="/myinvoice" element={ <WrapCom Comp={Invoice}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element= { <Contact />} />
        {/* <Route path="*" element={<PageNotFound/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
