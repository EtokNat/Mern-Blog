import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Label, TextInput, Button, Alert, Spinner } from "flowbite-react"
import { useDispatch, useSelector } from "react-redux"
import {
  signInStart,
  signInSuccess,
  signInFailure
} from "../redux/user/userSlice"

const SignIn = () => {
  const [formData, setFormData] = useState({})
  const { loading, error: errorMessage } = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
    console.log(formData)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!formData.email || !formData.password) {
      dispatch(signInFailure("Please fill out all fields."))
    }

    try {
      dispatch(signInStart())
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (data.success === false) {
        dispatch(signInFailure(data.message))
      }
      if (res.ok) {
        dispatch(signInSuccess(data))
        navigate("/")
      }
      console.log(data)
    } catch (error) {
      dispatch(signInFailure(error.message))
      console.log(error.message)
    }
  }

  return (
    <div className='min-h-screen mt-20 '>
      {/*Content container*/}
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* Overall div */}
        <div className='flex-1'>
          {/* First section */}
          <Link to='/' className='font-bold text-4xl dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Sahand's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo website you can either sign up with your email and
            password or with Google
          </p>
        </div>
        {/* End of first section */}
        <div className='flex-1'>
          {/* Second section */}
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            {/**/}
            <div className=''>
              {/*email field*/}
              <Label value='Your Email' />
              <TextInput
                type='email'
                placeholder='email@example.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            {/*end of email field*/}
            <div className=''>
              {/*password field*/}
              <Label value='Your Password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            {/*end of password field*/}
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='ml-2'>Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            {/*Extra section*/}
            <span className=''>Don't have an account?</span>
            <Link to='/signUp' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          {/*Ens of extra section*/}
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
        {/* End of second section */}
      </div>
      {/* End of overall div */}
    </div>
  )
}

export default SignIn
