import BaseFilters from"./BaseFilters";var COLOR_FILTER_CONST=[255,170,0,.1],BRIGHTNESS_CONST=.09,SATURATION_CONST=.1;function Rise(a){BaseFilters.apply(a,BaseFilters.colorFilter(COLOR_FILTER_CONST),BaseFilters.brightness(BRIGHTNESS_CONST),BaseFilters.saturation(SATURATION_CONST))}Rise.filterName="Rise";export default Rise;