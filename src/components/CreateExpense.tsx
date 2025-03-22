const CreateExpense = () => {
  return (
    <section className="rounded-2xl border shadow-lg p-5 ">
      <div className="flex flex-wrap flex-row gap-3">
        <div className="flex flex-col flex-[1_1_0] min-w-[120px]">
          <label className="mb-1.5 text-[14px] text-left">날짜</label>
          <input
            type="text"
            className="border p-[8px] rounded-[4px] h-[34px] border-gray-300"
          />
        </div>
        <div className="flex flex-col flex-[1_1_0]  min-w-[120px]">
          <label className="mb-1.5 text-[14px] text-left">항목</label>
          <input
            type="text"
            className="border p-[8px] rounded-[4px] h-[34px] border-gray-300 placeholder:text-gray-400 placeholder:p-2"
            placeholder="지출 항목"
          />
        </div>
        <div className="flex flex-col flex-[1_1_0] min-w-[120px]">
          <label className="mb-1.5 text-[14px] text-left">금액</label>
          <input
            type="number"
            className="border p-[8px] rounded-[4px] h-[34px] border-gray-300 placeholder:text-gray-400 placeholder:p-2"
            placeholder="지출 금액"
          />
        </div>
        <div className="flex flex-col flex-[1_1_0] min-w-[120px]">
          <label className="mb-1.5 text-[14px] text-left">내용</label>
          <input
            type="text"
            className="border p-[8px] rounded-[4px] h-[34px] border-gray-300 placeholder:text-gray-400 placeholder:p-2"
            placeholder="지출 내용"
          />
        </div>
        <button className="h-[34px] mt-6 bg-blue-500 rounded-[4px] text-white cursor-pointer pr-5 pl-5 pt-[8px] pb-[8px] text-[14px]  hover:bg-blue-700">
          저장
        </button>
      </div>
    </section>
  );
};

export default CreateExpense;
