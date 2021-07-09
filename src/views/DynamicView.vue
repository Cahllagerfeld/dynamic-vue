<template>
  <div class="p-grid"></div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { View } from "../interfaces/config.interface";
export default defineComponent({
  props: {
    view: {
      type: Object as () => View,
      required: true,
    },
  },
  setup(props, { root }) {
    root.$store.dispatch("getData", {
      apiPath: props.view.apiPath,
    });
    // return { "ui" };
  },
});
</script>
