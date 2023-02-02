import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;