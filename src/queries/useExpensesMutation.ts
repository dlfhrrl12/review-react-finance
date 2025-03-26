import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Database } from "../../database.types";
import { supabase } from "../utils/supabase";

type ExpenseInsert = Database["public"]["Tables"]["expenses"]["Insert"];

const addExpenses = async (expenses: ExpenseInsert) => {
  const { data, error } = await supabase.from("expenses").insert([expenses]);

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const useCreateExpense = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addExpenses,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });
};

type ExpenseUpdate = Database["public"]["Tables"]["expenses"]["Update"];

const updateExpense = async (expense: ExpenseUpdate) => {
  if (!expense.id) {
    throw new Error("id가 존재하지 않습니다.");
  }
  const { data, error } = await supabase
    .from("expenses")
    .update(expense)
    .eq("id", expense.id);
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const useUpdateExpense = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });
};

const deleteExpense = async (id: string) => {
  const { error } = await supabase.from("expenses").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
};

export const useDeleteExpense = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });
};
