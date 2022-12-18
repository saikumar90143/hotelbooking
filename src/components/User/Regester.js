import React from 'react'

import styled from 'styled-components'

const Regester = () => {
  return (
    <>
        <Wrapper>
            <div classNameName='form'>
                <h2>Regester Here</h2>
            <form action='/signup' method='post'>
            <div className="form-row">
    <div className="col-6 mb-3">
      <label for="validationCustom01">First name:</label>
      <input type="text" className="form-control"  placeholder="First name" name='firstname' required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-6 mb-3">
      <label for="validationCustom02">Last name:</label>
      <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" name='lastname' required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
  <div className="form-group w-50">
    <label for="exampleInputEmail1">Email address:</label>
    <input type="email" className="form-control" name='email' aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="col-6 mb-3">
      <label>Phone:</label>
      <input type="text" className="form-control" placeholder="Phone*" name='phone' required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
  <div className="form-group w-50">
    <label>Password:</label>
    <input type="password" className="form-control" name='password' placeholder="Password"/>
  </div>
  <div className="form-group w-50">
    <label>ConformPassword:</label>
    <input type="password" className="form-control" name='conformpassword' placeholder="conformPassword"/>
  </div>
  <button type="submit" className="btn btn-primary mt-4">Submit</button>
</form>
            </div>
        </Wrapper>
    </>
  )
}

const Wrapper=styled.section`
    
`

export default Regester
