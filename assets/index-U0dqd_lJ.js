import{u as h,r as d,j as t,T as g,R as T,B as S,a as m,b as j,M as y,c as C,d as U,C as v}from"./index-iPo9hh-S.js";import{p as I,M as w,u as D,Y as V}from"./useVideoStartInit-ScZsk3F0.js";import{M as L}from"./MDialog-xc_zYXuD.js";import{u as R}from"./useMylist-YjC-TdU5.js";import"./useQuery-CcqGlhjU.js";import"./mylist.api-BhjzVsNn.js";function B(n){const e=n.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);if(e&&e[1])return e[1].split("&")[0]}function F({onUrlSubmit:n}){const{register:e,handleSubmit:o,setValue:a}=h(),[l,u]=d.useState(!1),[r,i]=d.useState(""),s=f=>{const p=B(f.url);p?(i(p),u(!0)):(alert("유효하지 않은 URL입니다."),console.log("유효하지 않은 URL"))},c=f=>{f&&(n(r),a("url","")),u(!1)};return t.jsxs(t.Fragment,{children:[t.jsx("form",{onSubmit:o(s),children:t.jsx(g,{id:"url-input",label:"YouTube 영상 URL",variant:"filled",color:"primary",...e("url"),fullWidth:!0})}),t.jsx(L,{open:l,title:"URL 변경 확인",onClose:c,children:"재생 중인 영상을 변경시 영상의 메모가 초기화됩니다. 계속하시겠습니까?"})]})}function A({onCreateMemo:n,currentTime:e}){const{register:o,handleSubmit:a,setValue:l}=h(),u=T(I),r=s=>{n(s.memo),l("memo",""),u(!1)},i=()=>{u(!0),console.log("focus")};return t.jsxs("form",{onSubmit:a(r),children:[t.jsx(g,{id:"memo-input",label:e,variant:"outlined",...o("memo"),fullWidth:!0,onFocus:i}),t.jsx(S,{type:"submit",children:"메모 저장"})]})}function k({currentTime:n,memos:e,setMemos:o}){function a(r){r&&o&&o(i=>{const s=new Date().getTime();return[...i,{id:crypto.randomUUID(),createdAt:s,memoTime:n,memoText:r}]})}function l(r){o&&o(i=>i.filter(s=>s.id!==r))}function u(r,i){console.log(i),o&&o(s=>s.map(c=>c.id===r?{...c,memoText:i}:c))}return t.jsxs(O,{component:"section",children:[t.jsx(A,{currentTime:n,onCreateMemo:a}),t.jsx(w,{memos:e||[],onUpdateMemo:u,onDeleteMemo:l})]})}const O=m(j)`
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #f5f5f5;
`;function P(n){n=Number(n);const e=Math.floor(n/3600),o=Math.floor(n%3600/60),a=Math.floor(n%60);return[e>0?String(e).padStart(2,"0"):null,String(o).padStart(2,"0"),String(a).padStart(2,"0")].filter(Boolean).join(":")}function Y({open:n,onClose:e,memos:o,videoId:a}){const{register:l,handleSubmit:u,formState:{errors:r}}=h(),{addMylistItem:i}=R(),s=c=>{i({videoId:a,memos:o,title:c.title}),e()};return t.jsx(y,{open:n,onClose:e,children:t.jsxs(_,{onSubmit:u(s),children:[t.jsx(E,{children:"저장하실 제목을 입력해주세요"}),t.jsx(g,{label:"제목",variant:"outlined",fullWidth:!0,...l("title",{required:!0,maxLength:30,minLength:1}),error:!!r.title,helperText:r.title?"30자 이하로 제목을 입력해주세요.":""}),t.jsxs(W,{children:[t.jsx(b,{variant:"outlined",color:"primary",onClick:e,children:"취소"}),t.jsx(b,{variant:"contained",color:"primary",autoFocus:!0,type:"submit",children:"저장"})]})]})})}const _=m.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`,E=m.h2`
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
`,W=m(j)`
  display: flex;
  justify-content: space-between;
`,b=m(S)`
  width: 45%;
`,H=[{memoTime:"44:23",memoText:"아무 장수 챌린지",id:"0",createdAt:new Date().getTime()},{memoTime:"1:27:22",memoText:"메오대전",id:"1",createdAt:new Date().getTime()}],N="hnanNlDbsE4";function $(){const[n,e]=d.useState(!1),[o,a]=d.useState(N),[l,u]=d.useState("00:00"),[r,i]=d.useState(H);D();const s=C(U);function c(x){a(x),i([])}function f(x){const M=x.target.getCurrentTime();u(P(M))}function p(){if(!s){alert("로그인이 필요한 서비스입니다.");return}e(!0)}return t.jsxs(q,{children:[t.jsx(F,{onUrlSubmit:c}),t.jsx(V,{videoId:o,onStateChange:f}),r.length>0&&t.jsx(z,{variant:"contained",color:"primary",onClick:p,children:"마이리스트에 저장"}),t.jsx(Y,{memos:r,videoId:o,open:n,onClose:()=>e(!1)}),t.jsx(k,{currentTime:l,memos:r,setMemos:i})]})}const q=m(v)`
  position: relative;
`,z=m(S)``;export{$ as default};
