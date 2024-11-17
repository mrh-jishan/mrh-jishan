(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{8894:function(e,t,n){"use strict";n.d(t,{d:function(){return useImage}});var r=n(8327),a=n(7294);function useImage(e){var{src:t,srcSet:n,onLoad:o,onError:i,crossOrigin:s,sizes:l,ignoreFallback:u}=e,[c,d]=(0,a.useState)("pending");(0,a.useEffect)(()=>{d(t?"loading":"pending")},[t]);var m=(0,a.useRef)(),f=(0,a.useCallback)(()=>{if(t){flush();var e=new Image;e.src=t,s&&(e.crossOrigin=s),n&&(e.srcset=n),l&&(e.sizes=l),e.onload=e=>{flush(),d("loaded"),null==o||o(e)},e.onerror=e=>{flush(),d("failed"),null==i||i(e)},m.current=e}},[t,s,n,l,o,i]),flush=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,r.G)(()=>{if(!u)return"loading"===c&&f(),()=>{flush()}},[c,f,u]),u?"loaded":c}},8116:function(e,t,n){"use strict";var r;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(a){var o,i,s,l=arguments,u=(o=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,s=/[^-+\dA-Z]/g,function(e,t,n,r){if(1!==l.length||"string"!==kindOf(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||0===e?e:new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var a=(t=String(u.masks[t]||t||u.masks.default)).slice(0,4);("UTC:"===a||"GMT:"===a)&&(t=t.slice(4),n=!0,"GMT:"===a&&(r=!0));var _=function(){return n?"getUTC":"get"},_d=function(){return e[_()+"Date"]()},D=function(){return e[_()+"Day"]()},_m=function(){return e[_()+"Month"]()},y=function(){return e[_()+"FullYear"]()},_H=function(){return e[_()+"Hours"]()},_M=function(){return e[_()+"Minutes"]()},_s=function(){return e[_()+"Seconds"]()},_L=function(){return e[_()+"Milliseconds"]()},_o=function(){return n?0:e.getTimezoneOffset()},_W=function(){return getWeek(e)},c={d:function(){return _d()},dd:function(){return pad(_d())},ddd:function(){return u.i18n.dayNames[D()]},DDD:function(){return getDayName({y:y(),m:_m(),d:_d(),_:_(),dayName:u.i18n.dayNames[D()],short:!0})},dddd:function(){return u.i18n.dayNames[D()+7]},DDDD:function(){return getDayName({y:y(),m:_m(),d:_d(),_:_(),dayName:u.i18n.dayNames[D()+7]})},m:function(){return _m()+1},mm:function(){return pad(_m()+1)},mmm:function(){return u.i18n.monthNames[_m()]},mmmm:function(){return u.i18n.monthNames[_m()+12]},yy:function(){return String(y()).slice(2)},yyyy:function(){return pad(y(),4)},h:function(){return _H()%12||12},hh:function(){return pad(_H()%12||12)},H:function(){return _H()},HH:function(){return pad(_H())},M:function(){return _M()},MM:function(){return pad(_M())},s:function(){return _s()},ss:function(){return pad(_s())},l:function(){return pad(_L(),3)},L:function(){return pad(Math.floor(_L()/10))},t:function(){return 12>_H()?u.i18n.timeNames[0]:u.i18n.timeNames[1]},tt:function(){return 12>_H()?u.i18n.timeNames[2]:u.i18n.timeNames[3]},T:function(){return 12>_H()?u.i18n.timeNames[4]:u.i18n.timeNames[5]},TT:function(){return 12>_H()?u.i18n.timeNames[6]:u.i18n.timeNames[7]},Z:function(){return r?"GMT":n?"UTC":(String(e).match(i)||[""]).pop().replace(s,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(_o()>0?"-":"+")+pad(100*Math.floor(Math.abs(_o())/60)+Math.abs(_o())%60,4)},p:function(){return(_o()>0?"-":"+")+pad(Math.floor(Math.abs(_o())/60),2)+":"+pad(Math.floor(Math.abs(_o())%60),2)},S:function(){return["th","st","nd","rd"][_d()%10>3?0:(_d()%100-_d()%10!=10)*_d()%10]},W:function(){return _W()},WW:function(){return pad(_W())},N:function(){return getDayOfWeek(e)}};return t.replace(o,function(e){return e in c?c[e]():e.slice(1,e.length-1)})});u.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},u.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var pad=function(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e},getDayName=function(e){var t=e.y,n=e.m,r=e.d,a=e._,o=e.dayName,i=e.short,s=void 0!==i&&i,l=new Date,u=new Date;u.setDate(u[a+"Date"]()-1);var c=new Date;return(c.setDate(c[a+"Date"]()+1),l[a+"FullYear"]()===t&&l[a+"Month"]()===n&&l[a+"Date"]()===r)?s?"Tdy":"Today":u[a+"FullYear"]()===t&&u[a+"Month"]()===n&&u[a+"Date"]()===r?s?"Ysd":"Yesterday":c[a+"FullYear"]()===t&&c[a+"Month"]()===n&&c[a+"Date"]()===r?s?"Tmw":"Tomorrow":o},getWeek=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=t.getTimezoneOffset()-n.getTimezoneOffset();return t.setHours(t.getHours()-r),1+Math.floor((t-n)/(864e5*7))},getDayOfWeek=function(e){var t=e.getDay();return 0===t&&(t=7),t},kindOf=function(e){return null===e?"null":void 0===e?"undefined":"object"!==_typeof(e)?_typeof(e):Array.isArray(e)?"array":({}).toString.call(e).slice(8,-1).toLowerCase()};void 0!==(r=(function(){return u}).call(t,n,t,e))&&(e.exports=r)}(void 0)},9937:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(3940)}])},3940:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return P},default:function(){return Post}});var r=n(5893),a=n(5079),o=n(336),i=n(8894),s=n(63),l=n(9676),u=n(1918),c=n(3793),d=n(5284),m=n(4461),f=n(3808),h=n(7294);function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=(0,s.G)((e,t)=>{var n=(0,l.yK)(),r=_extends({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},n.badge);return h.createElement(u.m$.div,_extends({ref:t},e,{className:(0,m.cx)("chakra-avatar__badge",e.className),__css:r}))});function initials(e){var[t,n]=e.split(" ");return t&&n?""+t.charAt(0)+n.charAt(0):t.charAt(0)}f.Ts&&(p.displayName="AvatarBadge");var AvatarName=e=>{var{name:t,getInitials:n}=e,r=_objectWithoutPropertiesLoose(e,["name","getInitials"]),a=(0,l.yK)();return h.createElement(u.m$.div,_extends({role:"img","aria-label":t},r,{__css:a.label}),t?null==n?void 0:n(t):null)},DefaultIcon=e=>h.createElement(u.m$.svg,_extends({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),h.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),h.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})),g={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},x=(0,s.G)((e,t)=>{var n=(0,c.j)("Avatar",e),r=(0,d.Lr)(e),{src:a,name:o,showBorder:i,borderRadius:s="full",onError:f,getInitials:p=initials,icon:x=h.createElement(DefaultIcon,null),iconLabel:v=" avatar",loading:b,children:M,borderColor:T}=r,N=_objectWithoutPropertiesLoose(r,["src","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor"]),j=_extends({borderRadius:s,borderWidth:i?"2px":void 0},g,n.container);return T&&(j.borderColor=T),h.createElement(u.m$.span,_extends({ref:t},N,{className:(0,m.cx)("chakra-avatar",e.className),__css:j}),h.createElement(l.Fo,{value:n},h.createElement(AvatarImage,{src:a,loading:b,onError:f,getInitials:p,name:o,borderRadius:s,icon:x,iconLabel:v}),M))});f.Ts&&(x.displayName="Avatar");var AvatarImage=e=>{var{src:t,onError:n,getInitials:r,name:a,borderRadius:o,loading:s,iconLabel:l,icon:c=h.createElement(DefaultIcon,null)}=e,d=(0,i.d)({src:t,onError:n});return t&&"loaded"===d?h.createElement(u.m$.img,{src:t,alt:a,className:"chakra-avatar__img",loading:s,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:o}}):a?h.createElement(AvatarName,{className:"chakra-avatar__initials",getInitials:r,name:a}):h.cloneElement(c,{role:"img","aria-label":l})};f.Ts&&(AvatarImage.displayName="AvatarImage");var v=n(4115),b=n(4003),M=n(8017),T=n(8448),N=n(5859),j=n(8093),S=n(8116),w=n.n(S),C=n(1163),E=n(3251),H=n(6034),A=n(2793),k=n(1842),I=n(8711),L=n(9755),W=n.n(L),O=n(3454),P=!0;function Post(e){let{metadata:t,publishedDate:n,source:i,toc:s}=e,[l,u]=(0,h.useState)("..."),c=(0,C.useRouter)(),{slug:d}=c.query;(0,h.useEffect)(()=>{fetch("".concat(O.env.NEXT_PUBLIC_BASE_URL,"/api/views/").concat(d)).then(e=>e.json()).then(e=>u(e.views))},[d]);let[m,f]=(0,h.useState)();(0,h.useEffect)(()=>{let handleScroll=()=>{let e;for(let t of s){let n=document.getElementById(t.title);if(n){let r=n.getBoundingClientRect();if(r.top<window.innerHeight/2)e=t.title;else break}}f(e)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[s]);let{isCommentsLoading:p}=(0,I.Z)("comments",t.title);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k.Z,{slug:d,metadata:t,publishedDate:n}),(0,r.jsxs)(E.Z,{children:[(0,r.jsxs)(a.Kq,{children:[(0,r.jsx)(a.Kq,{mx:"auto",mt:"73px",border:"1px",borderColor:{base:"#333",md:"borderColor"},borderRadius:"10px",children:(0,r.jsx)(W(),{width:1100,height:500,objectFit:"cover",style:{borderRadius:"10px",objectFit:"cover"},alt:"",priority:!0,src:t.frontmatter.image})}),(0,r.jsxs)(a.Kq,{pt:4,children:[(0,r.jsx)(o.X,{as:"h1",color:"displayColor",fontSize:["3xl","3xl","5xl","5xl"],children:t.title}),(0,r.jsxs)(a.Ug,{alignItems:"center",justifyContent:"space-between",direction:{base:"column",md:"row"},py:4,children:[(0,r.jsxs)(a.Kq,{alignItems:"center",isInline:!0,children:[(0,r.jsx)(x,{border:"1px solid textPrimary",name:"Robiul Hassan",size:"xs",src:"https://avatars.githubusercontent.com/u/16862701?v=4"}),(0,r.jsxs)(v.x,{color:"textPrimary",fontSize:["xs","xs","sm","sm"],children:["Robiul Hassan /"," ",w()(Date.parse(n),"mmmm d, yyyy")]})]}),(0,r.jsx)(a.Kq,{children:(0,r.jsxs)(v.x,{color:"textSecondary",fontSize:["xs","xs","sm","sm"],children:[t.readingTime," • ",l," views"]})})]})]}),(0,r.jsx)(b.i,{h:"0.5px",my:4,bg:"textSecondary"})]}),(0,r.jsxs)(a.Ug,{alignItems:"start",pt:"23px",spacing:"36px",children:[(0,r.jsx)(a.Kq,{w:{base:"100%",md:"50rem"},children:(0,r.jsx)(A.Z,{children:(0,r.jsx)(j.R,{...i,components:H.Z})})}),(0,r.jsxs)(a.Kq,{pos:"sticky",top:"6rem",display:{base:"none",md:"flex"},w:"250px",h:"500px",children:[(0,r.jsx)(v.x,{color:"displayColor",fontSize:"xl",fontWeight:"semibold",children:"Table of Contents"}),s.map(e=>(0,r.jsx)(M.xu,{pl:"".concat(1*e.level,"rem"),children:(0,r.jsx)(v.x,{color:e.title===m?"activeColor":"textSecondary",fontSize:["sm","sm","md","md"],fontWeight:e.title===m?"semibold":"normal",children:(0,r.jsx)("a",{href:"#".concat(e.title),children:e.title})},e.id)},e.title))]})]}),(0,r.jsxs)(a.Kq,{w:"100%",mt:"36px",mb:"15vh",children:[p&&(0,r.jsxs)(T.M,{flexDir:"column",pt:8,children:[(0,r.jsx)(N.$,{w:"56px",h:"56px",color:"#058d92",thickness:"5px"}),(0,r.jsx)(v.x,{pt:2,color:"textSecondary",fontSize:"sm",children:"Loading comments..."})]}),(0,r.jsx)(a.Kq,{opacity:p?0:1,children:(0,r.jsx)("div",{id:"comments"})})]})]})]})}}},function(e){e.O(0,[310,947,116,79,774,888,179],function(){return e(e.s=9937)}),_N_E=e.O()}]);