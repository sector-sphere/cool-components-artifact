export const MENU_ELEMENTS = {
  HOME: 'home',
  CATEGORIES: 'categories',
  ABOUT: 'about',
};

export const MENU_ITEMS = [
  {
    id: 'categories',
    translation: 'Categories',
  },
  {
    id: 'about',
    translation: 'Write for us',
  },
  {
    id: 'language',
    translation: 'About',
  },
];

export const SUBMENU_ITEMS = {
  [MENU_ELEMENTS.CATEGORIES]: [
    {
      translation: 'Submenu item 5',
      id: 'submenu-item5',
    },
    {
      translation: 'Submenu item 6',
      id: 'submenu-item6',
    },
  ],
  [MENU_ELEMENTS.ABOUT]: [
    {
      translation: 'Submenu item 3',
      id: 'submenu-item3',
    },
    {
      translation: 'Submenu item 4',
      id: 'submenu-item4',
    },
  ],
  [MENU_ELEMENTS.LANGUAGE]: [
    {
      translation: 'Español',
      key: 'es',
    },
    {
      translation: 'Inglés',
      key: 'en',
    },
  ],
};
