import { useQuery } from "@tanstack/react-query";
import { supabase } from "../utils/supabase";

const fetchData = async () => {
  const { data, error } = await supabase.from("expenses").select("*");
  if (error) throw new Error(error.message);

  return data;
};

export const useExpense = () => {
  return useQuery({
    queryKey: ["expenses"],
    queryFn: fetchData,
    staleTime: 1000 * 60,
  });
};
