
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <div className=" max-w-[200px] max-h-full pb-44 bg-zinc-200 space-y-5 pb-full pr-10 pt-12 sticky top-20 left-0 bottom-0">
                <Link to={"/"} className="flex space-x-4 items-center hover:bg-violet-200 rounded-r transition ease-in-out duration-300 hover:scale-105 px-5 py-2 cursor-pointer">
                    <svg className=" text-violet-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 16V4H3v12zm0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7v2h2v2H8v-2h2v-2H3a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2zM5 6h9v5H5zm10 0h4v2h-4zm4 3v5h-4V9zM5 12h4v2H5zm5 0h4v2h-4z"></path></svg>
                    <h1 className=" opacity-50 font-semibold font-sans">Dashboard</h1>
                </Link>
                <Link to={"icons"} className="flex space-x-4 items-center hover:bg-indigo-200 rounded-r transition ease-in-out duration-300 hover:scale-105 px-5 py-2 cursor-pointer">
                    <svg className=" text-indigo-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 20.777a8.942 8.942 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a8.961 8.961 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A8.954 8.954 0 0 1 10 3.223"></path><path d="M12 8v4l3 3"></path></g></svg>
                    <h1 className=" opacity-50 font-semibold font-sans">History</h1>
                </Link>
                <Link to={"userprofile"} className="flex space-x-4 items-center hover:bg-lime-200 rounded-r transition ease-in-out duration-300 hover:scale-105 px-5 py-2 cursor-pointer">
                    <svg className=" text-lime-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.363T12 4q1.475 0 2.575.938t1.3 2.362l.325 2.45q.125.9-.475 1.575t-1.5.675zM4 18v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18"></path></svg>
                    <h1 className=" opacity-50 font-semibold font-sans">Users</h1>
                </Link>
                <Link to={"login"} className="flex space-x-4 items-center hover:bg-cyan-200 rounded-r transition ease-in-out duration-300 hover:scale-105 px-5 py-2 cursor-pointer">
                    <svg className=" text-cyan-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M5.62 7.38L11.5 1.5l2 2m-4.25.25L11 5.5"></path><circle cx="3.5" cy="9.5" r="3"></circle></g></svg>
                    <h1 className=" opacity-50 font-semibold font-sans">LogIn</h1>
                </Link>
                <Link to={"rigister"} className="flex space-x-4 items-center hover:bg-rose-200 rounded-r transition ease-in-out duration-300 hover:scale-105 px-5 py-2 cursor-pointer">
                    <svg className=" text-rose-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q1.325 0 2.5-.387t2.15-1.113q-.975-.725-2.15-1.112T12 17q-1.325 0-2.5.388T7.35 18.5q.975.725 2.15 1.113T12 20m0-9q.65 0 1.075-.425T13.5 9.5q0-.65-.425-1.075T12 8q-.65 0-1.075.425T10.5 9.5q0 .65.425 1.075T12 11m0 7.5"></path></svg>
                    <h1 className=" opacity-50 font-semibold font-sans">Rigister</h1>
                </Link>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Sidebar;