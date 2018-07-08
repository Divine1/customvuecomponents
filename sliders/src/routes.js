import SliderAppear from './components/sliderappear/Slider.vue';
import SliderMove from './components/slidermove/Slider.vue';

import PopupDemo from './components/popup/PopupDemo.vue';
import Home from './components/Home.vue';

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/sliderappear',
        component: SliderAppear
    },
    {
        path: '/slidermove',
        component: SliderMove
    },
    {
        path: '/popup',
        component: PopupDemo
    }
];