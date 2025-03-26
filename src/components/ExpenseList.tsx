import { Link } from "react-router";
import { useExpense } from "../queries/useSupabase";
import { useMonthStore } from "../store/monthStore";

const ExpenseList = () => {
  const { data: expense, isLoading, error } = useExpense();
  const { selectMonth } = useMonthStore();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <p>Error: {error.message}</p>;

  const filterExpense = selectMonth
    ? expense?.filter(
        (item) => new Date(item.date).getMonth() + 1 === selectMonth
      )
    : expense;
  return (
    <section className="rounded-2xl border shadow-lg p-5 ">
      <div className="flex flex-col gap-[10px]">
        {filterExpense?.map((item) => {
          return (
            <Link
              to={`/detail/${item.id}`}
              key={item.id}
              className="flex flex-row justify-between items-center pt-[15px] pb-[15px] pr-5 pl-5 rounded-lg bg-gray-200"
            >
              <div className="flex flex-col items-start">
                <span className="mb-1.5 text-gray-500 text-[14px]">
                  {item.date}
                </span>
                <span className="text-[16px] font-bold text-blue-500">
                  {item.item} - {item.description}
                </span>
              </div>
              <span className="text-[16px] font-bold text-blue-500">
                {item.amount} 원
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ExpenseList;
