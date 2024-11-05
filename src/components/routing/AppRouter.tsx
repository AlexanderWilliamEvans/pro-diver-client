import * as React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import atoms from '../recoil/atoms/atoms';
import { Start } from '../pages/Start';
import { Login } from '../pages/Login';
import { Dives } from '../pages/Dives/Dives';
import { DiveSites } from '../pages/DiveSites/DiveSites';
import { Profile } from '../pages/Profile/Profile';
import { Settings } from '../pages/Settings/Settings';

const AppRouter = () => {
    const userState = useRecoilValue(atoms.userState)
    return (
        <Routes>
        {
         userState.loggedIn ? (
           <>
              <Route path="/" element={<Start />} />
              <Route path="/list-dives" element={<Dives />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/dive-sites" element={<DiveSites />} />
              <Route path="*" element={<NoMatch />} />
           </>
         ) : (
           <Route path="*" element={<Login />} />
         )
          
         }
         </Routes>
    )
};

function NoMatch() {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }
  
export default AppRouter;