import { useForm } from "react-hook-form";
import CartContainer from "../components/CardContainer";
import FormInput from "../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"

const formSchema = z.object({
    name: z.string().min(3).max(15),
    address: z.string().min(3).max(15),
    product: z.string().min(3).max(15),
    date: z.string().min(3).max(15),
    number: z.string().min(3).max(15),
    quandity: z.string().min(3).max(15),
    dapricete: z.string().min(3).max(15),
    datotalte: z.string().min(3).max(15),

})
const DashboardPage = () => {


    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(formSchema) })
    const fromSubmit = (data) => {
        console.dir(data);
    }

    return (
        <div className="w-full">
            <CartContainer />
            <div>
                <form onSubmit={handleSubmit(fromSubmit)} className="bg-white w-[90%] p-5 space-y-4 text-white text-opacity-70 border-b dark:bg-gray-800 dark:border-gray-700 rounded m-10">
                    <FormInput name={'date'} error={errors.date} register={register("date")} type={"date"} placeholder={"Date"} label={"Current Date"} />
                    <FormInput name={'name'} error={errors.name} register={register("name")} type={"text"} placeholder={"Enter Name"} label={"Customer name"} />
                    <FormInput name={'address'} error={errors.address} register={register("address")} type={"text"} placeholder={"Enter Address"} label={"Customer Address"} />
                    <FormInput name={'product'} error={errors.product} register={register("product")} type={"text"} placeholder={"Enter Product"} label={"Product Name"} />
                    <div className="flex gap-20">
                        <FormInput name={'number'} error={errors.number} register={register("number")} type={"number"} placeholder={"Phone Number"} label={"Enter Phone Number"} />
                        <FormInput name={'quandity'} error={errors.quandity} register={register("quandity")} type={"number"} placeholder={"Enter Quandity"} label={"Product Quandity"} />
                        <FormInput name={'price'} error={errors.price} register={register("dapricete")} type={"number"} placeholder={"Enter Price"} label={"Product Price"} />
                        <FormInput name={'total'} error={errors.total} register={register("datotalte")} type={"number"} placeholder={"Enter Total Price"} label={"Total Price"} />
                    </div>
                    <div><button className="p-2 mt-5 font-semibold  w-full hover:bg-cyan-800 transition ease-in-out duration-300 rounded bg-cyan-700 text-white ">Submit</button></div>
                </form>
                <table className=" w-[90%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 m-10">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >
                        <tr>
                            <th className="px-6 py-3" scope="col">no</th>
                            <th className="px-6 py-3" scope="col">Date</th>
                            <th className="px-6 py-3" scope="col">Name</th>
                            <th className="px-6 py-3" scope="col">Address</th>
                            <th className="px-6 py-3" scope="col">Product</th>
                            <th className="px-6 py-3" scope="col">QNT</th>
                            <th className="px-6 py-3" scope="col">Price</th>
                            <th className="px-6 py-3" scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white text-white text-opacity-70 border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">1</td>
                            <td className="px-6 py-4">2023/05/06</td>
                            <td className="px-6 py-4">M.Asakr</td>
                            <td className="px-6 py-4">Naduoothu kinniya behin the school</td>
                            <td className="px-6 py-4">Urea</td>
                            <td className="px-6 py-4">2</td>
                            <td className="px-6 py-4">Rs 13000</td>
                            <td className="px-6 py-4">Rs 26000 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default DashboardPage;