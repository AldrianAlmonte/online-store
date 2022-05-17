import "./App.css";
import Navbar from "./components/navbar"; // always import
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Welcome to the store of things You Did Not Know you needed!</h1>
      <Footer></Footer>
    </div>
  );
}

export default App;
