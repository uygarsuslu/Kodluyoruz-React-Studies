// her bir birimin kendi içinde doğru çalışıp çalışmadığını otomatize ettirecek kodu yazdırabiliriz
// her component'in kendi içinde doğru çalıştığına emin olmamız gerek

import './App.css';

// import Counter from "./components/Counter";
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Todo />
    </div>
  );
}
export default App;