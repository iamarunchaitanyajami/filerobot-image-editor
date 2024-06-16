import _slicedToArray from"@babel/runtime/helpers/slicedToArray";import React,{useState}from"react";import{MinusOutline,PlusOutline}from"@scaleflex/icons";import Menu from"@scaleflex/ui/core/menu";import MenuItem,{MenuItemLabel}from"@scaleflex/ui/core/menu-item";import{ZOOM_CANVAS}from"../../actions";import{DEFAULT_ZOOM_FACTOR,TOOLS_IDS}from"../../utils/constants";import{useStore}from"../../hooks";import getZoomFitFactor from"../../utils/getZoomFitFactor";import toPrecisedFloat from"../../utils/toPrecisedFloat";import{StyledSmallButton,StyledZoomPercentageLabel,StyledZoomingWrapper}from"./Topbar.styled";import{ZOOM_FACTORS_PRESETS}from"./Topbar.constants";var MULTIPLY_ZOOM_FACTOR=1.1,CanvasZooming=function(a){var b=a.showBackButton,c=void 0!==b&&b,d=useStore(),e=d.dispatch,f=d.zoom,g=void 0===f?{}:f,h=d.toolId,i=d.feedback,j=d.t,k=d.shownImageDimensions,l=d.resize,m=d.originalImage,n=d.adjustments.crop,o=d.config.useZoomPresetsMenu,p=0===i.duration,q=useState(null),r=_slicedToArray(q,2),s=r[0],t=r[1],u=function(a,b){e({type:ZOOM_CANVAS,payload:{factor:a,isAbsoluteZoom:b}})},v=function(){var a=l.width&&l.height&&l||n.width&&n.height&&n||k,b=getZoomFitFactor(n.width&&n.height&&n||k,a);u(b||DEFAULT_ZOOM_FACTOR,!0)},w=function(a){t(s?null:a.target)},x=function(a){if("fit"===a)return v(),void w();var b=l.width||l.height?a:Math.min(a*m.width/k.width,a*m.height/k.height);u(b,!0),w()},y=h===TOOLS_IDS.CROP||p,z=!m||l.width||l.height?g.factor:Math.min(k.width*g.factor/m.width,k.height*g.factor/m.height);return React.createElement(StyledZoomingWrapper,null,React.createElement(StyledSmallButton,{onClick:function zoomOut(){u(g.factor/MULTIPLY_ZOOM_FACTOR)},color:"basic",title:j("zoomOutTitle"),disabled:y,showBackButton:c,className:"FIE_topbar-zoom-out-btn"},React.createElement(MinusOutline,null)),React.createElement(StyledZoomPercentageLabel,{title:j("toggleZoomMenuTitle"),onClick:y?void 0:o&&w||v,"aria-disabled":y,className:"FIE_topbar-zoom-label"},"".concat(toPrecisedFloat(100*z,0),"%")),React.createElement(StyledSmallButton,{onClick:function zoomIn(){u(g.factor*MULTIPLY_ZOOM_FACTOR)},color:"basic",title:j("zoomInTitle"),disabled:y,showBackButton:c,className:"FIE_topbar-zoom-in-btn"},React.createElement(PlusOutline,null)),React.createElement(Menu,{anchorEl:s,onClose:w,open:!!s,position:"bottom",className:"FIE_topbar-zoom-menu"},ZOOM_FACTORS_PRESETS.map(function(a){var b=a.factor,c=a.labelKey,d=a.label;return React.createElement(MenuItem,{key:d||c,onClick:function onClick(){return x(b)}},React.createElement(MenuItemLabel,null,null!==d&&void 0!==d?d:j(c)))})))};export default CanvasZooming;