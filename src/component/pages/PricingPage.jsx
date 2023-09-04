import React from 'react'
import '../../Pricing.css'

const PricingPage = () => {
    return (
        <div>

            <div class="relative overflow-x-auto mt-8 mb-6 font-bold Gilroy-Bold text-lg ">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bgcolor1">
                        <tr>
                            <th scope="col" class="px-6 py-3 font-bold text-base">
                                Plan Features
                            </th>
                            <th scope="col" class="px-6 py-3 font-bold text-base">
                                Free
                                $0/year
                            </th>
                            <th scope="col" class="px-6 py-3 font-bold text-base">
                                Basic
                                $90/year
                            </th>
                            <th scope="col" class="px-6 py-3 font-bold text-base flex ">
                                Pro
                                $140/year
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 bgcolor1">
                            <th scope="row" class="px-6 py-4 font-bold Gilroy-Bold text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Create (Invoices, Bills, Quotes, Purchase Orders)
                            </th>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 bgcolor1">
                            <th scope="row" class="px-6 py-4 font-bold Gilroy-Bold text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Save Invoices
                            </th>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                 yes
                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800 bgcolor1">
                            <th scope="row" class="px-6 py-4 font-bold Gilroy-Bold text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Search invoices by date range and type
                            </th>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                No
                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800 bgcolor1">
                            <th scope="row" class="px-6 py-4 font-bold Gilroy-Bold text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Pay now by email
                            </th>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                No
                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800 bgcolor1">
                            <th scope="row" class="px-6 py-4 font-bold Gilroy-Bold text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Track Payments
                            </th>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                Yes
                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800 bgcolor1">
                            <th scope="row" class="px-6 py-4 font-bold Gilroy-Bold text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Export in CSV and PDF
                            </th>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800 bgcolor1">
                            <th scope="row" class="px-6 py-4 font-bold Gilroy-Bold text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Multi-Currency
                            </th>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800 bgcolor1">
                            <th scope="row" class="px-6 py-4 font-bold Gilroy-Bold text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Sequential Invoice Numbering
                            </th>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                yes
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800 bgcolor1">
                            <th scope="row" class="px-6 py-4 font-bold Gilroy-Bold text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Form Limitation
                            </th>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg ">
                                10
                            </td>

                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                1500
                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                                1500
                            </td>

                        </tr>
                        <tr class="bg-white dark:bg-gray-800 bgcolor1">
                            <th scope="row" class="px-6 py-4 font-bold Gilroy-Bold text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           
                            </th>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                            <button className='font-bold m-2 border border-slate-300 p-2 w-24 rounded-xl w-[145px] dark-blue text-white'>Start Now</button>

                            </td>

                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                            <button className='font-bold m-2 rounded-xl border-2 w-[145px] border-slate-300 p-2 w-24 rounded'>Get This</button>

                            </td>
                            <td class="px-6 py-4 font-bold Gilroy-Bold text-lg">
                            <button className='font-bold m-2 rounded-xl  border-2 mr-4 w-[145px] border-slate-300 p-2 w-24 rounded'>Get This</button>

                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default PricingPage