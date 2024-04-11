import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"

const FooterCom = () => {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        {/* overall Div*/}
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className=''>
            {/* logo DIV*/}
            <Link
              to='/'
              className='font-bold text-lg sm:text-xl dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Sahand's
              </span>
              Blog
            </Link>
          </div>
          {/* end of   logo DIV*/}

          <div className='grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-6 sm:gap-6'>
            {/* grid to contain two columns */}
            <div className=''>
              {/* first column*/}
              <Footer.Title title='Connect With us' />
              <Footer.LinkGroup col>
                <Footer.Link href='#' target='_blank' rel='noopener noreferer'>
                  Facebook
                </Footer.Link>
                <Footer.Link href='#' target='_blank' rel='noopener noreferer'>
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* end of first column */}

            <div className=''>
              {/* second column*/}
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#' target='_blank' rel='noopener noreferer'>
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href='#' target='_blank' rel='noopener noreferer'>
                  Terms and Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* end of second column */}

            <div className=''>
              {/* third column*/}
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link href='#' target='_blank' rel='noopener noreferer'>
                  100 JS Projects
                </Footer.Link>
                <Footer.Link href='#' target='_blank' rel='noopener noreferer'>
                  About Sahands Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* end of third column */}
          </div>
          {/* end of grid to contain two columns */}
        </div>
      </div>
      {/* end of overall DIV */}
    </Footer>
  )
}

export default FooterCom
