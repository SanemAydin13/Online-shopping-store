import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';
import withLoader from './hoc/withLoader';
import HomePage from './pages/HomePage';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider

const HomePageLoader = withLoader(HomePage);

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div>
          <Routes>
            <Route path="/home" element={<HomePageLoader />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<CreateAccount />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
