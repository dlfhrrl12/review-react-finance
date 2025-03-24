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
