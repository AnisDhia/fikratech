import { h } from "vue";
// import { IconSet, IconProps } from "vuetify";

import Insta from "./Insta.vue";
import Facebook from "./Facebook.vue";
import LinkedIn from "./LinkedIn.vue";
import Location from "./Location.vue";
import Clock from "./Clock.vue";

const customSvgNameToComponent = {
    // dribble: Dribble,
    facebook: Facebook,
    insta: Insta,
    linkedin: LinkedIn,
    location: Location,
    clock: Clock,
};

const customIcons = {
    component: (props) => h(props.tag, [h(customSvgNameToComponent[props.icon], { class: 'v-icon__svg' })]),
};

export { customIcons /* aliases */ };