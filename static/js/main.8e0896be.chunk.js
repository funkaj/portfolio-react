(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(7),r=a.n(s),o=a(19),l=a(8),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var m=a(21),g=a(22),u=a(25),h=a(24),p=a(59),b=a(139),f=a(140),j=a(141),k=a(142),v=a(6),w=a(150),O=a(63),x=(a(73),a(2)),y={},A=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={isLoaded:y[e.props.src]},e.onLoad=function(){y[e.props.src]=!0,e.setState((function(){return{isLoaded:!0}}))},e}return Object(g.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.loadedClassName,i=e.loadingClassName;Object(O.a)(e,["className","loadedClassName","loadingClassName"]);return t="".concat(t," ").concat(this.state.isLoaded?a:i),Object(x.jsx)("img",{src:""+this.props.src,onClick:this.props.onClick,className:t,onLoad:this.onLoad,alt:this.props.alt})}}]),a}(i.Component);A.defaultProps={className:"",loadingClassName:"img-loading",loadedClassName:"img-loaded",alt:"",noAltName:"Default-image"};var N=A,F=a(45),C=a.n(F);a(83);var S=Object(p.a)(Object(v.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},icon:{color:"white"}}})),Object(w.a)())((function(e){var t=e.classes,a=e.tileData;return Object(x.jsx)("div",{className:"grid-bg ".concat(t.root),children:Object(x.jsx)(b.a,{cellHeight:250,cols:Object(w.b)("xs",e.width)?1:Object(w.b)("sm",e.width)||Object(w.b)("md",e.width)?2:3,spacing:8,className:"".concat(t.gridList," griddy"),children:a.slice(0,window.innerHeight<=1200?6:9).map((function(a){return Object(x.jsxs)(f.a,{className:"gallery",cols:a.featured?2:1,rows:a.featured?2:1,children:[Object(x.jsx)("a",{href:a.live,children:Object(x.jsx)("div",{className:"lazyGrid",children:Object(x.jsx)(C.a,{debounce:!1,width:640,children:Object(x.jsx)(N,{src:e.hasWebP?a.img:a.imgalt,alt:a.title})})})}),Object(x.jsx)(j.a,{title:a.art?a.title:null,titlePosition:"top",actionIcon:Object(x.jsx)("div",{children:a.art?Object(x.jsx)(k.a,{}):Object(x.jsxs)("div",{children:[Object(x.jsx)(k.a,{href:a.live,target:"blank",className:"link-btn",children:a.title}),Object(x.jsx)(k.a,{href:a.link,target:"blank",className:"link-btn",children:Object(x.jsx)("i",{className:"fab fa-github-alt fa-lg"})})]})}),actionPosition:"left",className:t.titleBar})]},a.img)}))})})})),D=a(143);a(86),a(87);var L=function(){return Object(x.jsx)("div",{className:"absolute",children:Object(x.jsxs)(D.a,{container:!0,spacing:0,children:[Object(x.jsx)(D.a,{item:!0,sm:4,children:Object(x.jsxs)("div",{id:"left-line-container",children:[Object(x.jsx)("div",{className:"left-left-line line"}),Object(x.jsx)("div",{className:"left-center-line line"}),Object(x.jsx)("div",{className:"left-right-line line"})]})}),Object(x.jsx)(D.a,{item:!0,sm:4,children:Object(x.jsxs)("div",{id:"line-container",children:[Object(x.jsx)("div",{className:"left-line line"}),Object(x.jsx)("div",{className:"center-line line"}),Object(x.jsx)("div",{className:"right-line line"})]})}),Object(x.jsx)(D.a,{item:!0,sm:4,children:Object(x.jsxs)("div",{id:"right-line-container",children:[Object(x.jsx)("div",{className:"right-left-line line"}),Object(x.jsx)("div",{className:"right-center-line line"}),Object(x.jsx)("div",{className:"right-right-line line"})]})})]})})},P=[{author:"Adam Funk",description:"First-Aid-Product.com: First Aid Kits - America's Favorite First Aid\u2122 First Aid &amp; First Aid Supplies Wholesale Direct to the Public for over 25 years! CPR, First Aid Supply, Survival &amp; Emergency Gear: Welcome to First-Aid-Product.com! OSHA 1st Aid, Safety + More",featured:!1,icon:"fab fa-linkedin-in fa-lg",img:"/images/jpg/first-aid-product.jpg",imgalt:"/images/jpg/first-aid-product.jpg",live:"https://first-aid-product.com/",title:"First Aid Product\u2122"},{author:"Adam Funk",description:"FirstAidMart.com | First Aid Kits &amp; Supplies, CPR, Disaster Survival Preparedness and Safety | FirstAidMart.com",featured:!1,icon:"fab fa-linkedin-in fa-lg",img:"/images/jpg/first-aid-mart.jpg",imgalt:"/images/jpg/first-aid-mart.jpg",live:"https://firstaidmart.com/",title:"First Aid Mart\u2122"},{author:"Adam Funk",description:"First Aid Store\u2122 - First Aid Kits, Bags, First Aid Supplies &amp; Packs at FirstAidStore.com",featured:!1,icon:"fab fa-linkedin-in fa-lg",img:"/images/jpg/first-aid-store.jpg",imgalt:"/images/jpg/first-aid-store.jpg",live:"https://first-aid-store.com/",title:"First Aid Store\u2122"},{author:"Adam Funk",description:"American CPR Training\xae | The low cost CPR &amp; First Aid Safety Training Classes Alternative! \xbd the Time, \xbd the Price, and TWICE the Fun!\u2122",featured:!1,icon:"fab fa-linkedin-in fa-lg",img:"/images/jpg/american-cpr-training.jpg",imgalt:"/images/jpg/american-cpr-training.jpg",live:"https://americancpr.com/",title:"American CPR Training\xae"},{author:"Adam Funk",description:"Day care business site.",featured:!1,icon:"fab fa-linkedin-in fa-lg",img:"/images/webp/FFCC.webp",imgalt:"/images/png/FFCC.png",link:"https://github.com/funkaj/funk-family-daycare",live:"https://funk-family-childcare.netlify.com/",title:"Funk Family Child Care"},{author:"Adam Funk",description:"A Online 2-player browser based game. Players take turns choosing 1 of 4 numbers hidden under crystals. Their score and the total update. The numbers under the crystals do not change, but will remain hidden. So try and remember where they are. Once a player selection breaks the target number that player losses and the game ends.",featured:!1,icon:"fab fa-linkedin-in fa-lg",img:"/images/webp/crystalMadness.webp",imgalt:"/images/png/crystalMadness.png",link:"https://github.com/funkaj/crystal-madness-socketio",live:"https://crystal-madness-2.herokuapp.com/",title:"Crystal Madness"},{author:"Adam Funk",description:"A npm package that will return a random name of a crystal. I made this for use with the game Crystal Madness. I wanted a easy way to reuse the functionality in other apps as it may come up. I took the opportunity to learn the dev environment for npm.",featured:!1,icon:"fab fa-linkedin-in fa-lg",img:"/images/webp/random-crystal-generator.webp",imgalt:"/images/png/random-crystal-generator.png",link:"https://github.com/funkaj/random-crystal-generator",live:"https://www.npmjs.com/package/random-crystal-generator",title:"Random Crystal Name Generator"},{author:"SDTH",description:"I have contributed CSS refactoring to this open source project. San Diego Tech Hub represents a movement aimed at changing the perception of the San Diego tech ecosystem. Our focus is to be a conduit for change connecting businesses, organizations, and individuals, leveraging their resources and talents to build a stronger San Diego tech community through collaboration.",featured:!1,icon:"fab fa-linkedin-in fa-lg",img:"/images/webp/sdth1.webp",imgalt:"/images/png/sdth1.png",link:"https://github.com/san-diego-tech-hub/sdth-site",live:"https://www.sandiegotechhub.com/",title:"San Diego Tech Hub"},{author:"Adam Funk, Jesse Loftus, Jordon, Silver, Phillip",description:"JobPiper is a job assistant to make the job search process simple and easy to do. Tech Stack (MERN) MongoDB, Express.js, React.js, Node JS, ES6, HTML5, CSS3, Material UI, Material Design, Firebase, Fuse.js, Mongoose.js, Cheerio.js, Axios",icon:"fab fa-linkedin-in fa-lg",img:"/images/gif/jobpiper.gif",imgalt:"/images/gif/jobpiper.gif",link:"https://github.com/ScriptKiddie1337/JobPiper.io",live:"https://job-piper.herokuapp.com/",title:"Job Piper"},{author:"Adam, Jesse",description:"Dynamite Kitchen Supplier (DkS) is a full-stack web-app that will allow for role based users to input orders for purchase using a restaurant kitchen as its model. The app allow's for a seperation of roles each with their own set of privileges and access. Users will need to login or create a new user which will be stored in the database.",icon:"fab fa-linkedin-in fa-lg",img:"/images/webp/plate1.webp",imgalt:"/images/png/chef.png",link:"https://github.com/funkaj/Dynamite-Kitchen-Supplies",live:"https://serene-forest-68972.herokuapp.com/",title:"Dynamite Kitchen Supplies"},{author:"Adam Funk",description:"A tool to collect all the news, fiction, and resources for Legends of the Five Rings from FFG. Consolidating it into one feed for me.",icon:"fab fa-linkedin-in fa-lg",img:"/images/webp/L5R.webp",imgalt:"/images/png/L5R.png",link:"https://l5rscrapper.herokuapp.com/",live:"https://github.com/funkaj/l5rnews",title:"L5R News"},{author:"Adam",description:"A NodeJS terminal based fighting game.",icon:"fab fa-linkedin-in fa-lg",img:"/images/gif/raccoon-demo.gif",imgalt:"/images/gif/raccoon-demo.gif",link:"https://github.com/funkaj/Raccoon-Fighter",live:"https://github.com/funkaj/Raccoon-Fighter",title:"Raccoon Fighter!"},{author:"Adam",description:"Web page that searches the Giphy API for user queryed gif. Built for practice using API in web development.",icon:"fab fa-linkedin-in fa-lg",img:"/images/png/gifapalooza.png",imgalt:"/images/png/gifapalooza.png",link:"https://github.com/funkaj/Gifapalooza",live:"https://funkaj.github.io/Gifapalooza/",title:"Gifapalooza"},{author:"Adam",description:"A full-stack site will take in results from your users surveys, then compare their answers with those stored in an array. The app will then display the name and picture of the user with the best overall match, and add the user to the array for future visits.",featured:!1,icon:"fab fa-linkedin-in fa-lg",img:"/images/webp/friend_finder01.webp",imgalt:"/images/png/friend_finder01.png",link:"https://github.com/funkaj/FriendFinder",live:"https://blooming-anchorage-67787.herokuapp.com/",title:"Friend Finder"},{author:"Adam",description:"LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.",icon:"fab fa-linkedin-in fa-lg",img:"/images/png/liri-node-app.png",imgalt:"/images/png/liri-node-app.png",link:"https://github.com/funkaj/liri-node-app",live:"https://github.com/funkaj/liri-node-app",title:"Liri-app"},{author:"Adam, Jesse",description:"A travel site to suggest activities located around chosen destinations. Includes attractions, lodging, and weather forecast.",featured:!1,icon:"fab fa-linkedin-in fa-lg",img:"/images/webp/destinator.webp",imgalt:"/images/png/destinator.png",link:"https://github.com/funkaj/TheDestinator",live:"https://loftusjl.github.io/TheDestinator/",title:"The-Destinator"},{author:"Adam Funk",description:"A matching game made for UCSD Bootcamp. User is given a random target number (between 19-120) to meet not exceed. The four crystals are given random numbers(between 1-12) with no duplicates. User must click on crystals to update Player Total and remember what the number under each crystal is. If they meet the target they win, if they go over they lose. Win/Lose counter updates and A new Target Number/Crystals are selected. Player continues for as long as they like.",featured:!1,icon:"fab fa-linkedin-in fa-lg",img:"/images/webp/crystalGame.webp",imgalt:"/images/png/crystalGame.png",link:"https://github.com/funkaj/Crystal-Madness",live:"https://funkaj.github.io/Crystal-Madness/",title:"Crystal Madness"}],I=[{art:!0,author:"Adam Funk",featured:!1,img:"/images/webp/ninja1.webp",imgalt:"/images/png/ninja1.png",title:"Ninja"},{art:!0,author:"Adam",featured:!1,img:"/images/webp/Dreamland.webp",imgalt:"/images/png/Dreamland.png",title:"Gyles"},{art:!0,author:"Adam Funk",featured:!1,img:"/images/webp/rufus1.webp",imgalt:"/images/png/rufus1.png",title:"Rufus"},{art:!0,author:"Adam",featured:!1,img:"/images/webp/riddle1.webp",imgalt:"/images/png/riddle1.png",title:"The Riddler"},{art:!0,author:"Adam",featured:!1,img:"/images/gif/Anger_1_adam.gif",imgalt:"/images/gif/Anger_1_adam.gif",title:"Anger"},{art:!0,author:"Adam Funk",featured:!1,img:"/images/webp/girlcolor1.webp",imgalt:"/images/png/girlcolor1.png",title:"Watercolor"},{art:!0,author:"Adam, Evan",featured:!1,img:"/images/webp/Gorgon_Berry_Funk1.webp",imgalt:"/images/png/Gorgon_Berry_Funk1.png",title:"Medusa"},{art:!0,author:"Adam Funk",featured:!1,img:"/images/webp/Sub-Zero.webp",imgalt:"/images/png/Sub-Zero.png",title:"Sub Zero"},{art:!0,author:"Adam",featured:!1,img:"/images/webp/kimono1.webp",imgalt:"/images/png/kimono1.png",title:"Kimono"}],R=[{icon:"fab fa-github-alt fa-2x",link:"https://github.com/funkaj",name:"GitHub",type:"github"},{icon:"fab fa-linkedin-in fa-2x",link:"https://www.linkedin.com/in/adam-funk-5831b8152/",name:"LinkedIn",type:"linkedIn"},{icon:"fas fa-envelope fa-2x",link:"mailto:b.kimate@gmail.com?Subject=Hello%20Adam",name:"Email",type:"email"},{icon:"fas fa-download fa-2x",link:"/images/resume/AdamFunkResume.pdf",name:"Resume",type:"resume"}];var T=function(e){var t=e.linkData;return Object(x.jsx)("div",{children:Object(x.jsx)(k.a,{className:"link-btn",href:t.link,target:"blank",children:Object(x.jsx)("i",{className:"".concat(t.icon," ").concat(t.name)})})})};a(88);function W(e){return Object(x.jsxs)("div",{id:"icon-container",children:[Object(x.jsx)(T,{linkData:e.linkData[0]}),Object(x.jsx)(T,{linkData:e.linkData[1]}),Object(x.jsx)(T,{linkData:e.linkData[2],target:"_top"}),Object(x.jsx)(T,{linkData:e.linkData[3]})]})}var M=a(144),G=a(145);a(89);var B=Object(v.a)({})((function(e){var t=e.classes,a=e.value;return Object(x.jsxs)(M.a,{id:"bottom-mobile-nav",value:a,onChange:e.handleLink,showLabels:!0,className:t.root,children:[Object(x.jsx)(G.a,{label:"Github",icon:Object(x.jsx)(T,{id:"bottomGithub",linkData:e.linkData[0]})}),Object(x.jsx)(G.a,{label:"LinkedIn",icon:Object(x.jsx)(T,{id:"bottomLinkedIn",linkData:e.linkData[1]})}),Object(x.jsx)(G.a,{label:"Email",id:"bottomContact",icon:Object(x.jsx)(T,{id:"bottomContact",linkData:e.linkData[2],target:"_top"})}),Object(x.jsx)(G.a,{label:"Resume",icon:Object(x.jsx)(T,{id:"bottomResume",linkData:e.linkData[3],children:Object(x.jsx)("span",{className:"icon-title",children:"Resume"})})})]})})),E=a(62),H=a(149),_=a(151),J=a(146),K=a(61),U=a.n(K),z=a(147),Z=a(148);a(90);var q=Object(v.a)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})((function(e){var t=e.classes,a=n.a.useState(null),i=Object(E.a)(a,2),s=i[0],r=i[1];function l(){r(null)}function c(t){setTimeout((function(){e.handleSwitch&&e.handleSwitch(window.location.hash)}),10)}var d="primary-search-account-menu-mobile",m=Object(x.jsx)("div",{children:Object(x.jsx)(H.a,{id:d,anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:l,children:Object(x.jsxs)("div",{children:[Object(x.jsx)(o.b,{exact:!0,id:"home",className:"mobile-navLink-btn",activeClassName:"active",to:"/",children:Object(x.jsx)(_.a,{className:"menuBg",onClick:l,children:"Home"})}),Object(x.jsx)(o.b,{id:"illustration",className:"mobile-navLink-btn",activeClassName:"active",to:"/gallery/illustration",onClick:c,children:Object(x.jsx)(_.a,{className:"menuBg",onClick:l,children:"Illustration"})}),Object(x.jsx)(o.b,{id:"web-development",className:"mobile-navLink-btn",activeClassName:"active",to:"/gallery/web-development",onClick:c,children:Object(x.jsx)(_.a,{className:"menuBg",onClick:l,children:"Web Development"})})]})})});return Object(x.jsx)("div",{className:t.root,children:Object(x.jsx)(J.a,{id:"navBar",position:"static",children:Object(x.jsxs)(z.a,{className:"navLink",children:[Object(x.jsx)(Z.a,{id:"title",variant:"h3",className:t.grow,children:"Adam Funk"}),Object(x.jsxs)("div",{className:"sectionDesktop",children:[Object(x.jsx)(o.b,{exact:!0,id:"home",className:"navLink-btn",activeClassName:"active",to:"/",children:"Home"}),Object(x.jsx)(o.b,{id:"illustration",className:"navLink-btn",activeClassName:"active",to:"/gallery/illustration",onClick:c,children:"Illustration"}),Object(x.jsx)(o.b,{id:"web-development",className:"navLink-btn",activeClassName:"active",to:"/gallery/web-development",onClick:c,children:"Web Development"})]}),Object(x.jsx)("div",{className:"sectionMobile",children:Object(x.jsx)(k.a,{"aria-label":"Show more","aria-controls":d,"aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},color:"inherit",children:Object(x.jsx)(U.a,{})})}),m]})})})})),$=(a.p,a(96),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={linkData:R},e}return Object(g.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(q,{handleSwitch:this.props.handleSwitch}),Object(x.jsx)(W,{linkData:this.state.linkData}),Object(x.jsx)(B,{handleLink:this.handleLink,linkData:this.state.linkData,value:this.state.value})]})}}]),a}(i.Component)),Q=(a(97),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:"",hasWebP:!0,images:"",load:!1,pageLink:"",title:"",value:0},e.handleLink=function(t,a){e.setState({value:a})},e.handleSwitch=function(t){var a=window.location.hash;"#/gallery/illustration"===a&&(e.setState({load:!1}),e.setState({data:I}),e.setState({pageLink:"illustration"}),e.setState({title:"Illustration"})),"#/gallery/web-development"===a&&(e.setState({load:!0}),e.setState({data:P}),e.setState({pageLink:"web-development"}),e.setState({title:"Web Development"}))},e}return Object(g.a)(a,[{key:"componentWillMount",value:function(){var e,t=this.state;!function(){var e=new Image;e.onload=function(){t.hasWebP=!0},e.onerror=function(){t.hasWebP=!1},e.src="http://www.gstatic.com/webp/gallery/1.webp"}(),"#/gallery/illustration"===(e=window.location.hash)?(t.load=!1,t.data=I,t.pageLink="illustration",t.title="Illustration"):"#/gallery/web-development"===e&&(t.load=!0,t.data=P,t.pageLink="web-development",t.title="Web Development")}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)($,{handleSwitch:this.handleSwitch}),Object(x.jsxs)("div",{id:"wrapper",children:[Object(x.jsx)(S,{hasWebP:this.state.hasWebP,tileData:this.state.data,load:this.state.load,linkData:this.state.linkData}),Object(x.jsx)(L,{})]})]})}}]),a}(i.Component)),V=(a(98),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)($,{}),Object(x.jsxs)("div",{id:"mainImg",children:[Object(x.jsx)(C.a,{children:Object(x.jsx)(N,{src:"/images/jpg/ninja1.jpg",alt:"Illustration of Ninja by Adam Funk"})}),Object(x.jsxs)("div",{id:"brand",children:[Object(x.jsx)("div",{className:"name",children:"Adam"}),Object(x.jsx)("div",{className:"name",children:"Funk"}),Object(x.jsx)("div",{className:"title",children:"Illustrator / Web Development"})]})]})]})}}]),a}(i.Component)),X=(a(99),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)($,{}),Object(x.jsx)("div",{class:"FoFWrapper",children:Object(x.jsxs)("div",{id:"FourOFour",children:[Object(x.jsx)("p",{children:"404"}),Object(x.jsx)("p",{id:"FoFText",children:"Sorry we can't find that page."}),Object(x.jsx)(o.b,{id:"return-button",to:"/",children:"Return Home"})]})})]})}}]),a}(i.Component)),Y=(a(100),Object(x.jsx)(o.a,{basename:"/",children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/",component:V}),Object(x.jsx)(l.a,{path:"/index",component:V}),Object(x.jsx)(l.a,{path:"/gallery/illustration",component:Q}),Object(x.jsx)(l.a,{path:"/gallery/web-development",component:Q}),Object(x.jsx)(l.a,{component:X})]})}));r.a.render(Y,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");c?(!function(e,t){fetch(e).then((function(a){var i=a.headers.get("content-type");404===a.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(t,e)}))}}()},73:function(e,t,a){},83:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.8e0896be.chunk.js.map