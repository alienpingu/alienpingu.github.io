(this["webpackJsonpform-ai"]=this["webpackJsonpform-ai"]||[]).push([[0],{36:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(11),i=a.n(l),c=(a(35),a(36),a(26)),r=a(4),o=a(24),d=a(25),u=a(29),b=a(28),h=a(55),j=a(56),m=a(57),p=a(58),g=a(59),v=a(27),f=a(3),O=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).sendResponse=function(e){e.target.innerHTML="Loading...",s.setState({selectedCategory:""}),s.setState({selectedBtn:""}),setTimeout((function(){e.target.innerHTML="Invia risposta"}),500);var t=Math.floor(100*Math.random())+0,a=s.state.info;a.id="RND-".concat(t),a.src="https://picsum.photos/seed/pic".concat(t,"/321"),s.setState({info:a})},s.handleChange=function(e){return s.setState({selectedCategory:e})},s.state={info:{id:"KA52F",src:"https://picsum.photos/seed/picsum/321",name:"Lorem Ipsum",brands:[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"},{value:"purple",label:"Purple"},{value:"red",label:"Red"},{value:"orange",label:"Orange"},{value:"blue",label:"Blue"},{value:"green",label:"Green"},{value:"white",label:"White"}],options:[{value:"Pulsante 1",label:"Pulsante 1"},{value:"Pulsante 2",label:"Pulsante 2"},{value:"Pulsante 3",label:"Pulsante 3"},{value:"Pulsante 4",label:"Pulsante 4"}]},response:{id:0}},s}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(e){console.log("Pagina aggiornata")}},{key:"render",value:function(){var e=this,t=this.state,a=t.selectedCategory,s=t.selectedBtn,n=Boolean(a&&s);return Object(f.jsx)(h.a,{children:Object(f.jsxs)(j.a,{id:"form-ai",className:"bg-light shadow p-md-5 sic",children:[Object(f.jsxs)(m.a,{sm:12,lg:6,children:[Object(f.jsx)("img",{id:"foto-ai",src:this.state.info.src,alt:"what-is-this",className:"w-100 py-2 sic",fluid:!0,thumbnail:!0}),Object(f.jsxs)(p.a,{className:"py-md-2",children:[Object(f.jsxs)(p.a.Item,{children:[Object(f.jsx)("strong",{children:"ID: "})," ",this.state.info.id]}),Object(f.jsxs)(p.a.Item,{children:[Object(f.jsx)("strong",{children:"SRC: "})," ",this.state.info.src]})]})]}),Object(f.jsxs)(m.a,{sm:12,lg:6,children:[Object(f.jsx)("h3",{className:"py-2 mb-md-5",children:"Cosa vedi nell' immagine?"}),Object(f.jsx)(p.a,{children:Object(f.jsxs)(p.a.Item,{children:[Object(f.jsx)("strong",{children:"Nome:"})," ",this.state.info.name]})}),Object(f.jsx)(v.a,{value:a,onChange:this.handleChange,placeholder:"Seleziona un brand (marca)",options:this.state.info.brands,required:!0}),Object(f.jsx)("div",{className:"options py-2",children:this.state.info.options.map((function(t,a){return Object(f.jsx)(g.a,{variant:"outline-primary",onClick:function(){return e.setState({selectedBtn:t.value})},className:"my-lg-4 ".concat(s===t.value?"active":""),size:"lg",block:!0,children:t.label},a)}))})]}),Object(f.jsx)(m.a,{sm:"12",children:Object(f.jsx)(x,{isDisabled:!n,sendResponse:this.sendResponse})})]})})}}]),a}(s.Component);function x(e){return Object(f.jsx)(g.a,{variant:"success",onClick:function(t){return e.sendResponse(t)},size:"lg",className:"my-2 p-md-3",disabled:e.isDisabled,block:!0,children:"Invia risposta"})}var y=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(c.a,{children:Object(f.jsx)(r.a,{path:"/",children:Object(f.jsx)(O,{})})})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,60)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,l=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),l(e),i(e)}))};i.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root")),C()}},[[53,1,2]]]);
//# sourceMappingURL=main.ab5b2eeb.chunk.js.map