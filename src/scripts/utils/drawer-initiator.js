const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this.toggleDrawer(event, button, drawer);
    });

    content.addEventListener('click', (event) => {
      this.closeDrawer(event, button, drawer);
    });
  },

  toggleDrawer(event, button, drawer) {
    drawer.classList.toggle('open');
    button.classList.toggle('nav-open');
    event.stopPropagation();
  },

  closeDrawer(event, button, drawer) {
    drawer.classList.remove('open');
    button.classList.remove('nav-open');
    event.stopPropagation();
  },
};

export default DrawerInitiator;
