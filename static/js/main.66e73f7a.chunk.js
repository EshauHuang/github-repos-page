(this["webpackJsonpgithub-repo-page"]=this["webpackJsonpgithub-repo-page"]||[]).push([[0],{32:function(n,t,e){"use strict";e.r(t);var r,i,o,c,a,s,b,l,p,d,u,j,f,x,h,g,O,m,w,v,k,y,z,E,T,M,S,_=e(0),R=e(16),C=e.n(R),D=e(5),Y=e(3),H=e(2),J=Object(H.a)(r||(r=Object(Y.a)(["\n  body {\n    font-size: 62.5%;\n    background: #191923;\n    font-family: Trebuchet MS, sans-serif;\n  }\n"]))),A=e(4),B=e.n(A),F=e(15),I=e(6),L=function(){var n=Object(I.a)(B.a.mark((function n(t){var e;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://limitless-tor-98287.herokuapp.com/repos?page=".concat(t));case 3:if((e=n.sent).ok){n.next=6;break}return n.abrupt("return",[]);case 6:return n.next=8,e.json();case 8:return n.abrupt("return",n.sent);case 11:return n.prev=11,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",[]);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(t){return n.apply(this,arguments)}}(),W=function(n){var t=Object(_.useState)([]),e=Object(D.a)(t,2),r=e[0],i=e[1],o=Object(_.useCallback)(Object(I.a)(B.a.mark((function t(){var e,r,o;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.current,t.next=3,L(e);case 3:if(0!==(r=t.sent).length){t.next=6;break}return t.abrupt("return");case 6:o=r.map((function(n){return{title:n.name,description:n.description,url:n.html_url,author:n.owner.login,created_at:n.created_at,updated_at:n.updated_at}})),i(o);case 8:case"end":return t.stop()}}),t)}))),[n]);return Object(_.useEffect)((function(){o()}),[o]),[r,i]},q=e.p+"static/media/banner.7d053055.jpg",G=e(1),K=H.b.div(i||(i=Object(Y.a)(["\n  position: relative;\n  display: flex;\n  height: 300px;\n"]))),N=H.b.div(o||(o=Object(Y.a)(['\n  position: relative;\n  width: 100%;\n  height: 100%;\n  :before {\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    background: rgba(30, 30, 30, 0.5);\n  }\n']))),P=H.b.img(c||(c=Object(Y.a)(["\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n"]))),Q=H.b.div(a||(a=Object(Y.a)(["\n  font-size: 1.6rem;\n  font-weight: bold;\n  max-width: 60%;\n  color: white;\n"]))),U=H.b.a(s||(s=Object(Y.a)(["\n  display: inline-block;\n  font-size: 0.7rem;\n  letter-spacing: 0.4rem;\n  box-sizing: border-box;\n  padding: 10px 20px;\n  background: #e9c46a;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: bold;\n  cursor: pointer;\n"]))),V=H.b.div(b||(b=Object(Y.a)(["\n  position: absolute;\n  left: 0;\n  z-index: 10;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  padding: 20px 75px;\n"]))),X=function(){return Object(G.jsxs)(K,{children:[Object(G.jsx)(N,{children:Object(G.jsx)(P,{src:q})}),Object(G.jsxs)(V,{children:[Object(G.jsxs)(Q,{children:[Object(G.jsx)("p",{children:"\u6b61\u8fce\u4f86\u5230\u6211\u7684\u5275\u4f5c\u7a7a\u9593\uff01"}),Object(G.jsx)("p",{children:"\u795d\u60a8\u6709\u7f8e\u597d\u7684\u4e00\u5929~"})]}),Object(G.jsx)(U,{href:"https://www.cakeresume.com/eshau",children:"\u6211\u7684\u5c65\u6b77"})]})]})},Z=e(35),$=e(36),nn=H.b.div(l||(l=Object(Y.a)(["\n  margin: 0 auto;\n  width: 960px;\n  padding: 60px 30px 30px 30px;\n  background: #1e1e28;\n"]))),tn=H.b.div(p||(p=Object(Y.a)(["\n  margin-top: 40px;\n"]))),en=H.b.div(d||(d=Object(Y.a)(["\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: white;\n"]))),rn=H.b.div(u||(u=Object(Y.a)(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 30px;\n"]))),on=H.b.div(j||(j=Object(Y.a)(["\n  flex: 1;\n  margin: 0px 30px 30px 0;\n  width: calc((100% - 60px) / 3);\n  max-width: calc((100% - 60px) / 3);\n  min-width: calc((100% - 60px) / 3);\n  height: 250px;\n  box-sizing: border-box;\n  font-size: 0.8rem;\n  padding: 30px;\n  background: #2b2b35;\n  &:nth-child(3n) {\n    margin-right: 0px;\n  }\n"]))),cn=H.b.div(f||(f=Object(Y.a)(["\n  color: white;\n"]))),an=H.b.div(x||(x=Object(Y.a)(["\n  color: grey;\n  margin-top: 15px;\n  line-height: 1.15rem;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 5;\n  overflow: hidden;\n  min-height: 115px;\n"]))),sn=H.b.a(h||(h=Object(Y.a)(['\n  position: relative;\n  display: inline-block;\n  margin-top: 25px;\n  font-size: 0.6rem;\n  text-decoration: none;\n  color: #e9c46a;\n  font-weight: bold;\n  letter-spacing: 1px;\n  transition: text-shadow 0.4s ease-in-out;\n  cursor: pointer;\n  :after,\n  :before {\n    content: "";\n    position: absolute;\n    border-width: 6px;\n    border-style: solid;\n    top: 50%;\n    left: 110%;\n    margin-left: 0px;\n    transition: margin-left 0.4s ease-in-out;\n  }\n  :after {\n    border-color: transparent transparent transparent #e9c46a;\n    transform: translate(26%, -50%);\n  }\n  :before {\n    border-color: transparent transparent transparent #2b2b35;\n    transform: translate(0, -50%);\n    z-index: 1;\n  }\n  :hover {\n    text-shadow: 1px 1px 4px rgba(255, 255, 255, 0.5);\n    :after,\n    :before {\n      margin-left: 5px;\n    }\n  }\n']))),bn=Object(H.c)(g||(g=Object(Y.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),ln=Object(H.b)(Z.a)(O||(O=Object(Y.a)(["\n  width: 20px;\n  color: #e9c46a;\n  animation: "," 3s linear infinite;\n"])),bn),pn=H.b.div(m||(m=Object(Y.a)(["\n  display: flex;\n  width: 100%;\n  padding: 8px 0px;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  transition: opacity 0.2s ease-in-out;\n  opacity: ",";\n  background: rgb(20.8, 23.1, 33.7);\n  background: linear-gradient(\n    0deg,\n    rgba(20.8, 23.1, 33.7, 0.8) 0%,\n    rgba(20.8, 23.1, 33.7, 0.6) 60%,\n    rgba(20.8, 23.1, 33.7, 0.4) 80%,\n    rgba(20.8, 23.1, 33.7, 0.2) 96%\n  );\n"])),(function(n){return n.loading?1:0})),dn=Object(H.b)($.a)(w||(w=Object(Y.a)(["\n  width: 40px;\n  color: #ccc;\n  transition: opacity 0.4s ease-in-out;\n  opacity: ",";\n  cursor: ",";\n"])),(function(n){return n.scroll?.3:.1}),(function(n){return n.scroll?"pointer":"auto"})),un=H.b.div(v||(v=Object(Y.a)(["\n  position: fixed;\n  bottom: 35px;\n  right: 50px;\n"]))),jn=H.b.div(k||(k=Object(Y.a)(["\n  display: flex;\n  width: 100%;\n  padding: 6px 0px;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  background: white;\n  font-size: 0.8rem;\n  font-weight: bold;\n  z-index: 1;\n  transition: opacity 0.4s ease;\n  opacity: ",";\n"])),(function(n){return n.haveElseData?0:1})),fn=function(n){var t=n.scroll,e=Object(_.useRef)(1),r=W(e),i=Object(D.a)(r,2),o=i[0],c=i[1],a=Object(_.useState)(!1),s=Object(D.a)(a,2),b=s[0],l=s[1],p=Object(_.useState)(!0),d=Object(D.a)(p,2),u=d[0],j=d[1];return Object(_.useEffect)((function(){var n=t+window.innerHeight,r=document.body.offsetHeight;if(n<r&&!u&&setTimeout((function(){j(!0)}),500),n>=r){if(b||!u)return;l(!0),e.current+=1,Object(I.a)(B.a.mark((function n(){var t,r;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.current,n.next=3,L(t);case 3:if(!((r=n.sent).length<=0)){n.next=9;break}return e.current-=1,l(!1),j(!1),n.abrupt("return");case 9:c((function(n){return[].concat(Object(F.a)(n),Object(F.a)(r))})),l(!1);case 11:case"end":return n.stop()}}),n)})))()}}),[t,b,c,u]),Object(G.jsxs)(nn,{children:[Object(G.jsx)(X,{}),Object(G.jsxs)(tn,{children:[Object(G.jsx)(en,{children:"My Repositories"}),Object(G.jsx)(rn,{children:o.map((function(n,t){return Object(G.jsxs)(on,{children:[Object(G.jsx)(cn,{children:n.title}),Object(G.jsx)(an,{children:n.description}),Object(G.jsx)(sn,{href:n.url,children:"READ MORE"})]},t)}))}),Object(G.jsx)(jn,{haveElseData:u,children:"\u4e0b\u9762\u6c92\u6709\u8cc7\u6599\u56c9\uff01"})]}),Object(G.jsx)(pn,{loading:b?1:0,children:Object(G.jsx)(ln,{})}),Object(G.jsx)(un,{onClick:function(){0!==t&&window.scrollTo(0,0)},children:Object(G.jsx)(dn,{scroll:t})})]})},xn=e.p+"static/media/mountain.8949882a.png",hn=e.p+"static/media/city.8f219d5f.png",gn=e.p+"static/media/bg.e39115e3.jpg",On=e.p+"static/media/comet.ec03e081.png",mn=H.b.div(y||(y=Object(Y.a)(['\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  max-height: 100%;\n  overflow: hidden;\n  :before {\n    content: "";\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 100px;\n    z-index: 2;\n    background: linear-gradient(to top, #0a2a43, transparent);\n  }\n  :after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    background: black;\n    mix-blend-mode: color;\n  }\n']))),wn=H.b.div(z||(z=Object(Y.a)(["\n  position: absolute;\n  font-size: 5rem;\n  color: white;\n  font-weight: bold;\n  text-shadow: 2px 2px black;\n  letter-spacing: 1.2rem;\n  bottom: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.2s ease;\n  transform: ",";\n"])),(function(n){return n.scroll&&"translate(-50%, ".concat(-50+n.scroll,"%)")})),vn=H.b.img(E||(E=Object(Y.a)(["\n  position: absolute;\n  width: 200px;\n  bottom: 80%;\n  right: 100px;\n  transition: 0.2s ease;\n  transform: ",";\n"])),(function(n){return n.scroll&&"translate(".concat(-.55*n.scroll,"px, ").concat(.55*n.scroll,"px)")})),kn=H.b.img(T||(T=Object(Y.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  top: -25%;\n  transition: 0.2s ease;\n  transform: ",";\n"])),(function(n){return n.scroll&&"translateY(".concat(.5*n.scroll,"px)")})),yn=H.b.img(M||(M=Object(Y.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  object-fit: cover;\n  object-position: 0 100px;\n  z-index: 2;\n"]))),zn=H.b.img(S||(S=Object(Y.a)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  object-fit: cover;\n  transition: 0.2s ease;\n  transform: ",";\n"])),(function(n){return n.scroll&&"translateY(".concat(-.15*n.scroll,"px)")})),En=function(n){var t=n.scroll;return Object(G.jsxs)(mn,{children:[Object(G.jsx)(kn,{src:gn,scroll:t}),Object(G.jsx)(vn,{src:On,scroll:t}),Object(G.jsx)(zn,{src:xn,scroll:t}),Object(G.jsx)(yn,{src:hn,scroll:t}),Object(G.jsx)(wn,{scroll:t,children:"WELCOME"})]})};var Tn=function(){var n=Object(_.useState)(0),t=Object(D.a)(n,2),e=t[0],r=t[1];return Object(_.useEffect)((function(){window.onscroll=function(){(function(n,t){var e;return function(){clearTimeout(e),e=setTimeout((function(){n()}),t)}})((function(){r(Math.ceil(window.pageYOffset))}),60)()},window.onbeforeunload=function(){window.scrollTo(0,0)}}),[]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(J,{}),Object(G.jsx)(En,{scroll:e>=330?330:e}),Object(G.jsx)(fn,{scroll:e})]})};e(31);C.a.render(Object(G.jsx)(Tn,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.66e73f7a.chunk.js.map