<template>
  <div class="task card">
    <div class="task__header card-header ">
      <task-content
        id="subject"
        ref="subject"
        @changeFocus="changeFocus"
      ></task-content>
      <b-icon @click="removeTask" icon="trash"></b-icon>
    </div>
    <div class="card-body">
      <task-content id="description" ref="description"></task-content>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import TaskContent from "./TaskContent.vue";
export default Vue.extend({
  components: { TaskContent },
  props: { index: Number },

  methods: {
    removeTask(): void {
      this.$emit("removeTask", this.index);
    },

    changeFocus() {
      (this as any).$refs.description.inputRef.focus();
    },
  },

  mounted() {
    (this.$refs.subject as any).inputRef.focus();
  },
});
</script>
<style scoped>
.task {
  width: 22.5%;
  margin: 1rem calc(10% / 8);
}
.task__header {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
