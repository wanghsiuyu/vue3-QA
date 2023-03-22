import{_ as v,m as x,a as w,h as k,o as d,b as i,i as T,d as t,w as j,t as o,F as h,r as L,l as g}from"./index-2634201d.js";import{l as m}from"./loadingStore-3949ef09.js";import{T as l}from"./toast-e0ba1b73.js";const V="/vue3-QA/assets/check-fbee8a1c.svg",{VITE_URL:b,VITE_PATH:u}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gracewang",BASE_URL:"/vue3-QA/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},S={data(){return{order:{},shipping:0}},methods:{...x(m,["loading"]),getOrder(){const{orderId:c}=this.$route.params;this.$http.get(`${b}/api/${u}/order/${c}`).then(e=>{e.data.success&&(this.order=e.data.order,this.shipping=parseInt(this.order.total>=500?0:100))}).catch(e=>{l.fire({icon:"error",title:e.response.data.message,width:250})})},payOrder(c){this.$http.post(`${b}/api/${u}/pay/${c}`).then(e=>{e.data.success&&(this.getOrder(),l.fire({icon:"success",title:"已完成付款。",width:250}))}).catch(e=>{l.fire({icon:"error",title:e.response.data.message,width:250})})}},computed:{...w(m,["isLoading"])},mounted(){this.loading(),this.getOrder()}},E={class:"row justify-content-center mb-10"},O=g('<div class="col-3 border-bottom border-5 border-primary"><div class="d-flex flex-column align-items-center"><div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-1" style="width:20px;height:20px;">1</div><p class="text-primary mb-2 fw-bold">填寫資料</p></div></div><div class="col-3 border-bottom border-5 border-primary"><div class="d-flex flex-column align-items-center"><div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-1" style="width:20px;height:20px;">2</div><p class="text-primary mb-2 fw-bold">確認付款</p></div></div>',2),A={key:0,class:"col-3 border-bottom border-5 border-gray"},D=t("div",{class:"d-flex flex-column align-items-center"},[t("div",{class:"rounded-circle bg-gray text-white d-flex align-items-center justify-content-center mb-1",style:{width:"20px",height:"20px"}},"3"),t("p",{class:"text-gray mb-2 fw-bold"},"完成訂購")],-1),I=[D],N={key:1,class:"col-3 border-bottom border-5 border-primary"},R=t("div",{class:"d-flex flex-column align-items-center"},[t("div",{class:"rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-1",style:{width:"20px",height:"20px"}},"3"),t("p",{class:"text-primary mb-2 fw-bold"},"完成訂購")],-1),U=[R],B={class:"row justify-content-center flex-lg-row-reverse"},P={class:"col-lg-5 mb-5 mb-lg-0"},C={class:"card border-0 bg-primary-light py-3 p-lg-5"},F={key:0,class:"card-body"},H=t("h2",{class:"fs-5 fs-lg-4 mb-4"},"訂單連絡資訊",-1),M={class:"table align-middle bg-primary-light"},Q=t("tr",null,[t("td",{class:"p-md-3 border-0"},"付款狀態"),t("td",{class:"p-md-3 border-0"},[t("span",{class:"text-danger"},"尚未付款")])],-1),$=t("td",{class:"p-md-3 border-0"},"訂單金額",-1),q={class:"p-md-3 border-0"},z=t("td",{class:"p-md-3 border-0"},"訂單編號",-1),G={class:"p-md-3 border-0"},J=t("td",{class:"p-md-3 border-0"},"訂單成立日期",-1),K={class:"p-md-3 border-0"},W=t("td",{class:"p-md-3 border-0"},"信箱",-1),X={class:"p-md-3 border-0"},Y=t("td",{class:"p-md-3 border-0"},"姓名",-1),Z={class:"p-md-3 border-0"},tt=t("td",{class:"p-md-3 border-0"},"手機",-1),st={class:"p-md-3 border-0"},et=t("td",{class:"p-md-3 border-0"},"外送地址",-1),ot={class:"p-md-3 border-0"},rt=t("td",{class:"p-md-3 border-0"},"訂單備註",-1),dt={class:"p-md-3 border-0"},it=t("button",{type:"submit",class:"btn btn-primary w-100"},"確認付款",-1),ct={key:1,class:"card-body"},lt=g('<div class="text-center mb-2"><img src="'+V+'" alt="check"></div><h2 class="fs-5 fs-lg-4 mb-4 text-center">完成訂購</h2><div class="text-justify mb-4"><p>恭喜您已完成訂購，請留意您的手機，餐點送達您指定的地點時，將會以手機連絡您取餐。</p><p>若您是自取，製作完畢將會通知您前往取餐。 取餐地址：台南市東區樂活路 59 號</p><p>若有任何問題，歡迎來電詢問：06-2345678</p></div><a href="#/products" class="btn btn-primary w-100">看看其他餐點</a>',4),nt=[lt],at={class:"col-lg-5"},pt=t("h2",{class:"fs-5 fs-lg-4 mb-4"},"訂購內容",-1),_t={class:"table align-middle",style:{"font-size":"14px"}},ht=t("tr",{class:"border-bottom"},null,-1),mt={class:"d-flex align-items-center justify-content-between gap-5 gap-md-10 py-4"},bt=["src"],ut={class:"d-flex align-items-center justify-content-between w-75"},gt={class:"mb-1"},ft={class:"mb-1"},yt={class:"mb-0"},vt={class:"mb-0 text-end"};function xt(c,e,wt,kt,s,f){var n,a,p,_;const y=k("VueLoading");return d(),i(h,null,[T(y,{active:c.isLoading,"onUpdate:active":e[0]||(e[0]=r=>c.isLoading=r)},null,8,["active"]),t("div",E,[O,s.order.is_paid?(d(),i("div",N,U)):(d(),i("div",A,I))]),t("div",B,[t("section",P,[t("div",C,[s.order.is_paid?(d(),i("div",ct,nt)):(d(),i("div",F,[H,t("form",{onSubmit:e[1]||(e[1]=j(r=>f.payOrder(s.order.id),["prevent"]))},[t("table",M,[t("tbody",null,[Q,t("tr",null,[$,t("td",q,"NT$"+o(s.order.total+s.shipping),1)]),t("tr",null,[z,t("td",G,o(s.order.id),1)]),t("tr",null,[J,t("td",K,o(new Date(s.order.create_at*1e3).toLocaleDateString()),1)]),t("tr",null,[W,t("td",X,o((n=s.order.user)==null?void 0:n.email),1)]),t("tr",null,[Y,t("td",Z,o((a=s.order.user)==null?void 0:a.name),1)]),t("tr",null,[tt,t("td",st,o((p=s.order.user)==null?void 0:p.tel),1)]),t("tr",null,[et,t("td",ot,o((_=s.order.user)==null?void 0:_.address),1)]),t("tr",null,[rt,t("td",dt,o(s.order.message?s.order.message:"無"),1)])])]),it],32)]))])]),t("section",at,[pt,t("table",_t,[t("tbody",null,[ht,(d(!0),i(h,null,L(s.order.products,r=>(d(),i("tr",{key:r.id},[t("td",mt,[t("img",{src:r.product.imageUrl,class:"object-fit-cover d-block",width:"90",height:"90",alt:"item.product.title"},null,8,bt),t("div",ut,[t("div",null,[t("p",gt,o(r.product.title),1),t("p",ft,"NT$"+o(r.product.price)+" / "+o(r.product.unit),1),t("p",yt,"數量："+o(r.qty),1)]),t("p",vt,"NT$"+o(r.final_total),1)])])]))),128))])])])])],64)}const Vt=v(S,[["render",xt]]);export{Vt as default};