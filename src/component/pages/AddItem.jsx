import React from 'react'
import '../../AddItem.css'
import { useState } from 'react';

const AddItem = ({ isOpen, onClose, addItem}) => {
  const [item, setItem] = useState({ name: '', sku: '', quantity: '', unitPrice: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  const handleAddItem = () => {
    addItem(item); // Pass the item to the parent component
    setItem({ name: '', sku: '', quantity: '', unitPrice: '' }); // Clear the input fields
    onClose(); // Close the modal
  };
  return (
    <div  className={`item-modal ${isOpen ? 'open' : ''}`}>
      <div >
      <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
        <h1 className='text-lg leading-6 font-medium Gilroy-Bold text-gray-900'>Add New Item</h1>
        <div className='flex'>
        <div>
        <label htmlFor="" className='font-bold'>Item Name</label>
        <input type="text"  id="name"
                name="name"
                value={item.name}
                onChange={handleInputChange} className='rounded-full light-color-2 border-none p-2 w-full mt-2 ng-pristine ng-invalid ng-touched'/>
        </div>
        <div className='w-1/6 ms-3'>
        <label htmlFor="" className='font-bold '>SKU</label>
        <input type="text"  id="name"
                name="sku"
                value={item.sku}
                onChange={handleInputChange} className='rounded-full light-color-2 border-none p-2 w-full mt-2 ng-pristine ng-invalid ng-touched'/>
        </div>
        <div  className='w-1/6 ms-3'> 
        <label htmlFor="" className='font-bold'>Quantity</label>
        <input type="number"
                name="quantity"
                value={item.quantity}
                onChange={handleInputChange} className='rounded-full light-color-2 border-none p-2 w-full mt-2 ng-pristine ng-invalid ng-touched'/>
        </div>
        <div  className='w-1/6 ms-3'>
        <label htmlFor="" className='font-bold'>Unit Price</label>
        <input type="number" 
                name="unitPrice"
                value={item.unitPrice}
                onChange={handleInputChange} className='rounded-full light-color-2 border-none p-2 w-full mt-2 ng-pristine ng-invalid ng-touched'/>
        </div>
        </div>
        <div>
        
        </div>
        </div>
        <div className='flex'>
        <div className=' rounded-full'>
          <button onClick={handleAddItem} className='text-white me-2 mt-3 text-lg w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-8 py-2 text-base font-medium text-white dark-blue hover:dark-blue-2 focus:outline-none sm:ms-3 sm:w-auto sm:text-sm ng-star-inserted ' >Add</button>
          </div>
          <div className=''>
        <button onClick={onClose} className='mt-3 w-full inline-flex justify-center rounded-full border border-gray-300 shadow-sm px-8 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ms-3 sm:w-auto sm:text-sm'>Close</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default AddItem