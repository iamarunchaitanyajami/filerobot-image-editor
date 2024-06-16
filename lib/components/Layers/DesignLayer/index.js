import _extends from"@babel/runtime/helpers/extends";import _defineProperty from"@babel/runtime/helpers/defineProperty";import _toConsumableArray from"@babel/runtime/helpers/toConsumableArray";function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}import React,{useCallback,useEffect,useMemo,useRef}from"react";import{Image,Layer}from"react-konva";import getDimensionsMinimalRatio from"../../../utils/getDimensionsMinimalRatio";import cropImage from"../../../utils/cropImage";import{DESIGN_LAYER_ID,IMAGE_NODE_ID,TOOLS_IDS}from"../../../utils/constants";import{SET_SHOWN_IMAGE_DIMENSIONS}from"../../../actions";import getProperImageToCanvasSpacing from"../../../utils/getProperImageToCanvasSpacing";import{useStore}from"../../../hooks";import getSizeAfterRotation from"../../../utils/getSizeAfterRotation";import getCenterRotatedPoint from"../../../utils/getCenterRotatedPoint";import AnnotationNodes from"./AnnotationNodes";import PreviewGroup from"./PreviewGroup";var CANVAS_TO_IMG_SPACING=getProperImageToCanvasSpacing(),MIN_SPACED_WIDTH=10,DesignLayer=function(){var a,b,c,d,e=useRef(),f=useStore(),g=f.initialCanvasWidth,h=f.initialCanvasHeight,i=f.canvasWidth,j=f.canvasHeight,k=f.dispatch,l=f.toolId,m=f.canvasScale,n=f.originalImage,o=void 0===n?{}:n,p=f.finetunes,q=void 0===p?[]:p,r=f.finetunesProps,s=void 0===r?{}:r,t=f.filter,u=void 0===t?null:t,v=f.adjustments,w=void 0===v?{}:v,x=w.rotation,y=void 0===x?0:x,z=w.crop,A=void 0===z?{}:z,B=w.isFlippedX,C=w.isFlippedY,D=f.resize,E=useRef(),F=useRef(),G=l===TOOLS_IDS.CROP,H=useMemo(function(){return u?[].concat(_toConsumableArray(q),[u]):q},[q,u]),I=useMemo(function(){var a=Math.max(MIN_SPACED_WIDTH,o.width-CANVAS_TO_IMG_SPACING),b=o.width/o.height;return{width:a,height:a/b}},[o]),J=useMemo(function(){return getSizeAfterRotation(o.width,o.height,y)},[o,y]),K=useMemo(function(){return getDimensionsMinimalRatio(g,h,o.width,o.height)},[o,g,h]),L=useMemo(function(){return{width:I.width*K,height:I.height*K}},[I,K]),M=D.width&&!G?D.width/(null!==(a=null!==(b=A.width)&&void 0!==b?b:L.width)&&void 0!==a?a:J.width):1,N=D.height&&!G?D.height/(null!==(c=null!==(d=A.height)&&void 0!==d?d:L.height)&&void 0!==c?c:J.height):1,O=i/(2*m)-L.width*M/2,P=j/(2*m)-L.height*N/2,Q=i/(2*m)-L.width/2,R=j/(2*m)-L.height/2,S=useMemo(function(){return{x:Math.round(O),y:Math.round(P),abstractX:Math.round(Q),abstractY:Math.round(R),width:L.width,height:L.height,scaledBy:m}},[m,O,P,Q,R,L]),T=useCallback(function(){E.current?E.current.cache():setTimeout(T,0)},[]),U=getSizeAfterRotation(S.width,S.height,y),V=G?1:getDimensionsMinimalRatio(S.width,S.height,U.width,U.height);if(useEffect(function(){return o&&T(),function(){var a;null===(a=E.current)||void 0===a||a.clearCache()}},[o]),useEffect(function(){S&&k({type:SET_SHOWN_IMAGE_DIMENSIONS,payload:{shownImageDimensions:S,designLayer:e.current,previewGroup:F.current}})},[S]),!O||!P||!S)return null;var W=getCenterRotatedPoint(A.x,A.y,y),X=O+(!G&&A.width?(B?-1:1)*(S.width/2-A.x-A.width/2+W.x)*M:0),Y=P+(!G&&A.height?(C?-1:1)*(S.height/2-A.y-A.height/2+W.y)*N:0),Z=G?Q:X,$=G?R:Y,_=(B?-1:1)*(G?1:M)*V,aa=(C?-1:1)*(G?1:N)*V;return React.createElement(Layer,{id:DESIGN_LAYER_ID,ref:e,xPadding:Z,yPadding:$,offsetX:L.width/2,offsetY:L.height/2,x:L.width*M/2+Z,y:L.height*N/2+$,scaleX:_,scaleY:aa,rotation:G?0:y,clipFunc:function clipFunc(a){var b,c=G&&!(null!==(b=e.current)&&void 0!==b&&null!==(b=b.attrs)&&void 0!==b&&b.isSaving),d=c||A.noEffect?_objectSpread(_objectSpread({},S),{},{x:0,y:0}):{width:A.width||S.width,height:A.height||S.height,x:A.x||0,y:A.y||0};cropImage(a,_objectSpread({ratio:A.ratio},d),c),e.current&&e.current.setAttrs({clipX:d.x,clipY:d.y,clipWidth:d.width,clipHeight:d.height})}},React.createElement(Image,_extends({id:IMAGE_NODE_ID,image:o,width:L.width,height:L.height,offsetX:L.width/2,offsetY:L.height/2,x:L.width/2,y:L.height/2,listening:!1,filters:H,ref:E},s)),React.createElement(AnnotationNodes,null),React.createElement(PreviewGroup,{ref:F}))};export default DesignLayer;