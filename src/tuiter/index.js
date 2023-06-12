import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import ExploreScreen from "./explore-screen";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register";
import authReducer from "./reducers/auth-reducer";

const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer, user: authReducer}});

function Tuiter() {
 return (
  <Provider store={store}>
   <div>
     <Nav />
     <div className="row">
       <div className="col-2 position-relative">
         <NavigationSidebar />
       </div>
       <div className="col-7">
         <Routes>
            <Route path="/home-react" element={<HomeScreen />} />
            <Route path="/explore-react" element={<ExploreScreen />} />
            <Route path="/bookmarks" element={<BookmarksScreen />} />
            <Route path="/login"    element={<LoginScreen    />} />
           <Route path="/register" element={<RegisterScreen />} />
           <Route path="/profile"  element={<ProfileScreen  />} />
         </Routes>
       </div>
       <div className="col-3">
         <WhoToFollowList/>
       </div>
     </div>
   </div>
   </Provider>
 );
}

export default Tuiter;