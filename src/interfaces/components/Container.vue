<template>
  <div>
    <Card>
      <template #header> </template>
      <template #title>
        {{ containerConfig.headline }}
      </template>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </template>
      <template #footer> </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import Card from "primevue/card";
import { Container } from "../config/config.interface";

export default defineComponent({
  components: {
    Card,
  },
  props: {
    containerConfig: {
      type: Object as PropType<Container>,
    },
  },
  //   setup(props) {},
});
</script>
