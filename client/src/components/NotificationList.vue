<script setup lang="ts">
import { ref } from 'vue'
import { refNotifications, removeNotification } from '@/models/notifications'

const notifications = refNotifications()
</script>

<template>
  <div>
    <div
      v-for="(message, index) in notifications"
      :key="index"
      class="notification is-light"
      :class="`is-${message.type}`"
    >
      <button class="delete" @click="removeNotification(index)"></button>
      {{ message.message }}
    </div>
  </div>
</template>

<script scoped></script>
