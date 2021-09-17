<template>
  <transition-group tag="ul" name="list" class="tasks">
    <Task
      @removeTask="removeTask"
      :index="index"
      v-for="(task, index) in tasksArr"
      :key="task.id"
    ></Task>
  </transition-group>
</template>
<script lang="ts">
import Vue from "vue";
import Task from "./Task.vue";
export default Vue.extend({
  components: {
    Task,
  },
  data() {
    return {
      tasksArr: [] as Array<{ id: number }>,
      counter: 1 as number,
    };
  },
  methods: {
    insertTask(): void {
      this.tasksArr.push({ id: this.generateTaskId() });
    },

    generateTaskId(): number {
      if (this.counter === 1) {
        this.counter += 1;
        return 1;
      }
      return (this.counter += 1);
    },

    removeTask(taskIndex: number) {
      this.tasksArr.splice(taskIndex, 1);
    },
  },
});
</script>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-to {
  opacity: 0;
}
.tasks {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem;
}
</style>
