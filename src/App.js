import Header from "./componets/header/Header";
import Hero from "./componets/home/hero/Hero";
import History from "./componets/home/history/History";
import Broke from "./componets/home/broke/Broke";
import NewMenu from "./componets/home/newMenu/NewMenu";
import Footer from "./componets/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <History />
      <Broke />
      <NewMenu />
      <Footer />
    </div>
  );
}

export default App;
