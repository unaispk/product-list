import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products/Products";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <Container>
        <Products />
      </Container>
    </div>
  );
}

export default App;
