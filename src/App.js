import { Routes, Route } from "react-router-dom";
import './App.css';
import HomeContainer from "./containers/HomeContainer";
import AddTeamContainer from "./containers/AddTeamContainer";
import ViewMatchesContainer from "./containers/ViewMatchesContainer";
import HandleMatchContainer from "./containers/HandleMatchContainer";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomeContainer/>} />
        <Route path="/add-team" element={<AddTeamContainer/>}/>
        <Route path="/view-matches" element={<ViewMatchesContainer/>}/>
        <Route path="/handle-match" element={<HandleMatchContainer/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
