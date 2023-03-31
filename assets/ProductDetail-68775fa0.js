import{_ as k,R as w,m as h,a as b,i as g,o as e,b as c,j as d,d as t,k as a,t as l,F as p,r as m,g as T,v as x,e as _,l as C,f as u}from"./index-20ebf4cd.js";import{l as S}from"./loadingStore-6e46e0b2.js";import{c as L}from"./cartsStore-70f510bf.js";import{p as f}from"./productsStore-91aae084.js";import{T as V}from"./toast-0d089cd6.js";const{VITE_URL:N,VITE_PATH:P}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gracewang",BASE_URL:"/vue3-QA/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},I={data(){return{product:{},productQty:1,selectImg:"",isLoading:!1}},components:{RouterLink:w},methods:{...h(L,["addToCart"]),...h(f,["getProducts"]),getProduct(){this.isLoading=!0;const{id:i}=this.$route.params;this.$http.get(`${N}/api/${P}/product/${i}`).then(r=>{this.isLoading=!1,this.selectImg="",this.product=r.data.product}).catch(r=>{V.fire({icon:"error",title:r.response.data.message,width:250})})}},computed:{...b(S,["loadingStatus"]),...b(f,["products"])},watch:{"$route.params":{immediate:!0,handler(){this.$route.params.id&&this.getProduct()}}},mounted(){this.getProduct(),this.productQty=1,this.getProducts()}},R={class:"container mt-20"},E={class:"row justify-content-center py-4 py-lg-8"},U={class:"col-lg-5"},j={class:"d-lg-none"},D={"aria-label":"breadcrumb"},Q={class:"breadcrumb mb-5"},A={class:"breadcrumb-item"},B={class:"breadcrumb-item"},F={class:"breadcrumb-item active","aria-current":"page"},H={class:"mb-5"},M=["src","alt"],O=["src","alt"],q=["src","alt","onClick"],z={class:"col-lg-5"},G={class:"d-none d-lg-block"},J={"aria-label":"breadcrumb"},K={class:"breadcrumb mb-5"},W={class:"breadcrumb-item"},X={class:"breadcrumb-item"},Y={class:"breadcrumb-item active","aria-current":"page"},Z={class:"h2 mb-2"},$={class:"mb-2 mb-lg-3"},tt={key:0,class:"badge fs-6 bg-primary-light text-primary px-2 py-1 me-1 me-lg-2"},st={key:1,class:"badge fs-6 px-2 py-1 me-1 me-lg-2",style:{color:"#2d9449","background-color":"#ecf8f4"}},ot={key:2,class:"badge fs-6 px-2 py-1 me-1 me-lg-2",style:{color:"#817447","background-color":"#f8efec"}},et={key:3,class:"badge fs-6 px-2 py-1",style:{color:"#814747","background-color":"#f8ecec"}},ct={class:"h2 text-bold green mb-1"},lt={class:"h3 mb-4"},it={class:"text-gray-dark"},rt=t("p",{class:"d-flex mb-4"},[t("span",{class:"material-icons me-1"}," discount "),_("單筆訂單滿 NT$500 免運")],-1),dt=["disabled"],nt=["value"],at=["disabled"],pt={class:"mb-5 mb-lg-6"},ut=t("p",{class:"fs-6 mb-2 fw-bold text-primary"},"商品介紹",-1),_t={class:"mb-5 mb-lg-6"},mt=t("p",{class:"fs-6 mb-2 fw-bold text-primary"},"內容物",-1),ht={class:"mb-5 mb-lg-6"},bt=t("p",{class:"fs-6 mb-2 fw-bold text-primary"},"產地",-1),gt=C('<div class="mb-5 mb-lg-6"><p class="fs-6 mb-2 fw-bold text-primary">保存期限</p><p>為保持食物最佳口感及鮮度，請於 2 小時內食用完畢，隔餐勿食。</p></div><div class="mb-5 mb-lg-6"><p class="fs-6 mb-2 fw-bold text-primary">注意事項</p><ol class="ps-5"><li>本店商品皆為新鮮現作，保存期限短，如您收到商品有瑕疵，請務必立即反應讓我們為您處理！</li><li>我們提供外送的地區是台南市東區、中西區、永康區、安平區、南區、北區、仁德區、安南區，運費是 100 元。</li></ol></div>',2),ft={class:"col-lg-10 py-8 pt-lg-15"},yt=t("div",{class:"text-center text-lg-start"},[t("h2",{class:"block-title position-relative fs-3 fs-lg-2 fw-lg-bold mb-6 mb-lg-10"},"相關餐點")],-1),vt={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-5"},kt={key:0,class:"col"},wt={class:"position-relative hover-show-btn"},Tt={class:"hover-img-mask"},xt=["src","alt"],Ct=["disabled","onClick"],St={key:0,class:"fas fa-spinner fa-pulse me-2"},Lt=t("span",null,"加入購物車",-1),Vt={class:"py-3 py-lg-4"},Nt={class:"fs-5 text-center text-dark mb-2 mb-lg-3"},Pt={class:"text-primary d-flex align-items-center justify-content-center"},It={class:"fs-6 text-gray-dark ms-2"};function Rt(i,r,Et,Ut,o,jt){const y=g("VueLoading"),n=g("RouterLink");return e(),c(p,null,[d(y,{active:o.isLoading,"onUpdate:active":r[0]||(r[0]=s=>o.isLoading=s)},null,8,["active"]),t("div",R,[t("div",E,[t("section",U,[t("div",j,[t("nav",D,[t("ol",Q,[t("li",A,[d(n,{to:"/"},{default:a(()=>[_("首頁")]),_:1})]),t("li",B,[d(n,{to:"/products"},{default:a(()=>[_("線上訂餐")]),_:1})]),t("li",F,l(o.product.selectCategories),1)])])]),t("div",H,[o.selectImg?(e(),c("img",{key:1,src:o.selectImg,alt:o.product.title,class:"object-fit-cover w-100 mb-2 h-lg-img",height:"250"},null,8,O)):(e(),c("img",{key:0,src:o.product.imageUrl,alt:o.product.title,class:"object-fit-cover w-100 mb-2 h-lg-img",height:"250"},null,8,M)),(e(!0),c(p,null,m(o.product.imagesUrl,s=>(e(),c("img",{key:s,src:s,alt:o.product.title,width:"80",height:"80",class:"object-fit-cover me-2",onClick:v=>o.selectImg=s,style:{cursor:"pointer"}},null,8,q))),128))])]),t("section",z,[t("div",G,[t("nav",J,[t("ol",K,[t("li",W,[d(n,{to:"/"},{default:a(()=>[_("首頁")]),_:1})]),t("li",X,[d(n,{to:"/products"},{default:a(()=>[_("線上訂餐")]),_:1})]),t("li",Y,l(o.product.selectCategories),1)])])]),t("h1",Z,l(o.product.title),1),t("h5",$,[(e(!0),c(p,null,m(o.product.checkboxFeatures,s=>(e(),c("span",{key:s},[s==="純素"?(e(),c("span",tt,l(s),1)):u("",!0),s==="有機"?(e(),c("span",st,l(s),1)):u("",!0),s==="無麩質"?(e(),c("span",ot,l(s),1)):u("",!0),s==="辣"?(e(),c("span",et,l(s),1)):u("",!0)]))),128))]),t("p",ct,"NT$"+l(i.$filters.toThousands(o.product.price)),1),t("p",lt,[t("small",it,[t("del",null,"NT$"+l(i.$filters.toThousands(o.product.origin_price)),1)])]),rt,T(t("select",{class:"form-select w-lg-50 mb-4","onUpdate:modelValue":r[1]||(r[1]=s=>o.productQty=s),disabled:i.loadingStatus===o.product.id},[(e(),c(p,null,m(20,s=>t("option",{key:s+1234,value:s},l(s),9,nt)),64))],8,dt),[[x,o.productQty]]),t("button",{type:"button",class:"btn btn-primary w-100 mb-10",disabled:i.loadingStatus===o.product.id,onClick:r[2]||(r[2]=s=>i.addToCart(o.product.id,o.productQty))},"加入購物車",8,at),t("div",pt,[ut,t("p",null,l(o.product.description),1)]),t("div",_t,[mt,t("p",null,l(o.product.content),1)]),t("div",ht,[bt,t("p",null,l(o.product.location),1)]),gt]),t("section",ft,[yt,t("div",vt,[(e(!0),c(p,null,m(i.products,s=>(e(),c(p,{key:s.id},[s.selectCategories===o.product.selectCategories&&s.title!==o.product.title?(e(),c("div",kt,[t("div",wt,[t("div",Tt,[d(n,{to:`/product/${s.id}`,class:"hover-img-mask"},{default:a(()=>[t("img",{src:s.imageUrl,alt:s.title,class:"w-100 d-block rounded-3 object-fit-cover",height:"240"},null,8,xt)]),_:2},1032,["to"]),t("button",{type:"button",class:"add-to-cart-btn btn btn-primary position-absolute bottom-0 start-50 translate-middle py-3 fs-5",disabled:i.loadingStatus===s.id,onClick:v=>i.addToCart(s.id)},[i.loadingStatus===s.id?(e(),c("i",St)):u("",!0),Lt],8,Ct)])]),d(n,{to:`/product/${s.id}`},{default:a(()=>[t("div",Vt,[t("h4",Nt,l(s.title),1),t("h5",Pt,[_(" NT$"+l(i.$filters.toThousands(s.price))+" ",1),t("span",It,[t("del",null,"NT$"+l(i.$filters.toThousands(s.origin_price)),1)])])])]),_:2},1032,["to"])])):u("",!0)],64))),128))])])])])],64)}const Ht=k(I,[["render",Rt]]);export{Ht as default};