import "./App.css";
import Header from "./components/header";
import Home from "./components/Home";
import About from "./components/About";
import Foods from "./components/Foods";
import Book from "./components/Book";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import "flowbite";

function App() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Home></Home>
      <About></About>
      <Foods></Foods>
      <Book></Book>
      <Feedback></Feedback>
      <Footer></Footer>
    </>
  );
}

export default App;
