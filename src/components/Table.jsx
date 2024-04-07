
const Table = () => {
  return (
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
            Phone no
          </th>
          <th className="px-6 py-3" scope="col">
            Name
          </th>
          <th className="px-6 py-3" scope="col">
            Address
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
          <td className="px-6 py-4">0751336007</td>
          <td className="px-6 py-4">M.Asakr</td>
          <td className="px-6 py-4">Naduoothu kinniya behin the school</td>
          <td className="px-6 py-4">Urea</td>
          <td className="px-6 py-4">2</td>
          <td className="px-6 py-4">Rs 13000</td>
          <td className="px-6 py-4">Rs 26000 </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;