import "./App.css";
import HomePage from "./components/HomePage.js";
import InsertForm from "./components/InsertForm.js";
import NewListing from "./components/NewListing.js";
import ProductPage from "./components/ProductPage.js";

function App() {
  return (
    <div className="App">
      <HomePage />
      <InsertForm />
      <NewListing />
    </div>
  );
}

export default App;
