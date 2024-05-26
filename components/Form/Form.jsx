import { useState } from 'react';
import './Form.css';
import Validation from '../Validation/Validation'

const Form = ({login}) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({ email: '', password: '' });

    const handleChange = (event) => {
      setUserData({ ...userData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      login({ userData });
    };
  
    return (
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} />
  
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
  
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  
  export default Form;
