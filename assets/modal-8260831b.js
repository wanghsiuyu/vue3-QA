import{_ as ee,o as f,b as m,d as c,n as v,w as A,F as te,r as se,t as L,c as ie}from"./index-0fab2c99.js";import{r as ne,b as ae,d as oe,a as re,c as le,e as de,f as ce,g as _e}from"./component-functions-db4411ac.js";const he={props:["pages"]},ue={"aria-label":"Page navigation example"},fe={class:"pagination justify-content-center"},me=c("span",{"aria-hidden":"true"},"«",-1),ge=[me],pe=["onClick"],Ee=["onClick"],be=c("span",{"aria-hidden":"true"},"»",-1),ve=[be];function Ae(r,h,s,g,k,S){return f(),m("nav",ue,[c("ul",fe,[c("li",{class:v(["page-item",{disabled:!s.pages.has_pre}])},[c("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:h[0]||(h[0]=A(n=>r.$emit("change-page",s.pages.current_page-1),["prevent"]))},ge)],2),(f(!0),m(te,null,se(s.pages.total_pages,n=>(f(),m("li",{class:v(["page-item",{active:n===s.pages.current_page}]),key:n+"page"},[n===s.pages.current_page?(f(),m("span",{key:0,class:"page-link",onClick:p=>r.$emit("change-page",n)},L(n),9,pe)):(f(),m("a",{key:1,class:"page-link",href:"#",onClick:A(p=>r.$emit("change-page",n),["prevent"])},L(n),9,Ee))],2))),128)),c("li",{class:v(["page-item",{disabled:!s.pages.has_next}])},[c("a",{class:"page-link",href:"#","aria-label":"Next",onClick:h[1]||(h[1]=A(n=>r.$emit("change-page",s.pages.current_page+1),["prevent"]))},ve)],2)])])}const we=ee(he,[["render",Ae]]);var T={},Te={get exports(){return T},set exports(r){T=r}};/*!
  * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(r,h){(function(s,g){r.exports=g(ne(),ae(),oe(),re(),le(),de(),ce(),_e())})(ie,function(s,g,k,S,n,p,N,O){const _=d=>d&&typeof d=="object"&&"default"in d?d:{default:d},i=_(g),E=_(k),B=_(S),I=_(n),$=_(p),M=_(N),P="modal",a=".bs.modal",V=".data-api",H="Escape",q=`hide${a}`,R=`hidePrevented${a}`,y=`hidden${a}`,w=`show${a}`,Y=`shown${a}`,j=`resize${a}`,F=`click.dismiss${a}`,K=`mousedown.dismiss${a}`,W=`keydown.dismiss${a}`,z=`click${a}${V}`,D="modal-open",x="fade",C="show",b="modal-static",G=".modal.show",U=".modal-dialog",Q=".modal-body",J='[data-bs-toggle="modal"]',Z={backdrop:!0,focus:!0,keyboard:!0},X={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class l extends I.default{constructor(e,t){super(e,t),this._dialog=E.default.findOne(U,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new B.default,this._addEventListeners()}static get Default(){return Z}static get DefaultType(){return X}static get NAME(){return P}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||i.default.trigger(this._element,w,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(D),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||i.default.trigger(this._element,q).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(C),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const e of[window,this._dialog])i.default.off(e,a);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new $.default({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new M.default({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=E.default.findOne(Q,this._dialog);t&&(t.scrollTop=0),s.reflow(this._element),this._element.classList.add(C);const o=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,i.default.trigger(this._element,Y,{relatedTarget:e})};this._queueCallback(o,this._dialog,this._isAnimated())}_addEventListeners(){i.default.on(this._element,W,e=>{if(e.key===H){if(this._config.keyboard){e.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),i.default.on(window,j,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),i.default.on(this._element,K,e=>{i.default.one(this._element,F,t=>{if(!(this._element!==e.target||this._element!==t.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(D),this._resetAdjustments(),this._scrollBar.reset(),i.default.trigger(this._element,y)})}_isAnimated(){return this._element.classList.contains(x)}_triggerBackdropTransition(){if(i.default.trigger(this._element,R).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,o=this._element.style.overflowY;o==="hidden"||this._element.classList.contains(b)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(b),this._queueCallback(()=>{this._element.classList.remove(b),this._queueCallback(()=>{this._element.style.overflowY=o},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),o=t>0;if(o&&!e){const u=s.isRTL()?"paddingLeft":"paddingRight";this._element.style[u]=`${t}px`}if(!o&&e){const u=s.isRTL()?"paddingRight":"paddingLeft";this._element.style[u]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const o=l.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof o[e]>"u")throw new TypeError(`No method named "${e}"`);o[e](t)}})}}return i.default.on(document,z,J,function(d){const e=s.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&d.preventDefault(),i.default.one(e,w,u=>{u.defaultPrevented||i.default.one(e,y,()=>{s.isVisible(this)&&this.focus()})});const t=E.default.findOne(G);t&&l.getInstance(t).hide(),l.getOrCreateInstance(e).toggle(this)}),O.enableDismissTrigger(l),s.defineJQueryPlugin(l),l})})(Te);const De=T;export{we as A,De as M};
