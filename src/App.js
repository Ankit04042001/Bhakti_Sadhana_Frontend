import { Routes, Route, useNavigate } from 'react-router-dom';
import BackgroundWrapper from './component/BackgroundWrapper';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import ActivityLoader from './ActivityLoader';
import RequireAuth, { RequireNotAuth } from './RequireAuth';
import './css/app.css';
import './css/activity-loader.css';
import Logout from './authForm/Logout';
import { loadingContext } from './component/Context';
import { useContext, useEffect } from 'react';
import Attendence from './Pages/Attendence';
import { logoutChannel } from './authForm/Logout';
import Error from './Pages/Error';


function App() {
  const { isLoading } = useContext(loadingContext);
  const navigate = useNavigate();



  useEffect(() => {
    logoutChannel.addEventListener('message', () => {
      navigate('/logout');
    });

  });

  return (<>
    {isLoading ? <ActivityLoader /> : <div className='d-none'></div>}
    <Routes>
      <Route path='/'
        element={<BackgroundWrapper>
          <Home />
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
        element={<RequireAuth >
          <Logout />
        </RequireAuth>
        }
      />
      <Route path='attendence'
        element={<RequireAuth url='/sign-in'>
          <BackgroundWrapper >
            <Attendence />
          </BackgroundWrapper>
        </RequireAuth>
        }
      />
      <Route path='error'

        element={<Error />}
      />
      <Route path='*'
        element={<NotFound />}
      />
    </Routes>
  </>
  );
}

export default App;
