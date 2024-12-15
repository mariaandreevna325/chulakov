<template>
    <div class="modal-overlay">
      <div class="modal-content" @click.stop>
        <div class="close" @click="close">╳</div>
        <h2>СОЗДАТЬ АККАУНТ</h2>
  
        <form>
          <div class="input-group">
            <input type="email" id="email" v-model="email" required placeholder="Введите email" />
          </div>
  
          <div class="input-group password-group">
            <input :type="isPasswordVisible ? 'text' : 'password'" id="password" v-model="password" required placeholder="Введите пароль" />
            <button type="button" class="show-password" @click="togglePasswordVisibility">
              <span v-if="isPasswordVisible"><img src="/public/eye1.png" alt="Логотип сайта" class="logo_img"/></span>
              <span v-else><img src="/public/eye2.png" alt="Логотип сайта" class="logo_img"/></span>
            </button>
          </div>
  
          <button type="submit" class="submit-btn">Создать</button>
        </form>
  
        <router-link to="/register">
          <button class="already-account">У меня уже есть аккаунт</button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        isPasswordVisible: false,
      };
    },
    methods: {
      close() {
        this.$emit('close'); 
      },
      togglePasswordVisibility() {
        this.isPasswordVisible = !this.isPasswordVisible;
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-image: url('/chulacov_form.png');
    background-size: cover;
    background-position: center;
    padding: 40px;
    border-radius: 10px;
    width: 100%;
    max-width: 400px;
    color: white;
    text-align: center;
    position: relative; /* Для размещения крестика в правом верхнем углу */
  }
  
  .close {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 24px;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  
  .modal-content h2 {
    font-size: 32px;
    margin-bottom: 20px;
    color: #FFEFD9;
  }
  
  .input-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  .input-group label {
    display: block;
    font-size: 14px;
  }
  
  .input-group input {
    width: 95%;
    padding: 10px;
    margin-top: 5px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
  }
  
  .password-group {
    position: relative;
  }
  
  .show-password {
    position: absolute;
    top: 64%;
    right: -30px;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 24px;
  }
  
  .submit-btn {
    width: 100%;
    padding: 12px;
    background-color: #FF6600;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }
  
  .submit-btn:hover {
    background-color: #ff8533;
  }
  
  .already-account {
    margin-top: 20px;
    background: transparent;
    border: none;
    color: white;
    font-size: 14px;
    cursor: pointer;
  }
  
  .already-account:hover {
    text-decoration: underline;
  }
  </style>
  