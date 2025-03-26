import { Link, useNavigate, useParams } from "react-router";
import { supabase } from "../utils/supabase";
import { useQuery } from "@tanstack/react-query";
import {
  useDeleteExpense,
  useUpdateExpense,
} from "../queries/useExpensesMutation";
import { useEffect, useState } from "react";

const fetchExpense = async (id: string) => {
  const { data, error } = await supabase
    .from("expenses")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

const Detail = () => {
  const { mutate: updateExpense } = useUpdateExpense();
  const { mutate: deleteExpense } = useDeleteExpense();
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: expense,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["expense", id],
    queryFn: () => fetchExpense(id as string), // 함수로 전달
    enabled: !!id, // id가 있을때
  });

  useEffect(() => {
    if (expense) {
      setDate(expense.date);
      setItem(expense.item ?? "");
      setAmount(expense.amount ?? 0);
      setDescription(expense.description ?? "");
    }
  }, [expense]);
  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updateExpense(
      { id, date, amount, item, description },
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  };

  const handleDelete = () => {
    if (!id) return;
    deleteExpense(id, {
      onSuccess: () => {
        navigate("/");
      },
    });
  };
  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error.message}</p>;

  return (
    <div className="max-w-[800px] w-[800px] mx-auto border rounded-lg p-5 items-start text-start">
      <form onSubmit={handleUpdate}>
        <div className="flex flex-col mb-2.5">
          <label>날짜</label>
          <input
            value={date}
            type="text"
            placeholder="YYYY-MM-DD"
            className="p-2.5 border rounded-[4px] text-[14px] border-gray-300"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-2.5">
          <label>항목</label>
          <input
            value={item}
            type="text"
            placeholder="지출 항목"
            className="p-2.5 border rounded-[4px] text-[14px] border-gray-300"
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-2.5">
          <label>금액</label>
          <input
            value={amount}
            type="number"
            placeholder=""
            className="p-2.5 border rounded-[4px] text-[14px] border-gray-300"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col mb-2.5">
          <label>내용</label>
          <input
            value={description}
            type="text"
            placeholder="지출 내용"
            className="p-2.5 border rounded-[4px] text-[14px] border-gray-300"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex gap-2.5 flex-row items-start">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-[4px] bg-blue-500 text-white cursor-pointer hover:bg-blue-700"
          >
            수정
          </button>
          <button
            type="button"
            className="px-5 py-2.5 rounded-[4px] bg-red-500 text-white cursor-pointer hover:bg-red-700"
            onClick={handleDelete}
          >
            삭제
          </button>
          <button
            type="button"
            className="px-5 py-2.5 rounded-[4px] text-white cursor-pointer bg-gray-500 hover:bg-gray-700"
          >
            <Link to={"/"}>뒤로가기</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Detail;
