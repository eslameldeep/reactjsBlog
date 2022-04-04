import logo from './317754_blog_blogger_blogging_icon.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';

import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect >
        <Navbar.Brand>
          <img src={logo} width="35px" height="35px" /> {' '}
          Blog
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <BrowserRouter>
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="/about">About</Link>

            </BrowserRouter>
          </Nav>
        </Navbar.Collapse>

      </Navbar>

      <div className="content">

      </div>

    </div>

  );
}

export default App;
