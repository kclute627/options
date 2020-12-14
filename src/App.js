import Header from "./components/Header";
import store from './store'
import { Provider } from "react-redux";
import Dashboard from "./screens/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    
      <div className="App">
        {/* <Header /> */}
        <section>
          <Router>
            <Route exact path="/" component={Dashboard} />
          </Router>
        </section>
      </div>
    
  );
}

export default App;
