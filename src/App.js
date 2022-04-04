import SplashScreen from "./components/SplashScreen/SplashScreen";
import Communities from "./components/Communities/Communities";
import Studios from "./components/Studios/Studios";
import Discussion from "./components/Discussion/Discussion";
import Game from "./components/Game/Game";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="theApp">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/games" element={<Game />} />
          <Route path="/studios" element={<Discussion/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="*" element={<SplashScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
