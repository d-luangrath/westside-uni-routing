import Header from './Header'
import { Outlet, Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='main'>
      <Header />
      <div className='subnav'>
        <Link to='contact' className='subnav_links'>
          Contact
        </Link>
        <Link to='history' className='subnav_links'>
          History
        </Link>
      </div>
      <div className='box'>
        <Outlet />
      </div>
    </div>
  )
}

export default About

