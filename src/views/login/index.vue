<template>
  <o-context>
    <div class="view-account">
      <div class="view-account-header"></div>
      <div class="view-account-container">
        <div class="view-account-top">
          <div class="view-account-top-logo">
            <h1 class="title">用户登录</h1>
          </div>
          <div class="view-account-top-desc">全端代码生成解决方案</div>
        </div>
        <div class="view-account-form">
            <UserLoginFormCom></UserLoginFormCom>
            <oc-space vertical>
              <o-login-button long></o-login-button>
            </oc-space>
        </div>
      </div>
    </div>
  </o-context>
</template>

<script lang="ts" setup>
import UserLoginFormCom from './LoginForm.vue'
</script>

<style scoped>
  .view-account {
    background: #F0F2F5;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
  }

  .view-account-container {
      flex: 1;
      padding: 32px 12px;
      max-width: 384px;
      min-width: 384px;
      margin: 0 auto;
    }
  .view-account-top {
      padding: 32px 0;
      text-align: center;
    }
  .view-account-top-desc {
    font-size: 14px;
    color: #808695;
  }
  .view-account-top-logo .title{
    font-size: 30px;
  }
  .view-account-other {
      width: 100%;
  }
  .view-account-default-color {
      color: #515a6e;

      
    }
  .view-account-default-color .ant-checkbox-wrapper {
        color: #515a6e;
  }

  @media (min-width: 768px) {
    .view-account {
      background: #F0F2F5;
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: 100%;
    }

    .page-account-container {
      padding: 32px 0 24px 0;
    }
  }
</style>