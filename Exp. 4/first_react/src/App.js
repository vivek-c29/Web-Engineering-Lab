import logo from './logo.svg';
import './App.css';
import DisplayText from './components/DisplayText';
import ClassDisplayText from './components/ClassDisplayText';

function App() {
  return (
    <div>
      <DisplayText/>  {/* Using the functional component */}
      
      <ClassDisplayText/>  {/* Using the functional component */}
    </div>
  );
}

export default App;
