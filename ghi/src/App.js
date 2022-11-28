import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import HotStocksNav from './Nav';

import { AccountForm } from './accounts/AccountForm';
import { LoginForm } from './accounts/LoginForm';
import { About } from './hot-stocks/About';
import { Explore } from './hot-stocks/Explore';
import { Portfolio } from './hot-stocks/Portfolio';
import { Saved } from './hot-stocks/Saved';
import { SearchList } from './hot-stocks/SearchList';


function App() {
  return (
    <BrowserRouter>
      <HotStocksNav>
        <div className="container">
          <Routes>
            <Route path="signup">
              <Route path="" element={<AccountForm />}></Route>
            </Route>
            <Route path="login">
              <Route path="" element={<LoginForm />}></Route>
            </Route>
            <Route path="search">
              <Route path="" element={<SearchList />}></Route>
            </Route>
            <Route path="saved">
              <Route path="" element={<Saved />}></Route>
            </Route>
            <Route path="/">
              <Route path="" element={<Explore />}></Route>
            </Route>
            <Route path="portfolio">
              <Route path="" element={<Portfolio />}></Route>
            </Route>
            <Route path="about">
              <Route path="" element={<About />}></Route>
            </Route>
            <Route
              path="*"
              element={
                <div className="container">
                  <div className="row">
                    <div id="alert">
                      <div></div>
                    </div>
                    <div className="offset-3 col-6">
                      <div className="shadow p-4 mt-4">
                        <h1>Uh oh...</h1>
                        <p>This page doesn't exist.</p>
                        <p>Why don't you return <Link to={`/`}>home</Link>, friend?</p>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </HotStocksNav>
    </BrowserRouter >
  );
}

export default App;
