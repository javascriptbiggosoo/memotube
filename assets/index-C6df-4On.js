import{z as m,w as p,r as f,j as e,a as t,B as x,b as g}from"./index-D1pjRAnF.js";import{u,Y as h,M as j}from"./useVideoStartInit-C_l_d0DQ.js";import{a as b,u as I}from"./useMylistItem-DJUZq3Tj.js";import{M as v}from"./MDialog-DpMpCuOc.js";import"./useQuery-C5irpW9I.js";import"./mylist.api-Bfcaoxvz.js";function S(){const{listId:s}=m(),{mylistItemData:o}=b(s);u();const{deleteMylistItem:i}=I(),a=p(),[r,n]=f.useState(!1),l=()=>{n(!0)},c=d=>{d&&(i(s),a("/mylist")),n(!1)};return e.jsxs("div",{children:[o&&e.jsxs(e.Fragment,{children:[e.jsxs(M,{children:[e.jsx(k,{children:o.title}),e.jsx(D,{children:e.jsx(y,{variant:"contained",color:"warning",onClick:l,children:"리스트에서 삭제"})})]}),e.jsx(h,{videoId:o.content.videoId}),e.jsx(w,{component:"section",children:e.jsx(j,{memos:o.content.memos})})]}),e.jsx(v,{open:r,title:"리스트 삭제 확인",onClose:c,children:"정말 삭제하시겠습니까?"})]})}const y=t(x)`
  background-color: #f44336;
  color: #fff;
  &:hover {
    background-color: #d32f2f;
  }
`,M=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 10px;
`,D=t.div`
  display: flex;
  align-items: center;
  gap: 10px; /* 버튼 사이에 간격 추가 */
`,k=t.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin: 0;
  padding: 0;
  text-align: left;
`,w=t(g)`
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #f5f5f5;
`;export{S as default};
