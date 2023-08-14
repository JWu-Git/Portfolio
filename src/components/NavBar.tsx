import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar className="mb-4" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Algorithms Odyssey by Jun Wu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <NavDropdown title="Sorting Algorithms" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/bubble">Bubble Sort</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/insertion">Insertion Sort</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/selection">Selection Sort</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/merge">Merge Sort</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="quick">Quick Sort</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pathfinding Algorithms" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/astar">A* Pathfinding</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/bfs">Breadth-First Search (BFS)</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/dfs">Depth-First Search (DFS)</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
