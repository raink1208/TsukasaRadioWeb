<script setup lang="ts">
import {getGuestList, type Guest} from "~/domains/guest";

const guests = ref<Guest[]>([]);

onMounted(async () => {
  guests.value = await getGuestList();
});

</script>

<template>
  <div>
    <CommonContentTitle title="Cast & Guests" />
    <div class="guest-table">
      <div class="guest-card" v-for="guest in guests" :key="guest.name">
        <GuestListItem :guest="guest" />
      </div>
      <div class="empty guest-card" />
      <div class="empty guest-card" />
    </div>
  </div>
</template>

<style scoped>
.guest-table {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
  gap: 30px;
}

.guest-card {
  width: 350px;
}

.empty {
  content: "";
  display: block;
}

@media screen and (max-width: 875px) {
  .guest-table {
    display: revert;
    margin: 20px 0;
  }

  .guest-card {
    width: 100%;
    margin-top: 15px;
  }
}
</style>