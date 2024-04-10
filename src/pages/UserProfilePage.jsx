import { useState } from "react";
import UserProfileComponent from "../components/UserProfileComponent";
import { Link } from "react-router-dom";


const UserProfilePage = () => {

    const [hiddenF, setHidden] = useState(false)
    const FormShow = () => {
        setHidden(!hiddenF)
    }

    return (
        <div className=" w-full bg-cyan-800 min-h-screen">
            <div className=" m-5">
                <div className=" text-xl font-semibold text-white  p-5"> USERS</div>
                <div className="  w-full " >
                    <Link to={"profile"}>
                        <UserProfileComponent onClick={FormShow} count={"1"} name={"Mohammed Asakr"} rule={hiddenF ? " rotate-90  " : ""} number={"0751336007"} svg={'https://github.com/Askarmomo.png'} address={"Naduoothu kinniya-05"} />
                    </Link>
                    <div className={` ${hiddenF ? " block max-w-full " : " hidden"}`}>
                        <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th className="px-6 py-3" scope="col">
                                        no
                                    </th>
                                    <th className="px-6 py-3" scope="col">
                                        Date
                                    </th>
                                    <th className="px-6 py-3" scope="col">
                                        Product
                                    </th>
                                    <th className="px-6 py-3" scope="col">
                                        QNT
                                    </th>
                                    <th className="px-6 py-3" scope="col">
                                        Price
                                    </th>
                                    <th className="px-6 py-3" scope="col">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white text-white text-opacity-70 border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">1</td>
                                    <td className="px-6 py-4">2023/05/06</td>
                                    <td className="px-6 py-4">Urea</td>
                                    <td className="px-6 py-4">2</td>
                                    <td className="px-6 py-4">Rs 13000</td>
                                    <td className="px-6 py-4">Rs 26000 </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfilePage;