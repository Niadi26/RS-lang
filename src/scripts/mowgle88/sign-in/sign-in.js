import { rootElem } from '../../components/constants';
import { authorizationContant, userBlock } from './sign-in-content';
import { createUser } from '../../components/methods/users/create-user';
import { getUser } from '../../components/methods/users/get-user';
import { signIn } from '../../components/methods/sign-in';
const logIn = document.querySelector('.button-log');

export const renderLogIn = async (page, wraapper) => {
  // wraapper.innerHTML = '';
  const div = document.createElement('div');
  div.classList.add('login');
  div.innerHTML = `${page}`;
  wraapper.append(div);
};

const createUserBlock = async (username, email) => {
  const wrapper = document.querySelector('.wrapper');

  const div = document.createElement('div');
  div.classList.add('user-block');
  div.innerHTML = userBlock(username, email);
  wrapper.appendChild(div);
};

const signUp = async () => {
  const username = document.querySelector('.username');
  const emailSignup = document.querySelector('.email-signup');
  const passwordSignup = document.querySelector('.password-signup');

  const obj = {};
  obj.name = username.value;
  obj.email = emailSignup.value;
  obj.password = passwordSignup.value;
  await createUser(obj);
  await signIn(obj);
  document.querySelector('.login').remove();
  logIn.style.display = 'none';
  await createUserBlock(obj.name, obj.email);

  document.querySelector('.log-out').addEventListener('click', () => {
    document.querySelector('.user-block').remove();
    logIn.style.display = 'block';
    localStorage.setItem('token', 'null');
  });
};

const signInUser = async () => {
  const emailSignin = document.querySelector('.email-signin');
  const passwordSignin = document.querySelector('.password-signin');

  const obj = {};
  obj.email = emailSignin.value;
  obj.password = passwordSignin.value;
  const data = await signIn(obj);
  document.querySelector('.login').remove();
  logIn.style.display = 'none';
  const nameUser = await getUser(data.userId);
  console.log(nameUser);
  await createUserBlock(nameUser.name, nameUser.email);

  document.querySelector('.log-out').addEventListener('click', () => {
    document.querySelector('.user-block').remove();
    logIn.style.display = 'block';
    localStorage.setItem('token', 'null');
  });
};

logIn.addEventListener('click', () => {
  const content = authorizationContant();
  renderLogIn(content, rootElem);
  document.querySelector('.login').style.display = 'block';

  const signinContant = document.querySelector('.signin-contant');
  const signUpContant = document.querySelector('.signup-contant');
  const goToSignin = document.querySelector('.go-to-signin');
  const goToSignup = document.querySelector('.go-to-signup');
  const psw = document.querySelector('.psw');

  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.login').remove();
  });

  document.querySelector('.cancelbtn').addEventListener('click', () => {
    document.querySelector('.login').remove();
  });

  document.querySelector('.go-to-signup span').addEventListener('click', () => {
    signinContant.style.display = 'block';
    signUpContant.style.display = 'none';
    goToSignin.style.display = 'block';
    goToSignup.style.display = 'none';
    psw.style.display = 'none';
  });

  document.querySelector('.go-to-signin span').addEventListener('click', () => {
    signUpContant.style.display = 'block';
    signinContant.style.display = 'none';
    goToSignup.style.display = 'block';
    goToSignin.style.display = 'none';
    psw.style.display = 'block';
  });

  document.querySelector('.submit-signin').addEventListener('click', signInUser);

  document.querySelector('.submit-signup').addEventListener('click', signUp);
});
