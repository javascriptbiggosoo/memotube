import{j as o,F as b,a as s,B as m,z as v,c as C,d as y,r as l,w as B,b as L}from"./index-D1pjRAnF.js";import{u as P,Y as S,M as I}from"./useVideoStartInit-C_l_d0DQ.js";import{a as M}from"./usePost-C1ogWSmd.js";import{M as w}from"./MDialog-DpMpCuOc.js";import"./useQuery-C5irpW9I.js";function z({onClick:i,likeCount:e,liked:r}){return o.jsxs(E,{onClick:i,size:"large",color:r?"error":"primary",children:[o.jsx(b,{}),e||0]})}const E=s(m)`
  display: flex;
  gap: 6px;

  svg {
    color: inherit;
    * {
      color: inherit;
    }
  }
`;function T(){const{postId:i}=v(),{postData:e,deletePost:r,toggleLike:f}=M(i),t=C(y),[n,c]=l.useState((e==null?void 0:e.likes.likedUser.includes((t==null?void 0:t.email)||"없다능"))||!1),[x,d]=l.useState((e==null?void 0:e.likes.likeCount)||0);P();const g=B(),[p,u]=l.useState(!1);l.useEffect(()=>{e&&(c(e.likes.likedUser.includes((t==null?void 0:t.email)||"없다능")),d(e.likes.likeCount))},[e,t]);const k=()=>{u(!0)},h=a=>{a&&(r(i),g("/board")),u(!1)},j=()=>{f(n),c(!n),d(a=>n?a-1:a+1)};return o.jsxs("div",{children:[e&&o.jsxs(o.Fragment,{children:[o.jsxs(F,{children:[o.jsx(D,{children:e.title}),o.jsxs(H,{children:[o.jsx(z,{likeCount:x,onClick:j,liked:n}),t&&t.email===e.author&&o.jsx(O,{variant:"contained",color:"warning",onClick:k,children:"게시글 삭제"})]})]}),o.jsx(S,{videoId:e.content.videoId}),o.jsx(R,{component:"section",children:o.jsx(I,{memos:e.content.memos})})]}),o.jsx(w,{open:p,title:"게시글 삭제 확인",onClose:h,children:"정말 삭제하시겠습니까?"})]})}const F=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 10px;
`,D=s.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin: 0;
  padding: 0;
  text-align: left;
`,H=s.div`
  gap: 6px;
  display: flex;
  align-items: center;
`,O=s(m)`
  background-color: #f44336;
  color: #fff;
  &:hover {
    background-color: #d32f2f;
  }
`,R=s(L)`
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #f5f5f5;
`;export{T as default};
