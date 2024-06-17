import{g as D,e as L,s as b,h as o,l as w,r as v,m as A,_ as y,j as r,o as M,q as R,c as $,d as k,w as W,y as T,I as _,H as U,a as d,C as V,L as B,J as N}from"./index-bQlGLhvm.js";import{u as z}from"./useMylist-ZVFN-DPv.js";import{u as E}from"./useMylistItem-CA9ODB_D.js";import{M as H}from"./MDialog-_ZhMXO8B.js";import{L as P,a as S,b as O,A as q}from"./useQuery-CFerhjlW.js";import"./mylist.api-DD6wz507.js";function F(t){return D("MuiDivider",t)}L("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const J=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],G=t=>{const{absolute:i,children:e,classes:s,flexItem:h,light:c,orientation:n,textAlign:l,variant:g}=t;return R({root:["root",i&&"absolute",g,c&&"light",n==="vertical"&&"vertical",h&&"flexItem",e&&"withChildren",e&&n==="vertical"&&"withChildrenVertical",l==="right"&&n!=="vertical"&&"textAlignRight",l==="left"&&n!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",n==="vertical"&&"wrapperVertical"]},F,s)},K=b("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:e}=t;return[i.root,e.absolute&&i.absolute,i[e.variant],e.light&&i.light,e.orientation==="vertical"&&i.vertical,e.flexItem&&i.flexItem,e.children&&i.withChildren,e.children&&e.orientation==="vertical"&&i.withChildrenVertical,e.textAlign==="right"&&e.orientation!=="vertical"&&i.textAlignRight,e.textAlign==="left"&&e.orientation!=="vertical"&&i.textAlignLeft]}})(({theme:t,ownerState:i})=>o({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:w(t.palette.divider,.08)},i.variant==="inset"&&{marginLeft:72},i.variant==="middle"&&i.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},i.variant==="middle"&&i.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},i.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:t})=>o({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:t,ownerState:i})=>o({},i.children&&i.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}}),({theme:t,ownerState:i})=>o({},i.children&&i.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}}),({ownerState:t})=>o({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),Q=b("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,i)=>{const{ownerState:e}=t;return[i.wrapper,e.orientation==="vertical"&&i.wrapperVertical]}})(({theme:t,ownerState:i})=>o({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},i.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),C=v.forwardRef(function(i,e){const s=A({props:i,name:"MuiDivider"}),{absolute:h=!1,children:c,className:n,component:l=c?"div":"hr",flexItem:g=!1,light:p=!1,orientation:x="horizontal",role:f=l!=="hr"?"separator":void 0,textAlign:a="center",variant:j="fullWidth"}=s,I=y(s,J),u=o({},s,{absolute:h,component:l,flexItem:g,light:p,orientation:x,role:f,textAlign:a,variant:j}),m=G(u);return r.jsx(K,o({as:l,className:M(m.root,n),role:f,ref:e,ownerState:u},I,{children:c?r.jsx(Q,{className:m.wrapper,ownerState:u,children:c}):null}))});C.muiSkipListHighlight=!0;const X=C;function gt(){const t=$(k),i=W(),{mylistData:e,isMylistLoading:s}=z(),{deleteMylistItem:h}=E(),[c,n]=v.useState(!1),[l,g]=v.useState(null);v.useEffect(()=>{t||(console.log("로그인이 필요한 서비스입니다."),i("/"))},[t,i]);const p=a=>{i(`/mylist/${a}`)},x=a=>{g(a),n(!0)},f=a=>{a&&l&&h(l),n(!1),g(null)};return r.jsxs(Y,{children:[r.jsx(Z,{children:r.jsx(tt,{children:"마이리스트"})}),s&&r.jsx(T,{}),e&&e.length>0?r.jsx(it,{children:e.map(a=>r.jsxs("div",{children:[r.jsxs(et,{children:[r.jsx(P,{onClick:()=>p(a.id),children:r.jsx(rt,{src:a.thumbnail,alt:a.title})}),r.jsx(S,{primary:a.title,secondary:`작성일: ${new Date(a.createdAt).toLocaleString()}`,onClick:()=>p(a.id)}),r.jsx(_,{edge:"end","aria-label":"delete",onClick:()=>x(a.id),children:r.jsx(U,{})})]}),r.jsx(X,{})]},a.id))}):r.jsx(at,{children:"마이리스트가 비어 있습니다."}),r.jsx(H,{open:c,title:"리스트 삭제 확인",onClose:f,children:"정말 삭제하시겠습니까?"})]})}const Y=d(V)`
  padding: 2rem 0;
`,Z=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 10px;
`,tt=d.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin: 0;
  padding: 0;
  text-align: left;
`,it=d(B)`
  width: 100%;
  background-color: #fff;
`,et=d(O)`
  padding: 1rem;
  cursor: pointer; /* 커서 변경 */
  &:hover {
    background-color: #f5f5f5;
  }
`,rt=d(q)`
  width: 60px;
  height: 60px;
  margin-right: 16px;
`,at=d(N)`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.5rem;
  color: #888;
`;export{gt as default};
