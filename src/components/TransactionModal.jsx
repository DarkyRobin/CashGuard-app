import React, { useState } from "react";
import { Button, ButtonCancel, InputField } from "./InputForm";
import { transactAccount, validateAmount } from "../modules/AccountHandler";

const TransactionModal = (props) => {
  const { isOpen, onClose, operation, currentAccount } = props;
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");
  const [accountRecipient, setAccountRecipient] = useState("");
  
  const onchangeAmount = (e) => {
    e.preventDefault();
    setAmount(e.target.value)
  }

  const onchangeARecipient = (e) => {
    e.preventDefault();
    setAccountRecipient(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validates entry first before proceeding
    const validation = validateAmount(parseFloat(amount), operation, parseFloat(currentAccount.balance), parseFloat(accountRecipient));
    const msg = validation.msg;
    setMessage(msg);

    //Validation status=1 is true then call function transactAccount
    if(validation.status === 1) {
      transactAccount(currentAccount.id, parseFloat(currentAccount.balance), parseFloat(amount), operation, parseFloat(accountRecipient));
      clearValues();
      onClose();
    }
  };

  const clearValues = () => {
    setAmount("");
    setMessage("");
    setAccountRecipient("");
    onClose();
  }

      
    // Call the onDeposit function to handle the deposit
    // onTransaction(parseFloat(amount));
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${ isOpen ? "block" : "hidden" }`}>
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">{ operation === 'send' ? 'Send' : operation === 'deposit' ? "Deposit" : 'Withdraw'}</p>
            <button className="modal-close cursor-pointer z-50" onClick={ clearValues }>&times;</button>
          </div>

          <form onSubmit={ handleSubmit }>
            <div className="mb-4">
              <InputField 
                id="amount"
                type="number"
                placeholder="Amount"
                value={ amount }
                onChange={ onchangeAmount }
              />
              { operation === 'send' &&  
                <InputField 
                  id="recipientAccount"
                  type="number"
                  placeholder="Enter Account Number"
                  value={ accountRecipient }
                  onChange={ onchangeARecipient }
                />
              }
              { message && <small className="text-red-700">{ message }</small> }
            </div>
            { }
            <div className="flex items-center justify-end mt-4 gap-3">
              <ButtonCancel onClick={ clearValues } id="close" label="Cancel" type='button'/>
              <div className="mb-4">
                <button
                  type="submit"
                  className={ `text-white font-bold py-2 px-4 rounded hover:bg-${ operation === 'send' ? 'blue' : operation === 'deposit' ? 'green' : 'red' }-400 bg-${ operation === 'send' ? 'blue' : operation === 'deposit' ? 'green' : 'red' }-500` }
                >
                  { operation === 'send' ? 'Send' : operation === 'deposit' ? 'Deposit' : 'Withdraw' } 
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
