'use client';
import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar';

function HeaderChild() {
  const [btnTogg,upBtnTogg] = useState(false);
  // const supply = {upBtnTogg}
  return (
    <>
    <header className={btnTogg ? 'header  fixed top-0 left-0 bg-white shadow z-head max-[1070px]:left-0 transition-all duration-1000' : 'header  fixed top-0 left-0 bg-white shadow z-head max-[1070px]:left-[-390px] transition-all duration-1000'}>
  <NavBar supp={upBtnTogg} sup={btnTogg}/>
    </header>
    </>
  )
}

export default HeaderChild