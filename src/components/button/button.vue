<script lang="ts" setup>
const props = withDefaults(defineProps<{ text?: string }>(), {
  text: '按钮',
})
</script>

<template>
  <el-button>{{ props.text }}</el-button>
</template>

<style lang="scss" scoped></style>
