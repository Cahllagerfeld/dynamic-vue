<template>
  <div class="p-grid">
    <Container
      :containerConfig="container"
      :class="'p-col-' + container.width"
      v-for="container in view.containers"
      :key="container.id"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { View } from "../interfaces/config/config.interface";
import Container from "../interfaces/components/Container.vue";
export default defineComponent({
  components: {
    Container,
  },
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
