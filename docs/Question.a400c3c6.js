import{r as g,a as u,j as r}from"./chunks/vendor.7f0a8e9b.js";const p=({question:c,answers:l,correct:s,keepCase:d,nextId:n})=>{const[i,f]=g.exports.useState("");return u("div",{children:[r("h3",{children:c}),Array.isArray(l)?l.map((t,o)=>r("button",{class:"answer",onClick:e=>{o===s?window.location.href=`./${n}`:(e.target.style.border="1px solid red",e.target.style.background="#733",e.target.style.color="#fff",e.target.disabled=!0)},children:t},o)):u("form",{onSubmit:t=>{if(t.preventDefault(),(e=>{if(typeof s=="function")return s(e);{let a=e.trim();return d||(a=a.toLowerCase()),a===s.toString()}})(i))window.location.href=`./${n}`;else{const e=document.querySelector(".guess");e.style.border="1px solid red",e.style.background="#fee"}},children:[r("input",{className:"guess",type:"text",value:i,onChange:t=>{f(t.target.value)}}),r("button",{type:"submit",className:"guess-submit",children:"Guess"})]})]})};export{p as Question};
