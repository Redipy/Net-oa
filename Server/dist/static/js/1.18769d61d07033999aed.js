webpackJsonp([1],{"6/tZ":function(t,e){},"6OzC":function(t,e){},BO1k:function(t,e,s){t.exports={default:s("fxRn"),__esModule:!0}},VSzX:function(t,e){},csSs:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("BO1k"),a=s.n(n),i=new(s("7+uW").default),o={name:"Header",data:function(){return{message:"",ismessage:!1,username:"admin!",collapse:!1}},methods:{collapseChage:function(){this.collapse=!this.collapse,i.$emit("collapse",this.collapse)},handleCommand:function(t){"logout"===t?(sessionStorage.removeItem("EX_token"),this.$router.push("/login")):"updetail"===t&&this.$router.push("/info")},tomessage:function(){this.message="",this.ismessage=!1,this.$router.push("/message")}},mounted:function(){var t=this;sessionStorage.getItem("EX_token")&&(this.username=JSON.parse(sessionStorage.getItem("EX_token")).user_name),this.$http.post(this.url+"/message/howmany",{user_id:JSON.parse(sessionStorage.getItem("EX_token")).user_id}).then(function(e){t.message=e.data,""!==t.message&&(t.ismessage=!0)}),console.log(this.message),console.log(this.ismessage)}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-header",[s("div",{staticClass:"headleft"},[s("span",{staticClass:"btn-collapse",attrs:{title:t.collapse?"展开侧边栏":"收起侧边栏"},on:{click:t.collapseChage}},[s("i",{staticClass:"el-icon-menu"})]),t._v(" "),s("span",[t._v("个人助理工具")])]),t._v(" "),s("div",{staticClass:"headright"},[s("div",{staticClass:"info"},[s("el-badge",{staticClass:"item",attrs:{"is-dot":this.ismessage}},[s("el-tooltip",{attrs:{placement:"left"}},[s("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.message?"有"+t.message+"条消息":"消息中心"))]),t._v(" "),s("i",{staticClass:"el-icon-message-solid",on:{click:function(e){return t.tomessage()}}})])],1)],1),t._v(" "),s("el-dropdown",{staticClass:"headerDropdown",attrs:{trigger:"click"},on:{command:t.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[t._v("\n        "+t._s(t.username)+"\n        "),s("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("a",{attrs:{href:"https://github.com/Redipy/Complete",target:"_blank"}},[s("el-dropdown-item",[t._v("项目仓库")])],1),t._v(" "),s("el-dropdown-item",{attrs:{divided:"",command:"updetail"}},[t._v("修改密码")]),t._v(" "),s("el-dropdown-item",{attrs:{divided:"",command:"logout"}},[t._v("退出登录")])],1)],1)],1)])},staticRenderFns:[]};var r={data:function(){return{isCollapse:!1,items:[{title:"系统首页",path:"/index",icon:"el-icon-house"},{title:"日历",path:"/date",icon:"el-icon-date"},{title:"我的任务",path:"/task",icon:"el-icon-notebook-2"},{title:"我的备忘录",path:"/noforget",icon:"el-icon-s-order"},{title:"我的信息",path:"/message",icon:"el-icon-message"},{title:"群组管理",path:"/group",icon:"el-icon-tickets"},{title:"修改密码",path:"/info",icon:"el-icon-info"}]}},methods:{},computed:{onRoutes:function(){return this.$route.fullPath}},created:function(){var t=this;i.$on("collapse",function(e){t.isCollapse=e})}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-aside",{attrs:{width:"200px",height:"100%"}},[s("el-menu",{attrs:{collapse:t.isCollapse,"default-active":t.onRoutes,"background-color":"#1e504f","text-color":"#ccc","active-text-color":"#3ebfb0","unique-opened":"",router:""}},[t._l(t.items,function(e){return[s("el-menu-item",{key:e.title,attrs:{index:e.path}},[s("i",{class:e.icon}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]})],2)],1)},staticRenderFns:[]};var u={name:"Tags",data:function(){return{tagList:[],collapse:!1,initTag:{title:"系统首页",path:"/index",name:"Home"}}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTag:function(t){var e=this.tagList.splice(t,1)[0],s=this.tagList[t]?this.tagList[t]:this.tagList[t-1];s?e.path===this.$route.fullPath&&this.$router.push(s.path):this.closeAll()},closeAll:function(){this.tagList=[this.initTag],this.$router.push("/index")},closeOther:function(){var t=this,e=this.tagList.filter(function(e){return e.path===t.$route.fullPath});this.tagList=e},setTag:function(t){var e=this;!this.tagList.some(function(t){return t.path===e.$route.fullPath})&&this.tagList.push({title:t.meta.title,path:t.fullPath,name:t.matched[1].components.default.name}),i.$emit("tags",this.tagList)},handleTag:function(t){"closeOther"===t?this.closeOther():this.closeAll()}},computed:{showTag:function(){return this.tagList.length>0}},watch:{$route:function(t){this.setTag(t)}},created:function(){this.setTag(this.$route)}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showTag?s("div",{staticClass:"main-tags"},[s("ul",{staticClass:"tag-list"},t._l(t.tagList,function(e,n){return s("li",{key:n,staticClass:"tag-item",class:{active:t.isActive(e.path)}},[s("router-link",{staticClass:"tag-item-title",attrs:{to:e.path}},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),s("i",{staticClass:"el-icon-close",on:{click:function(e){return t.closeTag(n)}}})],1)}),0),t._v(" "),s("el-dropdown",{staticClass:"tagsDropdown",on:{command:t.handleTag}},[s("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("\n      标签选项"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"closeOther"}},[t._v("关闭其他")]),t._v(" "),s("el-dropdown-item",{attrs:{command:"closeAll"}},[t._v("关闭所有")])],1)],1)],1):t._e()},staticRenderFns:[]};var d={name:"Base",components:{Header:s("VU/8")(o,l,!1,function(t){s("VSzX")},null,null).exports,Sidebar:s("VU/8")(r,c,!1,function(t){s("mSjf")},null,null).exports,Tags:s("VU/8")(u,h,!1,function(t){s("6/tZ")},null,null).exports},data:function(){return{collapse:!1,tagComponent:[]}},created:function(){var t=this;i.$on("collapse",function(e){t.collapse=e}),i.$on("tags",function(e){var s=!0,n=!1,i=void 0;try{for(var o,l=a()(e);!(s=(o=l.next()).done);s=!0){var r=o.value;r.name&&t.tagComponent.push(r.name)}}catch(t){n=!0,i=t}finally{try{!s&&l.return&&l.return()}finally{if(n)throw i}}})}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("Header"),this._v(" "),e("Sidebar"),this._v(" "),e("div",{staticClass:"main",style:{left:this.collapse?"64px":"200px"}},[e("Tags"),this._v(" "),e("keep-alive",{attrs:{include:this.tagComponent}},[e("router-view")],1)],1),this._v(" "),e("el-footer")],1)},staticRenderFns:[]};var m=s("VU/8")(d,p,!1,function(t){s("6OzC")},null,null);e.default=m.exports},fxRn:function(t,e,s){s("+tPU"),s("zQR9"),t.exports=s("g8Ux")},g8Ux:function(t,e,s){var n=s("77Pl"),a=s("3fs2");t.exports=s("FeBl").getIterator=function(t){var e=a(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},mSjf:function(t,e){}});
//# sourceMappingURL=1.18769d61d07033999aed.js.map