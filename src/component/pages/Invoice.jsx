import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../Invoice.css'
import AddItem from './AddItem';
import NoTax from './NoTax';
import SavedItem from './SavedItem';
import { Link } from 'react-router-dom';

const Invoice = () => {
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [items, setItems] = useState([]);
  const [addItems, setAddItems] = useState([])
  const [saveItem, setSaveItem] = useState([])
  const [discountInput, setdiscountInput] = useState(0)
  const date = new Date();
  const [tempNumber, setTempNumber] = useState("INV" + date.getFullYear() + "-0002")
  const [isSavedItemsModalOpen, setIsSavedItemsModalOpen] = useState(false);

  const openSavedItemsModal = () => setIsSavedItemsModalOpen(true);
  const closeSavedItemsModal = () => setIsSavedItemsModalOpen(false);

  const openItem = () => setOpen(true)
  const showItem = () => setShow(false)

  const openItemModal = () => setIsItemModalOpen(true);
  const closeItemModal = () => setIsItemModalOpen(false);
  const inputRef = useRef(null);
  //Notax

  const addNoTax = (taxItem) => {
    setAddItems([...addItems, taxItem]);
    setOpen(false); // Close the NoTax modal after adding tax
  };
  const deleteTodo = (id) => {
    setItems(items.filter((item) => item.id !== id));
    console.log('id', id)
  };

  //Main
  const addItem = (item) => {
    const newItem =  { ...item, id: uuidv4() }
    setItems([...items,newItem]);
    setSaveItem([...items,newItem]);
    localStorage.setItem('savedItem', setSaveItem([...items,newItem]))
  };

  const handleClick = () => {
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
  useEffect(() => {
    const savedItemsFromStorage = JSON.parse(localStorage.getItem('savedItems')) || [];
    setSaveItem(savedItemsFromStorage);
  }, []);

  const CalculateSubTotal = () => {
    return items.reduce((total, item) => total + item.unitPrice * item.quantity, 0)
  }
  const CalculateTotal = () => {
    const subTotal = CalculateSubTotal()
    const discount = parseFloat(discountInput)
    const total = subTotal - discount
    return total >= 0 ? total : 0;
  }
  const discountInputShow = (e) => {
    setdiscountInput(e.target.value)
  }

  return (
    <div  >
      <div className='light-color-1 rounded-3xl p-8 flex justify-center border w-5/6 mx-4 my-6'>
        <div className='flex-col'>
          <h1 className='font-bold mb-2 text-xl'>CREATE - BILL</h1>

          <div>
            <div className=' light-color-3 border rounded-2xl px-8 py-4 flex'>
              <input
                type="file"
                ref={inputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <div className='flex flex-col w-3/4 rounded-2xl'>
                <div className=''>
                  <label htmlFor="">Invoice Number</label>
                  <input type="text" value={tempNumber} className='rounded-xl cursor-not-allowed border-none p-2 w-full mt-2' />
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

            <table className='w-full mt-3 rounded'>
              <thead className='light-color-5 '>
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
              {items.length === 0 ? (
                <td className='flex justify-center mt-3'>No Item Added</td>
              ) : (
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.sku}</td>
                      <td>{item.quantity}</td>
                      <td>{item.unitPrice}</td>
                      <td>${item.unitPrice * item.quantity}</td>
                      <td>
                        <button className='dark-blue-2 px-6 py-1 rounded-full text-white' onClick={openItem}>
                          Tax{item.tax}
                        </button>
                        {open &&(
                        <NoTax addNoTax={addNoTax} isOpen={open} />
                        )}
                      </td>

                      <td>
                        <i className="fa fa-trash cursor-pointer" aria-hidden="true" onClick={() => deleteTodo(item.id)}></i>
                        <i className="fa fa-edit cursor-pointer"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
              {/* </tbody> */}
            </table>

            <div className='px-2 mt-4 my-4 ms-4'>
              <button className='dark-blue-2 m-2 rounded-full py-1 px-2 text-white' onClick={openItemModal}>+ Add More Items</button>
              <AddItem isOpen={isItemModalOpen} onClose={closeItemModal} addItem={addItem} showItem={showItem} />
              <button className='dark-blue-2 m-2 rounded-full py-1 px-2 text-white' onClick={openSavedItemsModal}>Saved Items List</button>
              {isSavedItemsModalOpen &&(
              <SavedItem items={saveItem} onClose={closeSavedItemsModal} isOpen={isSavedItemsModalOpen}/>
              )}
            </div>
            <div className='flex justify-between pb-4'>
              <div>
                <h1>Currency:</h1>
              </div>
              {show ? (
                <div className='w-2/4 '>
                  <div className='flex justify-between font-bold'>
                    <span>Subtotal:</span>
                    <span>$0.00</span>
                  </div>
                  <div className='border border-t my-2 border-black  font-bold'></div>
                  <div className='flex justify-between font-bold'>
                    <span className='text-xl'>Total:</span>
                    <span className='text-xl'>$0.00</span>
                  </div>
                </div>
              ) : (
                <div className='flex flex-col w-2/4 font-bold'>
                  <div className='flex justify-between'>
                    <h1 className='pb-2'>SubTotal:</h1>
                    <span>${CalculateSubTotal().toFixed(2)}</span>
                  </div>
                  <div className='flex items-center justify-between' >
                    <h1 className='pb-2'>Discount(%):</h1>
                    <input type="number" className='rounded-full w-[100px] p-2' value={discountInput} onChange={discountInputShow} />
                    <span>-${CalculateTotal().toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between'>
                    <h1 className='pb-2'>Discount SubTotal:</h1>
                    <span>${CalculateTotal().toFixed(2)}</span>
                  </div>
                  <hr className='border-t' />
                  <div className='flex justify-between'>
                    <h1 className='text-xl pb-2'>Total:</h1>
                    <span>${CalculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              )}

            </div>

          </div>
          <p className='max'>If you are going accept payments via PayPal, you may need to convert amount to equivalent USD amount which is accept by PayPal. To know more about PayPal accepted currencies <Link>Click here</Link></p>
        </div>
      </div>

    </div>
  )
}

export default Invoice