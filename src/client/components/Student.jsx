import { useLoaderData, Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'


const Student = () => {
  const student = useLoaderData()
  const navigate = useNavigate()

  const handleClick = (e) => {
    const body = {
      grade: e.target.value,
    }
    axios
      .patch(`/students/${student.id}`, body)
      .then(() => navigate(`/classlist/${student.class}`))
  }

  return (
    <div className='main'>
      <Header />
      <div className='box'>
        <Link to={`/classlist/${student.class}`}>
          <button className='btn'>Back to Class List</button>
        </Link>
        <h1>Student:</h1>
        <h1>
          {student.first_name} {student.last_name}
        </h1>
        <h3>Grade: {student.grade}</h3>
        <h3>Email: {student.email}</h3>
        <h2>Update Grade:</h2>
        <div>
          <button onClick={handleClick} className='btn' value='A'>
            A
          </button>
          <button onClick={handleClick} className='btn' value='B'>
            B
          </button>
          <button onClick={handleClick} className='btn' value='C'>
            C
          </button>
          <button onClick={handleClick} className='btn' value='D'>
            D
          </button>
          <button onClick={handleClick} className='btn' value='F'>
            F
          </button>
        </div>
      </div>
    </div>
  )
}

export default Student
