const MonthNavigation = () => {
  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <section className="bg-white rounded-2xl p-5 border shadow-lg">
      <div className="flex flex-wrap gap-5 justify-center flex-row">
        {numbers.map((num) => (
          <button className="cursor-pointer text-center broder rounded-2xl font-semibold text-[18px] p-5 bg-gray-300 hover:bg-emerald-500 hover:text-white w-[104px]">
            {num}월
          </button>
        ))}
      </div>
    </section>
  );
};

export default MonthNavigation;
