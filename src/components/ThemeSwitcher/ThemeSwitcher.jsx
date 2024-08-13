import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <div className="flex items-center">
      <input 
        type="checkbox" 
        id="darkSwitch"
        className="relative w-14 h-7 bg-gray-100 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:border-gray-700 focus:ring-gray-700 focus:outline-none appearance-none
        before:absolute before:w-6 before:h-6 before:bg-white before:rounded-full before:transition-transform before:duration-200 checked:bg-blue-600 checked:before:translate-x-full checked:before:bg-blue-200"
        checked={theme === 'dark'}
        onChange={handleThemeChange}
      />
    </div>
  );
};

export default ThemeSwitcher;
