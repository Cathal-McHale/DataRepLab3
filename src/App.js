import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Content from './components/content';
import Footer from './components/footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './components/create';
import Read from './components/read';

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
       <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          {/* links to each page */}
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="Create">Create</Nav.Link>
          <Nav.Link href="Read">Read</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Routes>
      {/* routes to each page and gives different content */}
      
      <Route path ='/' element={<Content></Content>}></Route>
      <Route path ='/Read' element={<Read></Read>}></Route>
      <Route path ='/Create' element={<Create></Create>}></Route>

    </Routes>
        
      </div>
    </BrowserRouter>

  );
}

export default App;
