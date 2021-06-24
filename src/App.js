import "./App.css";
import AppBar from "../src/components/AppBar";
import ResultsSection from "../src/components/ResultsSection";
import PlaySection from "../src/components/PlaySection";
import HistorySection from "../src/components/HistorySection";
import FootBar from "../src/components/FootBar";

function App() {
  return (
    <div className="App-container">
      <AppBar />
      <ResultsSection />
      <PlaySection />
      <HistorySection />
      <FootBar />
    </div>
  );
}

export default App;
