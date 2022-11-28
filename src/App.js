import React from "react";
import Snowfall from 'react-snowfall'

import {themeStore} from "../src/store/index";

import './App.css';

import {HomeScreen} from "../src/screens/homescreen/index";
// import {ProjectScreen} from "../src/screens/projects/index";
// import {SkillsScreen} from "../src/screens/skillscreen/index";
import {AboutScreen} from "../src/screens/aboutscreen/index";
import {HeaderComponent} from "../src/components/header/index";
import {ContactScreen} from "../src/screens/contacts/index";

function App() {
    const theme = themeStore((state) => state.theme);
  return (
    <div className="App">
            <HeaderComponent/>
      <HomeScreen />
      {/* <SkillsScreen/> */}
      {/* <ProjectScreen /> */}
      <AboutScreen />
      <ContactScreen />
      <Snowfall
            style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh'
            }}
        />
        {/* <div className={`moonImage ${theme === "light" ? "moonSetDown" : "moonSetUp"}`}/> */}
        <div className={`moonImage ${theme === "light" ? "moonSetDown" : "moonSetUp"}`}></div>
        <div className={`sun ${theme === "light" ? "sunSet" : "sunSetDown"}`}/>
        <div className="backgroundImage"/>
        <div className="themeSwitch">
            <div className="theme1"/>
            <div className="theme2"/>
            <div className="theme3"/>
            <div className="theme4"/>
            <div className="centrPart" />
        </div>
    </div>
  );
}

export default App;
