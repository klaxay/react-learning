// import logo from './logo.svg';
import './App.css';
import Joke from  './components/Joke';
import jokes from './jokesData.js'

function App() {
  const jokeElements = jokes.map((joke)=>{
    return (<Joke question={joke.question} punchline={joke.punchline} />)
  })
  return (
    <div className="App">
      {jokeElements}
    </div>
  );
}

export default App;
