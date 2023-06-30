<template>
    <template v-if="visiable">
        <teleport to="body">
            <div class="gulu-dialog-overlay" @click="overlayClose"></div>
            <div class="gulu-dialog-wrapper">
                <div class="gulu-dialog">
                    <header>
                        <slot name="title"></slot>
                        <span class="gulu-dialog-close" @click="close"></span>
                    </header>
                    <main>
                        <slot name="main"></slot>
                    </main>
                    <footer>
                        <Button level="main" @click="clickok">OK</Button>
                        <Button @click="clickcancle">Cancle</Button>
                    </footer>
                </div>
            </div>
        </teleport>
    </template>
</template>


<script setup lang="ts">
import Button from '../lib/Button.vue'
const props = defineProps({
    visiable: { type: Boolean, default: false },
    closeOnClickOverlay: { type: Boolean, default: true },
    okfn: Function,
    canclefn: Function,
})
const emit = defineEmits(['update:visiable'])
const close = () => {
    emit('update:visiable', false)
}
const overlayClose = () => {
    if (props.closeOnClickOverlay) {
        close()
    }
}
const clickok = () => {
    if (props.okfn?.() !== false) {
        close()
    }
}
const clickcancle = () => {
    props.canclefn?.()
    close()
}

</script>




<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.gulu-dialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 15em;
    max-width: 90%;

    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fade_out(black, 0.5);
        z-index: 10;
    }

    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }

    >header {
        padding: 12px 16px;
        border-bottom: 1px solid $border-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }

    >main {
        padding: 12px 16px;
    }

    >footer {
        border-top: 1px solid $border-color;
        padding: 12px 16px;
        text-align: right;
    }

    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;

        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 1px;
            background: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }

    }
}
</style>