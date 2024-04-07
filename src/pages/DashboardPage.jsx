import { useForm } from "react-hook-form";
import CartContainer from "../components/CardContainer";
import FormInput from "../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";


const formSchema = z.object({
  name: z.string().min(3).max(50),
  address: z.string().min(3).max(150),
  product: z.string().min(3).max(15),
  date: z.string().min(3).max(15),
  number: z.string().min(3).max(15),
  quandity: z.string().min(1),
  dapricete: z.string().min(3).max(15)
});
 const DashboardPage = () => {
  const [data, SetData] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });
  const fromSubmit = (data) => {
    SetData(data)

  };
  data
  return (
    <div className="w-full">
      <CartContainer />
      <div>
        <div className=" text-2xl font-semibold font-mono pt-5 pl-10 ">Save Data</div>
        <form
          onSubmit={handleSubmit(fromSubmit)}
          className="bg-white w-[90%] p-5 space-y-4 text-white text-opacity-70 border-b dark:bg-gray-800 dark:border-gray-700 rounded mt-5 mr-10 ml-10 mb-10"
        >
          <FormInput
            name={"date"}
            error={errors.date}
            register={register("date")}
            type={"date"}
            placeholder={"Date"}
            label={"Current Date"}
          />
          <FormInput
            name={"name"}
            error={errors.name}
            register={register("name")}
            type={"text"}
            placeholder={"Enter Name"}
            label={"Customer name"}
          />
          <FormInput
            name={"address"}
            error={errors.address}
            register={register("address")}
            type={"text"}
            placeholder={"Enter Address"}
            label={"Customer Address"}
          />
          <FormInput
            name={"product"}
            error={errors.product}
            register={register("product")}
            type={"text"}
            placeholder={"Enter Product"}
            label={"Product Name"}
          />
          <div className="flex justify-around">
            <FormInput
              name={"number"}
              error={errors.number}
              register={register("number")}
              type={"number"}
              placeholder={"Phone Number"}
              label={"Enter Phone Number"}
            />
            <FormInput
              name={"quandity"}
              error={errors.quandity}
              register={register("quandity")}
              type={"number"}
              placeholder={"Enter Quandity"}
              label={"Product Quandity"}
            />
            <FormInput
              name={"price"}
              error={errors.price}
              register={register("dapricete")}
              type={"number"}
              placeholder={"Enter Price"}
              label={"Product Price"}
            />
          </div>
          <div>
            <button className="p-2 mt-5 font-semibold  w-full hover:bg-cyan-800 transition ease-in-out duration-300 rounded bg-cyan-700 text-white ">
              Submit
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default DashboardPage;
