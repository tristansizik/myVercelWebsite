import {
    FaSearch,
    FaHashtag,
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
  } from 'react-icons/fa';
  import useDarkMode from './hooks/useDarkMode';
  
  const TopNavigation = () => {
    return (
      <div className='top-navigation p-8'>
        <HashtagIcon />
        <Title />
        <ThemeIcon />
        <Search />
        <BellIcon />
        <UserCircle />
        
      </div>
    );
  };
  
  const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode} class= "group-hover:scale-100">
        {darkTheme ? (
          <FaSun size='24' className='top-navigation-icon inline-block mx-32' /> 
        ) : (
          <FaMoon size='24' className='top-navigation-icon inline-block mx-32' />
        )}
      </span>
    );
  };
  
  const Search = () => (
    <div className='search inline-block ml-32'>
      <input className='search-input inline-block' type='text' placeholder='Search...' />
      <FaSearch size='18' className='text-secondary my-auto inline-block' />
    </div>
  );
  const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon my-auto static right-10 inline-block' />;
  const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon right-5 inline-block w-auto h-auto' />;
  const HashtagIcon = () => <FaHashtag size='14' className='title-hashtag my-auto inline-block mr-0' />;
  const Title = () => <h5 className='title-text my-auto inline-block pl-1 pr-5'>tailwind-css</h5>;
  
  export default TopNavigation;