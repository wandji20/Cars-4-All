import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../nav/Nav';

const Main = () => (
  <main className="h-full w-full">
    <Nav />
    <Outlet />
  </main>
);

export default Main;
