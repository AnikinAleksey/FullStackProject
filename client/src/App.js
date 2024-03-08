
import './App.css';

function App() {
  return (
    <div className="App">
        <nav className="nav">
          <a href="/" className="site-title">
            <img className="cat1" src="./cat.png" alt="Изображение 1"  />
            Website Name
          </a>  
          <ul>
            <li className="active">
              <a className="Page" href="/page1"> Page1</a>
            </li>
            <li className="active">
              <a className= "Page" href="/page2"> Page2</a>
            </li>
            <li className="active">
              <a className= "Page" href="/page3"> Page3</a>
            </li>
          </ul>  
        </nav>
       
        

    </div>
  );
}

export default App;
