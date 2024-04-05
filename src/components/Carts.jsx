const Cart = () => {
    return (
        <div className="bg-white max-w-[250px] rounded px-7 py-5 cursor-pointer">
            <div className="flex space-x-4 items-center justify-between">
                <div>
                    <small className="font-semibold">TRAFIC</small>
                    <div className=" font-semibold text-xl">129,393</div>
                </div>
                <div><svg className="bg-rose-500 text-white rounded-full p-1" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M2 21v-2h20v2zm1-3v-7h3v7zm5 0V6h3v12zm5 0V9h3v9zm5 0V3h3v15z"></path></svg></div>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                    <div><svg className=" text-green-500" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 9.825L8.1 12.7q-.275.275-.688.288T6.7 12.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275L13 9.825V17q0 .425-.288.713T12 18q-.425 0-.713-.288T11 17V9.825Z"></path></svg></div>
                    <div className=" text-green-400">4.5%</div>
                </div>
                <small className=" opacity-60 font-semibold">Since last month</small>
            </div>
        </div>
    );
}

export default Cart;