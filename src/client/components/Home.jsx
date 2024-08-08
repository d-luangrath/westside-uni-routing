import Header from './Header'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='main'>
      <Header />
      <div className='box'>
        <Link to='classlist/math1010'>
          <button className='btn'>Math 1010</button>
        </Link>
        <Link to='classlist/eng2010'>
          <button className='btn'>English 2010</button>
        </Link>
        <Link to='classlist/bio2020'>
          <button className='btn'>Biology 2020</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
