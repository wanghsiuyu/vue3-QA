import{_ as S,r as _,o as i,c as d,d as n,b as e,w as v,F as x,s as k,t as c,f as r,u as L,x as U,y as N,z as f}from"./index-ae4f4bcf.js";const{VITE_URL:h,VITE_PATH:p}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gracewang",BASE_URL:"/vue3-QA/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},w={data(){return{isLoading:!1,loadingStatus:"",cartsTotal:[],shipping:0,user:{name:"",email:"",tel:"",address:""},message:""}},methods:{loading(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},500)},getCart(){this.$http.get(`${h}/api/${p}/cart`).then(l=>{this.cartsTotal=l.data.data,this.shipping=parseInt(this.cartsTotal.total>=500?0:100)}).catch(l=>{alert(l.response.data.message)})},removeCart(l){this.loadingStatus=l,this.$http.delete(`${h}/api/${p}/cart/${l}`).then(s=>{this.loadingStatus="",alert(s.data.message),this.getCart()}).catch(s=>{alert(s.response.data.message)})},removeCartsAll(){this.$http.delete(`${h}/api/${p}/carts`).then(l=>{alert(l.data.message),this.getCart()}).catch(l=>{alert(l.response.data.message)})},setCartQty(l){const s={product_id:l.product_id,qty:l.qty};this.loadingStatus=l.id,this.$http.put(`${h}/api/${p}/cart/${l.id}`,{data:s}).then(b=>{this.loadingStatus="",alert(b.data.message),this.getCart()}).catch(b=>{alert(b.response.data.message)})},onSubmit(){if(this.cartsTotal.carts.length){this.loading();const l={user:this.user,message:this.message};this.$http.post(`${h}/api/${p}/order`,{data:l}).then(s=>{alert(s.data.message),this.loading(),this.getCart(),this.$refs.form.resetForm()}).catch(s=>{alert(s.response.data.message)})}else alert("目前購物車沒有任何品項，無法送出訂單。")},isPhone(l){return/^(09)[0-9]{8}$/.test(l)?!0:"需為正確的手機號碼格式"}},mounted(){this.getCart()}},E=e("div",{class:"mb-5 order-banner",style:{height:"378px"}},[e("div",{class:"order-banner-plan"},"訂單確認")],-1),q={class:"container"},A={"aria-label":"breadcrumb"},R={class:"breadcrumb mb-5"},D={class:"breadcrumb-item"},I={class:"breadcrumb-item"},P=e("li",{class:"breadcrumb-item active","aria-current":"page"},"訂單確認",-1),B={class:"row justify-content-center"},z={class:"col-8"},F={class:"mb-5"},M=e("h2",{class:"h3 text-center"},"購物車",-1),O={key:0,class:"text-center"},Q={key:1},$={class:"text-end my-4"},H={class:"table align-middle"},j=e("tr",{class:"border-bottom"},[e("td"),e("td",null,"品項"),e("td"),e("td",null,"單價"),e("td",null,"數量"),e("td",{class:"text-center"},"價格")],-1),G=["onClick","disabled"],J={key:0,class:"fas fa-spinner fa-pulse"},K={key:1,class:"material-icons fs-6 text-dark"},W=["src"],X={class:"text-start"},Y={class:"text-start"},Z=["onUpdate:modelValue","onChange","disabled"],ee=["value"],se={class:"text-end"},te=e("td",{colspan:"4"},"小計",-1),ae={colspan:"2",class:"text-end"},le={class:"border-bottom"},oe={colspan:"4"},ne={key:0,class:"text-danger"},ie={key:1,class:"text-danger"},de={colspan:"2",class:"text-end"},re=e("td",{colspan:"4",class:"fs-5"},"總計",-1),ce={colspan:"2",class:"fs-5 text-end"},me={class:"col-6"},ue={class:"mb-5"},_e=e("h2",{class:"h3 text-center"},"訂單連絡資訊",-1),he={class:"mb-4"},pe=e("label",{for:"name",class:"form-label"},[r("姓名"),e("span",{class:"text-danger"},"*")],-1),be={class:"mb-4"},ge=e("label",{for:"phone",class:"form-label"},[r("手機"),e("span",{class:"text-danger"},"*")],-1),fe={class:"mb-3"},ve=e("label",{for:"email",class:"form-label"},[r("信箱"),e("span",{class:"text-danger"},"*")],-1),xe=e("div",{class:"form-check mb-4"},[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"subscribe",checked:""}),e("label",{class:"form-check-label",for:"subscribe"},"願意收到好蔬房的相關訊息和優惠資訊")],-1),ye={class:"mb-4"},Ve=e("label",{for:"address",class:"form-label"},[r("外送地址"),e("span",{class:"text-danger"},"*"),r("（到店自取者請填寫「自取」）")],-1),ke={class:"mb-4"},Te=e("label",{for:"message",class:"form-label"},"訂單備註",-1),Ce=e("div",{class:"mb-4"},[e("p",null,[r("註："),e("span",{class:"text-danger"},"*"),r("為必填欄位")])],-1),Se=e("div",{class:"text-center"},[e("button",{type:"submit",class:"btn btn-secondary btn-lg"},"送出訂單")],-1);function Le(l,s,b,Ue,t,m){var V;const T=_("VueLoading"),y=_("RouterLink"),u=_("v-field"),g=_("error-message"),C=_("v-form");return i(),d(x,null,[n(T,{active:t.isLoading,"onUpdate:active":s[0]||(s[0]=a=>t.isLoading=a)},null,8,["active"]),E,e("div",q,[e("nav",A,[e("ol",R,[e("li",D,[n(y,{to:"/",class:"green"},{default:v(()=>[r("首頁")]),_:1})]),e("li",I,[n(y,{to:"/products",class:"green"},{default:v(()=>[r("線上訂餐")]),_:1})]),P])]),e("div",B,[e("div",z,[e("div",F,[M,(V=t.cartsTotal.carts)!=null&&V.length?(i(),d("div",Q,[e("div",$,[e("button",{type:"button",class:"btn btn-outline-secondary",onClick:s[1]||(s[1]=(...a)=>m.removeCartsAll&&m.removeCartsAll(...a))},"清空購物車")]),e("table",H,[e("tbody",null,[j,(i(!0),d(x,null,k(t.cartsTotal.carts,a=>(i(),d("tr",{key:a.id},[e("td",null,[e("a",{role:"button",class:"text-end",title:"刪除品項",onClick:L(o=>m.removeCart(a.id),["prevent"]),disabled:t.loadingStatus===a.id},[t.loadingStatus===a.id?(i(),d("i",J)):(i(),d("span",K," close "))],8,G)]),e("td",null,[e("img",{src:a.product.imageUrl,class:"img-cover",width:"90",height:"90",alt:"cart.product.title"},null,8,W)]),e("td",X,c(a.product.title),1),e("td",Y,"NT$"+c(a.product.price)+" / "+c(a.product.unit),1),e("td",null,[U(e("select",{"onUpdate:modelValue":o=>a.qty=o,class:"form-select",onChange:o=>m.setCartQty(a),disabled:t.loadingStatus===a.id},[(i(),d(x,null,k(20,o=>e("option",{key:o+1234,value:o},c(o),9,ee)),64))],40,Z),[[N,a.qty]])]),e("td",se,"NT$"+c(a.total),1)]))),128)),e("tr",null,[te,e("td",ae,"NT$"+c(t.cartsTotal.total),1)]),e("tr",le,[e("td",oe,[r(" 運費 "),t.cartsTotal.total<500?(i(),d("span",ne,"（消費滿 $500，即可享免運優惠！）")):(i(),d("span",ie,"（恭禧您已達免運門檻！）"))]),e("td",de,"NT$"+c(t.shipping),1)]),e("tr",null,[re,e("td",ce,"NT$"+c(t.cartsTotal.final_total+t.shipping),1)])])])])):(i(),d("h4",O,"購物車沒有任何品項"))])]),e("div",me,[e("div",ue,[n(C,{onSubmit:m.onSubmit,ref:"form"},{default:v(({errors:a})=>[_e,e("div",he,[pe,n(u,{id:"name",name:"姓名",type:"text",class:f(["form-control",{"is-invalid":a.姓名}]),placeholder:"王小明",rules:"required",modelValue:t.user.name,"onUpdate:modelValue":s[2]||(s[2]=o=>t.user.name=o)},null,8,["class","modelValue"]),n(g,{name:"姓名",class:"invalid-feedback"})]),e("div",be,[ge,n(u,{id:"phone",name:"電話",type:"tel",class:f(["form-control",{"is-invalid":a.電話}]),placeholder:"0912345678",rules:m.isPhone,modelValue:t.user.tel,"onUpdate:modelValue":s[3]||(s[3]=o=>t.user.tel=o)},null,8,["class","rules","modelValue"]),n(g,{name:"電話",class:"invalid-feedback"})]),e("div",fe,[ve,n(u,{id:"email",name:"email",type:"email",class:f(["form-control",{"is-invalid":a.email}]),placeholder:"name@email.com",rules:"email|required",modelValue:t.user.email,"onUpdate:modelValue":s[4]||(s[4]=o=>t.user.email=o)},null,8,["class","modelValue"]),n(g,{name:"email",class:"invalid-feedback"})]),xe,e("div",ye,[Ve,n(u,{id:"address",name:"外送地址",type:"text",class:f(["form-control",{"is-invalid":a.外送地址}]),placeholder:"自取／○○區○街○巷○號",rules:"required",modelValue:t.user.address,"onUpdate:modelValue":s[5]||(s[5]=o=>t.user.address=o)},null,8,["class","modelValue"]),n(g,{name:"外送地址",class:"invalid-feedback"})]),e("div",ke,[Te,n(u,{as:"textarea",id:"message",name:"訂單備註",class:"form-control",rows:"5",modelValue:t.message,"onUpdate:modelValue":s[6]||(s[6]=o=>t.message=o),style:{resize:"none"}},null,8,["modelValue"])]),Ce,Se]),_:1},8,["onSubmit"])])])])])],64)}const we=S(w,[["render",Le]]);export{we as default};
