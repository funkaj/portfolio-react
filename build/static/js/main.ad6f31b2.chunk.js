(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,a,t){e.exports=t(261)},116:function(e,a,t){},117:function(e,a,t){},118:function(e,a,t){},238:function(e,a,t){},239:function(e,a,t){},243:function(e,a,t){},250:function(e,a,t){},251:function(e,a,t){},252:function(e,a,t){},255:function(e,a,t){},260:function(e,a,t){},261:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(17),r=t.n(l),o=t(25),s=t(28),c=(t(116),t(20)),m=t(21),u=t(23),d=t(22),g=t(24),p=t(110),h=(t(117),{}),f=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={isLoaded:h[t.props.src]},t.onLoad=function(){h[t.props.src]=!0,t.setState(function(){return{isLoaded:!0}})},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.className,t=e.loadedClassName,n=e.loadingClassName;Object(p.a)(e,["className","loadedClassName","loadingClassName"]);return a="".concat(a," ").concat(this.state.isLoaded?t:n),i.a.createElement("img",{src:this.props.src,onClick:this.props.onClick,className:a,onLoad:this.onLoad,alt:this.props.alt})}}]),a}(n.Component);f.defaultProps={className:"",loadingClassName:"img-loading",loadedClassName:"img-loaded",alt:"",noAltName:"Default-image"};var b=f,v=[{name:"github",type:"github",link:"https://github.com/funkaj",icon:"fab fa-github-alt fa-2x"},{name:"linkedIn",type:"linkedIn",link:"https://www.linkedin.com/in/adam-funk-5831b8152/",icon:"fab fa-linkedin-in fa-2x"},{name:"contact",type:"email",link:"mailto:b.kimate@gmail.com?Subject=Hello%20Adam",icon:"fas fa-envelope fa-2x"}],k=t(109),w=t(27),E=t.n(w),y=t(97),j=t.n(y),N=t(50),D=t.n(N),C=t(33),S=t(100),A=t.n(S),O=t(101),L=t.n(O),I=t(102),T=t.n(I),F=t(51),W=t.n(F),R=t(103),x=t.n(R);t(118);var P=Object(C.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var a=e.classes,t=i.a.useState(null),n=Object(k.a)(t,2),l=n[0],r=n[1];function s(){setTimeout(function(){e.getRoute&&e.getRoute(window.location.pathname)},10)}function c(){r(null)}var m=i.a.createElement("div",null,i.a.createElement(j.a,{id:"primary-search-account-menu-mobile",anchorEl:l,keepMounted:!0,open:Boolean(l),onClose:c},i.a.createElement("div",null,i.a.createElement(D.a,{className:"menuBg",onClick:c},i.a.createElement(o.b,{exact:!0,id:"home",className:"HOME",activeClassName:"active",to:"/index"},"Home")),i.a.createElement(D.a,{className:"menuBg",onClick:c},i.a.createElement(o.b,{id:"illustration",className:"ILL_DATA",activeClassName:"active",to:"/gallery/illustration",onClick:s},"Illustration")),i.a.createElement(D.a,{className:"menuBg",onClick:c},i.a.createElement(o.b,{id:"web-development",className:"DEV_DATA",activeClassName:"active",to:"/gallery/web-development",onClick:s},"Web Development")))));return i.a.createElement("div",{className:a.root},i.a.createElement(A.a,{id:"navBar",position:"static"},i.a.createElement(L.a,{className:"navLink"},i.a.createElement(T.a,{id:"title",variant:"h3",className:a.grow},"Adam Funk"),i.a.createElement("div",{className:"sectionDesktop"},i.a.createElement(W.a,null,i.a.createElement(o.b,{exact:!0,id:"home",className:"HOME",activeClassName:"active",to:"/index"},"Home")),i.a.createElement(W.a,null,i.a.createElement(o.b,{id:"illustration",className:"ILL_DATA",activeClassName:"active",to:"/gallery/illustration",onClick:s},"Illustration")),i.a.createElement(W.a,null,i.a.createElement(o.b,{id:"web-development",className:"DEV_DATA",activeClassName:"active",to:"/gallery/web-development",onClick:s},"Web Development"))),i.a.createElement("div",{className:"sectionMobile"},i.a.createElement(E.a,{"aria-label":"Show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},color:"inherit"},i.a.createElement(x.a,null))),m)))});var _=function(e){var a=e.linkData;return i.a.createElement("div",null,i.a.createElement(E.a,{className:"link-btn",href:a.link,target:"blank"},i.a.createElement("i",{className:"".concat(a.icon," ").concat(a.name)})))};t(238);function B(e){return i.a.createElement("div",{id:"icon-container"},i.a.createElement(_,{linkData:e.linkData[0]}),i.a.createElement(_,{linkData:e.linkData[1]}),i.a.createElement(_,{linkData:e.linkData[2],target:"_top"}))}var M=t(104),G=t.n(M),H=t(52),J=t.n(H);t(239);var z=Object(C.withStyles)({})(function(e){var a=e.classes,t=e.value;return i.a.createElement(G.a,{id:"bottom-mobile-nav",value:t,onChange:e.handleLink,showLabels:!0,className:a.root},i.a.createElement(J.a,{label:"Github",icon:i.a.createElement(_,{id:"bottomGithub",linkData:e.linkData[0]})}),i.a.createElement(J.a,{label:"LinkedIn",icon:i.a.createElement(_,{id:"bottomLinkedIn",linkData:e.linkData[1]})}),i.a.createElement(J.a,{label:"Email",id:"bottomContact",icon:i.a.createElement(_,{id:"bottomContact",linkData:e.linkData[2],target:"_top"})}))}),K=(t(243),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={linkData:v},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(P,{data:this.state,getRoute:this.props.getRoute}),i.a.createElement(B,{linkData:this.state.linkData}),i.a.createElement(z,{handleLink:this.handleLink,linkData:this.state.linkData,value:this.state.value}))}}]),a}(n.Component)),U=t(49),Z=t.n(U),V=(t(250),function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(K,null),i.a.createElement("div",{id:"mainImg"},i.a.createElement(Z.a,null,i.a.createElement(b,{src:"images/jpg/ninja1.jpg",alt:"ninja"})),i.a.createElement("div",{id:"brand"},i.a.createElement("div",{className:"name"},"Adam"),i.a.createElement("div",{className:"name"},"Funk"))))}}]),a}(n.Component)),q=t(38),$=t.n(q);t(251),t(252);var Q=function(){return i.a.createElement("div",{className:"absolute"},i.a.createElement($.a,{container:!0,spacing:0},i.a.createElement($.a,{item:!0,sm:4},i.a.createElement("div",{id:"left-line-container"},i.a.createElement("div",{className:"left-left-line line"}),i.a.createElement("div",{className:"left-center-line line"}),i.a.createElement("div",{className:"left-right-line line"}))),i.a.createElement($.a,{item:!0,sm:4},i.a.createElement("div",{id:"line-container"},i.a.createElement("div",{className:"left-line line"}),i.a.createElement("div",{className:"center-line line"}),i.a.createElement("div",{className:"right-line line"}))),i.a.createElement($.a,{item:!0,sm:4},i.a.createElement("div",{id:"right-line-container"},i.a.createElement("div",{className:"right-left-line line"}),i.a.createElement("div",{className:"right-center-line line"}),i.a.createElement("div",{className:"right-right-line line"})))))},X=t(108),Y=t(39),ee=t.n(Y),ae=t(105),te=t.n(ae),ne=t(106),ie=t.n(ne),le=t(107),re=t.n(le);t(255);var oe=Object(X.a)(Object(C.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},icon:{color:"white"}}}),ee()())(function(e){var a=e.classes,t=e.tileData.data;return i.a.createElement("div",{className:"grid-bg ".concat(a.root)},i.a.createElement(te.a,{cellHeight:250,cols:Object(Y.isWidthDown)("xs",e.width)?1:Object(Y.isWidthDown)("sm",e.width)?2:(Object(Y.isWidthDown)("md",e.width),3),spacing:8,className:"".concat(a.gridList," griddy")},t.slice(0,6).map(function(t){return i.a.createElement(ie.a,{className:"gallery",key:t.img,cols:t.featured?2:1,rows:t.featured?2:1},i.a.createElement("div",{className:"lazyGrid"},i.a.createElement(Z.a,{debounce:!1},i.a.createElement(b,{src:e.hasWebP?t.imgalt:t.img,alt:t.title}))),i.a.createElement(re.a,{title:t.art?t.title:null,titlePosition:"top",actionIcon:i.a.createElement("div",null,t.art?i.a.createElement(E.a,null):i.a.createElement("div",null,i.a.createElement(E.a,{href:t.live,target:"blank",className:"link-btn"},t.title),i.a.createElement(E.a,{href:t.link,target:"blank",className:"link-btn"},i.a.createElement("i",{className:"fab fa-github-alt fa-lg"})))),actionPosition:"left",className:a.titleBar}))})))}),se=(t(260),[{img:"/images/webp/ninja1.webp",imgalt:"/images/png/ninja1.png",title:"Ninja",author:"Adam Funk",art:!0,featured:!1},{img:"/images/gif/Anger_1_adam.gif",imgalt:"/images/gif/Anger_1_adam.gif",title:"Anger",author:"Adam",art:!0,featured:!1},{img:"/images/webp/rufus1.webp",imgalt:"/images/png/rufus1.png",title:"Rufus",author:"Adam Funk",art:!0,featured:!1},{img:"/images/webp/Gorgon_Berry_Funk1.webp",imgalt:"/images/png/Gorgon_Berry_Funk1.png",title:"Medusa",author:"Adam, Evan",art:!0,featured:!1},{img:"/images/webp/Sub-Zero.webp",imgalt:"/images/png/Sub-Zero.png",title:"Sub Zero",author:"Adam Funk",art:!0,featured:!1},{img:"/images/webp/girlcolor1.webp",imgalt:"/images/png/girlcolor1.png",title:"Watercolor",author:"Adam Funk",art:!0,featured:!1},{img:"/images/webp/riddle1.webp",imgalt:"/images/png/riddle1.png",title:"The Riddler",author:"Adam",art:!0,featured:!1},{img:"/images/webp/kimono1.webp",imgalt:"/images/png/kimono1.png",title:"Kimono",author:"Adam",art:!0,featured:!1}]),ce=[{img:"/images/webp/sdth1.webp",imgalt:"/images/png/sdth1.png",title:"San Diego Tech Hub",author:"SDTH",link:"https://github.com/san-diego-tech-hub/sdth-site",live:"https://www.sandiegotechhub.com/",icon:"fab fa-linkedin-in fa-lg",description:"I have contributed CSS refactoring to this open source project. San Diego Tech Hub represents a movement aimed at changing the perception of the San Diego tech ecosystem. Our focus is to be a conduit for change connecting businesses, organizations, and individuals, leveraging their resources and talents to build a stronger San Diego tech community through collaboration.",featured:!1},{img:"/images/gif/jobpiper.gif",imgalt:"/images/gif/jobpiper.gif",title:"Job Piper",author:"Adam Funk, Jesse Loftus, Jordon, Silver, Phillip",link:"https://github.com/ScriptKiddie1337/JobPiper.io",live:"http://www.jobpiper.io/",icon:"fab fa-linkedin-in fa-lg",description:"JobPiper is a job assistant to make the job search process simple and easy to do. Tech Stack (MERN) MongoDB, Express.js, React.js, Node JS, ES6, HTML5, CSS3, Material UI, Material Design, Firebase, Fuse.js, Mongoose.js, Cheerio.js, Axios",featured:!1},{img:"/images/webp/crystalGame.webp",imgalt:"/images/png/crystalGame.png",title:"Crystal Madness",author:"Adam Funk",link:"https://github.com/funkaj/Crystal-Madness",live:"https://funkaj.github.io/Crystal-Madness/",icon:"fab fa-linkedin-in fa-lg",description:"A matching game made for UCSD Bootcamp. User is given a random target number (between 19-120) to meet not exceed. The four crystals are given random numbers(between 1-12) with no duplicates. User must click on crystals to update Player Total and remember what the number under each crystal is. If they meet the target they win, if they go over they lose. Win/Lose counter updates and A new Target Number/Crystals are selected. Player continues for as long as they like.",featured:!1},{img:"/images/webp/plate1.webp",imgalt:"/images/png/chef.png",title:"Dynamite Kitchen Supplies",author:"Adam, Jesse",link:"https://github.com/funkaj/Dynamite-Kitchen-Supplies",live:"https://serene-forest-68972.herokuapp.com/",icon:"fab fa-linkedin-in fa-lg",description:"Dynamite Kitchen Supplier (DkS) is a full-stack web-app that will allow for role based users to input orders for purchase using a restaurant kitchen as its model. The app allow's for a seperation of roles each with their own set of privileges and access. Users will need to login or create a new user which will be stored in the database.",featured:!1},{img:"/images/gif/raccoon-demo.gif",imgalt:"/images/gif/raccoon-demo.gif",title:"Raccoon Fighter!",link:"https://github.com/funkaj/Raccoon-Fighter",live:"https://github.com/funkaj/Raccoon-Fighter",icon:"fab fa-linkedin-in fa-lg",description:"A NodeJS terminal based fighting game."},{img:"/images/png/gifapalooza.png",imgalt:"/images/png/gifapalooza.png",title:"Gifapalooza",link:"https://github.com/funkaj/Gifapalooza",live:"https://funkaj.github.io/Gifapalooza/",icon:"fab fa-linkedin-in fa-lg",description:"Web page that searches the Giphy API for user queryed gif. Built for practice using API in web development."},{img:"/images/webp/friend_finder01.webp",imgalt:"/images/png/friend_finder01.png",title:"Friend Finder",link:"https://github.com/funkaj/FriendFinder",live:"https://blooming-anchorage-67787.herokuapp.com/",icon:"fab fa-linkedin-in fa-lg",description:"A full-stack site will take in results from your users surveys, then compare their answers with those stored in an array. The app will then display the name and picture of the user with the best overall match, and add the user to the array for future visits.",featured:!1},{img:"/images/png/liri-node-app.png",imgalt:"/images/png/liri-node-app.png",title:"Liri-app",link:"https://github.com/funkaj/liri-node-app",live:"https://github.com/funkaj/liri-node-app",icon:"fab fa-linkedin-in fa-lg",description:"LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data."},{img:"/images/webp/destinator.webp",imgalt:"/images/png/destinator.png",title:"The-Destinator",link:"https://github.com/funkaj/TheDestinator",live:"https://loftusjl.github.io/TheDestinator/",icon:"fab fa-linkedin-in fa-lg",description:"A travel site to suggest activities located around chosen destinations. Includes attractions, lodging, and weather forecast.",featured:!1}],me=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={images:"",pageLink:"",hasWebP:!1,load:!1,data:"",value:0,title:""},t.handleLink=function(e,a){t.setState({value:a})},t.getRoute=function(e){var a=window.location.pathname;"/gallery/illustration"===a&&(t.setState({load:!1}),t.setState({data:se}),t.setState({pageLink:"illustration"}),t.setState({title:"Illustration"})),"/gallery/web-development"===a&&(t.setState({load:!0}),t.setState({data:ce}),t.setState({pageLink:"web-development"}),t.setState({title:"Web Development"}))},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e,a=this.state;!function(){var e=new Image;e.onload=function(){a.hasWebP=!0},e.onerror=function(){a.hasWebP=!1},e.src="http://www.gstatic.com/webp/gallery/1.webp"}(),"/gallery/illustration"===(e=window.location.pathname)?(a.load=!1,a.data=se,a.pageLink="illustration",a.title="Illustration"):"/gallery/web-development"===e&&(a.load=!0,a.data=ce,a.pageLink="web-development",a.title="Web Development")}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(K,{getRoute:this.getRoute}),i.a.createElement("div",{id:"wrapper"},i.a.createElement(oe,{hasWebP:this.state.hasWebP,tileData:this.state,load:this.state.load,linkData:this.state.linkData}),i.a.createElement(Q,null)))}}]),a}(n.Component),ue=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{id:"404"},"Sorry we can't find that page."))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=i.a.createElement(o.a,null,i.a.createElement(s.c,null,i.a.createElement(s.a,{path:"/",component:V}),i.a.createElement(s.a,{path:"/index",component:V}),i.a.createElement(s.a,{path:"/gallery/illustration",component:me}),i.a.createElement(s.a,{path:"/gallery/web-development",component:me}),i.a.createElement(s.a,{component:ue})));r.a.render(de,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[111,1,2]]]);
//# sourceMappingURL=main.ad6f31b2.chunk.js.map