import './navbar.css'

const Navbar = () => {

  const darkTheme = 'dracula';
  const lightTheme = 'pastel'

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === darkTheme ? lightTheme : darkTheme;
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost normal-case text-xl">Farouq Syed Abdali</a>
      </div>
      <div className="navbar-end">
        <a href="/about" className="btn btn-secondary">About Me</a>
        <a href="/contact" className="btn btn-secondary">Contact</a>
        <button className="btn btn-circle btn-secondary" onClick={toggleTheme}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>
  )
}

export default Navbar;
