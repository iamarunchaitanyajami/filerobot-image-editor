import React from"react";import Popper from"@scaleflex/ui/core/popper";import{StyledImagesGallery,StyledImageWrapper}from"./Image.styled";var ImagesGallery=function(a){var b=a.gallery,c=void 0===b?[]:b,d=a.anchorEl,e=void 0===d?null:d,f=a.onClose,g=a.onSelect;return React.createElement(Popper,{className:"FIE_image-tool-gallery",anchorEl:e,open:!!e,position:"top",onClick:f,overlay:!0},React.createElement(StyledImagesGallery,null,c.map(function(a){var b=a.originalUrl,c=a.previewUrl;return React.createElement(StyledImageWrapper,{key:b,onClick:function onClick(){return g(b)}},React.createElement("img",{src:c,alt:c,crossOrigin:"Anonymous",draggable:!1}))})))};export default ImagesGallery;