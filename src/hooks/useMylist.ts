import { useMutation, useQuery } from "@tanstack/react-query";
import { IMemo, IMylistItem } from "../types";
import { createMylist, getMylist } from "../api/mylist.api";

export const useMylist = () => {
  const { data, isLoading } = useQuery<IMylistItem[]>({
    queryKey: ["mylist"],
    queryFn: getMylist,
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
  const { mutate } = useMutation({
    mutationFn: (newMyMemo: IMylistItem) => createMylist(newMyMemo),
    onSuccess: () => {
      // 성공시
    },
  });

  interface IAddMylistItemProps {
    videoId: string;
    memos: IMemo[];
    title: string;
  }
  const addMylistItem = ({ videoId, memos, title }: IAddMylistItemProps) => {
    mutate({
      id: crypto.randomUUID(),
      thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
      content: {
        id: crypto.randomUUID(),
        videoId,
        memos,
      },
      createdAt: new Date().getTime(),
      title,
    });
  };

  return { mylistData: data, addMylistItem, isMylistLoading: isLoading };
};
