import React from 'react'

const Form = ({text, submitHandler, children, style}) => {
  return (
    <div className="login-styles">

        <form onSubmit={submitHandler} className={`mx-auto form-style ${style}`} >
            <h1 className="text-center mb-3">{text}</h1>

            <div className="mb-3">
                <label for="emailField" className="form-label">Email address</label>
                <input type="email" className="form-control" id="emailField" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="passwordField" className="form-label">Password</label>
                <input type="password" className="form-control" id="passwordField" />
            </div>
            
            <button type="submit" class='btn btn-primary mb-3' className="mb-3 btn btn-primary d-block">
            {text}
            </button>

            {children}

            <h2 className="text-center">A TU PUERTA</h2>
        </form>

    </div>
  )
}

export default Form