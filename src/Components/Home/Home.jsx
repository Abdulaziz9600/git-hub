import React from 'react';
import Header from './Header/Header';
import HomeNav from "./HomeNav/HomeNav";
import SiteBar from "./SiteBar/SiteBar";
import { Routes, Route } from "react-router-dom";
import Repos from "./Repos/Repos";
import PinnedRepos from "./PinnedRepos/PinnedRepos";
import Followers from './Followers/Followers';
import Footer from './Footer/Footer'

const Home = () => {
    return (
        <>
        <Header/>
        <main>

        <div className='container'>
          <HomeNav />
          <div className="row">
            <div className="col-5">
              <SiteBar />
            </div>
            <div className="col-7">
              <Routes>
                <Route path="/home" element={<PinnedRepos />} />
                <Route path="/repos" element={<Repos />} />
                <Route path={'/followers'} element={<Followers/>}/>
              </Routes>
            </div>
            <Footer/>
          </div>
        </div>
      </main>
        </>
    );
};

export default Home;