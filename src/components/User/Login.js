import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <>
      <Wrapper>
          <div>
            <h2>LOGIN</h2>
          <form action='/login' method='post'>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" name='email' aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" name='password' placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary mt-4">Submit</button>
</form>
          </div>
      </Wrapper>
    </>
  )
}

const Wrapper=styled.section`

height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;

   form{
    box-shadow: 0 0 2px gray;
    padding: 15px;
   }

`
export default Login
