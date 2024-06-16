import{Input,Label}from"@scaleflex/ui/core";import styled from"styled-components";import{FontVariant as FV}from"@scaleflex/ui/utils/types/typography";var StyledHSVOptions=styled.div.withConfig({componentId:"sc-q1ymz0-0"})(["display:flex;width:100%;justify-content:space-between;gap:10px;.SfxSlider-root{min-width:100px;}",""],function(a){var b=a.isPhoneScreen;return b&&"\n      flex-direction: column;\n\n      .SfxSlider-root {\n        min-width: 230px;\n      }\n    "}),StyledSliderContainer=styled.div.withConfig({componentId:"sc-q1ymz0-1"})(["display:flex;flex-direction:column;"]),StyledSliderLabel=styled(Label).withConfig({componentId:"sc-q1ymz0-2"})(["",";"],function(a){var b=a.theme;return b.typography.font[FV.LabelExtraSmallUp]}),StyledSliderWrapper=styled.div.withConfig({componentId:"sc-q1ymz0-3"})(["display:flex;align-items:center;"]),StyledSliderInput=styled(Input).withConfig({componentId:"sc-q1ymz0-4"})(["display:inline-block;width:40px;height:28px;padding:6px 2px;margin-left:10px;border:none;.SfxInput-Base{text-align:center;width:100%;min-width:100%;max-width:100%;}"]);export{StyledHSVOptions,StyledSliderContainer,StyledSliderLabel,StyledSliderWrapper,StyledSliderInput};