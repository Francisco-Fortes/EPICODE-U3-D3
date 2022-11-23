import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WarningSign from "./Components/WarningSign";
import MyBadge from "./Components/MyBadge";
import SingleBook from "./Components/SingleBook/SingleBook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign content="Am I working?" />
        <SingleBook />
        <MyBadge content="Am I yellow?" color="warning" />
      </header>
    </div>
  );
}

export default App;
