import{j as o,F as b,a as s,B as u,z as v,c as C,d as y,r as l,w as B,b as L}from"./index-BwdfALB6.js";import{u as P,Y as S,M as I}from"./useVideoStartInit-DKifjZ2v.js";import{a as M}from"./usePost-BWYVUB2V.js";import{M as w}from"./MDialog-BOXG7VHe.js";import"./useQuery-Ce1aQUhn.js";function F({onClick:i,likeCount:e,liked:r}){return o.jsxs(z,{onClick:i,size:"large",color:r?"error":"primary",children:[o.jsx(b,{}),e||0]})}const z=s(u)`
  display: flex;
  gap: 6px;

  svg {
    color: inherit;
    * {
      color: inherit;
    }
  }
`;function T(){const{postId:i}=v(),{postData:e,deletePost:r,toggleLike:x}=M(i),t=C(y),[n,c]=l.useState((e==null?void 0:e.likes.likedUser.includes((t==null?void 0:t.email)||"없다능"))||!1),[f,d]=l.useState((e==null?void 0:e.likes.likeCount)||0);P();const g=B(),[p,m]=l.useState(!1);l.useEffect(()=>{e&&(c(e.likes.likedUser.includes((t==null?void 0:t.email)||"없다능")),d(e.likes.likeCount))},[e,t]);const k=()=>{m(!0)},h=a=>{a&&(r(i),g("/board")),m(!1)},j=()=>{x(n),c(!n),d(a=>n?a-1:a+1)};return o.jsxs("div",{children:[e&&o.jsxs(o.Fragment,{children:[o.jsxs(E,{children:[o.jsx(D,{children:e.title}),o.jsx(H,{children:t&&t.email===e.author&&o.jsxs(o.Fragment,{children:[o.jsx(F,{likeCount:f,onClick:j,liked:n}),o.jsx(O,{variant:"contained",color:"warning",onClick:k,children:"게시글 삭제"})]})})]}),o.jsx(S,{videoId:e.content.videoId}),o.jsx(R,{component:"section",children:o.jsx(I,{memos:e.content.memos})})]}),o.jsx(w,{open:p,title:"게시글 삭제 확인",onClose:h,children:"정말 삭제하시겠습니까?"})]})}const E=s.div`
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
`,O=s(u)`
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
