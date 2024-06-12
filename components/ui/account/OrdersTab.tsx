import Image from "next/image";
import React from "react";
import EmberStridePic from "@/public/images/product-2-images/product-2-image-1.webp";

const ProductsOrder: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between pb-6">
        <div className="flex items-center justify-between"></div>
      </div>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-200 bg-slate-500 px-2 py-3 text-left text-xs font-semibold uppercase tracking-wider text-lightBlue sm:px-5">
                  Product
                </th>
                <th className="border-b-2 border-gray-200 bg-slate-500 px-2 py-3 text-left text-xs font-semibold uppercase tracking-wider text-lightBlue sm:px-5">
                  Quantity
                </th>
                <th className="border-b-2 border-gray-200 bg-slate-500 px-2 py-3 text-left text-xs font-semibold uppercase tracking-wider text-lightBlue sm:px-5">
                  Order Date
                </th>
                <th className="border-b-2 border-gray-200 bg-slate-500 px-2 py-3 text-left text-xs font-semibold uppercase tracking-wider text-lightBlue sm:px-5">
                  Order ID
                </th>
                <th className="border-b-2 border-gray-200 bg-slate-500 px-2 py-3 text-left text-xs font-semibold uppercase tracking-wider text-lightBlue sm:px-5">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-200 bg-slate-100 px-2 py-5 text-sm sm:px-5">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <Image
                        src={EmberStridePic}
                        alt="Image of EmberStride MAX"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="whitespace-nowrap text-gray-900">
                        EmberStride MAX
                      </p>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-200 bg-slate-100 px-2 py-5 text-sm sm:px-5">
                  <p className="whitespace-nowrap text-gray-900">1</p>
                </td>
                <td className="border-b border-gray-200 bg-slate-100 px-2 py-5 text-sm sm:px-5">
                  <p className="whitespace-nowrap text-gray-900">
                    Feb 21, 2024
                  </p>
                </td>
                <td className="border-b border-gray-200 bg-slate-100 px-2 py-5 text-sm sm:px-5">
                  <p className="whitespace-nowrap text-gray-900">#230123B</p>
                </td>
                <td className="border-b border-gray-200 bg-slate-100 px-2 py-5 text-sm sm:px-5">
                  <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-white">
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-emerald-500 opacity-50"
                    ></span>
                    <span className="relative">Delivered</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsOrder;
