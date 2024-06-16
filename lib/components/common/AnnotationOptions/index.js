import _extends from"@babel/runtime/helpers/extends";import _defineProperty from"@babel/runtime/helpers/defineProperty";import _toConsumableArray from"@babel/runtime/helpers/toConsumableArray";import _slicedToArray from"@babel/runtime/helpers/slicedToArray";import _objectWithoutProperties from"@babel/runtime/helpers/objectWithoutProperties";var _excluded=["annotation","updateAnnotation","children","morePoppableOptionsPrepended","moreOptionsPopupComponentsObj","morePoppableOptionsAppended","hideFillOption","hidePositionField","className"];function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}import React,{useCallback,useMemo,useState}from"react";import{usePhoneScreen,useStore}from"../../../hooks";import{Label}from"@scaleflex/ui/core";import Menu from"@scaleflex/ui/core/menu";import Transparency from"@scaleflex/icons/transparency";import Shadow from"@scaleflex/icons/shadow";import Stroke from"@scaleflex/icons/stroke";import Position from"@scaleflex/icons/position";import OpacityField from"./OpacityField";import StrokeFields from"./StrokeFields";import ShadowFields from"./ShadowFields";import PositionFields from"./PositionFields";import{StyledOptionPopupContent,StyledOptions,StyledOptionsWrapper,StyledIconWrapper}from"./AnnotationOptions.styled";import{POPPABLE_OPTIONS}from"./AnnotationOptions.constants";import ColorInput from"../ColorInput";var AnnotationOptions=function(a){var b=a.annotation,c=a.updateAnnotation,d=a.children,e=void 0===d?void 0:d,f=a.morePoppableOptionsPrepended,g=void 0===f?[]:f,h=a.moreOptionsPopupComponentsObj,i=void 0===h?{}:h,j=a.morePoppableOptionsAppended,k=void 0===j?[]:j,l=a.hideFillOption,m=a.hidePositionField,n=a.className,o=void 0===n?void 0:n,p=_objectWithoutProperties(a,_excluded),q=useState(null),r=_slicedToArray(q,2),s=r[0],u=r[1],v=useState(null),w=_slicedToArray(v,2),x=w[0],y=w[1],z=useStore(),A=z.config.useCloudimage,B=z.t,t=usePhoneScreen(320),C=useMemo(function(){return[].concat(_toConsumableArray(g),[{titleKey:"opacity",name:POPPABLE_OPTIONS.OPACITY,Icon:Transparency}],_toConsumableArray(A?[]:[{titleKey:"stroke",name:POPPABLE_OPTIONS.STROKE,Icon:Stroke},{titleKey:"shadow",name:POPPABLE_OPTIONS.SHADOW,Icon:Shadow}]),[void 0!==m&&m?void 0:{titleKey:"position",name:POPPABLE_OPTIONS.POSITION,Icon:Position}])},[g]),D=useMemo(function(){return _objectSpread(_objectSpread({},i),{},_defineProperty(_defineProperty(_defineProperty(_defineProperty({},POPPABLE_OPTIONS.OPACITY,OpacityField),POPPABLE_OPTIONS.STROKE,StrokeFields),POPPABLE_OPTIONS.SHADOW,ShadowFields),POPPABLE_OPTIONS.POSITION,PositionFields),k)},[i]),E=useCallback(function(a,b){var c=null===a||void 0===a?void 0:a.currentTarget;u(c),y(b)},[]),F=useCallback(function(a){c({fill:a})},[c]),G=s&&x&&D[x];return React.createElement(StyledOptions,{className:"FIE_annotations-options".concat(o?" ".concat(o):""),isPhoneScreen:t},!(void 0!==l&&l)&&React.createElement(ColorInput,{color:b.fill,onChange:F,colorFor:"fill"}),e,React.createElement(StyledOptionsWrapper,null,C.map(function(a){return a&&React.createElement(StyledIconWrapper,{className:"FIE_annotation-option-triggerer",key:a.name,title:B(a.titleKey),onClick:function onClick(b){return E(b,a.name)},active:x===a.name},React.createElement(a.Icon,{size:20}))})),G&&React.createElement(Menu,{className:"FIE_annotation-option-popup",anchorEl:s,open:!!s,onClose:E,position:"top"},React.createElement(StyledOptionPopupContent,null,x===POPPABLE_OPTIONS.POSITION?function renderPositionFields(){return React.createElement(React.Fragment,null,React.createElement(Label,null,B("position")),React.createElement(StyledOptionPopupContent,{position:!0},React.createElement(G,_extends({annotation:b,updateAnnotation:c},p))))}():React.createElement(G,_extends({annotation:b,updateAnnotation:c},p)))))};export default AnnotationOptions;