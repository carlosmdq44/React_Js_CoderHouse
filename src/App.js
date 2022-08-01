import './App.css';
import {Link,Outlet} from 'react-router-dom';

function App() {
  return (
   <div className="App d-flex flex-column vh-100">
    <nav class="navbar navbar-ligjt bg-light">
      <div class="container-fluid">
        <Link to="/">Index</Link>
        </div>
    </nav>
    <main>
      <Outlet />  
    </main>
      <footer class="footer mt-auto py-3 bg-light">
        <div class="container">
          <span class="text-muted">Footer Carlos Figueroa 2022.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
