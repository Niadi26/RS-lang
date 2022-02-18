export const authorizationContant = () => {
  return `
  <form class="modal-content animate" action="/action_page.php">
      <div class="img-container">
        <span class="close" title="Close Modal">×</span>
        <img src="../../../assets/img_avatar2.png" alt="Avatar" class="avatar">
      </div>

      <div class="login-container">

        <div class="signin-contant">
          <label for="email"><b>Email</b></label>
          <input type="text" class="email email-signin" placeholder="Enter Email" name="email" required>

          <label for="psw"><b>Password</b></label>
          <input type="password" class="password password-signin" placeholder="Enter Password" name="psw" required>
      
          <button type="button" class="submit submit-signin">Login</button>
        </div>

        <div class="signup-contant">
          <label for="username"><b>Username</b></label>
          <input type="text" class="username" placeholder="Enter Username" name="username" required>

          <label for="email"><b>Email</b></label>
          <input type="text" class="email email-signup" placeholder="Enter Email" name="email" required>

          <label for="psw"><b>Password</b></label>
          <input type="password-signup" class="password password-signup" placeholder="Enter Password" name="psw" required>
  
          <button type="button" class="submit submit-signup">Sign Up</button>
        </div>

        <label>
          <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
      </div>

      <div class="login-container">
        <button type="button" class="cancelbtn">Cancel</button>
        <span class="psw">Forgot password?</span>
      </div>
      <div class="login-container go-to-signup">Do you have an account?
      <span>Sign In</span></div>

      <div class="login-container go-to-signin">Do you have an account?
      <span>Sign Up</span></div>
  </form>`;
};

export const userBlock = (username, email) => {
  return `
  <div class="data-container">
    <p class="user-name">${username}</p>
    <p class="e-mail">${email}</p>
    <button type="button" class="log-out">Log out</button>
  </div>
  <div class="svg-container">
  <svg id="Layer_1" style="enable-background:new 0 0 128 128;" version="1.1" viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
	.st0{fill:#31AF91;}
	.st1{fill:#FFFFFF;}
</style><circle class="st0" cx="64" cy="64" r="64"/><path class="st1" d="M77.4,75.3c-2-0.3-3.4-1.9-3.4-3.9v-5.8c2.1-2.3,3.5-5.3,3.8-8.7l0.2-3.2c1.1-0.6,2.2-2,2.7-3.8  c0.7-2.5,0.1-4.7-1.5-4.9c-0.2,0-0.4,0-0.7,0l0.4-5.9C79.6,30.9,73.3,24,65.3,24h-2.5c-8,0-14.3,6.9-13.8,15.1l0.4,6  C49.2,45,49,45,48.8,45c-1.6,0.2-2.2,2.4-1.5,4.9c0.5,1.9,1.7,3.3,2.8,3.9l0.2,3.1c0.2,3.4,1.6,6.4,3.7,8.7v5.8c0,2-1.4,3.6-3.4,3.9  C41.8,76.8,27,83.2,27,90v14h74V90C101,83.2,86.2,76.8,77.4,75.3z"/></svg>
  </div>
  `;
};
