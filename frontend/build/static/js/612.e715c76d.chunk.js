"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[612],{5612:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(4165),s=n(5861),a=(n(2791),"Result_par__zv0SI"),o="Result_booktxt__IARaV",i="Result_booksub__M85UU",c="Result_date__-v4or",u=n(5090),l=n(6640),d=n(4390),h=n(9696),p=n(7653),f=n(991),x=(n(5778),n(8382)),v=n(4569),m=n.n(v),b=n(184),k=function(e){var t=(0,x.p)(),n=function(){var n=(0,s.Z)((0,r.Z)().mark((function n(s){var a,o,i,c,u,l,d,h;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a=new Date,o=a.toISOString().split("T")[0],(i=new Date(a)).setDate(a.getDate()+30),c=i.toISOString().split("T")[0],u=JSON.parse(localStorage.getItem("userInfo")),l=u.token,d={headers:{Authorization:"Bearer ".concat(l)}},n.next=11,m().put("/api/books/rent",{book_id:s,rentalDate:o,expiryDate:c},d);case 11:h=n.sent,h.data,t({title:"Book Rented You Can Check in Borrowed Section",status:"success",duration:9e3,isClosable:!0}),e.typing(),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(0),console.log(n.t0.message);case 20:case"end":return n.stop()}}),n,null,[[0,17]])})));return function(e){return n.apply(this,arguments)}}();return(0,b.jsx)("div",{className:a,children:e.searchResults.map((function(e,t){return(0,b.jsxs)(u.Z,{direction:{base:"column",sm:"row"},overflow:"hidden",variant:"outline",margin:"20px",children:[(0,b.jsx)(l.E,{objectFit:"cover",maxW:{base:"100%",sm:"120px"},src:e.poster,alt:"Caffe Latte"}),(0,b.jsxs)(d.K,{children:[(0,b.jsxs)(h.e,{children:[(0,b.jsx)("div",{className:o,children:e.book_name}),(0,b.jsxs)("div",{className:c,children:[(0,b.jsx)("div",{className:i,children:"Author  : "}),"\xa0",e.book_author]}),(0,b.jsxs)("div",{className:c,children:[(0,b.jsx)("div",{className:i,children:"Genre : "}),"\xa0",e.book_genre]}),(0,b.jsxs)("div",{className:c,children:[(0,b.jsx)("div",{className:i,children:"Publish Date : "}),"\xa0",e.publish_date.slice(0,10)]}),(0,b.jsx)("br",{}),(0,b.jsx)(p.z,{backgroundColor:"#164bea",color:"white",size:"sm",onClick:function(){return n(e._id)},children:"Rent Book"})]}),(0,b.jsx)(f.e,{})]})]},e._ind)}))})}},8382:function(e,t,n){n.d(t,{p:function(){return c}});var r=n(1413),s=n(3525),a=n(6309),o=n(2884),i=n(2791);function c(e){var t=(0,o.uP)().theme,n=(0,s.OX)();return(0,i.useMemo)((function(){return(0,a.Cj)(t.direction,(0,r.Z)((0,r.Z)({},n),e))}),[e,t.direction,n])}}}]);
//# sourceMappingURL=612.e715c76d.chunk.js.map