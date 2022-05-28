import './Nav.css'

export const Nav = () => {
  return (
    <nav className='nav'>
      <div className="nav-container">
      <div className="logo">Booking.com</div>
      <div className="btn-group">
          <button className="btn">Register</button>
          <button className="btn">Sign in</button>
      </div>
      </div>
    </nav>
  )
}
