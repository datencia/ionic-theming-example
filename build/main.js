webpackJsonp([0],{108:function(t,n){function e(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}e.keys=function(){return[]},(t.exports=e.resolve=e).id=108},129:function(t,n){function e(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}e.keys=function(){return[]},(t.exports=e.resolve=e).id=129},157:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=e(33),_=e(1),i=(e(43),e(69)),o=e(70),r=function(){return function(t){this.navCtrl=t}}(),a=function(){return function(t){this.navCtrl=t}}(),u=e(165),s=this&&this.__decorate||function(t,n,e,l){var _,i=arguments.length,o=i<3?n:null===l?l=Object.getOwnPropertyDescriptor(n,e):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,n,e,l);else for(var r=t.length-1;0<=r;r--)(_=t[r])&&(o=(i<3?_(o):3<i?_(n,e,o):_(n,e))||o);return 3<i&&o&&Object.defineProperty(n,e,o),o},h=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},c=function(){function t(){this.theme=new u.BehaviorSubject("dark-theme")}return t.prototype.setActiveTheme=function(t){this.theme.next(t)},t.prototype.getActiveTheme=function(){return this.theme.asObservable()},t}();c=s([Object(_.p)(),h("design:paramtypes",[])],c);var p=function(){function t(t,n){var e=this;this.navCtrl=t,this.settings=n,this.settings.getActiveTheme().subscribe(function(t){return e.selectedTheme=t})}return t.prototype.toggleAppTheme=function(){this.settings.setActiveTheme("dark-theme"===this.selectedTheme?"light-theme":"dark-theme")},t}(),f=function(){return function(){this.tab1Root=p,this.tab2Root=r,this.tab3Root=a}}(),b=function(){return function(t,n,e,l){var _=this;this.settings=l,this.rootPage=f,this.settings.getActiveTheme().subscribe(function(t){return _.selectedTheme=t}),t.ready().then(function(){n.styleDefault(),e.hide()})}}(),d=function(){return function(){}}(),g=e(24),y=e(122),m=e(9),P=e(45),E=e(8),S=e(17),A=e(89),T=e(124),C=e(123),I=e(88),k=e(85),D=e(39),w=e(64),R=e(22),M=e(84),O=e(23),L=e(431),v=e(432),j=e(63),F=e(12),N=e(18),H=e(3),G=e(7),z=e(20),U=e(31),B=_._2({encapsulation:2,styles:[],data:{}});function V(t){return _._22(0,[(t()(),_._4(0,null,null,2,"ion-nav",[],[[8,"className",0]],null,null,v.b,v.a)),_._3(4374528,null,0,j.a,[[2,F.a],[2,N.a],E.a,H.a,G.a,_.k,_.y,_.E,_.j,S.e,O.a,[2,z.a],m.a,_.l],{root:[0,"root"]},null),_._18(6144,null,U.a,null,[j.a]),(t()(),_._21(null,["\n"]))],function(t,n){t(n,1,0,n.component.rootPage)},function(t,n){t(n,0,0,n.component.selectedTheme)})}var K=_._1("ng-component",b,function(t){return _._22(0,[(t()(),_._4(0,null,null,1,"ng-component",[],null,null,null,V,B)),_._3(49152,null,0,b,[G.a,i.a,o.a,c],null,null)],null,null)},{},{},[]),x=e(48),Z=e(95),Y=e(32),q=e(96),J=e(41),W=e(37),Q=e(97),X=e(36),$=_._2({encapsulation:2,styles:[],data:{}});function tt(t){return _._22(0,[(t()(),_._4(0,null,null,10,"ion-header",[],null,null,null,null,null)),_._3(16384,null,0,x.a,[H.a,_.k,_.E,[2,F.a]],null,null),(t()(),_._21(null,["\n  "])),(t()(),_._4(0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Z.b,Z.a)),_._3(49152,null,0,Y.a,[E.a,[2,F.a],[2,N.a],H.a,_.k,_.E],null,null),(t()(),_._21(3,["\n    "])),(t()(),_._4(0,null,3,2,"ion-title",[],null,null,null,q.b,q.a)),_._3(49152,null,0,J.a,[H.a,_.k,_.E,[2,W.a],[2,Y.a]],null,null),(t()(),_._21(0,["\n      About\n    "])),(t()(),_._21(3,["\n  "])),(t()(),_._21(null,["\n"])),(t()(),_._21(null,["\n\n"])),(t()(),_._4(0,null,null,2,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,Q.b,Q.a)),_._3(4374528,null,0,X.a,[H.a,G.a,m.a,_.k,_.E,E.a,R.a,_.y,[2,F.a],[2,N.a]],null,null),(t()(),_._21(1,["\n\n"])),(t()(),_._21(null,["\n"]))],null,function(t,n){t(n,3,0,_._16(n,4)._hidden,_._16(n,4)._sbPadding),t(n,12,0,_._16(n,13).statusbarPadding,_._16(n,13)._hasRefresher)})}var nt=_._1("page-about",r,function(t){return _._22(0,[(t()(),_._4(0,null,null,1,"page-about",[],null,null,null,tt,$)),_._3(49152,null,0,r,[N.a],null,null)],null,null)},{},{},[]),et=e(82),lt=e(433),_t=e(62),it=e(47),ot=e(83),rt=e(81),at=e(30),ut=_._2({encapsulation:2,styles:[],data:{}});function st(t){return _._22(0,[(t()(),_._4(0,null,null,10,"ion-header",[],null,null,null,null,null)),_._3(16384,null,0,x.a,[H.a,_.k,_.E,[2,F.a]],null,null),(t()(),_._21(null,["\n  "])),(t()(),_._4(0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Z.b,Z.a)),_._3(49152,null,0,Y.a,[E.a,[2,F.a],[2,N.a],H.a,_.k,_.E],null,null),(t()(),_._21(3,["\n    "])),(t()(),_._4(0,null,3,2,"ion-title",[],null,null,null,q.b,q.a)),_._3(49152,null,0,J.a,[H.a,_.k,_.E,[2,W.a],[2,Y.a]],null,null),(t()(),_._21(0,["\n      Contact\n    "])),(t()(),_._21(3,["\n  "])),(t()(),_._21(null,["\n"])),(t()(),_._21(null,["\n\n"])),(t()(),_._4(0,null,null,25,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,Q.b,Q.a)),_._3(4374528,null,0,X.a,[H.a,G.a,m.a,_.k,_.E,E.a,R.a,_.y,[2,F.a],[2,N.a]],null,null),(t()(),_._21(1,["\n  "])),(t()(),_._4(0,null,1,21,"ion-list",[],null,null,null,null,null)),_._3(16384,null,0,et.a,[H.a,_.k,_.E,G.a,S.e,m.a],null,null),(t()(),_._21(null,["\n    "])),(t()(),_._4(0,null,null,6,"ion-list-header",[["class","item"]],null,null,null,lt.b,lt.a)),_._3(1097728,null,3,_t.a,[D.a,H.a,_.k,_.E,[2,it.a]],null,null),_._19(335544320,1,{contentLabel:0}),_._19(603979776,2,{_buttons:1}),_._19(603979776,3,{_icons:1}),_._3(16384,null,0,ot.a,[H.a,_.E,_.k,[8,null]],null,null),(t()(),_._21(2,["Follow us on Twitter"])),(t()(),_._21(null,["\n    "])),(t()(),_._4(0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,lt.b,lt.a)),_._3(1097728,null,3,_t.a,[D.a,H.a,_.k,_.E,[2,it.a]],null,null),_._19(335544320,4,{contentLabel:0}),_._19(603979776,5,{_buttons:1}),_._19(603979776,6,{_icons:1}),_._3(16384,null,0,rt.a,[],null,null),(t()(),_._21(2,["\n      "])),(t()(),_._4(0,null,0,1,"ion-icon",[["item-left",""],["name","ionic"],["role","img"]],[[2,"hide",null]],null,null,null,null)),_._3(147456,[[6,4]],0,at.a,[H.a,_.k,_.E],{name:[0,"name"]},null),(t()(),_._21(2,["\n      @ionicframework\n    "])),(t()(),_._21(null,["\n  "])),(t()(),_._21(1,["\n"])),(t()(),_._21(null,["\n"]))],function(t,n){t(n,34,0,"ionic")},function(t,n){t(n,3,0,_._16(n,4)._hidden,_._16(n,4)._sbPadding),t(n,12,0,_._16(n,13).statusbarPadding,_._16(n,13)._hasRefresher),t(n,33,0,_._16(n,34)._hidden)})}var ht=_._1("page-contact",a,function(t){return _._22(0,[(t()(),_._4(0,null,null,1,"page-contact",[],null,null,null,st,ut)),_._3(49152,null,0,a,[N.a],null,null)],null,null)},{},{},[]),ct=e(156),pt=e(38),ft=_._2({encapsulation:2,styles:[],data:{}});function bt(t){return _._22(0,[(t()(),_._4(0,null,null,10,"ion-header",[],null,null,null,null,null)),_._3(16384,null,0,x.a,[H.a,_.k,_.E,[2,F.a]],null,null),(t()(),_._21(null,["\n  "])),(t()(),_._4(0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Z.b,Z.a)),_._3(49152,null,0,Y.a,[E.a,[2,F.a],[2,N.a],H.a,_.k,_.E],null,null),(t()(),_._21(3,["\n    "])),(t()(),_._4(0,null,3,2,"ion-title",[],null,null,null,q.b,q.a)),_._3(49152,null,0,J.a,[H.a,_.k,_.E,[2,W.a],[2,Y.a]],null,null),(t()(),_._21(0,["Night & Day"])),(t()(),_._21(3,["\n  "])),(t()(),_._21(null,["\n"])),(t()(),_._21(null,["\n\n"])),(t()(),_._4(0,null,null,24,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,Q.b,Q.a)),_._3(4374528,null,0,X.a,[H.a,G.a,m.a,_.k,_.E,E.a,R.a,_.y,[2,F.a],[2,N.a]],null,null),(t()(),_._21(1,["\n  "])),(t()(),_._4(0,null,1,1,"h2",[],null,null,null,null,null)),(t()(),_._21(null,["Welcome to Ionic!"])),(t()(),_._21(1,["\n  "])),(t()(),_._4(0,null,1,1,"p",[],null,null,null,null,null)),(t()(),_._21(null,["\n    This demo project shows how theming your Ionic app.\n  "])),(t()(),_._21(1,["\n  "])),(t()(),_._4(0,null,1,4,"p",[],null,null,null,null,null)),(t()(),_._21(null,["\n    Take a look at "])),(t()(),_._4(0,null,null,1,"a",[["href","https://devdactic.com/dynamic-theming-ionic/"]],null,null,null,null,null)),(t()(),_._21(null,["Dynamic Theming Your Ionic App"])),(t()(),_._21(null,["\n    post to learn how to theming your Ionic app.\n  "])),(t()(),_._21(1,["\n  "])),(t()(),_._4(0,null,1,1,"p",[["text-center",""]],null,null,null,null,null)),(t()(),_._21(null,["I shine at night and glow at day."])),(t()(),_._21(1,["\n  "])),(t()(),_._4(0,null,1,5,"button",[["full",""],["icon-left",""],["ion-button",""]],null,[[null,"click"]],function(t,n,e){var l=!0;"click"===n&&(l=!1!==t.component.toggleAppTheme()&&l);return l},ct.b,ct.a)),_._3(1097728,null,0,pt.a,[[8,""],H.a,_.k,_.E],{full:[0,"full"]},null),(t()(),_._21(0,["\n    "])),(t()(),_._4(0,null,0,1,"ion-icon",[["name","bulb"],["role","img"]],[[2,"hide",null]],null,null,null,null)),_._3(147456,null,0,at.a,[H.a,_.k,_.E],{name:[0,"name"]},null),(t()(),_._21(0,["Toggle Theme\n  "])),(t()(),_._21(1,["\n"])),(t()(),_._21(null,["\n"]))],function(t,n){t(n,31,0,"");t(n,34,0,"bulb")},function(t,n){t(n,3,0,_._16(n,4)._hidden,_._16(n,4)._sbPadding),t(n,12,0,_._16(n,13).statusbarPadding,_._16(n,13)._hasRefresher),t(n,33,0,_._16(n,34)._hidden)})}var dt=_._1("page-home",p,function(t){return _._22(0,[(t()(),_._4(0,null,null,1,"page-home",[],null,null,null,bt,ft)),_._3(49152,null,0,p,[N.a,c],null,null)],null,null)},{},{},[]),gt=e(434),yt=e(40),mt=e(435),Pt=e(65),Et=_._2({encapsulation:2,styles:[],data:{}});function St(t){return _._22(0,[(t()(),_._4(0,null,null,12,"ion-tabs",[],null,null,null,gt.b,gt.a)),_._3(4374528,null,0,yt.a,[[2,N.a],[2,F.a],E.a,H.a,_.k,G.a,_.E,z.a,R.a],null,null),_._18(6144,null,U.a,null,[yt.a]),(t()(),_._21(0,["\n  "])),(t()(),_._4(0,null,0,1,"ion-tab",[["role","tabpanel"],["tabIcon","home"],["tabTitle","Home"]],[[1,"id",0],[1,"aria-labelledby",0]],null,null,mt.b,mt.a)),_._3(245760,null,0,Pt.a,[yt.a,E.a,H.a,G.a,_.k,_.y,_.E,_.j,_.h,S.e,O.a,[2,z.a],m.a,_.l],{root:[0,"root"],tabTitle:[1,"tabTitle"],tabIcon:[2,"tabIcon"]},null),(t()(),_._21(0,["\n  "])),(t()(),_._4(0,null,0,1,"ion-tab",[["role","tabpanel"],["tabIcon","information-circle"],["tabTitle","About"]],[[1,"id",0],[1,"aria-labelledby",0]],null,null,mt.b,mt.a)),_._3(245760,null,0,Pt.a,[yt.a,E.a,H.a,G.a,_.k,_.y,_.E,_.j,_.h,S.e,O.a,[2,z.a],m.a,_.l],{root:[0,"root"],tabTitle:[1,"tabTitle"],tabIcon:[2,"tabIcon"]},null),(t()(),_._21(0,["\n  "])),(t()(),_._4(0,null,0,1,"ion-tab",[["role","tabpanel"],["tabIcon","contacts"],["tabTitle","Contact"]],[[1,"id",0],[1,"aria-labelledby",0]],null,null,mt.b,mt.a)),_._3(245760,null,0,Pt.a,[yt.a,E.a,H.a,G.a,_.k,_.y,_.E,_.j,_.h,S.e,O.a,[2,z.a],m.a,_.l],{root:[0,"root"],tabTitle:[1,"tabTitle"],tabIcon:[2,"tabIcon"]},null),(t()(),_._21(0,["\n"])),(t()(),_._21(null,["\n"]))],function(t,n){var e=n.component;t(n,5,0,e.tab1Root,"Home","home");t(n,8,0,e.tab2Root,"About","information-circle");t(n,11,0,e.tab3Root,"Contact","contacts")},function(t,n){t(n,4,0,_._16(n,5)._tabId,_._16(n,5)._btnId),t(n,7,0,_._16(n,8)._tabId,_._16(n,8)._btnId),t(n,10,0,_._16(n,11)._tabId,_._16(n,11)._btnId)})}var At,Tt=_._1("ng-component",f,function(t){return _._22(0,[(t()(),_._4(0,null,null,1,"ng-component",[],null,null,null,St,Et)),_._3(49152,null,0,f,[],null,null)],null,null)},{},{},[]),Ct=e(46),It=e(86),kt=e(128),Dt=e(87),wt=e(44),Rt=this&&this.__extends||(At=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])},function(t,n){function e(){this.constructor=t}At(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),Mt=function(n){function t(t){return n.call(this,t,[L.a,K,nt,ht,dt,Tt],[L.a])||this}return Rt(t,n),Object.defineProperty(t.prototype,"_LOCALE_ID_25",{get:function(){return null==this.__LOCALE_ID_25&&(this.__LOCALE_ID_25=_._14(this.parent.get(_.u,null))),this.__LOCALE_ID_25},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgLocalization_26",{get:function(){return null==this.__NgLocalization_26&&(this.__NgLocalization_26=new g.i(this._LOCALE_ID_25)),this.__NgLocalization_26},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_APP_ID_27",{get:function(){return null==this.__APP_ID_27&&(this.__APP_ID_27=_._6()),this.__APP_ID_27},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_IterableDiffers_28",{get:function(){return null==this.__IterableDiffers_28&&(this.__IterableDiffers_28=_._11()),this.__IterableDiffers_28},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_KeyValueDiffers_29",{get:function(){return null==this.__KeyValueDiffers_29&&(this.__KeyValueDiffers_29=_._13()),this.__KeyValueDiffers_29},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DomSanitizer_30",{get:function(){return null==this.__DomSanitizer_30&&(this.__DomSanitizer_30=new l.s(this.parent.get(l.b))),this.__DomSanitizer_30},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Sanitizer_31",{get:function(){return null==this.__Sanitizer_31&&(this.__Sanitizer_31=this._DomSanitizer_30),this.__Sanitizer_31},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_HAMMER_GESTURE_CONFIG_32",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_32&&(this.__HAMMER_GESTURE_CONFIG_32=new I.a),this.__HAMMER_GESTURE_CONFIG_32},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EVENT_MANAGER_PLUGINS_33",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_33&&(this.__EVENT_MANAGER_PLUGINS_33=[new l.l(this.parent.get(l.b)),new l.p(this.parent.get(l.b)),new l.o(this.parent.get(l.b),this._HAMMER_GESTURE_CONFIG_32)]),this.__EVENT_MANAGER_PLUGINS_33},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EventManager_34",{get:function(){return null==this.__EventManager_34&&(this.__EventManager_34=new l.e(this._EVENT_MANAGER_PLUGINS_33,this.parent.get(_.y))),this.__EventManager_34},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomSharedStylesHost_35",{get:function(){return null==this.__ɵDomSharedStylesHost_35&&(this.__ɵDomSharedStylesHost_35=new l.n(this.parent.get(l.b))),this.__ɵDomSharedStylesHost_35},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomRendererFactory2_36",{get:function(){return null==this.__ɵDomRendererFactory2_36&&(this.__ɵDomRendererFactory2_36=new l.m(this._EventManager_34,this._ɵDomSharedStylesHost_35)),this.__ɵDomRendererFactory2_36},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RendererFactory2_37",{get:function(){return null==this.__RendererFactory2_37&&(this.__RendererFactory2_37=this._ɵDomRendererFactory2_36),this.__RendererFactory2_37},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵSharedStylesHost_38",{get:function(){return null==this.__ɵSharedStylesHost_38&&(this.__ɵSharedStylesHost_38=this._ɵDomSharedStylesHost_35),this.__ɵSharedStylesHost_38},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Testability_39",{get:function(){return null==this.__Testability_39&&(this.__Testability_39=new _.M(this.parent.get(_.y))),this.__Testability_39},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Meta_40",{get:function(){return null==this.__Meta_40&&(this.__Meta_40=new l.h(this.parent.get(l.b))),this.__Meta_40},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Title_41",{get:function(){return null==this.__Title_41&&(this.__Title_41=new l.j(this.parent.get(l.b))),this.__Title_41},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵi_42",{get:function(){return null==this.__ɵi_42&&(this.__ɵi_42=new T.e),this.__ɵi_42},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_FormBuilder_43",{get:function(){return null==this.__FormBuilder_43&&(this.__FormBuilder_43=new T.a),this.__FormBuilder_43},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Events_48",{get:function(){return null==this.__Events_48&&(this.__Events_48=new k.a),this.__Events_48},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Form_49",{get:function(){return null==this.__Form_49&&(this.__Form_49=new D.a),this.__Form_49},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Haptic_50",{get:function(){return null==this.__Haptic_50&&(this.__Haptic_50=new w.a(this._Platform_4)),this.__Haptic_50},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Keyboard_51",{get:function(){return null==this.__Keyboard_51&&(this.__Keyboard_51=new R.a(this._Config_5,this._Platform_4,this.parent.get(_.y),this._DomController_6)),this.__Keyboard_51},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_LocationStrategy_53",{get:function(){return null==this.__LocationStrategy_53&&(this.__LocationStrategy_53=C.b(this.parent.get(g.l),this._APP_BASE_HREF_45,this._Config_5)),this.__LocationStrategy_53},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Location_54",{get:function(){return null==this.__Location_54&&(this.__Location_54=new g.d(this._LocationStrategy_53)),this.__Location_54},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_UrlSerializer_55",{get:function(){return null==this.__UrlSerializer_55&&(this.__UrlSerializer_55=Ct.d(this._App_8,this._DeepLinkConfigToken_10)),this.__UrlSerializer_55},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DeepLinker_56",{get:function(){return null==this.__DeepLinker_56&&(this.__DeepLinker_56=z.b(this._App_8,this._UrlSerializer_55,this._Location_54,this._ModuleLoader_13,this.componentFactoryResolver)),this.__DeepLinker_56},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_TapClick_60",{get:function(){return null==this.__TapClick_60&&(this.__TapClick_60=new M.a(this._Config_5,this._Platform_4,this._DomController_6,this._App_8,this._GestureController_9)),this.__TapClick_60},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_TransitionController_62",{get:function(){return null==this.__TransitionController_62&&(this.__TransitionController_62=new O.a(this._Platform_4,this._Config_5)),this.__TransitionController_62},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_StatusBar_63",{get:function(){return null==this.__StatusBar_63&&(this.__StatusBar_63=new i.a),this.__StatusBar_63},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_SplashScreen_64",{get:function(){return null==this.__SplashScreen_64&&(this.__SplashScreen_64=new o.a),this.__SplashScreen_64},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_SettingsProvider_65",{get:function(){return null==this.__SettingsProvider_65&&(this.__SettingsProvider_65=new c),this.__SettingsProvider_65},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new g.b,this._ErrorHandler_1=new y.a,this._ConfigToken_2=null,this._PlatformConfigToken_3=It.b(),this._Platform_4=G.b(this.parent.get(l.b),this._PlatformConfigToken_3,this.parent.get(_.y)),this._Config_5=H.c(this._ConfigToken_2,this._Platform_4),this._DomController_6=new m.a(this._Platform_4),this._MenuController_7=new P.a,this._App_8=new E.a(this._Config_5,this._Platform_4,this._MenuController_7),this._GestureController_9=new S.e(this._App_8),this._DeepLinkConfigToken_10=null,this._Compiler_11=new _.i,this._NgModuleLoader_12=new A.a(this._Compiler_11),this._ModuleLoader_13=kt.c(this._NgModuleLoader_12,this),this._APP_INITIALIZER_14=[_._17,l.r(this.parent.get(l.i,null),this.parent.get(_.x,null)),Dt.a(this._Config_5),k.b(this._Platform_4,this._DomController_6),M.b(this._Config_5,this._Platform_4,this._DomController_6,this._App_8,this._GestureController_9),kt.d(this._Config_5,this._DeepLinkConfigToken_10,this._ModuleLoader_13,this.parent.get(_.y))],this._ApplicationInitStatus_15=new _.d(this._APP_INITIALIZER_14),this._ɵf_16=new _._5(this.parent.get(_.y),this.parent.get(_.Y),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_15),this._ApplicationRef_17=this._ɵf_16,this._ApplicationModule_18=new _.e(this._ApplicationRef_17),this._BrowserModule_19=new l.a(this.parent.get(l.a,null)),this._ɵba_20=new T.d,this._FormsModule_21=new T.b,this._ReactiveFormsModule_22=new T.c,this._IonicModule_23=new C.a,this._AppModule_24=new d,this._AppRootToken_44=b,this._APP_BASE_HREF_45="/",this._AppModule_24},t.prototype.getInternal=function(t,n){return t===g.b?this._CommonModule_0:t===_.l?this._ErrorHandler_1:t===H.b?this._ConfigToken_2:t===It.a?this._PlatformConfigToken_3:t===G.a?this._Platform_4:t===H.a?this._Config_5:t===m.a?this._DomController_6:t===P.a?this._MenuController_7:t===E.a?this._App_8:t===S.e?this._GestureController_9:t===Ct.a?this._DeepLinkConfigToken_10:t===_.i?this._Compiler_11:t===A.a?this._NgModuleLoader_12:t===kt.b?this._ModuleLoader_13:t===_.c?this._APP_INITIALIZER_14:t===_.d?this._ApplicationInitStatus_15:t===_._5?this._ɵf_16:t===_.f?this._ApplicationRef_17:t===_.e?this._ApplicationModule_18:t===l.a?this._BrowserModule_19:t===T.d?this._ɵba_20:t===T.b?this._FormsModule_21:t===T.c?this._ReactiveFormsModule_22:t===C.a?this._IonicModule_23:t===d?this._AppModule_24:t===_.u?this._LOCALE_ID_25:t===g.j?this._NgLocalization_26:t===_.b?this._APP_ID_27:t===_.s?this._IterableDiffers_28:t===_.t?this._KeyValueDiffers_29:t===l.c?this._DomSanitizer_30:t===_.H?this._Sanitizer_31:t===l.f?this._HAMMER_GESTURE_CONFIG_32:t===l.d?this._EVENT_MANAGER_PLUGINS_33:t===l.e?this._EventManager_34:t===l.n?this._ɵDomSharedStylesHost_35:t===l.m?this._ɵDomRendererFactory2_36:t===_.F?this._RendererFactory2_37:t===l.q?this._ɵSharedStylesHost_38:t===_.M?this._Testability_39:t===l.h?this._Meta_40:t===l.j?this._Title_41:t===T.e?this._ɵi_42:t===T.a?this._FormBuilder_43:t===wt.a?this._AppRootToken_44:t===g.a?this._APP_BASE_HREF_45:t===k.a?this._Events_48:t===D.a?this._Form_49:t===w.a?this._Haptic_50:t===R.a?this._Keyboard_51:t===g.e?this._LocationStrategy_53:t===g.d?this._Location_54:t===Ct.b?this._UrlSerializer_55:t===z.a?this._DeepLinker_56:t===M.a?this._TapClick_60:t===O.a?this._TransitionController_62:t===i.a?this._StatusBar_63:t===o.a?this._SplashScreen_64:t===c?this._SettingsProvider_65:n},t.prototype.destroyInternal=function(){this._ɵf_16.ngOnDestroy(),this.__ɵDomSharedStylesHost_35&&this._ɵDomSharedStylesHost_35.ngOnDestroy()},t}(_.Z),Ot=new _.v(Mt,d);Object(_.S)(),Object(l.k)().bootstrapModuleFactory(Ot)}},[157]);