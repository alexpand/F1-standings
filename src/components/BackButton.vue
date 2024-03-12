<script setup>
function goBack() {
    history.back()
}

</script>
<template>
    <span class="button--icon" @click="goBack">
        <img 
            src="@/assets/back-arrow.svg" 
            alt="back arrow"
            width="32"
        >
    </span>
</template>