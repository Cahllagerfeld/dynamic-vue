<template>
  <div>
    <component :is="componentConfig.type" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { Component } from "../interfaces/config/config.interface";

export default defineComponent({
  props: {
    componentConfig: {
      type: Object as PropType<Component>,
      required: true,
    },
  },
});
</script>
