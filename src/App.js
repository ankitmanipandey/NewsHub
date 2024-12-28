import Navbar from './components/Navbar';
import News from './components/News';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App() {
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>

          <Route path="/" element={<News setProgress={setProgress} key="/" pageSize={6} country="us" category="general" />} />
          <Route path="/general" element={<News setProgress={setProgress} key="general" pageSize={6} country="us" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} key="business" pageSize={6} country="us" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={6} country="us" category="entertainment" />} />
          <Route path="/health" element={<News setProgress={setProgress} key="health" pageSize={6} country="us" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} key="science" pageSize={6} country="us" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={6} country="us" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={6} country="us" category="technology" />} />

        </Routes>
      </Router>
    </div>
  );
}

