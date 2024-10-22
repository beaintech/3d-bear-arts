import { createRouter, createWebHistory } from 'vue-router';
import ThreeScene from '../components/ThreeScene.vue';
import PinkBear from '../components/PinkBear.vue';
import PurpleBear from '../components/PurpleBear.vue';
import DiamondBear from '../components/DiamondBear.vue';
import GlassBear from '../components/GlassBear.vue';
import BluePinkBear from '../components/BluePinkBear.vue';
import Transparent from '../components/HalfTransparentBear.vue';
import HalfBear from '../components/HalfBlueBear.vue';
import SliverBear from '../components/SliverBear.vue';
import MetalBear from '../components/MetalBear.vue';
import PopArtBear from '../components/PopartBear.vue';
import PopBear2 from '../components/PopBear2.vue';
import PopBear3 from '../components/PopArtBear3.vue';
import MetalMachineBear from '../components/MetalMachineBear.vue';

const routes = [

    { path: '/3d-bear-arts/metal', name: 'Leather', component: MetalBear },
    { path: '/3d-bear-arts/pop-art', name: 'Pop', component: PopArtBear },
    { path: '/3d-bear-arts/pop-art-bear', name: 'PopArtBear 2', component: PopBear2 },
    { path: '/3d-bear-arts', name: 'PopArtBear 3', component: PopBear3 },
    { path: '/3d-bear-arts', name: 'MetalMachineBear', component: MetalMachineBear },


    // { path: '/3d-bear-arts', name: 'ThreeScene', component: ThreeScene },
    // { path: '/3d-bear-arts/half', name: 'Haltransparent', component: HalfBear },
    // { path: '/3d-bear-arts/halfTransparent', name: 'Transparent', component: Transparent },
    // { path: '/3d-bear-arts/bluePink', name: 'BluePinkBear', component: BluePinkBear },
    // { path: '/3d-bear-arts/diamond', name: 'DiamondBear', component: DiamondBear },
    // { path: '/3d-bear-arts/pink', name: 'PinkBear', component: PinkBear },
    // { path: '/3d-bear-arts/purple', name: 'PurpleBear', component: PurpleBear },
    // { path: '/3d-bear-arts/glass', name: 'GlassBear', component: GlassBear },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
