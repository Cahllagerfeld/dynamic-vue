<template>
  <div class="p-grid">
    <Container
      :containerConfig="container"
      :class="'p-col-12 p-lg-' + container.width"
      v-for="container in view.containers"
      :key="container.id"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { View } from "../interfaces/config/config.interface";
import Container from "../components/Container.vue";
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
  },
});
</script>
