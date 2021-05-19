
import './App.css';
import logo from './images/logo.jpg'
import logo1 from './images/Logo1.png'


function App() {
  return (
    <div className="App">
      <div className="Content">
        <div className="App-header">
          <div className="Body" >
            <div className="Profile">
              <div className="Profile-image">
                <img src={logo1} alt="profile"></img>
              </div>
              <div className="Profile-username">
                <h1>SLSS Achievers Club</h1>
              </div>
            </div>
            <div className="Link">
              <div className="Link-container">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSelMeq1DbUbhLs7n3SiVFKCBWqCkG8t8L8-8lWGPXS-6ohfVQ/viewform">Sign Up (Google Forms)</a>
              </div>
            </div>
            <div className="Link">
              <div className="Link-container">
                <a href="https://www.instagram.com/slssachiever/?hl=en">Instagram</a>
              </div>                
            </div>
            <div className="Link">
              <div className="Link-container">
                <a href="">Google Classroom</a>
              </div>                
            </div>
            <div className="Link">
              <div className="Link-container">
                <a href="https://github.com/SLSS-Achievers-Club">Github</a>
              </div>                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
