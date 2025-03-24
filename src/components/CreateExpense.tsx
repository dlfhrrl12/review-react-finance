import { useState } from "react";
import { useCreateExpense } from "../queries/useExpensesMutation";

const CreateExpense = () => {
  const { mutate } = useCreateExpense();
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !item || !amount || !description) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    const expense = {
      date,
      item,
      amount,
      description,
    };

    mutate(expense);

    setDate("");
    setItem("");
    setAmount(0);
    setDescription("");
  };

  return (
    <section className="rounded-2xl border shadow-lg p-5 ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap flex-row gap-3">
          <div className="flex flex-col flex-[1_1_0] min-w-[120px]">
            <label className="mb-1.5 text-[14px] text-left">날짜</label>
            <input
              type="text"
              className="border p-[8px] rounded-[4px] h-[34px] border-gray-300"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col flex-[1_1_0]  min-w-[120px]">
            <label className="mb-1.5 text-[14px] text-left">항목</label>
            <input
              type="text"
              className="border p-[8px] rounded-[4px] h-[34px] border-gray-300 placeholder:text-gray-400 placeholder:p-2"
              placeholder="지출 항목"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
          <div className="flex flex-col flex-[1_1_0] min-w-[120px]">
            <label className="mb-1.5 text-[14px] text-left">금액</label>
            <input
              type="number"
              className="border p-[8px] rounded-[4px] h-[34px] border-gray-300 placeholder:text-gray-400 placeholder:p-2"
              placeholder="지출 금액"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col flex-[1_1_0] min-w-[120px]">
            <label className="mb-1.5 text-[14px] text-left">내용</label>
            <input
              type="text"
              className="border p-[8px] rounded-[4px] h-[34px] border-gray-300 placeholder:text-gray-400 placeholder:p-2"
              placeholder="지출 내용"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="h-[34px] mt-6 bg-blue-500 rounded-[4px] text-white cursor-pointer pr-5 pl-5 pt-[8px] pb-[8px] text-[14px]  hover:bg-blue-700"
          >
            저장
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateExpense;
