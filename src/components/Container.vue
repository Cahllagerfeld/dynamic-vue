<template>
  <div>
    <PCard>
      <template #header> </template>
      <template #title>
        {{ containerConfig.headline }}
      </template>
      <template #content>
        <div v-if="containerConfig.components.length >= 1" class="p-grid">
          <DynamicComponent
            :class="'p-col-12 p-lg-' + component.width"
            v-for="component in containerConfig.components"
            :key="component.id"
            :componentConfig="component"
          />
        </div>
      </template>
      <template #footer> </template>
    </PCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import PCard from "primevue/card";
import DynamicComponent from "./DynamicComponent.vue";
import { Container } from "../interfaces/config/config.interface";

export default defineComponent({
  components: {
    PCard,
    DynamicComponent,
  },
  props: {
    containerConfig: {
      type: Object as PropType<Container>,
      required: true,
    },
  },
});
</script>
