import { ref } from 'vue';
import PinkBear from './PinkBear.vue';
import PurpleBear from './PurpleBear.vue';
import PinkBlueBear from './PinkBlueBear.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const background = ref(false);
// Reactive state for bear and camera position
const bodyPosition = ref({ x: 0, y: 0, z: 0 });
const cameraPosition = ref(4);
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex") }, });
    // @ts-ignore
    [PinkBear,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(PinkBear, new PinkBear({ background: ((true)), cameraPosition: ((8)), bodyPosition: (({ x: -15, y: 0, z: 0 })), ...{ class: ("bear-page") }, }));
    const __VLS_1 = __VLS_0({ background: ((true)), cameraPosition: ((8)), bodyPosition: (({ x: -15, y: 0, z: 0 })), ...{ class: ("bear-page") }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    [PurpleBear,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(PurpleBear, new PurpleBear({ background: ((true)), cameraPosition: ((8)), bodyPosition: (({ x: -15, y: 0, z: 0 })), ...{ class: ("bear-page") }, }));
    const __VLS_6 = __VLS_5({ background: ((true)), cameraPosition: ((8)), bodyPosition: (({ x: -15, y: 0, z: 0 })), ...{ class: ("bear-page") }, }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    // @ts-ignore
    [PinkBlueBear,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(PinkBlueBear, new PinkBlueBear({ background: ((true)), cameraPosition: ((8)), bodyPosition: (({ x: -18, y: 0, z: 0 })), ...{ class: ("bear-page") }, }));
    const __VLS_11 = __VLS_10({ background: ((true)), cameraPosition: ((8)), bodyPosition: (({ x: -18, y: 0, z: 0 })), ...{ class: ("bear-page") }, }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['bear-page'];
    __VLS_styleScopedClasses['bear-page'];
    __VLS_styleScopedClasses['bear-page'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            PinkBear: PinkBear,
            PurpleBear: PurpleBear,
            PinkBlueBear: PinkBlueBear,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
