import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost normal-case text-xl">Farouq Syed Abdali</a>
      </div>
      <div className="navbar-end">
        <a href="/about" className="btn btn-primary">About Me</a>
        <a href="/contact" className="btn btn-primary">Contact</a>
        {/* Add more buttons here */}
      </div>
    </div>
  )
}

export default Navbar;
