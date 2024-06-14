import { useMutation, useQuery } from "@tanstack/react-query";
import { IMylistItem } from "../types";
import { deleteMylist, getMylistItem } from "../api/mylist.api";

export const useMylistItem = (listId: string) => {
  const { data } = useQuery<IMylistItem>({
    queryKey: ["mylist", listId],
    queryFn: getMylistItem.bind(null, listId),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
  const { mutate } = useMutation({
    mutationFn: (mylistId: string) => deleteMylist(mylistId),
    onSuccess: () => {
      // 성공시
    },
  });

  const deleteMylistItem = (mylistId: string) => {
    mutate(mylistId);
  };

  return { mylistItemData: data, deleteMylistItem };
};
