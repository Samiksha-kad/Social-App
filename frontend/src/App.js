import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './Actions/userActions'
import { Home } from './Components/Home/Home';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user)
  useEffect(() => {
    dispatch(loadUser())
  }, [])
  return (
    <div className="App">
      <Router>
        {isAuthenticated && <Header />}

        <Routes>


          <Route path="/" element={isAuthenticated ? <Login /> : <Home />} />
          {/* <Route path="/registration" element={<Registration />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/create" element={<PaperMaker />} />
              <Route path="/preview" element={<Preview />} /> */}
          {/* <Route path="*" element={
            <div>
              <img src="https://cdn.dribbble.com/users/781820/screenshots/2573496/minions-yellow-bg.gif" alt="not found"
              /> */}
          {/* </div>

          } /> */}
        </Routes>
      </Router >
    </div>
  );
}

export default App;
