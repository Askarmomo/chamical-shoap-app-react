import { useForm } from "react-hook-form";
import CartContainer from "../components/CardContainer";
import FormInput from "../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
// import JsonData from "../data/data.json"
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../FireBase";

const formSchema = z.object({
  name: z.string().min(3).max(50),
  address: z.string().min(3).max(150),
  product: z.string().min(3).max(15),
  date: z.string().min(3).max(15),
  number: z.string().min(3).max(15),
  quandity: z.string().min(1),
  price: z.string().min(3).max(15),
  craditAmount: z.string().min(3).max(15)
});

const DashboardPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: zodResolver(formSchema) });

  const [custemers, setCustemers] = useState([])
  // firebase code here
  const fromSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "custemer"), data);
      console.log("Document written with ID: ", docRef.id);
      alert('data added successfully')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    reset()
  };
  console.log(custemers);

  useEffect(() => {
    const getdatafromfirebase = async () => {
      // await fetch()
      const querySnapshot = await getDocs(collection(db, "custemer"));
      setCustemers(querySnapshot.docs.map((doc) => doc.data()))
      // console.log(querySnapshot.docs[0].data());
      // querySnapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data()}`,doc.data());
      // });

      if (querySnapshot.docs.length === 0) {
        console.log('no records in exist');
      }

    }
    getdatafromfirebase()
  }, [])

  return (
    <div className="w-full bg-cyan-800 min-h-screen">
      <CartContainer />
      <div>
        <div className=" text-2xl font-semibold font-mono pt-5 pl-10  text-white">Save Data</div>
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
              register={register("price")}
              type={"number"}
              placeholder={"Enter Price"}
              label={"Product Price"}
            />
            <FormInput
              name={"craditAmount"}
              error={errors.price}
              register={register("craditAmount")}
              type={"number"}
              placeholder={"Cradit Amount"}
              label={"Cradit Amount"}
            />
          </div>
          <div>
            <button className="p-2 mt-5 font-semibold  w-full hover:bg-cyan-800 transition ease-in-out duration-300 rounded bg-cyan-700 text-white ">
              Submit
            </button>
          </div>
        </form>
        {/* display values */}
        <section>
          <div className="relative overflow-x-auto m-5">
            <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3" scope="col">
                    no
                  </th>
                  <th className="px-4 py-3" scope="col">
                    Date
                  </th>
                  <th className="px-4 py-3" scope="col">
                    Phone no
                  </th>
                  <th className="px-4 py-3" scope="col">
                    Name
                  </th>
                  <th className="px-4 py-3" scope="col">
                    Address
                  </th>
                  <th className="px-4 py-3" scope="col">
                    Product
                  </th>
                  <th className="px-4 py-3" scope="col">
                    Price
                  </th>
                  <th className="px-4 py-3" scope="col">
                    QNT
                  </th>
                  <th className="px-4 py-3" scope="col">
                    Total
                  </th>
                  <th className="px-4 py-3" scope="col">
                    Cradit
                  </th>
                  <th className="px-4 py-3" scope="col">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody>
                {custemers.map((custemer, index) => {
                  return <tr key={index} className="bg-white text-white text-opacity-70 border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-4 py-4">{index + 1}</td>
                    <td className="px-4 py-4">{custemer.date}</td>
                    <td className="px-4 py-4">{custemer.number}</td>
                    <td className="px-4 py-4">{custemer.name}</td>
                    <td className="px-4 py-4">{custemer.address}</td>
                    <td className="px-4 py-4">{custemer.product}</td>
                    <td className="px-4 py-4">Rs.{custemer.price}</td>
                    <td className="px-4 py-4">{custemer.quandity}</td>
                    <td className="px-4 py-4">Rs.{custemer.price * custemer.quandity} </td>
                    <td className="px-4 py-4 text-lime-500">Rs.{custemer.craditAmount}</td>
                    <td className="px-4 py-4 text-red-500">Rs.{custemer.price * custemer.quandity - custemer.craditAmount} </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
