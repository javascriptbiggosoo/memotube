import{u as p}from"./useQuery-CGzS9JY8.js";import{A as d,D as o,E as a,G as r}from"./index-CUA42QtK.js";const m=async t=>(await o.post("/posts",t)).data,w=async(t,e)=>{console.log("아"),console.log(d+`/posts?page=${t}&limit=${e}`);try{return(await o.get(`/posts?page=${t}&limit=${e}`)).data}catch(s){return console.error(s),null}},y=async t=>(await o.get(`/posts/${t}`)).data,P=async t=>(await o.delete(`/posts/${t}`)).data,f=async t=>(await o.post(`/posts/${t}/like`)).data,k=async t=>(await o.post(`/posts/${t}/unlike`)).data,$=t=>{const{data:e}=p({queryKey:["post",t],queryFn:y.bind(null,t),staleTime:0,refetchOnWindowFocus:!0}),{mutate:s}=a({mutationFn:n=>P(n),onSuccess:()=>{r.invalidateQueries(["posts"])}}),c=n=>{s(n)},{mutate:i}=a({mutationFn:n=>f(n),onSuccess:()=>{r.invalidateQueries(["post",t])}}),{mutate:u}=a({mutationFn:n=>k(n),onSuccess:()=>{r.invalidateQueries(["post",t])}});return{postData:e,deletePost:c,toggleLike:n=>{n?u(t):i(t)}}},F=()=>{const{mutate:t}=a({mutationFn:s=>m(s),onSuccess:()=>{r.invalidateQueries(["posts"])}});return{addPost:({mylistItem:s,title:c,author:i,category:u})=>{const l={id:crypto.randomUUID(),thumbnail:s.thumbnail,title:c,content:s.content,author:i,category:u,likes:{likeCount:0,likedUser:[]},createdAt:new Date().getTime()};t(l)}}};export{$ as a,w as f,F as u};
