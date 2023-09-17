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

function App() {
  return (
    <div className="App">
     
     {/* <Header/> */}
        {/* <Navbar/> */}
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/loginpage" element={<Login />} />
           {/* <Route path="/about" element={<AboutPage />} />  */}
           <Route path="/dashboard" element={<Dashboard />} /> 
           <Route path="/" element={<HomePage />} /> 
           <Route path="/PricingPage" element={<PricingPage />} /> 
           {/* <Route path="/" element={<Contact />} />  */}
           

           {/* <Route path="/profile-page" element={<ProfileSettingsPage/>} />  */}
           {/* <Route path="/settings" element={<SettingsPage />} />  */}
           <Route path="/signup" element={<Signup/>} />
          {/* <Route path="*" element={<PageNotFound/>} /> */}

        </Routes>
         {/* <PricingPage/>
        <Contact/>  */}
        {/* <Footer/> */}
    </div>
  );
}

export default App;
