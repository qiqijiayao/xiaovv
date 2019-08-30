<template>
  <div class="tabbaritem" @click="tiao">
    <div v-if="!isActive">
      <slot name="itemicon"></slot>
    </div>
    <div v-else>
      <slot name="itemiconActive"></slot>
    </div>
    <div :class="{active:isActive}" :style="{color:isActive?activecolor:''}">
      <slot name="itemtitle"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    path: {
      type: String,
      default: "/home"
    },
    activecolor: {
      type: String,
      default: "#aaf"
    }
  },
  methods: {
    tiao() {
      this.$router.push(this.path);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    }
  }
};
</script>

<style>
.tabbaritem {
  text-align: center;
  flex:1;
  font-size: 12px;
}
.tabbaritem img {
  width: 24px;
  height: 24px;
}

</style>