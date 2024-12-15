<template>
  <div class="page-container">
    <TheHeader />
    
    <main class="content">
      <RouterView />
    </main>
    
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  background-color: #FFEFD9;

}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.content {
  flex-grow: 1; 
}
</style>
