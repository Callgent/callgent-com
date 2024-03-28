'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { setInfo } from '@/store/slices/userSlice';
import { useEffect, useState } from 'react';
import ThemeToggler from './ThemeToggler';
import menuData from './menuData';
import Image from 'next/image';
import Link from 'next/link';
// import Lang from './lang';
import { deleteCookie, getCookie } from '@/util/cookie';
import { fetchUserInfo } from '@/store/thunk';
function Header() {
  const { userData } = useSelector(
    (state: RootState) => state.user
  );
  const [base, setBase] = useState('');
  const usePathName = usePathname();
  const route = useRouter();

  const pathname = usePathname();

  const dispatch = useDispatch<AppDispatch>();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };


  const changeRouter = (path: string, curTab: boolean = false) => {
    curTab ? window.location.href = path : route.push(base + path);
  };

  const changeLang = (newBase: string) => {
    const routeaa = newBase + pathname?.split(base)[1] || '';
    route.push(routeaa);
  };

  useEffect(() => {
    const lang = getCookie('lang');
    setBase('/' + lang);
    // Check login status
    dispatch(fetchUserInfo()).then(() => {
      dispatch(setInfo());
    });
  }, [dispatch]);
  const [curUrl, SetCururl] = useState('/signin');

  useEffect(() => {
    SetCururl(pathname?.split(base)[1] || '');
  }, [pathname, base]);
  const Logout = () => {
    deleteCookie('jwt');
    localStorage.removeItem('userinfo');
    route.push('/en');
    window.location.reload();
  };
  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${sticky
          ? 'dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition'
          : 'absolute bg-transparent'
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 -mr-6 xl:mr-10">
              <Link
                href="/"
                className={`header-logo flex items-center w-full ${sticky ? 'py-5 lg:py-2' : 'py-8'
                  } `}
              >
                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={140}
                  height={16}
                  className="w-10 md:w-12 dark:invert"
                />
                <div className="ml-1 text-xl lg:text-2xl font-medium lg:hidden  xl:block">
                  Botlet.IO
                </div>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? ' top-[7px] rotate-45' : ' '
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? 'opacity-0 ' : ' '
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? ' top-[-8px] -rotate-45' : ' '
                      }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                    ? 'visibility top-full opacity-100'
                    : 'invisible top-[120%] opacity-0'
                    }`}
                >
                  <ul className="block lg:flex lg:space-x-10">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className={`${menuItem.mobel ? 'group lg:hidden' : 'group'} relative`}>
                        {menuItem.path ? (
                          <span
                            onClick={() => changeRouter(menuItem.path, menuItem.curTab)}
                            className={`flex cursor-pointer py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${usePathName === menuItem.path
                              ? 'text-primary dark:text-white'
                              : 'text-dark hover:text-primary dark:text-white/70 dark:hover:text-white'
                              }`}
                          >
                            {menuItem.title}
                          </span>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu cursor-pointer relative top-full transition-[top] duration-300 group-hover:opacity-100
                               lg:invisible lg:top-[120px] lg:fixed lg:w-[55vw] 2xl:w-[60vw] lg:min-w-[680px] lg:max-w-[900px] lg:left-[50vw] lg:-translate-x-1/2 lg:mx-auto lg:block  lg:p-4 lg:opacity-0  lg:group-hover:visible lg:group-hover:top-[70px] lg:pt-[20px] ${openIndex === index ? 'block' : 'hidden'
                                }`}
                            >
                              <div className="bg-white dark:bg-dark rounded-sm lg:shadow-2xl lg:rounded-lg lg:flex lg:justify-between duration-300  lg:group-hover:scale-105">
                                {menuItem.submenu.map((submenuItem, index) => (
                                  <span
                                    onClick={() => menuItem.langs ? changeLang(submenuItem.path) : changeRouter(submenuItem.path, submenuItem.curTab)}
                                    key={index}
                                    className="block cursor-pointer rounded py-2 lg:py-5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white
                                    lg:px-6 lg:w-1/3 lg:text-left"
                                  >
                                    <div className="lg:text-xl">
                                      {submenuItem.title}
                                    </div>
                                    {submenuItem?.description &&
                                      <div className="hidden mt-4 lg:block">
                                        {submenuItem?.description}
                                      </div>
                                    }
                                  </span>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                    {userData?.avatar &&
                      <li className='group lg:hidden relative' >
                        <span
                          onClick={Logout}
                          className={`flex cursor-pointer py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`} >
                          Logout
                        </span>
                      </li>
                    }
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-3 lg:pr-0">
                {!userData?.avatar && (
                  <div className="flex ml-10 mr-2">
                    <Link
                      href={base + '/signin'}
                      className={`hidden mr-3 px-2 xl:px-5 py-3 text-base font-medium text-dark dark:text-white md:block bg-primary  ${curUrl === '/signin' ? 'bg-opacity-1' : ' bg-opacity-10'} `}
                    >
                      Sign In
                    </Link>
                    <Link
                      href={base + '/signup'}
                      className={`hidden px-2 xl:px-5 py-3 text-base font-medium text-dark dark:text-white md:block bg-primary ${curUrl !== '/signin' ? 'bg-opacity-1' : 'bg-opacity-10'} `}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
                <div className='flex items-center mr-12 lg:mr-0'>
                  {userData?.avatar &&
                    <div className=' hidden lg:block ml-4'>
                      <Link
                        href={base + '/feedback'}
                      >
                        <svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2972" width="32" height="32">
                          <path d="M827.6992 165.1712H203.3152a101.5296 101.5296 0 0 0-101.376 101.376v389.6832A101.4784 101.4784 0 0 0 203.3152 757.76h10.8032v134.1952L434.8928 757.76h392.8064a101.4784 101.4784 0 0 0 101.376-101.376V266.5472a101.5296 101.5296 0 0 0-101.376-101.376z m-128.8704 184.7296a28.16 28.16 0 0 1 28.16-28.16h17.3056a28.16 28.16 0 0 1 28.16 28.16v67.584a28.16 28.16 0 0 1-28.16 28.16H727.04a28.16 28.16 0 0 1-28.16-28.16z m-321.4336 0a28.16 28.16 0 0 1 28.16-28.16h17.3056a28.2112 28.2112 0 0 1 28.2112 28.16v67.584A28.2112 28.2112 0 0 1 422.8608 445.44h-17.3056a28.16 28.16 0 0 1-28.16-28.16z m388.096 230.8096a403.0464 403.0464 0 0 1-189.0304 60.2112c-7.9872 0.512-16.0256 0.7168-24.0128 0.7168a403.0976 403.0976 0 0 1-164.4032-34.9696 28.16 28.16 0 1 1 23.04-51.2 341.8624 341.8624 0 0 0 161.9968 29.44 346.2144 346.2144 0 0 0 162.5088-51.7632 28.16 28.16 0 0 1 29.9008 47.7696z" p-id="2973"></path>
                        </svg>
                      </Link>
                    </div>
                  }
                  {/* <div className="hidden lg:block ml-4">
                  <Lang />
                </div> */}
                  <div className="ml-4">
                    <ThemeToggler />
                  </div>

                  {userData?.avatar &&
                    <div className="hidden lg:block ml-4">
                      <div className="group relative items-center">
                        <Image
                          className="rounded-full hidden md:block cursor-pointer"
                          src={userData.avatar}
                          width="50"
                          height="50"
                          alt=''
                        />
                        <div className='submenu absolute -translate-x-1/2 rounded-sm top-full py-4 transition-[top] duration-300 group-hover:opacity-100  lg:invisible lg:absolute lg:block w-[150px] lg:p-4 lg:opacity-0 lg:group-hover:visible lg:group-hover:top-[40px]'>
                          <div className='bg-white dark:bg-dark py-2 px-4 white lg:shadow-lg border-[1px] dark:border-gray-700 rounded-md my-1'>
                            <div onClick={Logout} className='flex cursor-pointer'>
                              <svg fill="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2931" width="25" height="25"><path d="M85.333333 256a85.333333 85.333333 0 0 1 85.333334-85.333333h384a85.333333 85.333333 0 0 1 85.333333 85.333333v85.333333a42.666667 42.666667 0 1 1-85.333333 0V256H170.666667v512h384v-85.333333a42.666667 42.666667 0 1 1 85.333333 0v85.333333a85.333333 85.333333 0 0 1-85.333333 85.333333H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333333V256z m652.501334 97.834667a42.666667 42.666667 0 0 1 60.330666 0l128 128a42.666667 42.666667 0 0 1 0 60.330666l-128 128a42.666667 42.666667 0 0 1-60.330666-60.330666L793.002667 554.666667H384a42.666667 42.666667 0 1 1 0-85.333334h409.002667l-55.168-55.168a42.666667 42.666667 0 0 1 0-60.330666z" p-id="2932"></path></svg>
                              <div className='ml-2'>Logout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
