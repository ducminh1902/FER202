import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterPage from './page/FooterPage.jsx';
import HomePage from './page/HomePage.jsx';
import MoviePage from './page/MoviePage.jsx';
import MyNavbar from './components/home/NavbarMenu.jsx';


function App() {
   return (
    <div>
      <MyNavbar />
      <HomePage />
      <MoviePage />  
      <FooterPage />
    </div>
  );
}

export default App;
