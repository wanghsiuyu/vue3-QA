import{A,M as C}from"./modal-c335af2c.js";import{_ as x,o as i,c as r,b as e,t as p,x as n,A as u,v as $,F as _,s as P,B as w,y as E,f as V,r as y,d as U}from"./index-ae4f4bcf.js";const{VITE_URL:T,VITE_PATH:D}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gracewang",BASE_URL:"/vue3-QA/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},L={props:["product","isNew"],data(){return{tempProduct:{}}},methods:{upload(){const l=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=l;const{file:t,files:c}=this.$refs,h=t.files[0]?t.files[0]:c.files[0],o=new FormData;o.append("file-to-upload",h),this.$http.post(`${T}/api/${D}/admin/upload`,o).then(d=>{t.files[0]?(this.tempProduct.imageUrl=d.data.imageUrl,t.value=""):c.files[0]&&(this.tempProduct.imagesUrl.push(d.data.imageUrl),c.value="")}).catch(d=>{alert(d.response.data.message)})}},watch:{product(){this.tempProduct=this.product}}},I={class:"modal-dialog modal-xl"},N={class:"modal-content"},R={class:"modal-header bg-primary"},F={class:"modal-title text-white",id:"exampleModalLabel"},S=e("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),O={class:"modal-body"},B={class:"container"},H={class:"row"},z={class:"col-md-4"},Q={class:"mb-4"},j=e("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),q=["src"],G={class:"mb-10"},J=e("label",{for:"file",class:"form-label"},"上傳圖片",-1),K={class:"mb-2"},W=e("label",{class:"form-label"},"新增其他圖片",-1),X={key:0},Y=["onUpdate:modelValue"],Z=["src"],ee={key:1},te=e("label",{for:"files",class:"form-label"},"上傳其他圖片",-1),oe={class:"col-md-8"},se={class:"mb-3"},le=e("label",{for:"productName",class:"form-label"},"商品名稱",-1),de={class:"mb-3"},ie=e("label",{class:"form-label w-100"},"商品特性",-1),re=["id","value"],ce=["for"],ne={class:"row mb-3"},ae={class:"col"},ue=e("label",{for:"productCategory",class:"form-label w-100"},"類別",-1),pe=e("option",{value:"",disabled:""},"請選擇類別",-1),me=["value"],he={class:"col"},be=e("label",{for:"productUnit",class:"form-label"},"單位",-1),_e={class:"row mb-3"},ge={class:"col"},fe=e("label",{for:"productOriginPrice",class:"form-label"},"原價",-1),Pe={class:"col"},ve=e("label",{for:"productPrice",class:"form-label"},"售價",-1),ye={class:"mb-3"},Ue=e("label",{for:"productDescription",class:"form-label"},"商品介紹",-1),ke={class:"mb-3"},xe=e("label",{for:"productContent",class:"form-label"},"內容物",-1),Ce={class:"mb-3"},we=e("label",{for:"productLocation",class:"form-label"},"產地",-1),Ve={class:"mb-3 form-check"},Me=e("label",{for:"isEnabled",class:"form-check-label"},"是否上架",-1),Ae={class:"modal-footer"},$e=e("button",{type:"button",class:"btn btn-outline-primary","data-bs-dismiss":"modal"},"取消",-1);function Ee(l,t,c,h,o,d){return i(),r("div",I,[e("div",N,[e("div",R,[e("h5",F,p(c.isNew?"新增":"編輯")+"商品",1),S]),e("div",O,[e("div",B,[e("div",H,[e("div",z,[e("div",Q,[j,n(e("input",{type:"text",class:"form-control mb-2",id:"imageUrl","aria-describedby":"imageUrl",placeholder:"請輸入圖片連結 或 選擇上傳圖片","onUpdate:modelValue":t[0]||(t[0]=s=>o.tempProduct.imageUrl=s)},null,512),[[u,o.tempProduct.imageUrl]]),o.tempProduct.imageUrl?(i(),r("img",{key:0,src:o.tempProduct.imageUrl,class:"img-fluid"},null,8,q)):$("",!0)]),e("div",G,[J,e("input",{type:"file",class:"form-control",id:"file",ref:"file",onChange:t[1]||(t[1]=(...s)=>d.upload&&d.upload(...s))},null,544)]),e("div",K,[W,Array.isArray(o.tempProduct.imagesUrl)?(i(),r("div",X,[(i(!0),r(_,null,P(o.tempProduct.imagesUrl,(s,m)=>(i(),r(_,{key:m+1234},[n(e("input",{type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結 或 選擇上傳圖片","onUpdate:modelValue":v=>o.tempProduct.imagesUrl[m]=v},null,8,Y),[[u,o.tempProduct.imagesUrl[m]]]),e("img",{src:o.tempProduct.imagesUrl[m],alt:"",class:"img-fluid mb-2"},null,8,Z)],64))),128)),!o.tempProduct.imagesUrl.length||o.tempProduct.imagesUrl[o.tempProduct.imagesUrl.length-1]?(i(),r("button",{key:0,type:"button",class:"btn btn-outline-primary w-100 mb-2",onClick:t[2]||(t[2]=s=>o.tempProduct.imagesUrl.push(""))}," 新增欄位 ")):(i(),r("button",{key:1,type:"button",class:"btn btn-outline-danger w-100",onClick:t[3]||(t[3]=s=>o.tempProduct.imagesUrl.pop())},"刪除欄位"))])):(i(),r("div",ee,[e("button",{type:"button",class:"btn btn-outline-primary w-100 mb-2",onClick:t[4]||(t[4]=s=>l.$emit("createImage"))},"新增欄位")]))]),e("div",null,[te,e("input",{type:"file",class:"form-control",id:"files",ref:"files",onChange:t[5]||(t[5]=(...s)=>d.upload&&d.upload(...s))},null,544)])]),e("div",oe,[e("div",se,[le,n(e("input",{type:"text",class:"form-control",id:"productName","aria-describedby":"productName",placeholder:"請輸入商品名稱","onUpdate:modelValue":t[6]||(t[6]=s=>o.tempProduct.title=s)},null,512),[[u,o.tempProduct.title]])]),e("div",de,[ie,(i(!0),r(_,null,P(o.tempProduct.features,s=>(i(),r("div",{class:"form-check form-check-inline",key:s},[n(e("input",{class:"form-check-input",id:s,type:"checkbox",value:s,"onUpdate:modelValue":t[7]||(t[7]=m=>o.tempProduct.checkboxFeatures=m)},null,8,re),[[w,o.tempProduct.checkboxFeatures]]),e("label",{class:"form-check-label",for:s},p(s),9,ce)]))),128))]),e("div",ne,[e("div",ae,[ue,n(e("select",{id:"productCategory",name:"productCategory",class:"form-select","onUpdate:modelValue":t[8]||(t[8]=s=>o.tempProduct.selectCategories=s)},[pe,(i(!0),r(_,null,P(o.tempProduct.categories,s=>(i(),r("option",{key:s,value:s},p(s),9,me))),128))],512),[[E,o.tempProduct.selectCategories]])]),e("div",he,[be,n(e("input",{type:"text",class:"form-control",id:"productUnit","aria-describedby":"productUnit",placeholder:"請輸入單位","onUpdate:modelValue":t[9]||(t[9]=s=>o.tempProduct.unit=s)},null,512),[[u,o.tempProduct.unit]])])]),e("div",_e,[e("div",ge,[fe,n(e("input",{type:"number",class:"form-control",id:"productOriginPrice","aria-describedby":"productOriginPrice",placeholder:"請輸入原價","onUpdate:modelValue":t[10]||(t[10]=s=>o.tempProduct.origin_price=s)},null,512),[[u,o.tempProduct.origin_price,void 0,{number:!0}]])]),e("div",Pe,[ve,n(e("input",{type:"number",class:"form-control",id:"productPrice","aria-describedby":"productPrice",placeholder:"請輸入售價","onUpdate:modelValue":t[11]||(t[11]=s=>o.tempProduct.price=s)},null,512),[[u,o.tempProduct.price,void 0,{number:!0}]])])]),e("div",ye,[Ue,n(e("textarea",{class:"form-control",id:"productDescription","aria-describedby":"productDescription",placeholder:"請輸入商品介紹","onUpdate:modelValue":t[12]||(t[12]=s=>o.tempProduct.description=s),style:{height:"100px",resize:"none"}},null,512),[[u,o.tempProduct.description]])]),e("div",ke,[xe,n(e("input",{type:"text",class:"form-control",id:"productContent","aria-describedby":"productContent",placeholder:"請輸入內容物","onUpdate:modelValue":t[13]||(t[13]=s=>o.tempProduct.content=s)},null,512),[[u,o.tempProduct.content]])]),e("div",Ce,[we,n(e("input",{type:"text",class:"form-control",id:"productLocation","aria-describedby":"productLocation",placeholder:"請輸入產地","onUpdate:modelValue":t[14]||(t[14]=s=>o.tempProduct.location=s)},null,512),[[u,o.tempProduct.location]])]),e("div",Ve,[n(e("input",{type:"checkbox",class:"form-check-input",id:"isEnabled","onUpdate:modelValue":t[15]||(t[15]=s=>o.tempProduct.is_enabled=s),value:""},null,512),[[w,o.tempProduct.is_enabled]]),Me])])])])]),e("div",Ae,[$e,e("button",{type:"button",class:"btn btn-primary",onClick:t[16]||(t[16]=s=>l.$emit("update-product",o.tempProduct))},"確認")])])])}const Te=x(L,[["render",Ee]]),De={props:["tempProduct","deleteProduct"]},Le={class:"modal-dialog modal-dialog-centered"},Ie={class:"modal-content"},Ne=e("div",{class:"modal-header bg-danger"},[e("h5",{class:"modal-title text-white",id:"exampleModalLabel"},"刪除商品"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Re={class:"modal-body"},Fe={class:"text-danger"},Se={class:"modal-footer"},Oe=e("button",{type:"button",class:"btn btn-outline-danger","data-bs-dismiss":"modal"},"取消",-1);function Be(l,t,c,h,o,d){return i(),r("div",Le,[e("div",Ie,[Ne,e("div",Re,[V(" 是否刪除 "),e("span",Fe,p(c.tempProduct.title),1),V(" 商品？（刪除後將無法恢復） ")]),e("div",Se,[Oe,e("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...s)=>c.deleteProduct&&c.deleteProduct(...s))},"確認刪除")])])])}const He=x(De,[["render",Be]]);let g,k;const{VITE_URL:b,VITE_PATH:f}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gracewang",BASE_URL:"/vue3-QA/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},ze={data(){return{products:[],tempProduct:{features:["純素","有機","無麩質","辣"],checkboxFeatures:[],categories:["超飽足果昔盆","輕食冷盤","湯品","裸食甜點","果昔飲品"],selectCategories:"",category:"1",imagesUrl:[]},isNew:!1,page:{}}},components:{AdminPagination:A,ProductModalAll:Te,DeleteProductModal:He},methods:{checkLogin(){this.$http.post(`${b}/api/user/check`).then(()=>{this.getProduct()}).catch(l=>{alert(l.response.data.message),this.$router.push("/login")})},getProduct(l=1){this.$http.get(`${b}/api/${f}/admin/products/?page=${l}`).then(t=>{this.products=t.data.products,this.page=t.data.pagination}).catch(t=>{alert(t.response.data.message)})},updateProduct(){let l=`${b}/api/${f}/admin/product`,t="post",c="新增產品成功！";this.isNew||(l=`${b}/api/${f}/admin/product/${this.tempProduct.id}`,t="put",c="編輯產品成功！"),this.$http[t](l,{data:this.tempProduct}).then(()=>{this.getProduct(),g.hide(),alert(c)}).catch(h=>{alert(h.response.data.message)})},deleteProduct(){this.$http.delete(`${b}/api/${f}/admin/product/${this.tempProduct.id}`).then(()=>{this.getProduct(),k.hide(),alert("刪除產品成功！")}).catch(l=>{alert(l.response.data.message)})},createImage(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push("")},openModal(l,t){l==="create"?(g.show(),this.isNew=!0,this.tempProduct={features:["純素","有機","無麩質","辣"],checkboxFeatures:[],categories:["超飽足果昔盆","輕食冷盤","湯品","裸食甜點","果昔飲品"],selectCategories:"",category:"1",imagesUrl:[]}):l==="edit"?(g.show(),this.isNew=!1,this.tempProduct={...t}):l==="delete"&&(k.show(),this.tempProduct={...t})}},mounted(){const l=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=l,this.checkLogin(),this.getProduct(),g=new C(this.$refs.productModal),k=new C(this.$refs.deleteModal)}},Qe={class:"container mt-20"},je={class:"text-end m-5"},qe={class:"row"},Ge={class:"table table-hover"},Je=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"商品 ID"),e("th",{scope:"col"},"類別"),e("th",{scope:"col"},"商品名稱"),e("th",{scope:"col"},"原價"),e("th",{scope:"col"},"售價"),e("th",{scope:"col"},"是否上架"),e("th",{scope:"col"},"操作")])],-1),Ke={scope:"row"},We={key:0,class:"text-success"},Xe={key:1},Ye=["onClick"],Ze=["onClick"],et={class:"modal fade",ref:"productModal","data-bs-backdrop":"static",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},tt={class:"modal fade",ref:"deleteModal","data-bs-backdrop":"static",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"};function ot(l,t,c,h,o,d){const s=y("ProductModalAll"),m=y("DeleteProductModal"),v=y("AdminPagination");return i(),r("div",Qe,[e("div",je,[e("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=a=>d.openModal("create"))},"建立新的產品")]),e("div",qe,[e("table",Ge,[Je,e("tbody",null,[(i(!0),r(_,null,P(o.products,a=>(i(),r("tr",{key:a.id},[e("td",Ke,p(a.id),1),e("td",null,p(a.selectCategories),1),e("td",null,p(a.title),1),e("td",null,p(a.origin_price),1),e("td",null,p(a.price),1),e("td",null,[a.is_enabled?(i(),r("span",We,"上架")):(i(),r("span",Xe,"下架"))]),e("td",null,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm me-1",onClick:M=>d.openModal("edit",a)},"編輯",8,Ye),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:M=>d.openModal("delete",a)},"刪除",8,Ze)])]))),128))])]),e("div",et,[U(s,{product:o.tempProduct,isNew:o.isNew,onUpdateProduct:d.updateProduct,onCreateImage:d.createImage},null,8,["product","isNew","onUpdateProduct","onCreateImage"])],512),e("div",tt,[U(m,{tempProduct:o.tempProduct,deleteProduct:d.deleteProduct},null,8,["tempProduct","deleteProduct"])],512),U(v,{pages:o.page,onChangePage:d.getProduct},null,8,["pages","onChangePage"])])])}const dt=x(ze,[["render",ot]]);export{dt as default};
