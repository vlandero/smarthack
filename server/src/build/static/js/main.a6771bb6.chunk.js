(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(53),r=n.n(c),o=n(5),i=n(15),l=n(0);var j=function(e){var t=e.page,n=Object(s.useState)(""),a=Object(o.a)(n,2),c=a[0],r=a[1];return Object(s.useEffect)((function(){"Sign up"===t?r("Sign in"):"Home"===t&&r("@andreihodo")})),Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)(i.b,{to:"/",className:"a-tag",children:Object(l.jsx)("h1",{className:"title",children:"Lorem ipsum"})}),Object(l.jsx)("div",{className:"mini-navbar",children:Object(l.jsxs)("div",{className:"links",children:[Object(l.jsx)(i.b,{to:"/",className:"a-tag",children:Object(l.jsx)("p",{className:"link",children:"Home"})}),Object(l.jsx)("a",{href:"https://twitter.com/andreihodo",target:"_blank",children:Object(l.jsx)("p",{className:"link",children:"Help"})}),Object(l.jsx)(i.b,{to:"/signup",className:"a-tag",children:Object(l.jsx)("p",{className:"link",children:t})})]})}),Object(l.jsx)("div",{className:"navbar-action",children:Object(l.jsx)(i.b,{to:"/signin",children:Object(l.jsx)("button",{className:"navbar-btn",children:c})})})]})};var u=function(){return Object(l.jsx)("div",{className:"footer",children:Object(l.jsx)("p",{children:"Made with love by Looney Toons."})})},b=n(7),d=n.n(b),p=n(12),h=n(9),O=n(6);var m=function(e){e.setToken,e.setPass;var t=Object(s.useState)({}),n=Object(o.a)(t,2),a=n[0],c=n[1],r=function(e){var t=e.target,n=(t.type,t.value),s=t.name;c(Object(O.a)(Object(O.a)({},a),{},Object(h.a)({},s,n)))},i=function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()}));case 3:"ok"===(n=e.sent).status?(console.log(n),sessionStorage.setItem("token",n.data),sessionStorage.setItem("crpt",a.password),window.location.href="/dashboard"):alert(n.error),c({});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"signin-container",children:[Object(l.jsx)("h1",{children:"Sign in"}),Object(l.jsx)("p",{children:"Sign in and start generating passwords"}),Object(l.jsxs)("form",{className:"signin-form",onSubmit:i,children:[Object(l.jsx)("input",{type:"text",name:"username",placeholder:"Username",className:"input-username",onChange:r}),Object(l.jsx)("input",{type:"password",name:"password",placeholder:"Password",className:"input-password",onChange:r}),Object(l.jsx)("button",{type:"submit",onSubmit:i,className:"signin-btn",children:"Sign in"})]})]})};var x=function(){var e=Object(s.useState)({}),t=Object(o.a)(e,2),n=t[0],a=t[1],c=function(e){var t=e.target,s=(t.type,t.value),c=t.name;a(Object(O.a)(Object(O.a)({},n),{},Object(h.a)({},c,s)))},r=function(){var e=Object(p.a)(d.a.mark((function e(t){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}));case 3:"ok"===(s=e.sent).status?window.location.href="/signin":11e3===s.error.code?alert("Username is already in use!"):(alert("Eroare!"),console.log(s.error)),a({});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"signup-container",children:[Object(l.jsx)("h1",{children:"Sign up"}),Object(l.jsx)("p",{children:"Create new account"}),Object(l.jsxs)("form",{className:"signup-form",onSubmit:r,children:[Object(l.jsx)("input",{type:"text",name:"username",placeholder:"Username",className:"input-username",onChange:c}),Object(l.jsx)("input",{type:"password",name:"password",placeholder:"Password",className:"input-password",onChange:c}),Object(l.jsx)("button",{type:"submit",onSubmit:r,className:"signup-btn",children:"Sign up"})]})]})},f=n(23),g=function(e){var t=e.handleClose,n=e.content;return Object(l.jsx)("div",{className:"popup-box",children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("span",{className:"close-icon",onClick:t,children:"x"}),n]})})},v=function(e){var t=e.handleClose,n=e.content;return Object(l.jsx)("div",{className:"popup-box",children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("span",{className:"close-icon",onClick:t,children:"x"}),n]})})};var w=function(e){var t=e.website,n=e.password,a=e.id,c=e.passwordEntries,r=e.setPasswordEntries,i=e.index,j=e.type,u=e.changed,b=e.setChanged,h=Object(s.useState)(!1),O=Object(o.a)(h,2),m=O[0],x=O[1];return Object(l.jsxs)("div",{className:"stored-password",children:[Object(l.jsx)("p",{children:t}),Object(l.jsx)("input",{type:m?"text":"password",className:"stored-password-input",value:n,readOnly:!0}),Object(l.jsx)("button",{className:"showhide-btn",onClick:function(){return x(!m)},children:m?"Hide":"Show"}),Object(l.jsx)("button",{className:"delete-btn",onClick:Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=Object(f.a)(c)).slice(i,1),r(t),e.next=5,fetch("/entries/".concat(j,"/").concat(a),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:sessionStorage.getItem("token")}}).then((function(e){return e.json()}));case 5:if("error"!==(n=e.sent).status){e.next=8;break}return e.abrupt("return",alert(n.error));case 8:b(!u);case 9:case"end":return e.stop()}}),e)}))),children:"Delete"})]})},y=n(37),N=n(13),k=n.n(N);function S(e){var t="abcdefghijklmnopqrstuvwxyz";return e.includeSymbols&&(t+="!@#$%^&*()-_=+[]{}\\|,.<>/?'\""),e.includeUppercase&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),e.includeDigits&&(t+="0123456789"),Array.apply(null,{length:e.length}).map((function(){for(;;){var e=new Uint8Array(1);window.crypto.getRandomValues(e);var n=String.fromCharCode(e[0]);if(t.includes(n))return console.log("char"+n),n}}),this).join("")}var C={length:8,symbol:!1,uppercase:!1,numbers:!1};var E=function(e){e.pass,e.token;var t=Object(s.useState)(!1),n=Object(o.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(!1),i=Object(o.a)(r,2),j=i[0],u=i[1],b=Object(s.useState)(C),m=Object(o.a)(b,2),x=m[0],N=m[1],E=Object(s.useState)({}),P=Object(o.a)(E,2),T=P[0],A=P[1],D=Object(s.useState)({}),I=Object(o.a)(D,2),K=I[0],U=I[1],J=Object(s.useState)([]),L=Object(o.a)(J,2),_=L[0],q=L[1],z=Object(s.useState)([]),H=Object(o.a)(z,2),R=H[0],F=H[1],G=Object(s.useState)(!1),M=Object(o.a)(G,2),B=M[0],V=M[1];Object(s.useEffect)((function(){var e=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(sessionStorage.getItem("token")){e.next=2;break}return e.abrupt("return",window.location.href="/");case 2:return e.next=4,fetch("/user/me",{method:"POST",headers:{Authorization:sessionStorage.getItem("token")}}).then((function(e){return e.json()}));case 4:"error"===(t=e.sent).status?window.location.href="/":(q(t.data.passwordEntries),F(t.data.keyEntries));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[B]);var Q=function(){c(!a),A(C)},W=function(){u(!j),U({})},X=function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/entries/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:sessionStorage.getItem("token")},body:JSON.stringify({type:"password",username:T.username,password:T.password})}).then((function(e){return e.json()}));case 3:"error"===(n=e.sent).status?alert(n.error):(console.log(n.data),q([].concat(Object(f.a)(_),[Object(O.a)(Object(O.a)({},T),{},{_id:n.data})]))),Q();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/entries/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:sessionStorage.getItem("token")},body:JSON.stringify({type:"key",username:K.username,password:K.password})}).then((function(e){return e.json()}));case 3:"error"===(n=e.sent).status?alert(n.error):(console.log(n.data),F([].concat(Object(f.a)(R),[Object(O.a)(Object(O.a)({},K),{},{_id:n.data})]))),W();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(e){var t=e.target,n=t.type,s=t.name;A("text"===n||"number"===n||"password"===n?Object(O.a)(Object(O.a)({},T),{},Object(h.a)({},s,t.value)):Object(O.a)(Object(O.a)({},T),{},Object(h.a)({},s,[t.checked])))},$=function(e){N(Object(O.a)(Object(O.a)({},x),{},Object(h.a)({},e.target.name,e.target.value)))},ee=function(e){var t=e.target,n=(t.type,t.name);U(Object(O.a)(Object(O.a)({},K),{},Object(h.a)({},n,t.value)))},te=Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"popup-title",children:"Add a new password"}),Object(l.jsxs)("form",{className:"popup-form",children:[Object(l.jsxs)("label",{className:"text-inputs",children:["Username:",Object(l.jsx)("input",{type:"text",name:"username",value:T.username,onChange:Z,required:!0})]}),Object(l.jsxs)("label",{className:"text-inputs",children:["Password:",Object(l.jsx)("input",{type:"password",name:"password",value:T.password,onChange:Z,required:!0})]}),Object(l.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),console.log(T);var t=S({length:x.length,includeSymbols:x.symbol,includeDigits:x.numbers,includeUppercase:x.uppercase});console.log(t),A(Object(O.a)(Object(O.a)({},T),{},{password:t}))},className:"generate-password",children:"Generate Password"}),Object(l.jsxs)("label",{className:"text-inputs",children:["Length:",Object(l.jsx)("input",{type:"number",name:"length",value:x.length,onChange:$})]}),Object(l.jsxs)("label",{className:"checkbox",children:["Include Symbols:",Object(l.jsx)("input",{name:"symbol",type:"checkbox",checked:x.symbol,onChange:$})]}),Object(l.jsxs)("label",{className:"checkbox",children:["Include Numbers:",Object(l.jsx)("input",{name:"numbers",type:"checkbox",checked:x.numbers,onChange:$})]}),Object(l.jsxs)("label",{className:"checkbox",children:["Include Uppercase Letters:",Object(l.jsx)("input",{name:"uppercase",type:"checkbox",checked:x.uppercase,onChange:$})]}),Object(l.jsx)("button",{className:"popup-btn",type:"button",onClick:X,children:"Add password"})]})]}),ne=Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{className:"popup-form",children:[Object(l.jsx)("button",{className:"generate-key",onClick:function(){var e=function(){var e=k.a.pki.rsa.generateKeyPair({bits:2048,e:65537});return{public:k.a.pki.publicKeyToPem(e.publicKey),private:k.a.pki.privateKeyToPem(e.privateKey)}}();U(Object(O.a)(Object(O.a)({},K),{},{password:"Public:".concat(e.public,"\nPrivate ").concat(e.private)}))},children:"Generate Key"}),Object(l.jsxs)("select",{name:"select",value:K.select,onChange:ee,children:[Object(l.jsx)("option",{value:"AES",children:"AES"}),Object(l.jsx)("option",{value:"Triple-DES",children:"Triple DES"}),Object(l.jsx)("option",{value:"RSA",children:"RSA"}),Object(l.jsx)("option",{value:"ECC",children:"ECC"})]}),Object(l.jsxs)("label",{className:"text-inputs",children:["Key name:",Object(l.jsx)("input",{type:"text",name:"username",value:K.username,onChange:ee,required:!0})]}),Object(l.jsxs)("label",{className:"key-input",children:["Key:",Object(l.jsx)("textarea",{name:"password",value:K.password,onChange:ee,required:!0})]}),Object(l.jsx)("button",{className:"popup-btn popup-keys-btn",type:"button",onClick:function(e){Y(e)},children:"Add key"})]})});return Object(l.jsxs)("div",{className:"dashboard",children:[Object(l.jsxs)("div",{className:"dashboard-buttons",children:[Object(l.jsxs)("button",{className:"new-password-btn",onClick:Q,children:[Object(l.jsx)(y.a,{className:"plus-icon"}),"New password"]}),Object(l.jsxs)("button",{className:"new-key-btn",onClick:W,children:[Object(l.jsx)(y.a,{className:"plus-icon"}),"New key"]})]}),Object(l.jsxs)("div",{className:"passwords-container",children:[Object(l.jsxs)("div",{className:"passwords",children:[Object(l.jsx)("h2",{children:"Passwords"}),_.map((function(e,t){return Object(l.jsx)(w,{setChanged:V,changed:B,type:"password",website:e.username,password:e.password,id:e._id,index:t,passwordEntries:_,setPasswordEntries:q})}))]}),Object(l.jsxs)("div",{className:"keys",children:[Object(l.jsx)("h2",{children:"Keys"}),R.map((function(e,t){return Object(l.jsx)(w,{setChanged:V,changed:B,type:"key",website:e.username,password:e.password,index:t,id:e._id,passwordEntries:R,setPasswordEntries:F})}))]})]}),a&&Object(l.jsx)(g,{content:te,handleClose:Q}),j&&Object(l.jsx)(v,{content:ne,handleClose:W})]})};var P=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2);return t[0],t[1],Object(l.jsxs)("div",{className:"home",children:[Object(l.jsxs)("div",{className:"home-left",children:[Object(l.jsxs)("h1",{children:["Save your ",Object(l.jsx)("br",{})," passwords here."]}),Object(l.jsx)("p",{children:"Lorem ipsum is a password storage area that has been tested for security, so you can store your data here safely without being afraid of it being stolen by others."}),Object(l.jsx)(i.b,{to:"/signup",children:Object(l.jsx)("button",{className:"home-signup-btn",children:"Sign up"})})]}),Object(l.jsx)("div",{className:"home-right",children:Object(l.jsx)("div",{className:"demo-container"})})]})},T=(n(75),n(3));var A=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(""),r=Object(o.a)(c,2),b=r[0],d=r[1],p=S({length:10,includeSymbols:!0,includeDigits:!1,includeUppercase:!0});return console.log(p),Object(l.jsxs)(i.a,{children:[Object(l.jsx)(j,{page:"Sign up"}),Object(l.jsxs)(T.c,{children:[Object(l.jsx)(T.a,{path:"/",element:Object(l.jsx)(P,{})}),Object(l.jsx)(T.a,{path:"/signup",element:Object(l.jsx)(x,{})}),Object(l.jsx)(T.a,{path:"/signin",element:Object(l.jsx)(m,{setToken:a,setPass:d})}),Object(l.jsx)(T.a,{path:"/dashboard",element:Object(l.jsx)(E,{token:n,pass:b})})]}),Object(l.jsx)(u,{})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.a6771bb6.chunk.js.map