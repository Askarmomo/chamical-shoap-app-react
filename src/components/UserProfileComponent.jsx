import PropTypes from "prop-types"

const UserProfileComponent = ({ name, number, svg, address, count }) => {
    return (
        <div to={"Userchild"} className=" flex justify-between bg-zinc-500 text-white px-4 py-2 rounded items-center cursor-pointer" >
            <div className=" flex space-x-8 items-center">
                <div className=" font-semibold">{count}</div>
                <div><img className=" w-14 rounded-full" src={svg} alt={name} /></div>
            </div>
            <div className=" flex items-center space-x-32 justify-around ">
                <div className=" font-semibold">{name}</div>
                <div className=" font-semibold">{number}</div>
                <div className=" font-semibold">{address}</div>
            </div>
            <div className=" font-semibold text-xl rotate-180"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"></path></svg></div>
        </div>
    );
}

export default UserProfileComponent;

UserProfileComponent.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    svg: PropTypes.string,
    address: PropTypes.string,
    count: PropTypes.string
}