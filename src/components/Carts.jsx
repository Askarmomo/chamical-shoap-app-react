

const Cart = (prop) => {
    return (
        <div className="bg-white  rounded px-7 py-5 cursor-pointer">
            <div className="flex space-x-4 items-center justify-between">
                <div>
                    <small className="font-semibold">{prop.small}</small>
                    <div className=" font-semibold text-xl">{prop.count}</div>
                </div>
                <div>{prop.svg}</div>
            </div>
            <div className="flex items-center justify-between mt-4 pt-5">
                <div className="flex items-center">
                    <div><svg className=" text-green-500" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 9.825L8.1 12.7q-.275.275-.688.288T6.7 12.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275L13 9.825V17q0 .425-.288.713T12 18q-.425 0-.713-.288T11 17V9.825Z"></path></svg></div>
                    <div className=" text-green-400">{prop.persantage}%</div>
                </div>
                <small className=" opacity-60 font-semibold pl-5">{prop.date}</small>
            </div>
        </div>
    );
}

export default Cart;