import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      
      <h2 style={styles.logo}>MyApp</h2>

      <div style={styles.links}>
        <Link to='/' style={styles.link}>Home</Link>
        <Link to='/profile' style={styles.link}>Profile</Link>
        <Link to='/contact' style={styles.link}>Contact Us</Link>
      </div>

    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#333',
    color: '#fff'
  },
  logo: {
    margin: 0
  },
  links: {
    display: 'flex',
    gap: '20px'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
}

export default Navbar