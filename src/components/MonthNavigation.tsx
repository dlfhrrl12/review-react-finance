import { useMonthStore } from "../store/monthStore";

const MonthNavigation = () => {
  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);
  const { setSelectMonth } = useMonthStore();
  const handleMonthFilter = (month: number) => {
    setSelectMonth(month);
  };

  return (
    <section className="bg-white rounded-2xl p-5 border shadow-lg">
      <div className="flex flex-wrap gap-5 justify-center flex-row">
        {numbers.map((num) => (
          <button
            key={num}
            className="cursor-pointer text-center broder rounded-2xl font-semibold text-[18px] p-5 bg-gray-300 hover:bg-emerald-500 hover:text-white w-[104px]"
            onClick={() => handleMonthFilter(num)}
          >
            {num}월
          </button>
        ))}
      </div>
    </section>
  );
};

export default MonthNavigation;
