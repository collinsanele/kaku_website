

const Header = ({ siteTitle }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
    <nav class="shadow fixed bgcolor">
        <div class=" mx-auto py-3 md:flex md:justify-between md:items-center">

            <div class="flex justify-between items-center">
                <div class="flex items-center justify-center">
                    <div class="pl-4">
                        <img src={logo} alt="talk" class="w-5 h-5 mb-0 inline"/>
                    </div>
                    <Link to="/" class="inline text-white text-xl md:text-2x hover:text-gray-300 pl-4 designfont" >
                        {siteTitle}
                    </Link>
                </div>
                
                {/* <!-- Mobile menu button --> */}
                <div class="flex md:hidden">
                    <button type="button" class="text-gray-200 hover:text-gray-400 focus:outline-none dark:focus:text-gray-400 z-50" aria-label="toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
                        <Hamburger size={20}/>
                    </button>
                </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div className="md:flex items-center hidden md:block ">
                <div className="flex flex-row  ">
                    <a class="my-1 text-sm text-gray-200 font-medium hover:text-indigo-400 md:mx-4 md:my-0" href="#">Fire</a>
                    <a class="my-1 text-sm text-gray-200 font-medium hover:text-indigo-400 md:mx-4 md:my-0" href="#">Water</a>
                    <a class="my-1 text-sm text-gray-200 font-medium hover:text-indigo-400 md:mx-4 md:my-0" href="#">Air</a>
                    <a class="my-1 text-sm text-gray-200 font-medium hover:text-indigo-400 md:mx-4 md:my-0" href="#">Earth</a>
                </div>

            </div>

            {/* drop-down menu */}
            <div className={ " flex justify-center absolute top-0 right-0 w-full h-full bgcolor items-center transition transform duration-500 ease-in-out z-30 opacity-0" +
                  (menuOpen ? " opacity-100 translate-y-0" : " -translate-y-full")}>
                <div className="flex flex-col justify-center item-center text-center ">
                    <Link to="/page-2/" class="my-1 text-gray-200 font-medium hover:text-indigo-400 md:mx-4 md:my-0" href="#">Fire</Link>
                    <a class="my-1  text-gray-200 font-medium hover:text-indigo-400 md:mx-4 md:my-0" href="#">Water</a>
                    <a class="my-1  text-gray-200 font-medium hover:text-indigo-400 md:mx-4 md:my-0" href="#">Air</a>
                    <a class="my-1  text-gray-200 font-medium hover:text-indigo-400 md:mx-4 md:my-0" href="#">Earth</a>
                </div>
            </div>
        </div>
    </nav>
)}