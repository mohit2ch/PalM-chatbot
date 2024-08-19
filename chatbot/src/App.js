import './App.css';
import ChatBox from './components/ChatBox';
import ChatForm from './components/ChatForm';

function App() {
  
  return (
    <div className="App flex bg-blue-700 h-screen m-auto rounded-lg overflow-hidden flex-col">
      <ChatBox/>
      <ChatForm/>
    </div>
  );
}

export default App;
