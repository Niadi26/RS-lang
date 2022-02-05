export function getGroupCount(event: Event) {
  // eslint-disable-next-line prettier/prettier
  const element = event.target as HTMLElement;
  if (!element.id) return;
  localStorage.setItem('glossaryGroup', `${element.id}`);
}

export function getPageCount(event: Event) {
  // eslint-disable-next-line prettier/prettier
  const element = event.target as HTMLElement;
  if (!element.id) return;
  const page = localStorage.getItem('glossaryPage');
  console.log(element.id, page)
}