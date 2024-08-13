
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className='bg-white dark:bg-black min-h-screen w-full'>
      <header className='p-4'>
        <ThemeSwitcher/>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default Layout;
