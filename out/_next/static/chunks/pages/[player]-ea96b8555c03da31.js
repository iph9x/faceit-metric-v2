(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56],{2574:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[player]",function(){return a(1897)}])},1897:function(e,s,a){"use strict";a.r(s),a.d(s,{__N_SSP:function(){return E},default:function(){return S}});var t=a(5893),n=a(7294),r=a(5617),i=a(6137),l=a(9008),c=a(4184),m=a.n(c),d=function(e){var s=e.kills,a=e.rounds,t=e.deaths,n=e.triple,r=e.quadro,i=e.penta;return((s/a/.679+.7*((a-t)/a/.317)+(1.5*(s-3*n-4*r-5*i)+9*n+16*r+25*i)/a/1.277)/2.7).toFixed(2)},u=a(1444),o=a.n(u);function h(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}var v=function(e){var s=e.nickname,a=e.isFetching,n=e.lifetime,r=e.matches,i=e.error,c=e.maps,u=e.minElo,v=e.maxElo,N=e.matchesCount,p=e.isGeneralStats,x=e.calcedStats;return a?(0,t.jsx)("div",{style:{fontSize:"55px"},children:"...Loading"}):i?(0,t.jsx)("div",{children:i}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.default,{children:[(0,t.jsxs)("title",{children:["FACEIT-METRIC -",s]}),(0,t.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)("div",{className:o().container,children:[(0,t.jsx)("h3",{className:o().overviewTitle,children:p?"General stats":"Last ".concat(N," matches")}),p&&(0,t.jsxs)("div",{className:o().overview,children:[(0,t.jsxs)("div",{className:o().statsBox,children:[(0,t.jsxs)("div",{className:o().statsHeader,children:[(0,t.jsx)("span",{className:o().statValue,children:null===n||void 0===n?void 0:n.Matches}),(0,t.jsx)("span",{className:o().statName,children:"Matches"})]}),(0,t.jsxs)("div",{className:o().statsList,children:[(0,t.jsx)("span",{className:o().statName,children:"highest Elo:"}),(0,t.jsx)("span",{className:o().statValue,children:v}),(0,t.jsx)("span",{className:o().statName,children:"lowest Elo:"}),(0,t.jsx)("span",{className:o().statValue,children:u}),(0,t.jsx)("span",{className:o().statName,children:"Max Win Streak:"}),(0,t.jsx)("span",{className:o().statValue,children:null===n||void 0===n?void 0:n["Longest Win Streak"]})]})]}),(0,t.jsxs)("div",{className:o().statsBox,children:[(0,t.jsxs)("div",{className:o().statsHeader,children:[(0,t.jsxs)("span",{className:o().statValue,children:[null===n||void 0===n?void 0:n["Win Rate %"],"%"]}),(0,t.jsx)("span",{className:o().statName,children:"Win rate"})]}),(0,t.jsxs)("div",{className:o().statsList,children:[(0,t.jsx)("span",{className:o().statName,children:"Total Wins:"}),(0,t.jsx)("span",{className:o().statValue,children:null===n||void 0===n?void 0:n.Wins}),(0,t.jsx)("span",{className:o().statName,children:"Total Losses:"}),(0,t.jsx)("span",{className:o().statValue,children:n&&Number(n.Matches)-Number(n.Wins)})]})]}),(0,t.jsxs)("div",{className:o().statsBox,children:[(0,t.jsxs)("div",{className:o().statsHeader,children:[(0,t.jsx)("span",{className:o().statValue,children:null===n||void 0===n?void 0:n["Average K/D Ratio"]}),(0,t.jsx)("span",{className:o().statName,children:"K/D"})]}),(0,t.jsxs)("div",{className:o().statsList,children:[(0,t.jsx)("span",{className:o().statName,children:"Kills:"}),(0,t.jsx)("span",{className:o().statValue,children:null===c||void 0===c?void 0:c.reduce((function(e,s){return Number(e)+Number(s.stats.Kills)}),0)}),(0,t.jsx)("span",{className:o().statName,children:"Deaths:"}),(0,t.jsx)("span",{className:o().statValue,children:null===c||void 0===c?void 0:c.reduce((function(e,s){return Number(e)+Number(s.stats.Deaths)}),0)}),(0,t.jsx)("span",{className:o().statName,children:"Assists:"}),(0,t.jsx)("span",{className:o().statValue,children:null===c||void 0===c?void 0:c.reduce((function(e,s){return Number(e)+Number(s.stats.Assists)}),0)}),(0,t.jsx)("span",{className:o().statName,children:"HS:"}),(0,t.jsxs)("span",{className:o().statValue,children:[null===n||void 0===n?void 0:n["Average Headshots %"],"%"]})]})]})]}),!p&&r.length>0&&(0,t.jsxs)("div",{className:o().overview,children:[(0,t.jsxs)("div",{className:o().statsBox,children:[(0,t.jsxs)("div",{className:o().statsHeader,children:[(0,t.jsxs)("span",{className:o().statValue,children:[x.winRate,"%"]}),(0,t.jsx)("span",{className:o().statName,children:"Win rate"})]}),(0,t.jsxs)("div",{className:o().statsList,children:[(0,t.jsx)("span",{className:o().statName,children:"highest Elo:"}),(0,t.jsx)("span",{className:o().statValue,children:x.maxElo}),(0,t.jsx)("span",{className:o().statName,children:"lowest Elo:"}),(0,t.jsx)("span",{className:o().statValue,children:x.minElo}),(0,t.jsx)("span",{className:o().statName,children:"mvps:"}),(0,t.jsx)("span",{className:o().statValue,children:x.mvp}),(0,t.jsx)("span",{className:o().statName,children:"HS:"}),(0,t.jsxs)("span",{className:o().statValue,children:[x.hsPercent,"%"]})]})]}),(0,t.jsxs)("div",{className:o().statsBox,children:[(0,t.jsxs)("div",{className:o().statsHeader,children:[(0,t.jsx)("span",{className:o().statValue,children:x.avgHLTV}),(0,t.jsx)("span",{className:o().statName,children:"hltv"})]}),(0,t.jsxs)("div",{className:o().statsList,children:[(0,t.jsx)("span",{className:o().statName,children:"K/D:"}),(0,t.jsx)("span",{className:o().statValue,children:x.kd}),(0,t.jsx)("span",{className:o().statName,children:"K/R:"}),(0,t.jsx)("span",{className:o().statValue,children:x.kr}),(0,t.jsx)("span",{className:o().statName,children:"avg. Kills:"}),(0,t.jsx)("span",{className:o().statValue,children:x.avgKills}),(0,t.jsx)("span",{className:o().statName,children:"avg. Deaths:"}),(0,t.jsx)("span",{className:o().statValue,children:x.avgDeaths}),(0,t.jsx)("span",{className:o().statName,children:"avg. Assists:"}),(0,t.jsx)("span",{className:o().statValue,children:x.avgAssists})]})]}),(0,t.jsxs)("div",{className:o().statsBox,children:[(0,t.jsxs)("div",{className:o().statsHeader,children:[(0,t.jsx)("span",{className:o().statValue,children:x.kills}),(0,t.jsx)("span",{className:o().statName,children:"Kills"})]}),(0,t.jsxs)("div",{className:o().statsList,children:[(0,t.jsx)("span",{className:o().statName,children:"Deaths:"}),(0,t.jsx)("span",{className:o().statValue,children:x.deaths}),(0,t.jsx)("span",{className:o().statName,children:"Assists:"}),(0,t.jsx)("span",{className:o().statValue,children:x.assists}),(0,t.jsx)("span",{className:o().statName,children:"3K:"}),(0,t.jsx)("span",{className:o().statValue,children:x.triple}),(0,t.jsx)("span",{className:o().statName,children:"4K:"}),(0,t.jsx)("span",{className:o().statValue,children:x.quad}),(0,t.jsx)("span",{className:o().statName,children:"5K:"}),(0,t.jsx)("span",{className:o().statValue,children:x.penta})]})]})]}),!p&&0===r.length&&(0,t.jsx)("span",{children:"no info"}),(0,t.jsx)("div",{className:o().matches,children:(0,t.jsxs)("div",{className:o().matchesHeader,children:[(0,t.jsx)("div",{className:m()(o().statItem,o().number),children:"#"}),(0,t.jsx)("div",{className:m()(o().statItem,o().result),children:"W/L"}),(0,t.jsx)("div",{className:m()(o().statItem,o().elo),children:"elo"}),(0,t.jsx)("div",{className:m()(o().statItem,o().score),children:"score"}),(0,t.jsx)("div",{className:m()(o().statItem,o().kda),children:"kda"}),(0,t.jsx)("div",{className:m()(o().statItem,o().kr),children:"kr"}),(0,t.jsx)("div",{className:m()(o().statItem,o().kd),children:"kd"}),(0,t.jsx)("div",{className:m()(o().statItem,o().hs),children:"hs"}),(0,t.jsx)("div",{className:m()(o().statItem,o().map),children:"map"}),(0,t.jsx)("div",{className:m()(o().statItem,o().date),children:"date"}),(0,t.jsx)("div",{className:m()(o().statItem,o().team),children:"team"}),(0,t.jsx)("div",{className:m()(o().statItem,o().hltv),children:"hltv"})]})}),null===r||void 0===r?void 0:r.map((function(e,s){var a,n,r,i,l=e.eloDiff&&(e.eloDiff>0?"+".concat(e.eloDiff):e.eloDiff),c=d({kills:Number(e.i6),rounds:Number(e.i12),deaths:Number(e.i8),triple:Number(e.i14),quadro:Number(e.i15),penta:Number(e.i16)}),u=Number.isNaN(Number(l))||0===l,v=m()(o().statItem,(h(a={},o().green,Number(e.c2)>1),h(a,o().red,Number(e.c2)<1),a)),N=m()(o().statItem,(h(n={},o().green,Number(c)>1),h(n,o().red,Number(c)<1),n)),p=m()(o().statItem,(h(r={},o().green,Number(e.i10)),h(r,o().red,!Number(e.i10)),r)),x=m()(o().eloDiff,(h(i={},o().green,Number(l)>0),h(i,o().red,Number(l)<0),i)),j=u?"":l;return(0,t.jsxs)("div",{className:o().matchItem,children:[(0,t.jsx)("div",{className:m()(o().statItem,o().number),children:s+1}),(0,t.jsx)("div",{className:p,children:Number(e.i10)?"W":"L"}),(0,t.jsxs)("div",{className:m()(o().statItem,o().elo),children:[e.elo,(0,t.jsx)("span",{className:x,children:e.elo?j:"-"})]}),(0,t.jsx)("div",{className:m()(o().statItem,o().score),children:e.i18}),(0,t.jsxs)("div",{className:m()(o().statItem,o().kda),children:[e.i6," ","-",e.i7," ","-",e.i8]}),(0,t.jsx)("div",{className:m()(o().statItem,o().kr),children:e.c3}),(0,t.jsx)("div",{className:v,children:e.c2}),(0,t.jsx)("div",{className:m()(o().statItem,o().hs),children:e.c4}),(0,t.jsx)("div",{className:m()(o().statItem,o().map),children:e.i1.split("/").slice(-1)}),(0,t.jsxs)("div",{className:m()(o().statItem,o().date),children:[(0,t.jsx)("div",{children:new Date(e.created_at).toLocaleDateString()}),(0,t.jsx)("div",{children:new Date(e.created_at).toLocaleTimeString().split(":").slice(0,2).join(":")})]}),(0,t.jsx)("div",{className:m()(o().statItem,o().team),children:e.i5.includes("team_")?e.i5.slice(5):e.i5}),(0,t.jsx)("div",{className:N,children:c})]},e._id.matchId)}))]})]})},N=function(e,s){return Math.trunc(e/s*100)/100},p=a(2421),x=a(4051),j=a.n(x),f=a(925);function _(e,s,a,t,n,r,i){try{var l=e[r](i),c=l.value}catch(m){return void a(m)}l.done?s(c):Promise.resolve(c).then(t,n)}var b=function(e,s,a){return{type:f.wq,player:e,lifetime:s,maps:a}},w=function(e){return{type:f.JT,matches:e}},g=function(e,s,a){return{type:f.jb,minElo:e,maxElo:s,nicknames:a}},k=function(e,s,a,t,n,r,i){return function(){var l,c=(l=j().mark((function l(c){return j().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:c(w(e)),c(b(s,a,t)),n&&c(g(r,i,n));case 3:case"end":return l.stop()}}),l)})),function(){var e=this,s=arguments;return new Promise((function(a,t){var n=l.apply(e,s);function r(e){_(n,a,t,r,i,"next",e)}function i(e){_(n,a,t,r,i,"throw",e)}r(void 0)}))});return function(e){return c.apply(this,arguments)}}()};function y(e,s){(null==s||s>e.length)&&(s=e.length);for(var a=0,t=new Array(s);a<s;a++)t[a]=e[a];return t}function I(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}function V(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(s){I(e,s,a[s])}))}return e}function O(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,s){if(!e)return;if("string"===typeof e)return y(e,s);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(e,s)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E=!0,S=function(e){var s=e.nickname,a=e.matches,l=e.newData,c=e.lifetime,m=e.segments,u=e.nicknames,o=e.minElo,h=e.maxElo,x=e.errorC,j=void 0===x?null:x,f=(0,p.C)((function(e){return e})).player,_=(0,n.useState)("overview"),b=_[0],w=_[1],g=(0,n.useState)(20),y=g[0],I=g[1],E=(0,n.useState)(!0),S=E[0],L=E[1],M=(0,n.useState)("all"),D=M[0],H=M[1],A=(0,n.useState)("all"),P=A[0],T=A[1],C=(0,n.useMemo)((function(){return(null===a||void 0===a?void 0:a.map((function(e,s){var t,n;return V({},e,{eloDiff:(null===(t=a[s+1])||void 0===t?void 0:t.elo)?Number(e.elo)-Number(null===(n=a[s+1])||void 0===n?void 0:n.elo):0})})))||[]}),[a]),K=(0,n.useMemo)((function(){var e=O(C);return"all"!==D&&(e=C.filter((function(e){return e.i1.includes(D)}))),"all"!==P&&(e=e.filter((function(e){return e.i10===P}))),e.slice(0,y)}),[D,P,C,y]),F=(0,n.useMemo)((function(){return function(e,s){var a={mvp:0,quad:0,kills:0,triple:0,assists:0,penta:0,deaths:0,kd:0,hsPercent:0,kr:0,wins:0,avgHLTV:0,winRate:0,avgKills:0,avgDeaths:0,avgAssists:0,minElo:0,maxElo:0};if(0===e.length)return a;var t=e.map((function(e){return Number(e.elo)})).filter((function(e){return!Number.isNaN(e)}));return e.slice(0,s).forEach((function(e){a.mvp+=Number(e.i9),a.triple+=Number(e.i14),a.quad+=Number(e.i15),a.penta+=Number(e.i16),a.kills+=Number(e.i6),a.assists+=Number(e.i7),a.deaths+=Number(e.i8),a.wins+=Number(e.i10),a.hsPercent+=Number(e.c4),a.kd+=Number(e.c2),a.kr+=Number(e.c3),a.avgHLTV+=Number(d({kills:Number(e.i6),rounds:Number(e.i12),deaths:Number(e.i8),triple:Number(e.i14),quadro:Number(e.i15),penta:Number(e.i16)}))}),a),{mvp:a.mvp,triple:a.triple,quad:a.quad,penta:a.penta,kills:a.kills,assists:a.assists,deaths:a.deaths,winRate:Math.trunc(a.wins/s*100),avgKills:Math.round(a.kills/s),avgDeaths:Math.round(a.deaths/s),avgAssists:Math.round(a.assists/s),hsPercent:Math.round(a.hsPercent/s),kd:N(a.kd,s),kr:N(a.kr,s),minElo:Number.isFinite(Math.min.apply(null,t))?Math.min.apply(null,t):0,maxElo:Number.isFinite(Math.max.apply(null,t))?Math.max.apply(null,t):0,avgHLTV:N(a.avgHLTV,s)}}(K,K.length)}),[K]),W=(0,p.C)((function(e){return e.player})),R=W.playerInfo,q=W.maps,B=W.error,G=(0,r.I0)();return(0,n.useEffect)((function(){a&&G(k(a,l,c,m,u,o,h))}),[G,a,l,c,m,u,o,h]),j?(0,t.jsx)(i.jj,{message:j}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.J5,{nickname:s,playerInfo:R,setMatchesCount:I,matchesCount:y,setIsGeneralStats:L,isGeneralStats:S,mapFilter:D,resultFilter:P,setResultFilter:T,setMapFilter:H,nicknames:u,currentPage:b,setCurrentPage:w}),"overview"===b&&(0,t.jsx)(v,V({},f,{nickname:s,matchesCount:y,isGeneralStats:S,mapFilter:D,resultFilter:P,matches:K,calcedStats:F})),"maps"===b&&(0,t.jsx)(i.oe,{nickname:s,maps:q,error:B})]})}},1444:function(e){e.exports={container:"Overview_container__dumOz",overviewTitle:"Overview_overviewTitle__n49gh",overview:"Overview_overview__YXVVH",statsBox:"Overview_statsBox__Kll_f",statsHeader:"Overview_statsHeader__5R1MQ",statValue:"Overview_statValue__Lf31j",statName:"Overview_statName__EBCZM",statsList:"Overview_statsList__LUj5U",matchesHeader:"Overview_matchesHeader__LZS_j",statItem:"Overview_statItem__WWxEY",matchItem:"Overview_matchItem__jaUcW",number:"Overview_number__448az",elo:"Overview_elo__tMjMd",date:"Overview_date__L6x81",green:"Overview_green__l771S",red:"Overview_red__OFnJ_",map:"Overview_map___AfdK",hs:"Overview_hs__6VC9R",kr:"Overview_kr__oFUI1",team:"Overview_team__kjQCu",kda:"Overview_kda__azPp6"}}},function(e){e.O(0,[774,888,179],(function(){return s=2574,e(e.s=s);var s}));var s=e.O();_N_E=s}]);