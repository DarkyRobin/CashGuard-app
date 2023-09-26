const BudgetTrackerCard = (props) => {
  const { user, uuid } = props;
  return (
    <>
      <div className="card flex flex-col justify-center p-5 bg-white rounded-lg shadow-2xl m-4 w-80 h-auto">
        <div className="text-lg">Budget Tracker</div>
        
      </div>
    </>
  );
};

export default BudgetTrackerCard;