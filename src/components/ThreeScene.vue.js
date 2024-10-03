import { ref } from 'vue';
import PinkBear from './PinkBear.vue';
import PurpleBear from './PurpleBear.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const background = ref(false);
// Reactive state for bear and camera position
const bodyPosition = ref({ x: 0, y: 0, z: 0 });
const cameraPosition = ref(4);
// Function to move bears left
const moveBearsLeft = () => {
    // Move bears' x position to the left
    bodyPosition.value.x -= 1;
    // Move camera in sync with the bears
    cameraPosition.value -= 1;
};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bear-page") }, });
    // @ts-ignore
    [PinkBear,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(PinkBear, new PinkBear({ background: ((true)), cameraPosition: ((4)), bodyPosition: (({ x: 0, y: 0, z: 0 })), }));
    const __VLS_1 = __VLS_0({ background: ((true)), cameraPosition: ((4)), bodyPosition: (({ x: 0, y: 0, z: 0 })), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    [PurpleBear,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(PurpleBear, new PurpleBear({ background: ((true)), cameraPosition: ((4)), bodyPosition: (({ x: 0, y: 0, z: 0 })), }));
    const __VLS_6 = __VLS_5({ background: ((true)), cameraPosition: ((4)), bodyPosition: (({ x: 0, y: 0, z: 0 })), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
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
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
