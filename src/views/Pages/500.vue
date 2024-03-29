<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function toDashboard() {
  router.push({ name: 'dashboard' })
}
</script>

<template>
  <div class="page-404">
    <el-row>
      <el-col class="text-center">
        <h1 class="error-title">
          500
        </h1>
      </el-col>
      <el-col class="text-center">
        <el-button @click="toDashboard">
          Dashboard
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.page-404 {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;

  @keyframes colorChange {
    0% {
      color: blue;
    }
    50% {
      color: red;
    }
    100% {
      color: green;
    }
  }
  .error-title {
    font-size: 10rem;
    font-weight: 600;
    margin: 2rem 0;
    animation: colorChange 5s linear infinite;
  }
  .text-center {
    text-align: center;
  }
}
</style>
