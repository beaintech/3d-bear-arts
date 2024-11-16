import { createRouter, createWebHistory } from 'vue-router';
import HalfBear from '../components/HalfBlueBear.vue';
import MetalBear from '../components/MetalBear.vue';
import PopArtBear from '../components/PopartBear.vue';
import PopBear3 from '../components/PopArtBear3.vue';
import MetalMachineBear from '../components/MetalMachineBear.vue';
import Water from '../components/Water.vue';
import GhostBear from '../components/GhostBear.vue';
import GhostBallonBear from '../components/GhostballonBear.vue';
import Coffee from '../components/Aquar.vue';
import Santa from '../components/Santa.vue';

const routes = [
    { path: '/3d-bear-arts/leather', name: 'Leather', component: MetalBear },
    { path: '/3d-bear-arts/pop-art', name: 'Pop', component: PopArtBear },
    // { path: '/3d-bear-arts/pop-art-bear', name: 'PopArtBear 2', component: PopBear2 },
    { path: '/3d-bear-arts/pop-art-bear-3', name: 'PopArtBear 3', component: PopBear3 },
    { path: '/3d-bear-arts/machine', name: 'MetalMachineBear', component: MetalMachineBear },
    { path: '/3d-bear-arts/water', name: 'Water', component: Water },
    { path: '/3d-bear-arts/ghost-bear', name: 'GhostBear', component: GhostBear },
    { path: '/3d-bear-arts/white-ghost-bear', name: 'GhostBallonBear', component: GhostBallonBear },
    { path: '/3d-bear-arts/', name: 'Santa', component: Santa },
    { path: '/3d-bear-arts/half', name: 'HalfBear', component: HalfBear },
    { path: '/3d-bear-arts/coffee', name: 'Coffee', component: Coffee },

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
