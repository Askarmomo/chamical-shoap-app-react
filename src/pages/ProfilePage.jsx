
const ProfilePage = () => {
    return (
        <div className=" bg-cyan-800 min-h-screen w-full">
            <div className=" flex font-semibold  text-white border border-cyan-500 m-4 rounded-xl bg-slate-100/20 ">
                <div className=" p-5">
                    <img className=" rounded-xl transition ease-in-out duration-300  cursor-pointer hover:scale-105" src="https://github.com/Askarmomo.png" alt="" />
                </div>
                <div className=" w-full p-10 space-y-5">
                    <div className=" flex space-x-4">
                        <div className=" w-full">
                            <h1>Full Name</h1>
                            <h1 className=" bg-zinc-900 p-2 text-center rounded w-full"> Mohammed Askar</h1>
                        </div>
                        <div className=" w-full">
                            <h1>Phone Number</h1>
                            <h1 className=" bg-zinc-900 p-2 text-center rounded w-full">0751336007</h1>
                        </div>
                    </div>
                    <div>
                        <h1>Address</h1>
                        <h1 className=" bg-zinc-900 p-2 text-center rounded w-full">Naduoothu kinniya-05</h1>
                    </div>
                    <div>
                        <div className=" flex space-x-4">
                            <div className=" w-full">
                                <h1>Total Debit Balance</h1>
                                <h1 className=" bg-zinc-900 p-2 text-center text-rose-500 rounded w-full">Rs. 55000</h1>
                            </div>
                            <div className=" w-full">
                                <h1> Total Cradit Amount</h1>
                                <h1 className=" bg-zinc-900 p-2 text-center text-lime-400 rounded w-full">Rs. 10000</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" m-5">
                <table className=" rounded text-white  text-opacity-80  w-full text-center">
                    <thead className=" bg-slate-800">
                        <tr className=" font-mono border-b border-opacity-50 border-zinc-400">
                            <th className=" p-3"> Date</th>
                            <th className=" p-3"> Name</th>
                            <th className=" p-3"> Product</th>
                            <th className=" p-3"> Price</th>
                            <th className=" p-3"> Quandity</th>
                            <th className=" p-3">Totall Price</th>
                            <th className=" p-3">Cradit Amount</th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-900">
                        <tr className=" font-mono border-b border-opacity-50 border-zinc-400">
                            <td className=" p-3">2023/04/05</td>
                            <td className=" p-3">Mohemmed Askar</td>
                            <td className=" p-3">Loyent-400ML-01</td>
                            <td className=" p-3">Rs. 14500</td>
                            <td className=" p-3">2</td>
                            <td className=" p-3">Rs. 25000</td>
                            <td className=" p-3">Rs. 10000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProfilePage;