import { Menu } from '@/types/menu';

const menuData: Menu[] = [
  {
    id: 2,
    title: 'Solutions',
    newTab: false,
    submenu: [
      {
        id: 41,
        title: 'About',
        path: '/about',
        newTab: false,
        description:'The main ‘thrust’ is to focus on educating attendees'
      },
      {
        id: 43,
        title: 'Blog',
        path: '/blog',
        newTab: false,
        description:'The main ‘thrust’ is to focus on educating attendees'
      },
      {
        id: 44,
        title: 'Career',
        path: '/blog-sidebar',
        newTab: false,
        description:'The main ‘thrust’ is to focus on educating attendees'
      },
    ],
  },
  {
    id: 2,
    title: 'Tutorials',
    path: process.env.NEXT_PUBLIC_GETTING_STARTED_PATH,
    newTab: false,
    curTab: true,
  },
  {
    id: 22,
    title: 'Developers',
    path: process.env.NEXT_PUBLIC_DEVELOPERS_PATH,
    newTab: false,
    curTab: true,
  },
  {
    id: 33,
    title: 'Blog',
    path: process.env.NEXT_PUBLIC_BLOG_URL,
    newTab: false,
    curTab: true,
  },
  {
    id: 3,
    title: 'Pricing',
    path: '/pricing',
    newTab: false,
  },
  {
    id: 9,
    title: 'Feedback',
    path: '/feedback',
    mobel: true,
    newTab: false,
  },
  {
    id: 7,
    title: 'auth',
    mobel: true,
    newTab: false,
    submenu: [
      {
        id: 81,
        title: 'Sign In',
        path: '/signin',
        newTab: false,
      },
      {
        id: 82,
        title: 'Sign Up',
        path: '/signup',
        newTab: false,
      },
    ],
  },
  {
    id: 8,
    title: 'langs',
    mobel: true,
    newTab: false,
    langs: true,
    submenu: [
      {
        id: 81,
        title: 'English',
        path: '/en',
        newTab: false,
      },
      {
        id: 82,
        title: '中文',
        path: '/cn',
        newTab: false,
      },
      {
        id: 83,
        title: 'Italiano',
        path: '/it',
        newTab: false,
      },
    ],
  }

  // {
  //   id: 5,
  //   title: "Contact",
  //   path: "/contact",
  //   newTab: false,
  // },
];
export default menuData;
