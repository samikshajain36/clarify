import React from 'react'
import '../../saveditem.css'

const SavedItem = ({ items, onClose, isOpen }) => {
  return (
    <div className={`item-modal w-[460px] ${isOpen ? 'open' : ''}`}>
      <h1>Saved Items List</h1>
      <table>
        <thead className='light-color-5'>
          <tr className='invoice1'>
            <th>Item name</th>
            <th>SKU</th>
            <th>Quantity</th>
            <th>Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              {/* <td> <input type="radio" id="javascript" name="fav_language" value="JavaScript"/></td> */}
              <td>{item.name}</td>
              <td>{item.sku}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='text-white me-2 mt-3 text-lg w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-8 py-2 text-base font-medium text-white dark-blue hover:dark-blue-2 focus:outline-none sm:ms-3 sm:w-auto sm:text-sm ng-star-inserted ' >Add</button>
      <button onClick={onClose} className='mt-3 w-full inline-flex justify-center rounded-full border border-gray-300 shadow-sm px-8 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ms-3 sm:w-auto sm:text-sm'>Close</button>
    </div>
  )
}

export default SavedItem