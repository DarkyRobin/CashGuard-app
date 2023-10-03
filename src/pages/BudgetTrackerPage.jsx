import BalanceCard from "../components/BalanceCard";
import BudgetTrackerCard from "../components/BudgetTrackerCard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BudgetTracker from "../components/BudgetTracker";

const BudgetTrackerPage = (props) => {
  const { user, uuid } = props;

  return (
    <>
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <div className="flex h-full">
            <Sidebar user={ user } />
            <BudgetTracker user={ user } uuid={ uuid } />
          </div>
        </div>
      </div>
    </>
  );
};

export default BudgetTrackerPage;
