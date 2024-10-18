import{_ as k,u as w,r as f,o as s,c as n,a as i,w as d,b as m,t as a,d as u,e as b,v as P,f as o,F as S,g as M,h as $,i as D,T as x,j as E}from"./index-CH0nNQnY.js";const N={data(){return{show:!0,settings:{},settingsLoaded:!1}},computed:{currentPage(){let t=w().path.split("/"),e=t[t.length-1];return!e||e==="settings"?null:e},showSubMenu(){return this.$root.isMobile?!this.currentPage:!0},subMenus(){return{general:{title:this.$t("General")},appearance:{title:this.$t("Appearance")},notifications:{title:this.$t("Notifications")},"reverse-proxy":{title:this.$t("Reverse Proxy")},tags:{title:this.$t("Tags")},"monitor-history":{title:this.$t("Monitor History")},"docker-hosts":{title:this.$t("Docker Hosts")},"remote-browsers":{title:this.$t("Remote Browsers")},security:{title:this.$t("Security")},"api-keys":{title:this.$t("API Keys")},proxies:{title:this.$t("Proxies")},about:{title:this.$t("About")}}}},watch:{"$root.isMobile"(){this.loadGeneralPage()}},mounted(){this.loadSettings(),this.loadGeneralPage()},methods:{loadGeneralPage(){!this.currentPage&&!this.$root.isMobile&&this.$router.push("/settings/general")},loadSettings(){this.$root.getSocket().emit("getSettings",t=>{this.settings=t.data,this.settings.checkUpdate===void 0&&(this.settings.checkUpdate=!0),this.settings.searchEngineIndex===void 0&&(this.settings.searchEngineIndex=!1),this.settings.entryPage===void 0&&(this.settings.entryPage="dashboard"),this.settings.nscd===void 0&&(this.settings.nscd=!0),this.settings.keepDataPeriodDays===void 0&&(this.settings.keepDataPeriodDays=180),this.settings.tlsExpiryNotifyDays===void 0&&(this.settings.tlsExpiryNotifyDays=[7,14,21]),this.settings.trustProxy===void 0&&(this.settings.trustProxy=!1),this.settingsLoaded=!0})},saveSettings(t,e){let h=this.validateSettings();h.success?this.$root.getSocket().emit("setSettings",this.settings,e,p=>{this.$root.toastRes(p),this.loadSettings(),t&&t()}):this.$root.toastError(h.msg)},validateSettings(){return this.settings.keepDataPeriodDays<0?{success:!1,msg:this.$t("dataRetentionTimeError")}:{success:!0,msg:""}}}},B={key:0,class:"shadow-box mb-3"},C={class:"shadow-box shadow-box-settings"},I={class:"row"},L={key:0,class:"settings-menu col-lg-3 col-md-5"},R={class:"menu-item"},T={class:"menu-item"},G={class:"settings-content col-lg-9 col-md-7"},V={key:0,class:"settings-content-header"},A={class:"mx-3"};function F(t,e,h,p,v,r){const c=f("font-awesome-icon"),g=f("router-link"),y=f("router-view");return s(),n("div",null,[t.$root.isMobile?(s(),n("div",B,[i(g,{to:"/manage-status-page",class:"nav-link"},{default:d(()=>[i(c,{icon:"stream"}),m(" "+a(t.$t("Status Pages")),1)]),_:1}),i(g,{to:"/maintenance",class:"nav-link"},{default:d(()=>[i(c,{icon:"wrench"}),m(" "+a(t.$t("Maintenance")),1)]),_:1})])):u("",!0),b(o("h1",{class:"mb-3"},a(t.$t("Settings")),513),[[P,v.show]]),o("div",C,[o("div",I,[r.showSubMenu?(s(),n("div",L,[(s(!0),n(S,null,M(r.subMenus,(l,_)=>(s(),$(g,{key:_,to:`/settings/${_}`},{default:d(()=>[o("div",R,a(l.title),1)]),_:2},1032,["to"]))),128)),t.$root.isMobile&&t.$root.loggedIn&&t.$root.socket.token!=="autoLogin"?(s(),n("a",{key:0,class:"logout",onClick:e[0]||(e[0]=D((...l)=>t.$root.logout&&t.$root.logout(...l),["prevent"]))},[o("div",T,[i(c,{icon:"sign-out-alt"}),m(" "+a(t.$t("Logout")),1)])])):u("",!0)])):u("",!0),o("div",G,[r.currentPage?(s(),n("div",V,a(r.subMenus[r.currentPage].title),1)):u("",!0),o("div",A,[i(y,null,{default:d(({Component:l})=>[i(x,{name:"slide-fade",appear:""},{default:d(()=>[(s(),$(E(l)))]),_:2},1024)]),_:1})])])])])])}const U=k(N,[["render",F],["__scopeId","data-v-82d84841"]]);export{U as default};
