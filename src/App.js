import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BackgroundWrapper from './component/BackgroundWrapper';
import Home from './Home';
import NotFound from './component/NotFound';
import ActivityLoader from './ActivityLoader';
import RequireAuth, { RequireNotAuth } from './RequireAuth'; 
import './css/app.css';
import './css/activity-loader.css';
import Logout from './authForm/Logout';
import { loadingContext } from './component/Context';
import { useContext } from 'react';


function App() {
  const {isLoading, setIsLoading} = useContext(loadingContext)

  return (<>
         { isLoading?<ActivityLoader/>:<div className='d-none'></div>}
        <BrowserRouter>
        <Routes>
          <Route path='/'
                element={<BackgroundWrapper>
                          <Home/>
                        </BackgroundWrapper>}
          />
          <Route path='sign-in'
                element={<BackgroundWrapper>
                          <RequireNotAuth>
                            <Home />
                          </RequireNotAuth>
                        </BackgroundWrapper>}
          />
          <Route path='sign-up'
                element={<BackgroundWrapper>
                          <RequireNotAuth>
                            <Home />
                          </RequireNotAuth>
                        </BackgroundWrapper>}
          />
          <Route path='forget-password'
                element={<BackgroundWrapper>
                          <RequireNotAuth>
                            <Home />
                          </RequireNotAuth>
                        </BackgroundWrapper>}
          />
          <Route path='otp'
                element={<BackgroundWrapper>
                          <RequireNotAuth>
                            <Home />
                          </RequireNotAuth>
                        </BackgroundWrapper>}
          />
          <Route path='logout'
                element={<RequireAuth>
                  <Logout />
                </RequireAuth>
              }
          />
          <Route path='*' 
                element={<NotFound />}
           />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
