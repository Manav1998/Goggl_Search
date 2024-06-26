import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { CustomRoutes } from "./components/CustomRoutes";
import { Footer } from "./components/Footer";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : 'light'}>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <CustomRoutes/>
            <Footer/>
        </div>
    </div>
  );
};

export default App;
