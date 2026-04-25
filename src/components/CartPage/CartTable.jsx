import { CartRow } from "./CartRow";

export default function CartTable() {
  return (
    <div className="flex justify-center items-center p-4 sm:p-6 w-full overflow-x-auto">
        <table className="w-full">
      
      {/* Header */}
      <th className="grid grid-cols-14 p-4 sm:p-6 text-gray-500 font-medium text-xs sm:text-sm">
        <td className="col-span-6 text-start ">Item</td>
        <td className="col-span-2 text-center">Qty</td>
        <td className="col-span-2 text-center">Price</td>
        <td className="col-span-2 text-center">Total</td>
        <td className="col-span-1 text-center"></td>
      </th>

      {/* Row */}
      <CartRow />
      <CartRow />
      <CartRow />

    </table>
    </div>
  );
}
