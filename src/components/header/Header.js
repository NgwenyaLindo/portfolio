import Links from '../../links.svg'
import { Link } from 'react-scroll'
import hero from '../../images/hero.jpg'

// const [ menu, setMenu ] = useState();

const closeMenu = (e) => {
  e.preventDefault();
  return console.log('Close Menu')
}


function Header () {
    return (

<div id="home" className="relative overflow-hidden bg-white">
  <div className="mx-auto max-w-7xl">
    <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
      <svg className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <div>
        <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <a href="https://github.com/NgwenyaLindo" target="_blank" rel="noreferrer">
                  <span className="sr-only">Lindokuhle Ngwenya</span>
                  <img alt="Lindokuhle Ngwenya" className="h-8 w-auto sm:h-10 rounded-full" src={Links} />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                     {/* Heroicon name: outline/bars-3 */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
            <Link className="font-medium text-gray-500 hover:text-gray-900" activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}> 
              Home
            </Link>
            <Link className="font-medium text-gray-500 hover:text-gray-900" activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}> 
              Projects
            </Link>
            <Link className="font-medium text-gray-500 hover:text-gray-900" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}> 
              About
            </Link>
            <Link className="font-medium text-gray-500 hover:text-gray-900" activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}> 
              Contact
            </Link>

            </div>
          </nav>
        </div>

          {/* Mobile menu, show/hide based on menu open state.
          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95" */}

        <div className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img className="h-8 w-auto rounded-full" src={Link} alt="" />
              </div>
              <div className="-mr-2">
                <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500" onClick={closeMenu}>
                  <span className="sr-only">Close main menu</span>
                  {/* Heroicon name: outline/x-mark */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">

            <Link className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900" activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}> 
              Home
            </Link>
            <Link className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900" activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}> 
              Projects
            </Link>
            <Link className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}> 
              About
            </Link>
            <Link className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900" activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}> 
              Contact
            </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-red-600 text-6xl xl:block leading-relaxed"> Lindokuhle Ngwenya </span>
            <span className="block xl:block">Full-Stack Developer</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">with a background in technical and customer-focused support. Looking for an opportunity to apply creative, analytical, and communicative skills on a development team. 
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
            <Link className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-sky-700 md:py-4 md:px-10 md:text-lg" activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}> 
            My Work
            </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-100 px-8 py-3 text-base font-medium text-red-700 hover:bg-sky-200 md:py-4 md:px-10 md:text-lg" activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}> 
            Contact Me
            </Link>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src={hero} alt="laptop on desk" />
  </div>
</div>
        )
}

export default Header;