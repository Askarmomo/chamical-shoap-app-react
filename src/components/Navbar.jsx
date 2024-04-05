const Navbar = () => {
    return (
        <div>
            <header className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-5 flex justify-between ">
                <div className="text-white font-semibold text-4xl">momo</div>
                <div className=" flex space-x-10"  >
                    <div className="relative">
                        <input className=" p-2.5 text-white opacity-75 bg-transparent pl-10 rounded-full placeholder:text-white outline-none border-2" type="text" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white -rotate-3 absolute bottom-3.5 left-3" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="currentColor" d="m228.24 219.76l-51.38-51.38a86.15 86.15 0 1 0-8.48 8.48l51.38 51.38a6 6 0 0 0 8.48-8.48M38 112a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74"></path></svg>
                    </div>
                    <div className=" flex items-center justify-center space-x-2">
                        <div><img className="w-8 rounded-full" src="./src/images/WhatsApp Image 2024-01-28 at 18.41.53_c0709b7b.jpg" alt="" /></div>
                        <div><h1 className="text-white font-semibold">Asakr</h1></div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;