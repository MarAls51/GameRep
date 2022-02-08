import SplashScreen from "./components/SplashScreen/SplashScreen"
import Communities from "./components/Communities/Communities"
import StudioPost from "./components/Discussion/StudioPost"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Profile from "./components/Profile/Profile"
import "./App.css"
function App() {
  return (
    <Router>
    <div className="theApp">
      <Routes>
        <Route path="/" element={<SplashScreen/>}/>
        <Route path="/communities" element={<Communities/>}/>
        <Route path="/games" element={<SplashScreen/>}/>
        <Route path="/studios" element={<StudioPost/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<SplashScreen/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
