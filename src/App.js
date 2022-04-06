import SplashScreen from "./components/SplashScreen/SplashScreen";
import Communities from "./components/Communities/Communities";
import Studios from "./components/Studios/Studios";
import Discussion from "./components/Discussion/Discussion";
import Questions from "./components/Discussion/Questions";
import Announcements from "./components/Discussion/Announcements";
import Ratings from "./components/Discussion/Ratings";
import Memes from "./components/Discussion/Memes";
import Bugs from "./components/Discussion/Bugs";
import Post from "./components/Discussion/Post";
import Game from "./components/Game/Game";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import CreatePosts from "./components/CreatePosts/CreatePosts";

import "./App.css";
function App() {
  return (
    <Router>
      <div className="theApp">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/games" element={<CreatePosts />} />
          <Route path="/studios" element={<Studios/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/bugs" element={<Post/>} />
          <Route path="/memes" element={<Memes/>} />
          <Route path="/ratings" element={<Ratings/>} />
          <Route path="/announcements" element={<Announcements/>} />
          <Route path="/questions" element={<Questions/>} />
          <Route path="*" element={<SplashScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
