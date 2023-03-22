import{M}from"./modal-2ef408ea.js";import{A as w}from"./AdminPagination-fbca3a3f.js";import{_ as O,o as l,b as a,d as e,e as C,K as D,f as g,F as $,r as k,t as n,h as y,k as A,i as v}from"./index-2634201d.js";import{T as r}from"./toast-e0ba1b73.js";import"./component-functions-ab8dbfb9.js";const T={props:["order"],data(){return{tempOrder:{},shipping:0}},watch:{order(){this.tempOrder=this.order,this.shipping=parseInt(this.tempOrder.total>=500?0:100)}}},E={class:"modal-dialog modal-xl"},L={class:"modal-content"},N=e("div",{class:"modal-header bg-primary text-white"},[e("h5",{class:"modal-title",id:"staticBackdropLabel"},"編輯"),e("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),P={class:"modal-body"},V={class:"container"},B={class:"row"},I={class:"col-5"},S={class:"card border-gray rounded-0 mb-5"},R={class:"card-body"},U=e("h5",{class:"card-title mb-5"},"訂單資料",-1),H={class:"mb-3"},z=e("label",{for:"orderId",class:"form-label"},"訂單編號",-1),F=["value"],j={class:"mb-3"},q=e("label",{for:"orderDate",class:"form-label"},"訂單日期",-1),K=["value"],Q={class:"form-check mb-3"},G={class:"form-check-label",for:"isPaid"},J={key:0,class:"text-success"},W={key:1,class:"text-danger"},X={class:"card border-gray rounded-0"},Y={class:"card-body"},Z=e("h5",{class:"card-title mb-5"},"訂購人資訊",-1),ee={class:"mb-3"},te=e("label",{for:"username",class:"form-label"},"訂購人",-1),se=["value"],oe={class:"mb-3"},de=e("label",{for:"phone",class:"form-label"},"訂購人手機",-1),le=["value"],ae={class:"mb-3"},ne=e("label",{for:"address",class:"form-label"},"外送地址",-1),ie=["value"],re={class:"mb-3"},ce=e("label",{for:"email",class:"form-label"},"訂購人 Email",-1),he=["value"],_e={class:"mb-3"},me=e("label",{for:"message",class:"form-label"},"訂單備註",-1),pe=["value"],ue={class:"col-7"},be={class:"card border-gray rounded-0 mb-5"},fe={class:"card-body"},ge=e("h5",{class:"card-title mb-5"},"訂購內容",-1),ye={class:"table align-middle"},ve=e("thead",null,[e("tr",null,[e("td",{colspan:"2"},"品項"),e("td",null,"單價"),e("td",null,"數量"),e("td",{class:"text-end"},"價格")])],-1),$e=["src","alt"],ke={class:"mb-0"},Oe={class:"text-center"},xe={class:"text-end"},Me=e("td",{colspan:"4"},"小計",-1),we={class:"text-end"},Ce=e("td",{colspan:"4"},"運費",-1),De={class:"text-end"},Ae=e("td",{colspan:"4",class:"fs-3"},"總金額",-1),Te={class:"text-end fs-3"},Ee={class:"modal-footer"},Le=e("button",{type:"button",class:"btn btn-outline-primary","data-bs-dismiss":"modal"},"取消",-1);function Ne(t,o,c,x,d,i){var h,_,u,m;return l(),a("div",E,[e("div",L,[N,e("div",P,[e("div",V,[e("div",B,[e("div",I,[e("div",S,[e("div",R,[U,e("form",null,[e("div",H,[z,e("input",{type:"text",class:"form-control",id:"orderId","aria-describedby":"emailHelp",value:d.tempOrder.id,readonly:""},null,8,F)]),e("div",j,[q,e("input",{type:"text",class:"form-control",id:"orderDate",value:new Date(c.order.create_at*1e3).toLocaleDateString(),readonly:""},null,8,K)]),e("div",Q,[C(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[0]||(o[0]=s=>d.tempOrder.is_paid=s),id:"isPaid"},null,512),[[D,d.tempOrder.is_paid]]),e("label",G,[g("是否付款： "),d.tempOrder.is_paid?(l(),a("span",J,"是")):(l(),a("span",W,"否"))])])])])]),e("div",X,[e("div",Y,[Z,e("form",null,[e("div",ee,[te,e("input",{type:"text",class:"form-control",id:"username",value:(h=d.tempOrder.user)==null?void 0:h.name,readonly:"","aria-describedby":"emailHelp"},null,8,se)]),e("div",oe,[de,e("input",{type:"tel",class:"form-control",id:"phone",value:(_=d.tempOrder.user)==null?void 0:_.tel,readonly:""},null,8,le)]),e("div",ae,[ne,e("input",{type:"text",class:"form-control",id:"address",value:(u=d.tempOrder.user)==null?void 0:u.address,readonly:""},null,8,ie)]),e("div",re,[ce,e("input",{type:"email",class:"form-control",id:"email",value:(m=d.tempOrder.user)==null?void 0:m.email,readonly:""},null,8,he)]),e("div",_e,[me,e("textarea",{type:"text",class:"form-control",id:"message",style:{resize:"none"},value:d.tempOrder.message,readonly:""},null,8,pe)])])])])]),e("div",ue,[e("div",be,[e("div",fe,[ge,e("table",ye,[ve,e("tbody",null,[(l(!0),a($,null,k(d.tempOrder.products,s=>(l(),a("tr",{key:s.id},[e("td",null,[e("img",{src:s.product.imageUrl,alt:s.product.title,width:"90",height:"90",class:"object-fit-cover"},null,8,$e)]),e("td",null,[e("p",ke,n(s.product.title),1)]),e("td",null,"NT$"+n(s.product.price)+" / "+n(s.product.unit),1),e("td",Oe,n(s.qty),1),e("td",xe,"NT$"+n(s.final_total),1)]))),128)),e("tr",null,[Me,e("td",we,"NT$"+n(d.tempOrder.total),1)]),e("tr",null,[Ce,e("td",De,"NT$"+n(d.shipping),1)]),e("tr",null,[Ae,e("td",Te,"NT$"+n(d.tempOrder.total+d.shipping),1)])])])])])])])])]),e("div",Ee,[Le,e("button",{type:"button",class:"btn btn-primary",onClick:o[1]||(o[1]=s=>t.$emit("confirmEdit",d.tempOrder))},"確認")])])])}const Pe=O(T,[["render",Ne]]),Ve={props:["order"]},Be={class:"modal-dialog"},Ie={class:"modal-content"},Se=e("div",{class:"modal-header bg-danger"},[e("h5",{class:"modal-title text-white",id:"staticBackdropLabel"},"刪除訂單"),e("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Re={class:"modal-body"},Ue={class:"text-danger"},He={key:0},ze={key:1},Fe={class:"modal-footer"},je=e("button",{type:"button",class:"btn btn-outline-danger","data-bs-dismiss":"modal"},"取消",-1);function qe(t,o,c,x,d,i){var h;return l(),a("div",Be,[e("div",Ie,[Se,e("div",Re,[g(" 是否刪除 "),e("span",Ue,[c.order.user?(l(),a("span",He,n((h=c.order.user)==null?void 0:h.name),1)):(l(),a("span",ze,"全部"))]),g(" 訂單？（刪除後將無法恢復） ")]),e("div",Fe,[je,c.order.user?(l(),a("button",{key:0,type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=_=>t.$emit("deleteOrder",c.order))},"確認刪除")):(l(),a("button",{key:1,type:"button",class:"btn btn-danger",onClick:o[1]||(o[1]=_=>t.$emit("deleteOrdersAll"))},"確認刪除"))])])])}const Ke=O(Ve,[["render",qe]]),{VITE_URL:p,VITE_PATH:f}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gracewang",BASE_URL:"/vue3-QA/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},Qe={data(){return{orders:[],order:{},editModal:"",deleteModal:"",page:{}}},components:{OrderModal:Pe,DeleteOrderModal:Ke,AdminPagination:w},methods:{checkLogin(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t,this.$http.post(`${p}/api/user/check`).then(()=>{this.getOrders()}).catch(o=>{r.fire({icon:"error",title:o.response.data.message,width:250}),this.$router.push("/login")})},getOrders(t=1){this.$http.get(`${p}/api/${f}/admin/orders/?page=${t}`).then(o=>{this.orders=o.data.orders,this.page=o.data.pagination}).catch(o=>{r.fire({icon:"error",title:o.response.data.message,width:250})})},confirmEdit(){this.$http.put(`${p}/api/${f}/admin/order/${this.order.id}`,{data:this.order}).then(t=>{r.fire({icon:"success",title:t.data.message,width:250}),this.editModal.hide(),this.getOrders()}).catch(t=>{r.fire({icon:"error",title:t.response.data.message,width:250})})},deleteOrder(){this.$http.delete(`${p}/api/${f}/admin/order/${this.order.id}`).then(t=>{r.fire({icon:"success",title:t.data.message,width:250}),this.deleteModal.hide(),this.getOrders()}).catch(t=>{r.fire({icon:"error",title:t.response.data.message,width:250})})},deleteOrdersAll(){this.$http.delete(`${p}/api/${f}/admin/orders/all`).then(t=>{r.fire({icon:"success",title:t.data.message,width:250}),this.deleteModal.hide(),this.getOrders()}).catch(t=>{r.fire({icon:"error",title:t.response.data.message,width:250})})},openModal(t,o){t==="edit"?(this.editModal.show(),this.order={...o}):t==="delete"?(this.deleteModal.show(),this.order={...o}):t==="deleteAll"&&(this.order={},this.deleteModal.show())}},mounted(){this.checkLogin(),this.getOrders(),this.editModal=new M(this.$refs.editModal),this.deleteModal=new M(this.$refs.deleteModal)}},Ge={class:"container mt-20"},Je={class:"text-end m-5"},We={class:"row"},Xe={class:"table table-hover align-middle"},Ye=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"訂單編號"),e("th",{scope:"col"},"訂單日期"),e("th",{scope:"col"},"訂購人"),e("th",{scope:"col"},"訂單品項"),e("th",{scope:"col"},"總金額"),e("th",{scope:"col"},"是否付款"),e("th",{scope:"col"},"操作")])],-1),Ze=e("br",null,null,-1),et={key:0,class:"text-success"},tt={key:1,class:"text-danger"},st=["onClick"],ot=["onClick"],dt={class:"modal fade",ref:"editModal","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},lt={class:"modal fade",ref:"deleteModal","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"};function at(t,o,c,x,d,i){var m;const h=y("OrderModal"),_=y("DeleteOrderModal"),u=y("AdminPagination");return l(),a("div",Ge,[e("div",Je,[(m=d.orders)!=null&&m.length?(l(),a("button",{key:0,type:"button",class:"btn btn-outline-danger",onClick:o[0]||(o[0]=s=>i.openModal("deleteAll"))},"刪除全部訂單")):A("",!0)]),e("div",We,[e("table",Xe,[Ye,e("tbody",null,[(l(!0),a($,null,k(d.orders,s=>(l(),a("tr",{key:s.id},[e("td",null,n(s.id),1),e("td",null,n(new Date(s.create_at*1e3).toLocaleDateString()),1),e("td",null,n(s.user.name),1),e("td",null,[(l(!0),a($,null,k(s.products,b=>(l(),a("span",{key:b.product_id},[g(n(b.product.title),1),Ze]))),128))]),e("td",null,"NT$"+n(s.total+parseInt(s.total>=500?0:100)),1),e("td",null,[s.is_paid?(l(),a("span",et,"是")):(l(),a("span",tt,"否"))]),e("td",null,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm me-1",onClick:b=>i.openModal("edit",s)},"編輯",8,st),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:b=>i.openModal("delete",s)},"刪除",8,ot)])]))),128))])]),e("div",dt,[v(h,{order:d.order,onConfirmEdit:i.confirmEdit},null,8,["order","onConfirmEdit"])],512),e("div",lt,[v(_,{order:d.order,onDeleteOrder:i.deleteOrder,onDeleteOrdersAll:i.deleteOrdersAll},null,8,["order","onDeleteOrder","onDeleteOrdersAll"])],512),v(u,{pages:d.page,onChangePage:i.getOrders},null,8,["pages","onChangePage"])])])}const _t=O(Qe,[["render",at]]);export{_t as default};