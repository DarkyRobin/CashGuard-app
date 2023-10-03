import { useState } from "react";
import { Button, InputField, ExpenseCategotyDropdown } from "./InputForm";
const BudgetTrackerCard = (props) => {
  const { user, uuid } = props;
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState(0);
  const expenseCategories = [
    "Food",
    "Transportation",
    "Utilities",
    "Entertainment",
  ];
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="card grid grid-flow-row justify-center p-5 bg-white rounded-lg shadow-2xl m-4 w-1 h-auto">
        <div className="card flex flex-col justify-center p-5 bg-white rounded-lg  m-4 w-80 h-auto">
          <div className="text-lg">Add Expense</div>
          <form onSubmit={handleSubmit}>
            <ExpenseCategotyDropdown
              categories={expenseCategories}
              selectedCategory={selectedCategory}
              onSelectedCategory={handleCategoryChange}
            />
            <InputField
              id="expensename"
              type="text"
              placeholder="Expense Name"
              value={expenseName}
            />
            <InputField
              id="cost"
              type="number"
              placeholder="Cost"
              value={expenseName}
            />
            <Button onClick={handleSubmit} id="addExpense" label="Add" />
          </form>
        </div>
      </div>

      <div className="card flex flex-col justify-center p-5 bg-white rounded-lg shadow-2xl m-4 w-80 h-auto">
        <div className="text-lg">Budget Tracker</div>
      </div>
    </>
  );
};

export default BudgetTrackerCard;
