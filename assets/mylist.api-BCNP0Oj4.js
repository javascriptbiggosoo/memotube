import{D as t}from"./index-CxlFRWB2.js";const n=async s=>(await t.post("/mylist",s)).data,o=async()=>(await t.get("/mylist")).data,r=async s=>(await t.get(`/mylist/${s}`)).data,c=async s=>(await t.delete(`/mylist/${s}`)).data;export{r as a,n as c,c as d,o as g};