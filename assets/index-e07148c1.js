import{b as C,i as e,t as l,d as f,e as D,f as w,s as j,c as S,T as y,a as c}from"./index-e864e51b.js";import{u as H,a as A,s as E}from"./bears2-4550a87f.js";const T=l('<button class="increment">Clicks: ');function L(){const[n,o]=C(0);return(()=>{const s=T();return s.firstChild,s.$$click=()=>o(n()+1),e(s,n,null),s})()}f(["click"]);const M=[{title:"prova1",shortDescription:"short1",longDescription:"long1",images:["prova1-1.png","prova1-2.png"]},{title:"prova2",shortDescription:"short2",longDescription:"long2",images:["prova2-1.jpeg"]}],N=M,V=l('<main><h1>Hello world!</h1><h2></h2><h2></h2><h2>myState</h2><h2></h2><button>myState incremet</button><button>state</button><button>state2</button><button>gotoAbout</button><p>Visit <a href="https://start.solidjs.com" target="_blank">start.solidjs.com</a> to learn how to build SolidStart apps.'),W=l("<h1>"),d=l("<h2>"),q=l("<img>"),z=E(n=>({bears:0,increase:()=>n(o=>({bears:o.bears+1}))}));function G(){const n=H(),o=A(),s=z(),x=D();return(()=>{const i=V(),a=i.firstChild,u=a.nextSibling,p=u.nextSibling,k=p.nextSibling,b=k.nextSibling,$=b.nextSibling,m=$.nextSibling,g=m.nextSibling,h=g.nextSibling,v=h.nextSibling;return e(i,()=>N.map(r=>[(()=>{const t=W();return e(t,()=>r.title),t})(),(()=>{const t=d();return e(t,()=>r.longDescription),t})(),(()=>{const t=d();return e(t,()=>r.shortDescription),t})(),w(()=>r.images.map(t=>(()=>{const _=q();return j(_,"src",`/images/${t}`),_})()))]),a),e(i,S(y,{children:"Hello World"}),a),e(u,()=>n.bears),e(p,()=>o.bears2),e(b,()=>s.bears),c($,"click",s.increase,!0),c(m,"click",n.increase,!0),c(g,"click",o.increase,!0),h.$$click=r=>{r.preventDefault(),x("/xx",{replace:!1})},e(i,S(L,{}),v),i})()}f(["click"]);export{G as default};
