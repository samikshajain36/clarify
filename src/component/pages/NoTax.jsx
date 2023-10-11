import React from 'react'
import '../../Notax.css'
import { useState } from 'react'

const NoTax = ({ addNoTax, open }) => {
    const [add, setAdd] = useState({ taxName: "", rate: "" })

    const handleAddItem = () => {
        addNoTax(add); // Pass the item to the parent component
        setAdd({ taxName: "", rate: "" }); // Clear the input fields
        // onClose(); 
    };
    if (!open) {
        return null; // If isOpen is false, do not render the modal
    }
    return (
        <div className={`item-modal ${open ? 'open' : ''}`}>
            <div>
                <h1>Save Tax</h1>
            </div>
            <div>
                <table>
                    <thead className=''>
                        <th>Tax Name</th>
                        <th>Rate % </th>
                    </thead>
                </table>
            </div>
            <div>
          <label htmlFor="">Tax Name</label>
          <input
            type="text"
            value={add.taxName}
            onChange={(e) => setAdd({ ...add, taxName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="">Rate</label>
          <input
            type="text"
            value={add.rate}
            onChange={(e) => setAdd({ ...add, rate: e.target.value })}
          />
        </div>
        <div>
          <button onClick={handleAddItem}>Add</button>
        </div>
        </div>
    )
}

export default NoTax