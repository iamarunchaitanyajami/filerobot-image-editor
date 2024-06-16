import _typeof from"@babel/runtime/helpers/typeof";import _toConsumableArray from"@babel/runtime/helpers/toConsumableArray";import _defineProperty from"@babel/runtime/helpers/defineProperty";import _slicedToArray from"@babel/runtime/helpers/slicedToArray";function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}import React,{memo,useCallback,useEffect,useState,useRef}from"react";import MainCanvas from"../MainCanvas";import{ROOT_CONTAINER_CLASS_NAME}from"../../utils/constants";import Topbar from"../Topbar";import Tabs from"../Tabs";import ToolsBar from"../ToolsBar";import{HIDE_LOADER,RESET,SET_FEEDBACK,SET_ORIGINAL_IMAGE,SET_SHOWN_TABS_MENU,SHOW_LOADER,UPDATE_STATE}from"../../actions";import FeedbackPopup from"../FeedbackPopup";import loadImage from"../../utils/loadImage";import{usePhoneScreen,useResizeObserver,useStore,useTransformedImgData}from"../../hooks";import Spinner from"../common/Spinner";import{getBackendTranslations}from"../../utils/translator";import cloudimageQueryToDesignState from"../../utils/cloudimageQueryToDesignState";import finetunesStrsToClasses from"../../utils/finetunesStrsToClasses";import filterStrToClass from"../../utils/filterStrToClass";import isSameImage from"../../utils/isSameImage";import useUpdateEffect from"../../hooks/useUpdateEffect";import TabsDrawer from"../TabsDrawer";import{StyledAppWrapper,StyledMainContent,StyledTabs,StyledCanvasAndTools}from"./App.styled";var App=function(){var a=useStore(),b=a.config,c=a.isLoadingGlobally,d=a.haveNotSavedChanges,e=a.dispatch,f=a.originalImage,g=a.shownImageDimensions,h=a.t,i=a.theme,j=a.feedback,k=void 0===j?{}:j,l=b.loadableDesignState,m=b.useCloudimage,n=b.cloudimage,o=b.source,p=b.avoidChangesNotSavedAlertOnLeave,q=b.useBackendTranslations,r=b.translations,s=b.language,t=b.defaultSavedImageName,u=b.observePluginContainerSize,v=b.showCanvasOnly,w=b.getCurrentImgDataFnRef,x=b.updateStateFnRef,y=b.noCrossOrigin,z=b.resetOnImageSourceChange,A=window.matchMedia("(max-width: 760px)").matches,B=useResizeObserver(),C=_slicedToArray(B,2),D=C[0],E=C[1],F=useState({width:void 0,height:void 0}),G=_slicedToArray(F,2),H=G[0],I=G[1],J=usePhoneScreen(),K=useRef(null),L=useRef(!1),M=useRef(null),N=useRef(d),O=useTransformedImgData(),P=useCallback(function(a){e({type:SET_ORIGINAL_IMAGE,payload:{originalImage:a}})},[]),Q=useCallback(function(a){e({type:SET_FEEDBACK,payload:{feedback:{message:a.message||a,duration:0}}})},[]),R=function(a){return new Promise(function(b){var c=(null===a||void 0===a?void 0:a.src)||a;if(M.current===c||!c&&f||isSameImage(c,f))return void(M.current||b());var d=function(){M.current=null,b()};M.current=c,setTimeout(function(){if("string"==typeof a)loadImage(a,t,y).then(P)["catch"](Q)["finally"](d);else if(a instanceof HTMLImageElement){if(!a.name&&t&&(a.name=t),!a.complete)return void a.addEventListener("load",function(){P(a),d()});P(a),d()}else Q(h("invalidImageError")),d()},0)})},S=function(a){N.current&&(a.preventDefault(),a.returnValue="")},T=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(){return[]};return e({type:SHOW_LOADER}),Promise.all(a())["finally"](function(){e({type:HIDE_LOADER})})},U=function(){l&&0<Object.keys(l).length&&e({type:UPDATE_STATE,payload:_objectSpread(_objectSpread({},l),{},{finetunes:finetunesStrsToClasses(null===l||void 0===l?void 0:l.finetunes),filter:filterStrToClass(null===l||void 0===l?void 0:l.filter)})})};useUpdateEffect(function(){o&&!isSameImage(o,f)&&(L.current=!1,T(function(){return[R(o)]})),z&&e({type:RESET,payload:{config:b}})},[o]),useUpdateEffect(function(){var a=null===l||void 0===l?void 0:l.imgSrc;a&&!isSameImage(a,f)?T(function(){return[R(a).then(U)]}):U()},[l]),useEffect(function(){0<Object.keys(g||{}).length&&!Object.keys(g).some(function(a){return!g[a]})&&f&&m&&null!==n&&void 0!==n&&n.loadableQuery&&!L.current&&(e({type:UPDATE_STATE,payload:cloudimageQueryToDesignState(n.loadableQuery,g,f)}),L.current=!0)},[g,f,m,n]),useEffect(function(){var a=!1;return u&&K.current?D(K.current.parentNode,function(a){var b=a.width,c=a.height;return I({width:b,height:c})}):H.width&&H.height&&!a&&I({width:void 0,height:void 0}),function(){u&&K.current&&E(K.current),a=!0}},[u]),useEffect(function(){return T(function initialRequestsPromisesFn(){return[R((null===l||void 0===l?void 0:l.imgSrc)||o)].concat(_toConsumableArray(q?[getBackendTranslations(s,r)]:[]))}),window&&!p&&window.addEventListener("beforeunload",S),function(){window&&!p&&window.removeEventListener("beforeunload",S)}},[]),useEffect(function(){x&&"object"===_typeof(x)&&(x.current=function(a){e({type:UPDATE_STATE,payload:a})})},[x,e]),useEffect(function(){w&&"object"===_typeof(w)&&(w.current=O)},[O]),useEffect(function(){N.current=d},[d]);var V=function(a){e({type:SET_SHOWN_TABS_MENU,payload:{opened:a}})};return React.createElement(StyledAppWrapper,{className:ROOT_CONTAINER_CLASS_NAME,"data-phone":J,showTabsDrawer:A,ref:K,$size:H},c&&React.createElement(Spinner,{theme:i}),function renderContent(){return React.createElement(React.Fragment,null,!v&&React.createElement(React.Fragment,null,A&&React.createElement(TabsDrawer,{toggleMainMenu:V}),React.createElement(Topbar,{toggleMainMenu:V})),f&&0!==k.duration&&React.createElement(StyledMainContent,{className:"FIE_main-container"},!v&&!A&&React.createElement(StyledTabs,{className:"FIE_tabs"},React.createElement(Tabs,{toggleMainMenu:V})),React.createElement(StyledCanvasAndTools,{className:"FIE_editor-content",showTabsDrawer:A},React.createElement(MainCanvas,null),!v&&React.createElement(ToolsBar,{isPhoneScreen:J}))))}(),React.createElement(FeedbackPopup,null))};export default memo(App);