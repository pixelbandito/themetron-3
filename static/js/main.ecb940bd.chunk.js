(this["webpackJsonpthemetron-3"]=this["webpackJsonpthemetron-3"]||[]).push([[0],{10:function(e,t,a){e.exports={App:"App_App__16ZpL",form:"App_form__30Y9M",example:"App_example__1C_qW"}},11:function(e,t,a){e.exports={Control:"Control_Control__3EPTo",label:"Control_label__3Ujpe",input:"Control_input__2uiDw"}},12:function(e,t,a){e.exports={ThemeForm:"ThemeForm_ThemeForm__SOs96",swatches:"ThemeForm_swatches__3cWYc",swatch:"ThemeForm_swatch__dduV2"}},19:function(e,t,a){e.exports={Button:"Button_Button__1Isrx"}},23:function(e,t,a){e.exports={Swatch:"Swatch_Swatch__Hae-f"}},25:function(e,t,a){e.exports={GridOverlay:"GridOverlay_GridOverlay__38eQu"}},27:function(e,t,a){e.exports=a(47)},32:function(e,t,a){},33:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(18),c=a.n(r),l=(a(32),a(1)),i=a(8),s=(a(33),a(10)),u=a.n(s),b=a(4),d=a(3),m=a(5),h=a.n(m),f=function(e){var t=e.hexA,a=e.hexB,o=e.luminanceA,n=e.luminanceB,r=[o=o||0===o?o:v(t),n=n||0===n?n:v(a)].sort(),c=Object(l.a)(r,2),i=c[0];return((c[1]+.05)/(i+.05)).toFixed(2)},g=function(e){var t=e.luminance,a=e.contrastRatio;return t*a+a/20-.05},p=function(e){return(e.luminance+.05)/e.contrastRatio-.05},v=function(e){var t=h.a.hex.rgb(e).map((function(e,t){var a=e/255;return a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4)}));return.2126*t[0]+.7152*t[1]+.0722*t[2]},C=function e(t){var a,o=t.attempt,n=void 0===o?0:o,r=t.baseHex,c=t.contrastRatio,l=t.originalContrastRatio,i=t.direction,s=t.hex,u=t.maxAttempts,b=void 0===u?10:u;l=l||c,i?"asc"===i?a=g({contrastRatio:c,luminance:v(r)}):"desc"===i&&(a=p({contrastRatio:c,luminance:v(r)})):a=v(r)>.5?p({contrastRatio:c,luminance:v(r)}):g({contrastRatio:c,luminance:v(r)});var d=function e(t){var a=t.attempt,o=void 0===a?0:a,n=t.hex,r=t.initHsl,c=t.luminance,l=t.maxAttempts,i=void 0===l?10:l,s=v(n);if(s===c||o>=i)return n;var u=(s>c?-100:100)/Math.pow(2,o+1),b=h.a.hex.hsl(n),d=void 0!==r?r:b,m=w({hsl:d,l:Math.max(0,Math.min(b[2]+u,100))});return"#".concat(h.a.hsl.hex(m))===n?n:e({attempt:o+1,hex:"#".concat(h.a.hsl.hex(m)),initHsl:d,luminance:c,maxAttempts:i})}({hex:s,luminance:a,maxAttempts:b});return f({hexA:d,hexB:r})>=l||n>b?d:e({attempt:n+1,baseHex:r,contrastRatio:c+.05,originalContrastRatio:l,direction:i,hex:s,maxAttempts:b})},w=function(e){var t=Object(l.a)(e.hsl,3),a=t[0],o=t[1],n=t[2],r=e.h,c=e.s,i=e.l;return["number"===typeof r?r:a,"number"===typeof c?c:o,"number"===typeof i?i:n]},O=function(e){var t;try{t=h.a.keyword.hex(e).toLowerCase()}catch(a){t="#"===e[0]?e.substr(1):e}return"#".concat(t)||!1};window.pxbColors={colorConvert:h.a,getContrastRatio:f,getHexFromHexOrName:O,getLuminance:v,setColorByContrastWithHsl:C,setHsl:w};var k=function(e){var t=e.baseColors,a=[7,4.5,3];return Object.entries(t).reduce((function(e,o){var n=Object(l.a)(o,2),r=n[0],c=n[1],i=O(c),s=O(t.white),u=O(t.black);return e[r]={},e[r].base=i,["white","black"].indexOf(r)>=0||(e[r]["lite-bg"]=C({hex:i,baseHex:s,contrastRatio:1.1}),a.forEach((function(t,a){e[r]["lite-".concat(a+1)]=C({hex:i,baseHex:e[r]["lite-bg"],contrastRatio:t,direction:"desc"})})),e[r]["dark-bg"]=C({hex:i,baseHex:u,contrastRatio:1.1}),a.forEach((function(t,a){e[r]["dark-".concat(a+1)]=C({hex:i,baseHex:e[r]["dark-bg"],contrastRatio:t,direction:"asc"})}))),e}),{})},j=function(e){var t=e.colors,a=e.fonts,o=e.spacing;return{borderWidth:1,roundness:.2,shine:1,sizes:{sm:{fontSize:a.sizes.sm,paddingH:o.sm,paddingV:o.xs},md:{fontSize:a.sizes.md,paddingH:o.md,paddingV:o.sm},lg:{fontSize:a.sizes.lg,paddingH:o.md,paddingV:o.sm}},variants:{default:{backgroundColor:t.neutral["lite-2"],color:t.white.base,hover:{backgroundColor:t.neutral["lite-1"],color:t.white.base},focus:{backgroundColor:t.neutral["lite-1"],color:t.white.base},active:{backgroundColor:t.neutral["lite-1"],color:t.white.base},disabled:{backgroundColor:t.neutral["lite-3"],color:t.white.base}},primary:{backgroundColor:t.primary["lite-2"],color:t.white.base,hover:{backgroundColor:t.primary["lite-1"],color:t.white.base},focus:{backgroundColor:t.primary["lite-1"],color:t.white.base},active:{backgroundColor:t.primary["lite-1"],color:t.white.base},disabled:{backgroundColor:t.primary["lite-3"],color:t.white.base}},success:{backgroundColor:t.success["lite-2"],color:t.white.base,hover:{backgroundColor:t.success["lite-1"],color:t.white.base},focus:{backgroundColor:t.success["lite-1"],color:t.white.base},active:{backgroundColor:t.success["lite-1"],color:t.white.base},disabled:{backgroundColor:t.success["lite-3"],color:t.white.base}},info:{backgroundColor:t.info["lite-2"],color:t.white.base,hover:{backgroundColor:t.info["lite-1"],color:t.white.base},focus:{backgroundColor:t.info["lite-1"],color:t.white.base},active:{backgroundColor:t.info["lite-1"],color:t.white.base},disabled:{backgroundColor:t.info["lite-3"],color:t.white.base}},neutral:{backgroundColor:t.neutral["lite-2"],color:t.white.base,hover:{backgroundColor:t.neutral["lite-1"],color:t.white.base},focus:{backgroundColor:t.neutral["lite-1"],color:t.white.base},active:{backgroundColor:t.neutral["lite-1"],color:t.white.base},disabled:{backgroundColor:t.neutral["lite-3"],color:t.white.base}},warning:{backgroundColor:t.warning["lite-2"],color:t.white.base,hover:{backgroundColor:t.warning["lite-1"],color:t.white.base},focus:{backgroundColor:t.warning["lite-1"],color:t.white.base},active:{backgroundColor:t.warning["lite-1"],color:t.white.base},disabled:{backgroundColor:t.warning["lite-3"],color:t.white.base}},danger:{backgroundColor:t.danger["lite-2"],color:t.white.base,hover:{backgroundColor:t.danger["lite-1"],color:t.white.base},focus:{backgroundColor:t.danger["lite-1"],color:t.white.base},active:{backgroundColor:t.danger["lite-1"],color:t.white.base},disabled:{backgroundColor:t.danger["lite-3"],color:t.white.base}}}}},x=function(e){var t=["sm","xs"],a=["lg","xl"];return e<0?-1*e<=t.length?t[-1*e-1]:"".concat(-1*e-1).concat(t[t.length-1]):e>0?e<=a.length?a[e-1]:"".concat(e-1).concat(a[a.length-1]):"md"},y=function(e){var t,a=e.count,o=(e.customSizes,e.lgCount),n=void 0===o?0:o,r=e.mdSize,c=void 0===r?null:r,l=e.smCount,i=void 0===l?0:l,s=[{label:"md",size:c}];if(a){if(a<1)throw new Error("Count must be at least 1");t=Math.floor(a/2),s=new Array(a).fill(null).map((function(e,a){return a-t}))}else{if(!(n>=0&&i>=0))throw new Error("You must define `count` _or_ `lgCount`/`smCount`");t=i,s=new Array(1+n+i).fill(null).map((function(e,a){return a-t}))}return(s=s.map((function(e){return{label:x(e),size:c*Math.pow(2,e)}}))).reduce((function(e,t){return Object(d.a)({},e,Object(b.a)({},t.label,t.size))}),{})},E=y({count:5,mdSize:16}),_={white:"white",black:"#16161d",primary:"blue",success:"green",info:"lightblue",neutral:"#16161d",warning:"yellow",danger:"red"},z=k({baseColors:_}),N=function(e){var t=e.colors;return{backgroundColor:t.white,color:t.black,elevation:1,inverted:!1,roundness:0,shine:0}}({colors:z}),S={sansSerif:"sans-serif",serif:"serif",sizes:{xs:10,sm:12,md:16,lg:24,xl:32},weights:{normal:400,bold:700}},A={baseColors:_,buttons:j({colors:z,fonts:S,spacing:E}),colors:z,fonts:S,shared:N,spacing:E},R=a(7),H=a.n(R),B=a(49),T=a(9),F=a(2),M=a.n(F),I=(M.a.oneOfType([M.a.func,M.a.string,M.a.shape({$$typeof:M.a.symbol,render:M.a.func}),M.a.arrayOf(M.a.oneOfType([M.a.func,M.a.string,M.a.shape({$$typeof:M.a.symbol,render:M.a.func})]))]),a(19)),L=a.n(I),W=function(e){var t=e.outline,a=void 0!==t&&t,o=e.size,n=void 0===o?"md":o,r=e.theme,c=e.variant,l=void 0===c?"default":c,i=r.buttons,s=r.spacing,u=i.borderWidth,b=i.roundness,d=i.sizes,m=i.variants[l],h=m.backgroundColor,f=m.color,g=m.hover,p=d[n],v=p.fontSize,C=p.paddingH,w=p.paddingV,O=function(e){var t=e.size,a=e.spacing,o=1.4*t,n=Math.floor(o/a.xs)*a.xs,r=Math.ceil(o/a.xs)*a.xs,c=Math.abs(o-n)<=Math.abs(o-r)?n:r;return{px:c,ratio:c/t}}({size:v,spacing:s}),k=O.ratio;return{color:a?h:f,backgroundColor:a?f:h,borderColor:h,borderWidth:u,borderStyle:"solid",borderRadius:b*(O.px/2+w),paddingBottom:w-u,paddingLeft:C-u,paddingRight:C-u,paddingTop:w-u,fontSize:v,lineHeight:k,":hover":{color:a?g.backgroundColor:g.color,backgroundColor:a?g.color:g.backgroundColor,borderColor:g.backgroundColor}}},P=function(e){var t=e.className,a=(e.inverted,e.outline,e.tag),o=Object(T.a)(e,["className","inverted","outline","tag"]);return n.a.createElement(a,Object.assign({},o,{className:H()(t,L.a.Button)}))};P.defaultProps={className:"",tag:"button"};var J=Object(i.c)(P)((function(e){var t=e.outline,a=e.size,o=e.theme,n=e.variant;return W({outline:t,size:a,theme:o,variant:n})})),V=a(23),$=a.n(V),G=function(e){var t=e.backgroundColor,a=e.className,o=e.color,r=Object(T.a)(e,["backgroundColor","className","color"]);return n.a.createElement("div",Object.assign({},r,{className:H()($.a.Swatch,a),style:{backgroundColor:t,color:o}}))};G.defaultProps={backgroundColor:"#fff",className:"",color:"#000"};var Y=G,Q=a(11),U=a.n(Q),q=function(e){var t=e.className,a=e.id,o=e.label,r=e.onChange,c=e.type,l=e.value,i=Object(T.a)(e,["className","id","label","onChange","type","value"]);return n.a.createElement("div",Object.assign({},i,{className:H()(t,U.a.Control)}),n.a.createElement("label",{className:U.a.label,htmlFor:a},o||a),n.a.createElement("input",{className:U.a.input,id:a,onChange:r,type:c,value:l}))};q.defaultProps={className:"",label:"",type:"text"};var D=q,Z=a(12),K=a.n(Z),X=function(e){var t;try{if(t=parseInt(e,10),isNaN(t))throw new Error("not a number")}catch(a){t=null}return t},ee=function(e){var t=e.className,a=e.theme,r=e.onChangeTheme,c=e.onApplyTheme,i=Object(o.useState)(a.spacing.md),s=Object(l.a)(i,2),u=s[0],m=s[1],f=Object(o.useState)(a),g=Object(l.a)(f,2),p=g[0],C=g[1],w=Object(o.useRef)();Object(o.useEffect)((function(){r(p)}),[r,p]);var O=Object(o.useCallback)((function(){c(p)}),[c,p]),x=Object(o.useCallback)((function(){C(a)}),[a]),E=Object(o.useMemo)((function(){return Object.entries(p.colors).reduce((function(e,t){var a,o=Object(l.a)(t,2),n=o[0],r=o[1].base;try{a=h.a.keyword.hex(r).toLowerCase()}catch(c){a="#"===r[0]?r.substr(1):r}return Object(d.a)({},e,Object(b.a)({},n,"#".concat(a)))}),{})}),[p.colors]),_=Object(o.useState)(E),z=Object(l.a)(_,2),N=z[0],S=z[1];Object(o.useEffect)((function(){S(E)}),[E]);var A=Object(o.useCallback)((function(e){var t=e.value,a=e.key,o=Object(d.a)({},N,Object(b.a)({},a,t)),n=k({baseColors:o}),r=Object(d.a)({},p,{colors:n,buttons:j(Object(d.a)({},p,{colors:n}))});C(r)}),[N,p]),R=Object(B.a)(A,100),T=Object(o.useState)(Object.keys(a.fonts.sizes).length),F=Object(l.a)(T,2),M=F[0],I=F[1],L=Object(o.useState)(a.fonts.sizes),W=Object(l.a)(L,2),P=W[0],V=W[1],$=Object(o.useCallback)((function(e){var t=e.event,a=e.key,o=Object(d.a)({},P,Object(b.a)({},a,X(t.target.value))),n=Object(d.a)({},p.fonts,{sizes:o}),r=Object(d.a)({},p,{buttons:j(Object(d.a)({},p,{fonts:n})),fonts:n});V(o),C(r)}),[P,p]),G=Object(o.useCallback)((function(e){var t=X(e.target.value),a=y({count:t});a=Object.keys(a).reduce((function(e,t){return Object(d.a)({},e,Object(b.a)({},t,P[t]||Object.values(P)[0]))}),{}),V(a),I(t)}),[P]),Q=Object(o.useCallback)((function(e){var t=X(e.target.value),a=y({count:5,mdSize:t});m(t),C(Object(d.a)({},p,{buttons:j({colors:p.colors,fonts:p.fonts,spacing:a}),spacing:a}))}),[p]),U=Object(o.useCallback)((function(){w.current&&w.current.click()}),[]),q=Object(o.useCallback)((function(e){var t=new FileReader;t.readAsText(e.target.files[0]),t.onload=function(e){try{C(JSON.parse(e.target.result))}catch(e){console.warn("Couldn't read theme file.",e.message)}}}),[]);return n.a.createElement("form",{className:H()(t,K.a.ThemeForm)},n.a.createElement(D,{id:"mdSize",onChange:Q,type:"number",value:"".concat(u)}),n.a.createElement("section",null,n.a.createElement("h4",null,"Semantic colors"),Object.entries(N).map((function(e,t){var a=Object(l.a)(e,2),o=a[0],r=a[1];return n.a.createElement("div",{key:o},n.a.createElement(D,{id:"semanticColor-".concat(o),key:o,label:o,onChange:function(e){return R({value:e.target.value,key:o})},type:"color",value:"".concat(r)}),n.a.createElement("div",{className:K.a.swatches},Object.entries(p.colors[o]).sort((function(e,t){var a=Object(l.a)(e,2),o=a[0],n=a[1],r=Object(l.a)(t,2),c=r[0],i=r[1];return c.charCodeAt(0)+v(i)-o.charCodeAt(0)-v(n)})).filter((function(e){return"base"!==Object(l.a)(e,1)[0]})).map((function(e,t){var a=Object(l.a)(e,2),r=a[0],c=a[1];return n.a.createElement(Y,{key:r,className:K.a.swatch,color:v(c)>.5?p.colors[o]["dark-bg"]:p.colors[o]["lite-bg"],backgroundColor:c},r)}))))}))),n.a.createElement(D,{id:"fontSizesCount",onChange:G,type:"number",value:"".concat(M)}),n.a.createElement("section",null,n.a.createElement("h4",null,"Font sizes"),Object.entries(P).map((function(e){var t=Object(l.a)(e,2),a=t[0],o=t[1];return n.a.createElement(D,{id:"fontSize-".concat(a),key:a,label:a,onChange:function(e){return $({event:e,key:a})},type:"number",value:"".concat(o)})}))),n.a.createElement("div",null,n.a.createElement(J,{outline:!0,onClick:x,type:"button"},"Revert")," ",n.a.createElement(J,{onClick:O,type:"button",variant:"primary"},"Apply"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(J,{download:"theme.json",href:"data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(p))),outline:!0,size:"sm",style:{display:"inline-block"},tag:"a"},"Export JSON")," ",n.a.createElement("input",{onChange:q,ref:w,style:{fontSize:"0",height:"0",left:"-100vw",opacity:"0",position:"absolute",top:"-100vh",width:"0",zIndex:"-1"},tabIndex:"-1",type:"file"}),n.a.createElement(J,{onClick:U,outline:!0,size:"sm",type:"button"},"Import JSON ...")))};ee.defaultProps={className:""};var te=ee,ae=a(6),oe=a.n(ae),ne=function(){Object(o.useContext)(i.a);return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{id:"heading"},"Heading"),n.a.createElement(J,{size:"sm"},"Button")," ",n.a.createElement(J,null,"Button")," ",n.a.createElement(J,{size:"lg"},"Button")," ",n.a.createElement("input",{value:"Input",onChange:function(){}}),n.a.createElement("p",null,"Paragraph"),n.a.createElement("a",{href:"#heading"},"Link"),n.a.createElement("div",{className:oe.a.card},n.a.createElement("div",{className:oe.a.cardHead},"Card head"),n.a.createElement("div",{className:oe.a.cardBody},"Card body"),n.a.createElement("div",{className:oe.a.cardFoot},"Card foot")))},re=a(15),ce=a.n(re),le=a(25),ie=a.n(le),se=function(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(o.useCallback)((function(){r(!a)}),[a]);return Object(o.useEffect)((function(){return ce.a.bind(".",c),function(){ce.a.unbind(".",c)}}),[c]),a?n.a.createElement("div",{className:ie.a.GridOverlay}):null};se.defaultProps={className:""};var ue=se;var be=function(){var e=Object(o.useState)(A),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(o.useState)(a),s=Object(l.a)(c,2),b=s[0],d=s[1],m=Object(o.useCallback)((function(e){d(e)}),[]),h=Object(o.useCallback)((function(e){r(b)}),[b]);return n.a.createElement(i.b,{theme:a},n.a.createElement("div",{className:"App ".concat(u.a.App)},n.a.createElement("div",{className:u.a.form},n.a.createElement(te,{theme:a,onChangeTheme:m,onApplyTheme:h})),n.a.createElement("div",{className:u.a.example},n.a.createElement(i.b,{theme:b},n.a.createElement(ne,null)))),n.a.createElement(ue,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports={subtitle:"Examples_subtitle__L0_CV",swatch:"Examples_swatch__3QSmL"}}},[[27,1,2]]]);
//# sourceMappingURL=main.ecb940bd.chunk.js.map