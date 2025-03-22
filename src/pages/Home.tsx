import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import MonthNavigation from "../components/MonthNavigation";

const Home = () => {
  return (
    <main className="max-w-[800px] w-full flex flex-col gap-5 justify-center mx-auto">
      <MonthNavigation />
      <CreateExpense />
      <ExpenseList />
    </main>
  );
};

export default Home;
