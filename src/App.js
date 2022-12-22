/** @format */

import "./App.css";
import Header from "./Components/Header";
import Input from "./Components/Input";
function App() {
  return (
    <div className="App">
      <Header title="Add your list Here ✌" />
      <Input List="✍️ Add Items..." />
    </div>
  );
}

export default App;
