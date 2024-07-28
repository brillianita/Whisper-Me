// components/Navbar.js

import { NavigationMenu, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Determine navbar elements based on the current route
  const getNavbarElements = () => {
    switch (location.pathname) {
      case '/':
        return (
          <>
            {/* Navigation */}
            <NavigationMenu className="fixed left-0 right-0 max-w-full flex justify-between items-center bg-dark-orange/[0.3] text-white hover:bg-dark-orange">
              <NavigationMenuLink className="">
                <a href="/" className="font-semibold flex items-center">
                  <p className="m-2 ml-4 text-xl">WhisperMe</p>
                  <p className="text-5xl text-navy">!</p>
                </a>
              </NavigationMenuLink>
              <div className="flex">
                <NavigationMenuLink className="p-5 hover:bg-white/[0.2] hover:text-white hover:font-bold">
                  <a href="/">
                    Home
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink className="p-5  hover:bg-white/[0.2] hover:text-white hover:font-bold">
                  <a href="/SignIn" className="hover:font-bold">
                    SignIn
                  </a>
                </NavigationMenuLink >
              </div>
            </NavigationMenu>
          </>
        );
      case '/SignIn':
        return (
          <>
            {/* Navigation */}
            <NavigationMenu className="fixed h-[60px] left-0 right-0 max-w-full flex justify-between items-center bg-dark-orange text-white">
              <NavigationMenuLink className="">
                <a href="/" className="font-semibold flex items-center">
                  <p className="m-2 ml-4 text-xl">WhisperMe</p>
                  <p className="text-5xl text-navy">!</p>
                </a>
              </NavigationMenuLink>
            </NavigationMenu>
          </>
        );
      default:
        return (
          <>
            {/* Navigation */}
            <NavigationMenu className="fixed left-0 right-0 top-0 max-w-full flex justify-between items-center bg-dark-orange text-white">
              <NavigationMenuLink className="">
                <a href="/" className="font-semibold flex items-center">
                  <p className="m-2 ml-4 text-xl">WhisperMe</p>
                  <p className="text-5xl text-navy">!</p>
                </a>
              </NavigationMenuLink>
              <div className="flex">
                <NavigationMenuLink className="p-5 hover:bg-white/[0.2] hover:text-white hover:font-bold">
                  <a href="/">
                    Home
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink className="p-5  hover:bg-white/[0.2] hover:text-white hover:font-bold">
                  <a href="/Threads" className="hover:font-bold">
                    Threads
                  </a>
                </NavigationMenuLink >
              </div>
            </NavigationMenu>
          </>
        );
    }
  };

  return (
    <nav>
      {getNavbarElements()}
    </nav>
  );
};

export default Navbar;
