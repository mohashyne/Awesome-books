function setupNavigation() {
  const navList = document.querySelector('#nav_list');
  const navAdd = document.querySelector('#nav_add');
  const navContact = document.querySelector('#nav_contact');
  const list = document.querySelector('#itemList');
  const form = document.querySelector('#form');
  const contact = document.querySelector('#contactsection');

  navList.addEventListener('click', () => {
    list.classList.remove('hidden');
    form.classList.add('hidden');
    contact.classList.add('hidden');
  });

  navAdd.addEventListener('click', () => {
    form.classList.remove('hidden');
    list.classList.add('hidden');
    contact.classList.add('hidden');
  });

  navContact.addEventListener('click', () => {
    contact.classList.remove('hidden');
    form.classList.add('hidden');
    list.classList.add('hidden');
  });
}

export default setupNavigation;