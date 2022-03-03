import { rootElem } from '../../components/constants';
import { authorizationContant, userBlock } from './sign-in-content';
import { createUser } from '../../components/methods/users/create-user';
import { getUser } from '../../components/methods/users/get-user';
import { signIn } from '../../components/methods/sign-in';
const logIn = document.querySelector('.button-log');

export const renderLogIn = async (page, wraapper) => {
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

const addUserBlock = async () => {
  const id = localStorage.getItem('userId');
  const nameUser = await getUser(JSON.parse(id));
  await createUserBlock(nameUser.name, nameUser.email);
  logIn.style.display = 'none';

  document.querySelector('.log-out').addEventListener('click', () => {
    document.querySelector('.user-block').remove();
    logIn.style.display = 'block';
    localStorage.setItem('token', 'null');
    localStorage.setItem('refreshToken', 'null');
    localStorage.setItem('userId', 'null');
  });
};

if (localStorage.getItem('token') !== 'null') {
  addUserBlock();
}

const signUp = async () => {
  const username = document.querySelector('.username');
  const emailSignup = document.querySelector('.email-signup');
  const passwordSignup = document.querySelector('.password-signup');

  if (username.value && emailSignup.value && passwordSignup.value) {
    const obj = {};
    obj.name = username.value;
    obj.email = emailSignup.value;
    obj.password = passwordSignup.value;
    await createUser(obj);
    await signIn(obj);
    document.querySelector('.login').remove();
    addUserBlock();
  }
};

const signInUser = async () => {
  const emailSignin = document.querySelector('.email-signin');
  const passwordSignin = document.querySelector('.password-signin');
  if (emailSignin.value && passwordSignin.value) {
    const obj = {};
    obj.email = emailSignin.value;
    obj.password = passwordSignin.value;
    await signIn(obj);
    document.querySelector('.login').remove();
    addUserBlock();
  }
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
  const remember = document.querySelector('.remember');

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
    psw.style.display = 'block';
    remember.style.display = 'block';
  });

  document.querySelector('.go-to-signin span').addEventListener('click', () => {
    signUpContant.style.display = 'block';
    signinContant.style.display = 'none';
    goToSignup.style.display = 'block';
    goToSignin.style.display = 'none';
    psw.style.display = 'none';
    remember.style.display = 'none';
  });

  document.querySelector('.submit-signin').addEventListener('click', signInUser);

  document.querySelector('.submit-signup').addEventListener('click', signUp);
});
