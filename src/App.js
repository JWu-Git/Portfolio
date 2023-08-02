import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';

function App() {
  return (
    <>
      {
        <Alert key="primary" variant="primary">
          This is a primary alert—check it out!
        </Alert>
      }
    </>
  );
}

export default App;
