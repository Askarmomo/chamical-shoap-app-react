import PropTypes from "prop-types"

const UserProfileComponent = ({ name, number, svg, address, count, onClick, rule }) => {
    return (
        <div to={"Userchild"} onClick={onClick} className=" flex justify-between bg-slate-800 transition duration-300 hover:bg-slate-900 ease-in-out text-white px-4 py-2 rounded items-center cursor-pointer w-full" >
            <div className=" flex space-x-8 items-center">
                <div className=" font-semibold">{count}</div>
                <div><img className=" w-14 rounded-full" src={svg} alt={name} /></div>
            </div>
            <div className=" flex items-center space-x-32 justify-around ">
                <div className=" font-semibold">{name}</div>
                <div className=" font-semibold">{number}</div>
                <div className=" font-semibold">{address}</div>
            </div>
            <div className={` text-xl animate-pulse font-bold text-cyan-400 rounded-full ${rule}`}><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.742 12L7.656 6.287q-.177-.25-.04-.519q.138-.268.44-.268q.12 0 .229.056q.109.057.169.157L12.962 12l-4.508 6.287q-.061.1-.17.157q-.11.056-.232.056q-.292 0-.433-.268q-.14-.269.037-.519zm5.796 0l-4.086-5.713q-.177-.25-.04-.519q.138-.268.44-.268q.12 0 .229.056q.109.057.169.157L18.758 12l-4.508 6.287q-.06.1-.17.157q-.11.056-.232.056q-.292 0-.433-.268q-.14-.269.037-.519z"></path></svg></div>
        </div>
    );
}

export default UserProfileComponent;

UserProfileComponent.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    svg: PropTypes.string,
    address: PropTypes.string,
    onClick: PropTypes.func,
    rule: PropTypes.string,
    count:PropTypes.string
}