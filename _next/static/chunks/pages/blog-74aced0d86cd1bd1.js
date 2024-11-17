(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{8116:function(e,t,n){"use strict";var r;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(o){var i,a,s,c=arguments,d=(i=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,a=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,s=/[^-+\dA-Z]/g,function(e,t,n,r){if(1!==c.length||"string"!==kindOf(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||0===e?e:new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var o=(t=String(d.masks[t]||t||d.masks.default)).slice(0,4);("UTC:"===o||"GMT:"===o)&&(t=t.slice(4),n=!0,"GMT:"===o&&(r=!0));var _=function(){return n?"getUTC":"get"},_d=function(){return e[_()+"Date"]()},D=function(){return e[_()+"Day"]()},_m=function(){return e[_()+"Month"]()},y=function(){return e[_()+"FullYear"]()},_H=function(){return e[_()+"Hours"]()},_M=function(){return e[_()+"Minutes"]()},_s=function(){return e[_()+"Seconds"]()},_L=function(){return e[_()+"Milliseconds"]()},_o=function(){return n?0:e.getTimezoneOffset()},_W=function(){return getWeek(e)},u={d:function(){return _d()},dd:function(){return pad(_d())},ddd:function(){return d.i18n.dayNames[D()]},DDD:function(){return getDayName({y:y(),m:_m(),d:_d(),_:_(),dayName:d.i18n.dayNames[D()],short:!0})},dddd:function(){return d.i18n.dayNames[D()+7]},DDDD:function(){return getDayName({y:y(),m:_m(),d:_d(),_:_(),dayName:d.i18n.dayNames[D()+7]})},m:function(){return _m()+1},mm:function(){return pad(_m()+1)},mmm:function(){return d.i18n.monthNames[_m()]},mmmm:function(){return d.i18n.monthNames[_m()+12]},yy:function(){return String(y()).slice(2)},yyyy:function(){return pad(y(),4)},h:function(){return _H()%12||12},hh:function(){return pad(_H()%12||12)},H:function(){return _H()},HH:function(){return pad(_H())},M:function(){return _M()},MM:function(){return pad(_M())},s:function(){return _s()},ss:function(){return pad(_s())},l:function(){return pad(_L(),3)},L:function(){return pad(Math.floor(_L()/10))},t:function(){return 12>_H()?d.i18n.timeNames[0]:d.i18n.timeNames[1]},tt:function(){return 12>_H()?d.i18n.timeNames[2]:d.i18n.timeNames[3]},T:function(){return 12>_H()?d.i18n.timeNames[4]:d.i18n.timeNames[5]},TT:function(){return 12>_H()?d.i18n.timeNames[6]:d.i18n.timeNames[7]},Z:function(){return r?"GMT":n?"UTC":(String(e).match(a)||[""]).pop().replace(s,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(_o()>0?"-":"+")+pad(100*Math.floor(Math.abs(_o())/60)+Math.abs(_o())%60,4)},p:function(){return(_o()>0?"-":"+")+pad(Math.floor(Math.abs(_o())/60),2)+":"+pad(Math.floor(Math.abs(_o())%60),2)},S:function(){return["th","st","nd","rd"][_d()%10>3?0:(_d()%100-_d()%10!=10)*_d()%10]},W:function(){return _W()},WW:function(){return pad(_W())},N:function(){return getDayOfWeek(e)}};return t.replace(i,function(e){return e in u?u[e]():e.slice(1,e.length-1)})});d.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},d.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var pad=function(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e},getDayName=function(e){var t=e.y,n=e.m,r=e.d,o=e._,i=e.dayName,a=e.short,s=void 0!==a&&a,c=new Date,d=new Date;d.setDate(d[o+"Date"]()-1);var u=new Date;return(u.setDate(u[o+"Date"]()+1),c[o+"FullYear"]()===t&&c[o+"Month"]()===n&&c[o+"Date"]()===r)?s?"Tdy":"Today":d[o+"FullYear"]()===t&&d[o+"Month"]()===n&&d[o+"Date"]()===r?s?"Ysd":"Yesterday":u[o+"FullYear"]()===t&&u[o+"Month"]()===n&&u[o+"Date"]()===r?s?"Tmw":"Tomorrow":i},getWeek=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=t.getTimezoneOffset()-n.getTimezoneOffset();return t.setHours(t.getHours()-r),1+Math.floor((t-n)/(864e5*7))},getDayOfWeek=function(e){var t=e.getDay();return 0===t&&(t=7),t},kindOf=function(e){return null===e?"null":void 0===e?"undefined":"object"!==_typeof(e)?_typeof(e):Array.isArray(e)?"array":({}).toString.call(e).slice(8,-1).toLowerCase()};void 0!==(r=(function(){return d}).call(t,n,t,e))&&(e.exports=r)}(void 0)},7286:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(5372)}])},3251:function(e,t,n){"use strict";n.d(t,{Z:function(){return components_Container}});var r=n(5893),o=n(8017),i=n(4096),a=n(5079),s=n(4115),c=n(980),d=n(7294),u=n(2729),l=n(4126),m=n(7383),f=n(1452),p=n(5105),h=n(5715),x=n(1664),g=n.n(x),j=n(4632);function _templateObject(){let e=(0,u._)(["\n    color: #8f9094;\n    font-weight: 600;\n  "]);return _templateObject=function(){return e},e}function Navbar(e){let{enableTransition:t}=e,{isOpen:n,onClose:c}=(0,l.q)(),u=(0,d.useRef)(),x=j.Z.span(_templateObject());return(0,r.jsxs)(o.xu,{pos:"sticky",zIndex:99,children:[(0,r.jsx)(h.M,{direction:"top",bg:"black",transition:t?{enter:{duration:.5,delay:.01}}:{enter:{duration:0,delay:0}},in:!0,reverse:!0,children:(0,r.jsxs)(i.k,{as:"nav",align:"center",justify:"space-between",direction:"row",w:{base:"100%",lg:"75rem"},mx:"auto",px:"22px",py:"3",bg:"black",borderBottom:"0.5px solid #1e2029",children:[(0,r.jsx)(g(),{passHref:!0,href:"/",children:(0,r.jsxs)(s.x,{color:"displayColor",fontSize:"32px",fontWeight:"bold",cursor:"pointer",children:[(0,r.jsx)(x,{children:"{"}),"RH",(0,r.jsx)(x,{children:"}"})]})}),(0,r.jsxs)(o.xu,{mr:7,color:"displayColor",children:[(0,r.jsx)(g(),{passHref:!0,href:"/",children:(0,r.jsx)(p.z,{as:"a",p:"4",fontSize:"16px",variant:"ghost",children:"Home"})}),(0,r.jsx)(g(),{passHref:!0,href:"/projects",children:(0,r.jsx)(p.z,{as:"a",p:"4",fontSize:"16px",variant:"ghost",children:"Projects"})}),(0,r.jsx)(g(),{passHref:!0,href:"/blog",children:(0,r.jsx)(p.z,{as:"a",p:"4",fontSize:"16px",variant:"ghost",children:"Blog"})})," "]})]})}),(0,r.jsx)(()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(m.dy,{initialFocusRef:u,isOpen:n,onClose:c,placement:"right",children:[(0,r.jsx)(f.ZA,{}),(0,r.jsxs)(m.sc,{bgColor:"secondary",children:[(0,r.jsx)(f.ol,{}),(0,r.jsxs)(f.xB,{borderBottomWidth:"1px",children:[(0,r.jsx)(x,{children:"{"}),"RH",(0,r.jsx)(x,{children:"}"})]}),(0,r.jsx)(f.fe,{children:(0,r.jsxs)(a.Kq,{spacing:"24px",children:[(0,r.jsx)(g(),{passHref:!0,href:"/",children:(0,r.jsx)(p.z,{as:"a",fontSize:"16px",variant:"ghost",children:"Home"})}),(0,r.jsx)(g(),{passHref:!0,href:"/projects",children:(0,r.jsx)(p.z,{as:"a",fontSize:"16px",variant:"ghost",children:"Projects"})}),(0,r.jsx)(g(),{passHref:!0,href:"/blog",children:(0,r.jsx)(p.z,{as:"a",fontSize:"16px",variant:"ghost",children:"Blog"})})]})})]})]})}),{})]})}var components_Container=e=>{let{enableTransition:t,children:n}=e,[u,l]=(0,d.useState)(!1);if((0,d.useEffect)(()=>{l(!0)},[]),u)return(0,r.jsxs)(o.xu,{w:{base:"100%",md:"70rem"},mx:{base:"0",md:"auto"},px:{base:"22px",lg:0},py:4,transition:"0.4s",children:[(0,r.jsx)(Navbar,{enableTransition:t}),(0,r.jsx)(i.k,{as:"main",justify:"center",direction:"column",children:n}),(0,r.jsx)(a.Kq,{alignItems:"center",mt:10,mb:5,children:(0,r.jsxs)(s.x,{fontSize:"sm",textAlign:"center",children:["Designed and Developed by Robiul Hassan.",(0,r.jsx)("br",{}),"Built with"," ",(0,r.jsx)(c.chakra.span,{color:"button1",fontWeight:"semibold",children:"Next.js"})," ","&"," ",(0,r.jsx)(c.chakra.span,{color:"button1",fontWeight:"semibold",children:"Chakra UI"}),". Hosted on"," ",(0,r.jsx)(c.chakra.span,{color:"button1",fontWeight:"semibold",children:"Vercel"}),"."]})})]})}},5372:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return S},default:function(){return Index}});var r=n(5893),o=n(7294),i=n(5079),a=n(336),s=n(4115),c=n(4003),d=n(8017),u=n(4096),l=n(9008),m=n.n(l),f=n(1664),p=n.n(f),h=n(3251),x=n(9583),g=n(8488),j=n(3955),b=n(7812),M=n(8116),T=n.n(M),S=!0;function Index(e){let{posts:t}=e,[n,l]=(0,o.useState)("");return(0,r.jsxs)(h.Z,{children:[(0,r.jsxs)(m(),{children:[(0,r.jsx)("title",{children:"Blog - Robiul Hassan"}),(0,r.jsx)("meta",{content:"Blog - Robiul Hassan",name:"title"}),(0,r.jsx)("meta",{content:"Writings on programming, tutorials, and my experiences.",name:"description"}),(0,r.jsx)("meta",{content:"website",property:"og:type"}),(0,r.jsx)("meta",{content:"https://abdulrahman.id/blog",property:"og:url"}),(0,r.jsx)("meta",{content:"Blog - Robiul Hassan",property:"og:title"}),(0,r.jsx)("meta",{content:"Writings on programming, tutorials, and my experiences.",property:"og:description"}),(0,r.jsx)("meta",{content:"https://imagizer.imageshack.com/a/img924/6408/mSltwm.png",property:"og:image"}),(0,r.jsx)("meta",{content:"summary_large_image",property:"twitter:card"}),(0,r.jsx)("meta",{content:"https://abdulrahman.id/",property:"twitter:url"}),(0,r.jsx)("meta",{content:"Blog - Robiul Hassan",property:"twitter:title"}),(0,r.jsx)("meta",{content:"Writings on programming, tutorials, and my experiences.",property:"twitter:description"}),(0,r.jsx)("meta",{content:"https://imagizer.imageshack.com/a/img923/7612/A5tDeP.png",property:"twitter:image"})]}),(0,r.jsxs)(i.Kq,{as:"main",alignItems:"flex-start",justifyContent:"center",my:{base:"15vh",md:"16vh"},spacing:5,children:[(0,r.jsx)(a.X,{color:"displayColor",fontSize:{base:"4xl",md:"6xl"},children:"Blog"}),(0,r.jsx)(s.x,{fontSize:{base:"14px",md:"16px"},children:"This is where I share my writings on programming, tutorials, and my experiences."}),(0,r.jsxs)(g.B,{maxW:"400px",children:[(0,r.jsx)(j.x,{pointerEvents:"none",children:(0,r.jsx)(x.U41,{})}),(0,r.jsx)(b.I,{placeholder:"Search articles",type:"text",value:n,onChange:e=>l(e.target.value)})]}),(0,r.jsx)(c.i,{}),(0,r.jsx)(i.Kq,{spacing:5,children:t.filter(e=>e.post.title.toLowerCase().includes(n.toLowerCase())).map(e=>{let{post:t}=e;return(0,r.jsxs)(i.Kq,{alignItems:"flex-start",justifyContent:"flex-start",direction:"row",children:[(0,r.jsxs)(s.x,{display:"block",w:100,color:"textSecondary",textAlign:"right",children:[T()(Date.parse(t.frontmatter.date),"mmm d yyyy"),(0,r.jsx)("br",{})," ",(0,r.jsx)(s.x,{fontSize:"sm",textAlign:"right",children:t.frontmatter.readingTime})]}),(0,r.jsxs)(s.x,{display:"block",color:"textSecondary",fontSize:"sm",children:[T()(Date.parse(t.frontmatter.date),"mmm d yyyy")," ",(0,r.jsx)(d.xu,{as:"span",fontSize:"xs",children:"•"})," ",t.frontmatter.readingTime]}),(0,r.jsx)(u.k,{direction:"column",px:"10",children:(0,r.jsxs)(p(),{href:"/blog/"+t.frontmatter.slug,children:[(0,r.jsx)(s.x,{color:"displayColor",fontSize:"xl",fontWeight:"bold",cursor:"pointer",children:t.title}),(0,r.jsx)(s.x,{color:"textSecondary",children:t.frontmatter.summary}),(0,r.jsx)(s.x,{color:"button1",cursor:"pointer",children:"Learn more →"})]})})]},t.frontmatter.slug)})})]})]})}}},function(e){e.O(0,[445,310,439,774,888,179],function(){return e(e.s=7286)}),_N_E=e.O()}]);