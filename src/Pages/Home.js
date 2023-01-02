import React from 'react';
import Header from '../Component/Header.js';
import Freshfood from '../Component/Freshfood.js';
import Howitworks from '../Component/Howitworks.js';
import Promise from '../Component/Promise.js';
import About from '../Component/About.js';
import Happyfarming from '../Component/Happyfarming.js';
import Cards from '../Component/Cards.js';
import Last from '../Component/Last.js';

function Home() {
  return (
    <>
    <Header />
    <Freshfood />
    <Howitworks />
    <Promise />
    <About />
    <Happyfarming />
    <Cards />
    <Last />
    </>
  );
};

export default Home;
