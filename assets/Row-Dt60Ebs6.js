import{c as $,u as d,a as x,b as B}from"./Container-KJ8Zp7nm.js";import{a as h,j as N}from"./index-CuanTbOI.js";function j({as:p,bsPrefix:e,className:i,...o}){e=d(e,"col");const u=x(),c=B(),n=[],m=[];return u.forEach(r=>{const l=o[r];delete o[r];let s,t,a;typeof l=="object"&&l!=null?{span:s,offset:t,order:a}=l:s=l;const f=r!==c?`-${r}`:"";s&&n.push(s===!0?`${e}${f}`:`${e}${f}-${s}`),a!=null&&m.push(`order${f}-${a}`),t!=null&&m.push(`offset${f}-${t}`)}),[{...o,className:$(i,...n,...m)},{as:p,bsPrefix:e,spans:n}]}const R=h.forwardRef((p,e)=>{const[{className:i,...o},{as:u="div",bsPrefix:c,spans:n}]=j(p);return N.jsx(u,{...o,ref:e,className:$(i,!n.length&&c)})});R.displayName="Col";const w=h.forwardRef(({bsPrefix:p,className:e,as:i="div",...o},u)=>{const c=d(p,"row"),n=x(),m=B(),r=`${c}-cols`,l=[];return n.forEach(s=>{const t=o[s];delete o[s];let a;t!=null&&typeof t=="object"?{cols:a}=t:a=t;const f=s!==m?`-${s}`:"";a!=null&&l.push(`${r}${f}-${a}`)}),N.jsx(i,{ref:u,...o,className:$(e,c,...l)})});w.displayName="Row";export{R as C,w as R};
