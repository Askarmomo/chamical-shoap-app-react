import FormInput from "../components/FormInput";

const RigisterPage = () => {
  return (
    <div className=" w-full bg-cyan-800 min-h-screen text-white ">
      <div className=" flex justify-between w-[900px] bg-zinc-500 rounded-xl bg-opacity-30 p-5 mx-auto mt-20">
        <div className=" w-full pr-5 space-y-3">
          <div>
            <label htmlFor="" className=" font-semibold">First Name</label>
            <FormInput placeholder={"Fist Name"} type={"text"} />
          </div>
          <div>
            <label htmlFor="" className=" font-semibold">last Name</label>
            <FormInput placeholder={"last Name"} type={"text"} />
          </div>
          <div>
            <label htmlFor="" className=" font-semibold">First Email</label>
            <FormInput placeholder={"Enter Email"} type={"text"} />
          </div>
          <div>
            <label htmlFor="" className=" font-semibold">First Password</label>
            <FormInput placeholder={"Enter Password"} type={"text"} />
          </div>
          <button className=" bg-gradient-to-r from-teal-500 to-rose-500 hover:bg-gradient-to-r hover:from-teal-600 hover:to-rose-600 p-2 font-semibold w-full rounded">Sing Up</button>
        </div>
        <div>
          <img className=" h-full  rounded transition ease-in-out duration-300 hover:scale-105 cursor-pointer" src="src/images/05_the_boss_sitting_at_the_computer_9d7e72e0d6.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default RigisterPage;