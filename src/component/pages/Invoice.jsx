import React, { useRef, useState } from 'react'
import '../Invoice.css'
import AddItem from './AddItem';

const Invoice = () => {
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [items, setItems] = useState([]); 
  const openItemModal = () => setIsItemModalOpen(true);
  const closeItemModal = () => setIsItemModalOpen(false);
  const inputRef = useRef(null);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const handleClick = () => {
    // 👇️ open file input box on click of another element
    inputRef.current.click();
  };
  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    console.log('fileObj is', fileObj);
    console.log('fileObj is', fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  }

  return (
    <div  >
      <div className='light-color-1 rounded-3xl p-8 flex justify-center border  mx-4 my-6'>
        <div className='flex-col w-5/6'>
          <h1 className='font-bold mb-2 text-xl'>CREATE - BILL</h1>

          <div>
          <div className=' light-color-1 border rounded-2xl px-8 py-4 flex'>
            <input
              type="file"
              ref={inputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <div className='flex flex-col w-3/4 rounded-2xl'>
              <div className=''>
                <label htmlFor="">Invoice Number</label>
                <input type="text" placeholder='Bill Number' className='rounded-xl cursor-not-allowed border-none p-2 w-full mt-2' />
              </div>
              <div className='mt-3'>
                <label htmlFor="" className='font-bold'>Invoice Date</label>
                <input type="date" className='rounded-xl cursor-not-allowed border-none p-2 w-full mt-2' />
              </div>
              <div className='mt-3'>
                <label htmlFor="" className='font-bold'>Due Date</label>
                <input type="date" placeholder='Bill Number' className='rounded-xl cursor-not-allowed border-none p-2 w-full mt-2' />
              </div>
              <div className='mt-3'>
                <label htmlFor="" className='font-bold'>Refference Number</label>
                <input type="text" placeholder='Bill Number' className='rounded-xl cursor-not-allowed border-none p-2 w-full mt-2' />
              </div>
              <div className='mt-3'>
                <h1 className='mt-2 font-bold'>Client Name</h1>
                <div className='border border-t my-2 border-black  font-bold'></div>
              </div>

              <div className='mt-3'>
                <label htmlFor="" className='font-bold'>Customer Name</label>
                <input type="text" className='rounded-xl cursor-not-allowed border-none p-2 w-full mt-2' />
              </div>
              <div className='mt-3'>
                <label htmlFor="" className='font-bold'>Billing Address</label>
                <input type="text" className='rounded-xl h-32 cursor-not-allowed border-none p-2 w-full mt-2' />
              </div>
              <div className='mt-3'>
                <label htmlFor="" className='font-bold'>Shipping Address</label>
                <input type="text" className='rounded-xl h-32 cursor-not-allowed border-none p-2 w-full mt-2' />
                <div className='border border-t my-2 mt-2 border-black  font-bold'></div>
              </div>
            </div>
            <div>
              <div className=''>
                <label htmlFor="" className='font-bold'>Company Logo</label>
                <div className='bg-white ml-4 flex rounded-xl items-center justify-center mt-2 mb-4 p-4 h-40 w-64 ' onClick={handleClick}>
                  <div className='flex flex-col '>
                    <h1 className='font bold text-2xl justify-center flex'>+</h1>
                    <h1 className=''>Add Comapny Logo</h1>
                  </div>
                </div>
              </div>
              <div className='ml-4 w-64 mt-3 mr-2'>
                <label htmlFor="">Comapny Name</label>
                <input type="text" placeholder='Bill Number' className='rounded-xl cursor-not-allowed border-none p-2 w-full mt-2' />
              </div>
              <div className='ml-4 w-64 mt-3'>
                <label htmlFor="">Company Address</label>
                <input type="text" className='rounded-xl cursor-not-allowed h-32  border-none p-2 w-full mt-2' />
              </div>
              <div className='ml-4 w-64 mt-3'>
                <label htmlFor="">Entity ID</label>
                <input type="text" placeholder='Bill Number' className='rounded-xl cursor-not-allowed border-none p-2 w-full mt-2' />
              </div>
              <div className='ml-4 w-64 mt-3'>
                <label htmlFor="">Tax Number</label>
                <input type="text" placeholder='Bill Number' className='rounded-xl cursor-not-allowed border-none p-2 w-full mt-2' />
              </div>
            </div>
          </div>
          <div className='mt-3'>
                  <label htmlFor="" className='font-bold'>Description</label>
                  <input type="text" className='rounded-xl cursor-not-allowed border-none p-2 w-full mt-2 w-[1000px]' />
                </div>
                <table className=' w-full mt-3 rounded'>
                  <thead className='light-color-5 Gilroy-Bold  rounded-2xl font-bold text-white p-3 flex justify-between'>
                    <tr className='invoice'>
                    <th>Item Name</th>
                    <th>SKU</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total Amount</th>
                    <th>Tax</th>
                    <th>Actions</th>
                    </tr>
                  </thead>
                  <tr className='light-color-4 rounded-xl'>
                    {items.length===0?(
                    <td className='flex justify-center mt-3'>No Item Added</td>
                    ):
                    (
                      <table>
                      <tbody>
                      {items.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.sku}</td>
                          <td>{item.quantity}</td>
                          <td>{item.unitPrice}</td>
                          {/* Add more table cells as needed */}
                        </tr>
                      ))}
                    </tbody>
                    </table>
                    )}
                    <div className='px-2 mt-4 my-4 ms-4'>
                  <button className='dark-blue-2 m-2 rounded-full py-1 px-2 text-white' onClick={openItemModal}>+ Add More Items</button>
                  <AddItem isOpen={isItemModalOpen} onClose={closeItemModal}  addItem={addItem} />
                  <button className='dark-blue-2 m-2 rounded-full py-1 px-2 text-white'>Saved Items List</button>
                </div>
                  </tr>
                  <div className='flex justify-between pb-4'>
                  <div>
                    <h1>Currency:</h1>
                  </div>
                  <div className='w-2/4 '>
                  <div className='flex justify-between font-bold'>
                    <span>Subtotal:</span>
                    <span>$0.00</span>
                  </div>
                <div className='border border-t my-2 border-black  font-bold'></div>
                <div className='flex justify-between font-bold'>
                    <span className='text-xl'>Total:</span>
                    <span  className='text-xl'>$0.00</span>
                  </div>
                  </div>
                  </div>
                </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Invoice