import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import AddBook from './components/pages/AddBook/AddBook';
import EditBook from './components/pages/EditBook/EditBook';
import Details from './components/pages/Details/Details';
import Bookshelf from './components/pages/Bookshelf/Bookshelf';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/addbook' exact component={AddBook} />
        <Route path='/editbook' exact component={EditBook} />
        <Route path='/details' exact component={Details} />
        <Route path='/bookshelf' exact component={Bookshelf} />
      </Switch>
      <Footer />
    </Router>
  );
}
  


export default App;
