(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],{130:function(e,t,a){},131:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=131},132:function(e,t,a){},133:function(e,t,a){},137:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(38),i=a.n(c),s=(a(57),a(50)),o=a(39),l=a(40),m=a(49),u=a(41),d=a(51),g=a(42),h=a.n(g),p=function(e){return r.a.createElement(h.a,e,e.children)},f=a(22),E=a.n(f),y=function(e){return r.a.createElement(E.a,null,e.children)},k=(a(130),function(e){var t=e.id,n=e.name,c=e.image,i=e.handlePicked;return(r.a.createElement("div",null,r.a.createElement("div",{className:"card",key:t,"data-id":t,name:n,style:{backgroundImage:"url(".concat(a(131)(c),")")},onClick:i})))}),v=(a(132),function(e){return r.a.createElement("div",{className:"score"},e.type,": ",e.score)}),M=(a(133),function(e){return r.a.createElement("div",{className:"default",style:e.style},e.message?r.a.createElement("p",null,e.message):r.a.createElement("p",{className:"default-msg black"},"Click an image to earn poits, but don't click on any more than once!"))}),C=a(44),b=a.n(C),S=a(45),w=a.n(S),O=a(46),N=a.n(O),j=function(e){return r.a.createElement("div",null,r.a.createElement(b.a,Object.assign({position:"static"},e),r.a.createElement(w.a,null,r.a.createElement(N.a,{variant:"headline",color:"inherit",align:"center"},"Clicky Game"))))},x=(a(47),a(137),a(48)),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={characters:x,pickedChars:[],topScore:0,alertMessage:""},a.handlePicked=function(e){var t=e.target.attributes.getNamedItem("name").value;a.shuffleCharacters(),a.checkGuess(t,a.updateTopScore)},a.shuffleCharacters=function(){a.setState(a.state.characters=a.shuffleArray(a.state.characters))},a.shuffleArray=function(e){var t,a,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e},a.checkGuess=function(e,t){var n=Object(s.a)({},a.state);n.pickedChars.includes(e)?(n.alertMessage='Incorrect, you already picked "'.concat(e.toUpperCase(),'"!'),n.pickedChars=[],a.setState(a.state=n)):(n.pickedChars.push(e),n.alertMessage="You guessed correctly!",a.setState(a.state=n)),t(n,a.alertWinner)},a.updateTopScore=function(e,t){e.pickedChars.length>e.topScore&&(e.topScore++,a.setState(a.state=e)),t(e)},a.alertWinner=function(e){12===e.pickedChars.length&&(e.alertMessage="CHAMPION!",e.pickedChars=[],a.setState(a.state=e))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(j,{style:{background:"#2866C5",marginBottom:"5px"}}),r.a.createElement(p,{container:!0,direction:"column",style:{margin:"0 auto",maxWidth:945}},r.a.createElement(p,{item:!0,lg:12},r.a.createElement(y,null,"You guessed correctly!"===this.state.alertMessage?r.a.createElement(M,{message:this.state.alertMessage,style:{color:"green"}}):r.a.createElement(M,{message:this.state.alertMessage,style:{color:"red"}}))),r.a.createElement(p,{container:!0,justify:"space-between"},r.a.createElement(p,{container:!0,spacing:24,justify:"center",style:{maxWidth:945,margin:"0 auto"}},this.state.characters.map((function(t){return r.a.createElement(p,{item:!0,lg:3,md:3,sm:4,xs:6},r.a.createElement(k,{id:t.id,name:t.name,image:t.image,key:t.id,handlePicked:e.handlePicked}))}))),r.a.createElement(p,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement(y,null,r.a.createElement(v,{type:"Score",score:this.state.pickedChars.length}))),r.a.createElement(p,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement(y,null,r.a.createElement(v,{type:"Top Score",score:this.state.topScore}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},48:function(e){e.exports=JSON.parse('[{"id":1,"name":"Apu","image":"../imgs/Apu.png"},{"id":2,"name":"Bart","image":"../imgs/Bart.png"},{"id":3,"name":"Edna","image":"../imgs/Edna.png"},{"id":4,"name":"Flanders","image":"../imgs/Flanders.png"},{"id":5,"name":"Homer","image":"../imgs/Homer.png"},{"id":6,"name":"Krusty","image":"../imgs/Krusty.png"},{"id":7,"name":"Lisa","image":"../imgs/Lisa.png"},{"id":8,"name":"Marge","image":"../imgs/Marge.png"},{"id":9,"name":"Milhouse","image":"../imgs/Milhouse.png"},{"id":10,"name":"Moe","image":"../imgs/Moe.png"},{"id":11,"name":"Mr_Burns","image":"../imgs/Mr_Burns.png"},{"id":12,"name":"Nelson","image":"../imgs/Nelson.png"}]')},52:function(e,t,a){e.exports=a(139)},57:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.adf77560.chunk.js.map