(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,t,a){"use strict";var n=a(11),r=a.n(n),o=a(18),s=a.n(o),i=a(0),u=a.n(i),c=a(1),m=a.n(c),l=a(29),d=function(e){function t(t){var a;if(a=e.call(this,t)||this,!t._reduxForm)throw new Error("Form must be inside a component decorated with reduxForm()");return a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props._reduxForm.registerInnerOnSubmit(this.props.onSubmit)},a.componentDidUpdate=function(e){this.props.onSubmit!==e.onSubmit&&this.props._reduxForm.registerInnerOnSubmit(this.props.onSubmit)},a.render=function(){var e=this.props,t=(e._reduxForm,r()(e,["_reduxForm"]));return u.a.createElement("form",t)},t}(i.Component);d.propTypes={onSubmit:m.a.func.isRequired,_reduxForm:m.a.object},t.a=Object(l.b)(d)},302:function(e,t,a){e.exports={header:"Dialogs_header__20o0R",dialogs:"Dialogs_dialogs__fTDd4",dialogItems:"Dialogs_dialogItems__1Sv9h",active:"Dialogs_active__3HUZW",messages:"Dialogs_messages__EGbXD",message:"Dialogs_message__3-45q"}},306:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(101),s=a(302),i=a.n(s),u=a(298),c=a(296),m=a(136),l=a(87),d=a(124),g=a(21),p=a(63),b=function(e){var t="/dialogs/"+e.id;return r.a.createElement("div",{className:i.a.dialog+" "+i.a.active},r.a.createElement(u.a,{to:t},e.name))},f=function(e){return r.a.createElement("div",{className:i.a.message},e.message)},h=Object(p.a)(50),_=Object(d.a)({form:"dialogAddMessageForm"})(function(e){return r.a.createElement(m.a,{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(l.a,{component:g.b,validate:[p.b,h],name:"newMessageBody",placeholder:"Enter your message"})),r.a.createElement("div",null,r.a.createElement("button",null,"Send")))}),v=function(e){var t=e.dialogsPage,a=t.messages.map(function(e){return r.a.createElement(f,{message:e.message})}),n=t.dialogs.map(function(e){return r.a.createElement(b,{name:e.name,id:e.id})});t.newMessageBody;return e.isAuth?r.a.createElement("div",{className:i.a.dialogs},r.a.createElement("div",{className:i.a.dialogItems},n),r.a.createElement("div",{className:i.a.messages},r.a.createElement("div",null,a)),r.a.createElement(_,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})):r.a.createElement(c.a,{to:"login"})},E=a(16),O=a(33),j=a(34),w=a(36),S=a(35),D=function(e){return{isAuth:e.auth.isAuth}},F=a(8);t.default=Object(F.d)(Object(E.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{sendMessage:function(t){e(Object(o.b)(t))}}}),function(e){var t=function(t){Object(w.a)(n,t);var a=Object(S.a)(n);function n(){return Object(O.a)(this,n),a.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(c.a,{to:"/login"})}}]),n}(r.a.Component);return Object(E.b)(D)(t)})(v)}}]);
//# sourceMappingURL=4.fa87aba1.chunk.js.map