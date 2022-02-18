export function checkAutorization() {
  const autorization = localStorage.getItem('token');
  return !autorization || autorization === 'null' ? false : true;
}
