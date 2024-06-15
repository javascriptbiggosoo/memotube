import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { IMylistItem } from "../types";
import { deleteMylist, getMylistItem } from "../api/mylist.api";
import { queryClient } from "../api/queryClient";

export const useMylistItem = (listId: string) => {
  const { data } = useQuery<IMylistItem>({
    queryKey: ["mylist", listId],
    queryFn: getMylistItem.bind(null, listId),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });

  return { mylistItemData: data };
};

export const useDeleteMylistItem = () => {
  const { mutate } = useMutation({
    mutationFn: (mylistId: string) => deleteMylist(mylistId),
    onSuccess: () => {
      // 성공시 필요한 로직 추가
      queryClient.invalidateQueries(["mylist"] as InvalidateQueryFilters);
    },
  });

  const deleteMylistItem = (mylistId: string) => {
    mutate(mylistId);
  };

  return { deleteMylistItem };
};
