import React, { useState } from "react";
import { InputField, Button } from "./InputForm";
import { getAccount } from "../modules/AccountHandler";
import TransactionModal from "./TransactionModal";

const BalanceCard = (props) => {
  const { user, uuid } = props;
  const account = getAccount(uuid);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedOperation, setOperation] = useState(null);

  const openModal = (e) => {
    setOperation(e.target.id);
    setModalOpen(true);
  }

  const closeModal = (e) => {
    setModalOpen(false);
  }

  return (
    <>
      <div className="card flex flex-col justify-center p-5 bg-white rounded-lg shadow-2xl m-4 w-80 h-auto">
        <div className="text-lg">Balance</div>
        <div className="text-2xl font-bold text-end" id="balance"><span>&#8369;</span>{ account ? (account.balance) : (0) }</div>
        <div className=" flex flex-row justify-center gap-3 pt-3">
          <Button onClick={ openModal } id="send" label="Send"/>
          <Button onClick={ openModal } id="deposit" label="Deposit"/>
          <Button onClick={ openModal } id="withdraw" label="Withdraw"/>
        </div>
        <TransactionModal 
          isOpen = { isModalOpen }
          onClose={ closeModal }
          operation={ selectedOperation }
          currentAccount={ account }
          />
      </div>
    </>
  );
};

export default BalanceCard;
