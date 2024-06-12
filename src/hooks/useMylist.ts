import { useQuery } from "@tanstack/react-query";
import { IMyMemo } from "../types";
import { getMylistItem } from "../api/mylist.api";

export const useMylistItem = (listId: string) => {
  const { data } = useQuery<IMyMemo>({
    queryKey: ["mylist", listId],
    queryFn: () => getMylistItem(listId),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
  console.log(data);

  return { mylistItemData: data };
};
