import React from 'react';
import './teacher.register.scss';

function TeacherRegister(): JSX.Element {
  return (
    <form className="form-register-teacher" action="">
      <h2>For Teachers</h2>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
      <input type="text" placeholder="repeat your password" />
      <input type="text" placeholder="where are you from" />
      <input type="text" placeholder="what languages do you speak?" />
      <input
        type="text"
        placeholder="how much would you like to chagrge per hour ?"
      />
      <input type="text" placeholder="tell us something about yourself" />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
export default TeacherRegister;
