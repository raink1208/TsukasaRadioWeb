<script setup lang="ts">
const { guests } = defineProps<{
  guests: Guest[]
}>();
</script>

<template>
  <div>
    <CommonContentTitle title="Guests" />
    <div class="guest-table">
      <div v-for="guest in guests" :key="guest.name">
        <GuestListItem :guest="guest" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.guest-table {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  gap: 30px;
}
</style>