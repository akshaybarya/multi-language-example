(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(1002)}])},9749:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t,a;var s,{src:n,sizes:p,unoptimized:b=!1,priority:x=!1,loading:A,className:N,quality:j,width:w,height:E,fill:I,style:S,onLoad:y,onLoadingComplete:C,placeholder:_="empty",blurDataURL:D,layout:H,objectFit:L,objectPosition:R,lazyBoundary:k,lazyRoot:z}=e,O=r(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let G=l.useContext(u.ImageConfigContext),P=l.useMemo(()=>{let e=m||G||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),a=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:a})},[G]),U=O,B=U.loader||h.default;if(delete U.loader,"__next_img_default"in B){if("custom"===P.loader)throw Error('Image with src "'.concat(n,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let Q=B;B=e=>{let{config:t}=e,a=r(e,["config"]);return Q(a)}}if(H){"fill"===H&&(I=!0);let T={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[H];T&&(S=i({},S,T));let F={responsive:"100vw",fill:"100vw"}[H];F&&!p&&(p=F)}let M="",V=g(w),q=g(E);if("object"==typeof(s=n)&&(f(s)||void 0!==s.src)){let J=f(n)?n.default:n;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(t=J.blurWidth,a=J.blurHeight,D=D||J.blurDataURL,M=J.src,!I){if(V||q){if(V&&!q){let K=V/J.width;q=Math.round(J.height*K)}else if(!V&&q){let W=q/J.height;V=Math.round(J.width*W)}}else V=J.width,q=J.height}}let Y=!x&&("lazy"===A||void 0===A);((n="string"==typeof n?n:M).startsWith("data:")||n.startsWith("blob:"))&&(b=!0,Y=!1),P.unoptimized&&(b=!0);let[X,Z]=l.useState(!1),[$,ee]=l.useState(!1),et=g(j),ea=Object.assign(I?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:R}:{},$?{}:{color:"transparent"},S),ei="blur"===_&&D&&!X?{backgroundSize:ea.objectFit||"cover",backgroundPosition:ea.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:V,heightInt:q,blurWidth:t,blurHeight:a,blurDataURL:D}),'")')}:{},es=function(e){let{config:t,src:a,unoptimized:i,width:s,quality:n,sizes:r,loader:l}=e;if(i)return{src:a,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,a){let{deviceSizes:i,allSizes:s}=e;if(a){let n=/(^|\s)(1?\d?\d)vw/g,r=[];for(let l;l=n.exec(a);l)r.push(parseInt(l[2]));if(r.length){let o=.01*Math.min(...r);return{widths:s.filter(e=>e>=i[0]*o),kind:"w"}}return{widths:s,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let c=[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))];return{widths:c,kind:"x"}}(t,s,r),d=o.length-1;return{sizes:r||"w"!==c?r:"100vw",srcSet:o.map((e,i)=>"".concat(l({config:t,src:a,quality:n,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:l({config:t,src:a,quality:n,width:o[d]})}}({config:P,src:n,unoptimized:b,width:V,quality:et,sizes:p,loader:B}),en=n,er={imageSrcSet:es.srcSet,imageSizes:es.sizes,crossOrigin:U.crossOrigin},el=l.useRef(y);l.useEffect(()=>{el.current=y},[y]);let eo=l.useRef(C);l.useEffect(()=>{eo.current=C},[C]);let ec=i({isLazy:Y,imgAttributes:es,heightInt:q,widthInt:V,qualityInt:et,className:N,imgStyle:ea,blurStyle:ei,loading:A,config:P,fill:I,unoptimized:b,placeholder:_,loader:B,srcString:en,onLoadRef:el,onLoadingCompleteRef:eo,setBlurComplete:Z,setShowAltText:ee},U);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},ec)),x?l.default.createElement(o.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+es.src+es.srcSet+es.sizes,rel:"preload",as:"image",href:es.srcSet?void 0:es.src},er))):null)};var i=a(6495).Z,s=a(2648).Z,n=a(1598).Z,r=a(7273).Z,l=n(a(7294)),o=s(a(3121)),c=a(2675),d=a(139),u=a(8730);a(7238);var h=s(a(9824));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,a,s,n,r,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===a&&r(!0),null==s?void 0:s.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,o=!1;s.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>o,persist(){},preventDefault(){l=!0,t.preventDefault()},stopPropagation(){o=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let v=e=>{var{imgAttributes:t,heightInt:a,widthInt:s,qualityInt:n,className:o,imgStyle:c,blurStyle:d,isLazy:u,fill:h,placeholder:m,loading:f,srcString:g,config:v,unoptimized:b,loader:x,onLoadRef:A,onLoadingCompleteRef:N,setBlurComplete:j,setShowAltText:w,onLoad:E,onError:I}=e,S=r(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return f=u?"lazy":f,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},S,t,{width:s,height:a,decoding:"async","data-nimg":h?"fill":"1",className:o,loading:f,style:i({},c,d),ref:l.useCallback(e=>{e&&(I&&(e.src=e.src),e.complete&&p(e,g,m,A,N,j,b))},[g,m,A,N,j,I,b]),onLoad(e){let t=e.currentTarget;p(t,g,m,A,N,j,b)},onError(e){w(!0),"blur"===m&&j(!0),I&&I(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:a,blurWidth:i,blurHeight:s,blurDataURL:n}=e,r=i||t,l=s||a,o=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return r&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(r," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&s?"1":"20","'/%3E").concat(o,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(n,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function a(e){let{config:t,src:a,width:i,quality:s}=e;return a.endsWith(".svg")&&!t.dangerouslyAllowSVG?a:"".concat(t.path,"?url=").concat(encodeURIComponent(a),"&w=").concat(i,"&q=").concat(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a.__next_img_default=!0,t.default=a},1002:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return w}});var i=a(5893),s=a(7294),n=a(5675),r=a.n(n),l={src:"/nextjs-pages/_next/static/media/slide-img.8253155c.png",height:448,width:624,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/Af///0D7+fem/e3nFQHl2v0EAfn/+BIeAuv69eQKChJjAe/s58Li3rs9AOfp/gff/gIN+vcA+RgV/+kT8AERFC/JAezh2uDqu2QfzvI2/wP8FQElDhsABwsR/wUO8gH5DgzrAenVy+UJzqwad5/g/v44KQFuHw0AEuXL/xMnCQLuE0DxAfj5+7b61r1Jx9XYAPcKBQAp8MAAJhAWAPwQKADz8v7FAfr7/yf98uaS6u/hKwgFEQgKBQIDCAEB9/n2+NTs4OJxKSxl0OGgRM0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},o={src:"/nextjs-pages/_next/static/media/logo.27a223ea.png",height:58,width:59,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAn0lEQVR42l3OMQrCMBjF8YgOnsBVHATRNTdwchTXOjvpDXRTnNVRhHYSXARP4CR4iU69QiltSvt/kC4N/Pq9NC8Qo+UC2/UzwhdjLJrDDno+D/DGx63t0rSWCheUqJBQmhs+faz4scELGftKyLFu7RDiiQMif5gzSxXuhH0R2Cn5QT4yU/Yq/VU44aaSJq5kx/xhpMIEZ4TYYkhh1jy8BqOiccscOhkLAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};let c={ENGLISH:"ENGLISH",HINDI:"HINDI"},d=c.ENGLISH,u=()=>d,h=e=>{d=e},m=e=>e[d],f={ENGLISH:"Welcome to",HINDI:"आपका स्वागत है"},g={ENGLISH:"Our Fruits Shop",HINDI:"हमारी फलों की दुकान"},p={ENGLISH:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",HINDI:"लोरेम इप्सम के परिच्छेद के कई रूप उपलब्ध हैं, लेकिन बहुसंख्यकों को अंतःक्षेपित हास्य, या यादृच्छिक शब्दों द्वारा किसी न किसी रूप में परिवर्तन का सामना करना पड़ा है, जो थोड़ा सा भी विश्वसनीय नहीं लगता है।"},v={ENGLISH:"Shop Now",HINDI:"अभी खरीदें"},b={ENGLISH:"Contact Us",HINDI:"संपर्क करें"},x={ENGLISH:"Fruits",HINDI:"फल"},A={ENGLISH:"Home",HINDI:"घर"},N={ENGLISH:"Change Language",HINDI:"भाषा बदलें"},j=()=>{let[e,t]=(0,s.useState)(u());(0,s.useEffect)(()=>{h(e)},[e]);let a=()=>{switch(e){case c.ENGLISH:t(c.HINDI);break;case c.HINDI:t(c.ENGLISH);break;default:return}};return(0,i.jsxs)("div",{className:"hero_area",children:[(0,i.jsx)("header",{className:"header_section",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("nav",{className:"navbar navbar-expand-lg custom_nav-container pt-3",children:[(0,i.jsxs)("a",{className:"navbar-brand",href:"#",children:[(0,i.jsx)(r(),{alt:"",src:o,className:""}),(0,i.jsx)("span",{children:"Tropiko"})]}),(0,i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,i.jsx)("span",{className:"navbar-toggler-icon"})}),(0,i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,i.jsxs)("div",{className:"d-flex ml-auto flex-column flex-lg-row align-items-center",children:[(0,i.jsxs)("ul",{className:"navbar-nav ",children:[(0,i.jsx)("li",{className:"nav-item active",children:(0,i.jsxs)("a",{className:"nav-link",href:"#",children:[m(A)," ",(0,i.jsx)("span",{className:"sr-only",children:"(current)"})]})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsxs)("a",{className:"nav-link",href:"#",children:[m(x)," "]})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{className:"nav-link",href:"#",children:m(b)})})]}),(0,i.jsx)("form",{className:"form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0",children:(0,i.jsx)("button",{className:"btn my-2 my-sm-0 nav_search-btn",type:"submit"})})]}),(0,i.jsx)("div",{className:"quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center",onClick:a,children:(0,i.jsx)("a",{href:"#",children:m(N)})})]})]})})}),(0,i.jsx)("section",{className:" slider_section position-relative",children:(0,i.jsx)("div",{id:"carouselExampleControls",className:"carousel slide","data-ride":"carousel",children:(0,i.jsx)("div",{className:"carousel-inner",children:(0,i.jsx)("div",{className:"carousel-item active",children:(0,i.jsx)("div",{className:"slider_item-box",children:(0,i.jsx)("div",{className:"slider_item-container",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsx)("div",{className:"slider_item-detail",children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("h1",{children:[m(f),(0,i.jsx)("br",{}),m(g)]}),(0,i.jsx)("p",{children:m(p)}),(0,i.jsxs)("div",{className:"d-flex",children:[(0,i.jsx)("a",{href:"#",className:"text-uppercase custom_orange-btn mr-3",children:m(v)}),(0,i.jsx)("a",{href:"#",className:"text-uppercase custom_dark-btn",children:m(b)})]})]})})}),(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsx)("div",{className:"slider_img-box",children:(0,i.jsx)("div",{children:(0,i.jsx)(r(),{alt:"",src:l,className:""})})})})]})})})})})})})})]})};var w=j},5675:function(e,t,a){e.exports=a(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);