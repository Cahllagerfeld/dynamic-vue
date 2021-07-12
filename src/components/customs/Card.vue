<template>
  <div>
    <PCard>
      <template #title>
        {{ getValue(data, config.headline) }}
      </template>
      <template #content>
        <div v-for="field in sortedFields" :key="field.id">
          <p>
            <strong>{{ getValue(data, field.value) }}</strong>
          </p>
          <p>{{ getValue(data, field.label) }}</p>
        </div>
      </template>
    </PCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "@vue/composition-api";
import PCard from "primevue/card";
import { CardConfig } from "../../interfaces/components/card.interface";
import _ from "lodash";

export default defineComponent({
  props: {
    config: {
      type: Object as PropType<CardConfig>,
      required: true,
    },
  },
  components: {
    PCard,
  },
  setup(props, { root }) {
    const data = computed(() => root.$store.state.data);
    const sortedFields = _.orderBy(props.config.fields, ["order"], ["asc"]);
    const getValue = (data: any, path: string) => {
      return _.get(data, path);
    };

    return { data, getValue, sortedFields };
  },
});
</script>
