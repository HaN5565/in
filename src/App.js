import Advertisement from "./components/advertisement/Advertisement";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/header/nav/Nav";
import Reproductions from "./components/reproductions/Reproductions";
import Team from './components/team/Team'


function App(props) {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Reproductions stateEngland={props.stateEngland} stateGermany={props.stateGermany} stateFrance={props.stateFrance} />
      <Advertisement />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
