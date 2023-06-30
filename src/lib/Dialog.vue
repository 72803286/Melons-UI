<template>
    <div class="dialog-overlay"></div>
    <div class="dialog-wrapper">
        <header>title</header>
        <main>
            <p>line one</p>
            <p>line one</p>
        </main>
        <footer>
            <Button>OK</Button>
            <Button>Cancle</Button>
        </footer>
    </div>
</template>


<script setup lang="ts">
import Button from '../lib/Button.vue'
</script>