import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Label, TextInput, Button, Alert, Spinner } from "flowbite-react"

const SignUp = () => {
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = e => {
    setErrorMessage(null)
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.")
    }

    try {
      setLoading(true)
      setErrorMessage(null)
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (data.success === false) {
        setErrorMessage(data.message)
      }
      setLoading(false)
      if (res.ok) {
        navigate("/signIn")
      }
      console.log(data)
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
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
              {/* username field */}
              <Label value='Your Username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            {/*end of username field*/}
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
                "Sign Up"
              )}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            {/*Extra section*/}
            <span className=''>Already have an account?</span>
            <Link to='/signin' className='text-blue-500'>
              Sign In
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

export default SignUp
