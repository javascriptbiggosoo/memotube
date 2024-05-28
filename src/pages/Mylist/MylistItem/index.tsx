import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { myVideoMemoListState } from "../../../atoms/myVideoMemoList";
import { useRecoilValue } from "recoil";
import { useVideoStartInit } from "../../../hooks/useVideoStartInit";
import { IMyMemo } from "../../../types";
import { Box, Button } from "@mui/material";
import MemoItems from "../../../components/pages/Home/Memopad/MemoItems";
import { YoutubeVideo } from "../../../components/YoutubeVideo/YoutubeVideo";
import { useQuery } from "@tanstack/react-query";

export default function MylistItemPage() {
  const { listId } = useParams<"listId">();
  const { data } = useQuery<IMyMemo>({
    queryKey: ["mylist", listId],
    queryFn: () =>
      fetch(`http://localhost:8080/mylist/${listId}`).then((res) => res.json()),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
  const myVideoMemoList = useRecoilValue(myVideoMemoListState);
  const [mylist, setMylist] = useState<IMyMemo>();
  useVideoStartInit();

  useEffect(() => {
    const mylist = myVideoMemoList.find((mylist) => mylist.id === listId);

    console.log(mylist);
    setMylist(mylist);
  }, [myVideoMemoList, listId]);

  return (
    <div>
      {mylist && (
        <>
          <Header>
            <Title>{mylist.title}</Title>
            <Actions>
              <DeleteButton variant="contained" color="warning">
                리스트에서 삭제
              </DeleteButton>
            </Actions>
          </Header>
          <YoutubeVideo videoId={mylist.content.videoId} />
          <MemoContainer component="section">
            <MemoItems memos={mylist.content.memos} />
          </MemoContainer>
        </>
      )}
    </div>
  );
}

const DeleteButton = styled(Button)`
  background-color: #f44336;
  color: #fff;
  &:hover {
    background-color: #d32f2f;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 10px;
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin: 0;
  padding: 0;
  text-align: left;
`;
const MemoContainer = styled(Box)`
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #f5f5f5;
`;
