<template>
  <div>
    <input
      :class="insertStyle"
      v-model="value"
      ref="input"
      type="text"
      @keypress.enter="insertContent()"
      v-if="show"
    />
    <h5 :class="insertStyle" v-if="!show">
      {{ value }}
    </h5>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  computed: {
    insertStyle() {
      const defaultStyle = "m-0 d-flex align-items-center px-1 contentSize ";
      let selectedStyle = "";
      if (this.id === "subject") selectedStyle = "h6";
      if (this.id === "description") selectedStyle = "h6";
      return `${defaultStyle} ${selectedStyle}`;
    },
  },

  data() {
    return {
      value: "" as string,
      inputRef: null as any,
      show: true as boolean,
    };
  },

  mounted() {
    this.inputRef = this.$refs.input as HTMLInputElement;
  },

  methods: {
    insertContent() {
      this.show = !this.show;
      this.$emit("changeFocus");
    },
  },
});
</script>
<style scoped>
.contentSize {
  width: 20rem;
  height: 2rem;
}
</style>
