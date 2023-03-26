import Navbar from "./components/Navbar";
import Pages from "./pages/Pages";
import Footer from "./components/Footer";
import {BrowserRouter} from 'react-router-dom'
import Booking from "./pages/Booking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
