import { Link } from "react-router-dom"
import { Label, TextInput, Button } from "flowbite-react"

const SignUp = () => {
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
          <form className='flex flex-col gap-4'>
            {/**/}
            <div className=''>
              {/* username field */}
              <Label value='Your Username' />
              <TextInput type='text' placeholder='Username' id='username' />
            </div>
            {/*end of username field*/}
            <div className=''>
              {/*email field*/}
              <Label value='Your Email' />
              <TextInput
                type='text'
                placeholder='email@example.com'
                id='email'
              />
            </div>
            {/*end of email field*/}
            <div className=''>
              {/*password field*/}
              <Label value='Your Password' />
              <TextInput type='text' placeholder='Password' id='password' />
            </div>
            {/*end of password field*/}
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            {/*Extra section*/}
            <span className=''>Already have an account?</span>
            <Link to="/signin" className='text-blue-500'>Sign In</Link>
          </div>
          {/*Ens of extra section*/}
        </div>
        {/* End of second section */}
      </div>
      {/* End of overall div */}
    </div>
  )
}

export default SignUp
