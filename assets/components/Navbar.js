// "use client";
// // import { Fragment } from "react";
// // import logo from "../Images/logo-green.png";
// // import { Disclosure, Menu, Transition } from "@headlessui/react";
// // import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// // import Image from "next/image";
// import Link from "next/link";
// import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
// // import "../styles/navbar.module.css";
// // import Button from "./Button";

// // const navigation = [
// //   { name: "About Me", href: "/about", current: false },
// //   { name: "Services", href: "/services", current: false },
// //   {
// //     name: "Seo Consulting",
// //     href: "/services/seo-consulting",
// //     current: false,
// //   },
// //   { name: "Portfolio", href: "/portfolio", current: false },
// //   { name: "Case Study", href: "/case-study", current: false },
// //   { name: "Contact", href: "/contact.js", current: false },
// //   { name: "Blog", href: "/[blog].js", current: false },
// // ];
// // Names(...classes) {
// //   return classes.filter(Boolean).join(" ");
// // }
// // export default function Navbar2() {
// //   return (
// //     <Disclosure
// //       as="nav"
// //       className="bg-slate-800 fixed w-full z-50 "
// //       index="navbar-container-final"
// //     >
// //       {({ open }) => (
// //         <>
// //           <div className="px-2 sm:px-6  mx-auto lg:pl-24 py-2">
// //             <div className="relative flex lg:h-16 h-12 items-center justify-between">
// //               <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
// //                 {/* Mobile menu button*/}
// //                 <Link
// //                   className="text-slate-700 mr-3 hover:text-blue-600"
// //                   href={"/contact.js"}
// //                 >
// //                   <PhoneInTalkIcon color="inherit" />
// //                 </Link>
// //                 <Disclosure.Button className="inline-flex items-center justify-center rounded-md  text-slate-700 hover:bg-grayy-700 hover:text-black   ">
// //                   <span className="sr-only">Open main menu</span>
// //                   {open ? (
// //                     <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
// //                   ) : (
// //                     <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
// //                   )}
// //                 </Disclosure.Button>
// //               </div>
// //               <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-between">
// //                 <div className="flex flex-shrink-0 items-center">
// //                   <Link href={"/"} aria-label="Home Page">
// //                     <Image
// //                       className="block h-9 w-auto lg:hidden"
// //                       src={logo}
// //                       width={152}
// //                       height={47}
// //                       alt="Website Logo"
// //                     />
// //                   </Link>
// //                   <Link href={"/"} aria-label="Home Page">
// //                     <Image
// //                       className="hidden w-auto lg:block"
// //                       width={152}
// //                       height={47}
// //                       src={logo}
// //                       alt="Website Logo"
// //                     />
// //                   </Link>
// //                 </div>

// //                 <div className="hidden  sm:block ">
// //                   {/* sm:ml-6 */}
// //                   <div className="flex space-x-3 items-center  text-black">
// //                     {navigation.map((item) => (
// //                       <Link
// //                         key={item.name}
// //                         href={item.href}
// //                         aria-label={item.name}
// //                         // className={classNames(
// //                         //   item.current
// //                         //     ? "bg-gray-900 text-white"
// //                         //     : "text-green-900  hover:text-slate-800",
// //                         //   "rounded-md px-3 py-2  font-medium"
// //                         // )}
// //                         className="rounded-md px-3 py-2  font-medium"
// //                         aria-current={item.current ? "page" : undefined}
// //                       >
// //                         {item.name}
// //                       </Link>
// //                     ))}
// //                     {/* <button
// //                       className="py-2 px-5 bg-slate-700 rounded-full text-sm hover:bg-blue-600 border-2 border-slate-500 border-double"
// //                       style={{ transition: "all 0.4s ease-in-out " }}
// //                     >
// //                       <Link href={"/contact.js"} className="text-white">
// //                         Book a Strategy Call
// //                       </Link>
// //                     </button> */}
// //                   </div>
// //                 </div>
// //                 <Button btnTxt="Book a Strategy Call" path="contact.js" className=" hidden lg:flex"/>
// //               </div>
// //               {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
// //                 <button
// //                   type="button"
// //                   className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
// //                 >
// //                   <span className="sr-only">View notifications</span>
// //                   <BellIcon className="h-6 w-6" aria-hidden="true" />
// //                 </button>

// //                 {/* Profile dropdown */}
// //               {/* <Menu as="div" className="relative ml-3">
// //                   <div>
// //                     <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
// //                       <span className="sr-only">Open user menu</span>
// //                       <img
// //                         className="h-8 w-8 rounded-full"
// //                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
// //                         alt=""
// //                       />
// //                     </Menu.Button>
// //                   </div>
// //                   <Transition
// //                     as={Fragment}
// //                     enter="transition ease-out duration-100"
// //                     enterFrom="transform opacity-0 scale-95"
// //                     enterTo="transform opacity-100 scale-100"
// //                     leave="transition ease-in duration-75"
// //                     leaveFrom="transform opacity-100 scale-100"
// //                     leaveTo="transform opacity-0 scale-95"
// //                   >
// //                     <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
// //                       <Menu.Item>
// //                         {({ active }) => (
// //                           <a
// //                             href="#"
// //                             className={classNames(
// //                               active ? "bg-gray-100" : "",
// //                               "block px-4 py-2 text-sm text-gray-700"
// //                             )}
// //                           >
// //                             Your Profile
// //                           </a>
// //                         )}
// //                       </Menu.Item>
// //                       <Menu.Item>
// //                         {({ active }) => (
// //                           <a
// //                             href="#"
// //                             className={classNames(
// //                               active ? "bg-gray-100" : "",
// //                               "block px-4 py-2 text-sm text-gray-700"
// //                             )}
// //                           >
// //                             Settings
// //                           </a>
// //                         )}
// //                       </Menu.Item>
// //                       <Menu.Item>
// //                         {({ active }) => (
// //                           <a
// //                             href="#"
// //                             className={classNames(
// //                               active ? "bg-gray-100" : "",
// //                               "block px-4 py-2 text-sm text-gray-700"
// //                             )}
// //                           >
// //                             Sign out
// //                           </a>
// //                         )}
// //                       </Menu.Item>
// //                     </Menu.Items>
// //                   </Transition>
// //                 </Menu> */}
// //               {/* </div> */}
// //             </div>
// //           </div>

// //           <Disclosure.Panel className="sm:hidden flex flex-col">
// //             <div className="space-y-2 px-2 pb-3 pt-2 flex flex-col mx-3">
// //               {navigation.map((item) => (
// //                 // <Disclosure.Button
// //                 //   key={item.name}
// //                 //   as="a"
// //                 //   href={item.href}
// //                 //   className={classNames(
// //                 //     item.current
// //                 //       ? "bg-gray-900 text-white"
// //                 //       : "text-black hover:bg-gray-700 hover:text-white",
// //                 //     "block rounded-md px-3 py-2  font-medium"
// //                 //   )}
// //                 //   aria-current={item.current ? "page" : undefined}
// //                 // >
// //                 //   {item.name}
// //                 // </Disclosure.Button>
// //                 <Link
// //                   href={item.href}
// //                   aria-label={item.name}
// //                   // className="text-black"
// //                   key={item.name}
// //                   className={classNames(
// //                     item.current
// //                       ? "bg-gray-900 text-white"
// //                       : "text-black hover:bg-gray-500 hover:text-white",
// //                     "block rounded-md px-3 py-2  font-medium"
// //                   )}
// //                   aria-current={item.current ? "page" : undefined}
// //                 >
// //                   {item.name}
// //                 </Link>
// //               ))}
// //             </div>
// //             <button
// //               className="text-white  py-3  bg-slate-700 rounded-full justify-center w-4/5 hover:bg-blue-600 border-2 border-slate-500 border-double"
// //               style={{ margin: "5% 10%", transition: "all 0.4 linear" }}
// //               onClick={() => {
// //                 window.location.pathname = "/contact.js";
// //               }}
// //             >
// //               Book a Strategy Call
// //             </button>
// //           </Disclosure.Panel>
// //         </>
// //       )}
// //     </Disclosure>
// //   );
// // }

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import Container from "@mui/material/Container";
// // import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import Image from "next/image";
// import logo from "../Images/logo-latest.png";
// import ButtonYellow from "./Button";

// // _____________________________________________________
// import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import { ButtonBase } from "@mui/material";
// import "../styles/navbar.module.css";
// // import InboxIcon from "@mui/icons-material/MoveToInbox";
// // import MailIcon from "@mui/icons-material/Mail";
// // import twitter from "../Images/twitter.png";
// const pages = [
//   {
//     name: "About Me",
//     href: "/about",
//     serv: false,
//   },
//   {
//     name: "Services",
//     href: "/services",
//     serv: true,
//     services: [
//       {
//         name: "Local Seo",
//         href: "/services/local-seo",
//       },
//       {
//         name: "E-Commerce Seo",
//         href: "/services/ecommerce-seo",
//       },
//       // {
//       //   name: "Local Seo",
//       //   href: "/services/local-seo",
//       // },
//       // {
//       //   name: "Local Seo",
//       //   href: "/services/local-seo",
//       // },
//       // {
//       //   name: "Local Seo",
//       //   href: "/services/local-seo",
//       // },
//       // {
//       //   name: "Local Seo",
//       //   href: "/services/local-seo",
//       // },
//       // {
//       //   name: "Local Seo",
//       //   href: "/services/local-seo",
//       // },
//       // {
//       //   name: "Local Seo",
//       //   href: "/services/local-seo",
//       // },
//       // {
//       //   name: "Local Seo",
//       //   href: "/services/local-seo",
//       // },
//     ],
//   },
//   {
//     name: "Seo Consulting",
//     href: "/services/seo-consulting",
//     serv: false,
//   },
//   {
//     name: "Portfolio",
//     href: "/portfolio",
//     serv: false,
//   },
//   {
//     name: "Case Study",
//     href: "/case-study",
//     serv: false,
//   },
//   {
//     name: "Contact",
//     href: "/Contact",
//     serv: false,
//   },
//   {
//     name: "Blog",
//     href: "/[blog].js",
//     serv: false,
//   },
// ];
// // const settings = ["Profile", "Account", "Dashboard", "Logout"];

// export default function ResponsiveAppBar() {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event &&
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 400 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//       className="h-full lg:hidden"
//       style={{ background: "var(--background)" }}
//     >
//       <List>
//         <ListItem>
//           <ListItemButton>
//             <Link href={"/"} className="w-auto">
//               <Image
//                 src={logo}
//                 width={120}
//                 height={40}
//                 alt="website logo"
//                 className="object-fit lg:hidden"
//               />
//             </Link>
//           </ListItemButton>
//         </ListItem>
//       </List>
//       <Divider />
//       <List style={{ marginLeft: "35px", padding: "0", marginTop: "50px" }}>
//         {pages.map((page) => {
//           return (
//             <ListItem key={page.name} disablePadding>
//               <ListItemButton>
//                 <Link href={page.href}>
//                   <ListItemText primary={page.name} />
//                   {services}
//                 </Link>
//               </ListItemButton>
//             </ListItem>
//           );
//         })}
//       </List>

//       <List style={{ marginLeft: "57px", marginTop: "20px" }}>
//         <ListItem>
//           <ListItemButton>
//             <Link
//               href={"/contact.js"}
//               className="w-auto rounded-full  px-3 py-2 "
//               style={{ background: "var(--green)", color: "var(--yellow)" }}
//             >
//               <button>Book a Strategy Call</button>
//             </Link>
//           </ListItemButton>
//         </ListItem>
//         <ListItem>
//           <span className="ml-5">Follow on Social Media</span>
//         </ListItem>
//       </List>
//       <Divider />

//       <List className="flex" style={{ padding: "0 90px", marginTop: "20px" }}>
//         <ListItem>
//           <a href="https://www.facebook.com/imvikashkrpal" target="__blank">
//             <svg
//               aria-hidden="true"
//               width="20"
//               height="20"
//               focusable="false"
//               data-prefix="fab"
//               data-icon="facebook"
//               className="group-hover:fill-gray-300 dark:fill-gray-800 fill-gray-200 dark:group-hover:fill-gray-900"
//               role="img"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 512 512"
//             >
//               <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
//             </svg>
//           </a>
//         </ListItem>
//         <ListItem>
//           <a href="https://www.linkedin.com/in/vikashkrpal/" target="__blank">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               className="group-hover:stroke-gray-300 dark:stroke-gray-800 stroke-gray-200 dark:group-hover:stroke-gray-900"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6v0zM6 9H2v12h4V9zM4 6a2 2 0 100-4 2 2 0 000 4z"
//               ></path>
//             </svg>
//           </a>
//         </ListItem>
//         <ListItem>
//           <a href="https://www.instagram.com/vikashkrpal/" target="__blank">
//             <svg
//               aria-hidden="true"
//               width="20"
//               height="20"
//               focusable="false"
//               data-prefix="fab"
//               data-icon="instagram"
//               className="group-hover:fill-gray-300 dark:fill-gray-800 fill-gray-200 dark:group-hover:fill-gray-900"
//               role="img"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 448 512"
//             >
//               <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
//             </svg>
//           </a>
//         </ListItem>
//         <ListItem>
//           <a href="https://twitter.com/vikashkrpal" target="__blank">
//             <svg
//               fill="#000000"
//               height="20px"
//               width="20px"
//               version="1.1"
//               index="Layer_1"
//               xmlns="http://www.w3.org/2000/svg"
//               // xmlns:xlink="http://www.w3.org/1999/xlink"
//               viewBox="0 0 310 310"
//               // xml:space="preserve"
//             >
//               <g index="SVGRepo_bgCarrier" stroke-width="0"></g>
//               <g
//                 index="SVGRepo_tracerCarrier"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               ></g>
//               <g index="SVGRepo_iconCarrier">
//                 <g index="XMLID_826_">
//                   <path
//                     index="XMLID_827_"
//                     d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73 c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783 c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598 C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467 c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977 c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889 c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597 c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961 c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895 c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367 c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998 C307.394,57.037,305.009,56.486,302.973,57.388z"
//                   ></path>
//                 </g>
//               </g>
//             </svg>
//           </a>
//         </ListItem>
//       </List>
//     </Box>
//   );
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar
//       position="fixed"
//       className="lg:py-2 navbar-container-final w-full"
//       // style={{ background: "var(--background)" }}
//     >
//       <Container maxWidth="w-full">
//         <Toolbar disableGutters={true}>
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: "flex", md: "none", lg: "grid" },
//               // mr: 2,
//               // justifyContent: "md:center start",
//               placeContent: "center",
//             }}
//             className="w-16"
//           >
//             <Link href={"/"} className="">
//               <Image
//                 src={logo}
//                 width={152}
//                 height={47}
//                 alt="website logo"
//                 className="object-fit hidden lg:inline-block "
//               />
//             </Link>
//             <Link href={"/"} className="w-auto">
//               <Image
//                 src={logo}
//                 width={120}
//                 height={40}
//                 alt="website logo"
//                 className="object-fit lg:hidden"
//               />
//             </Link>
//           </Box>

//           <Box
//             sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
//             justifyContent={"center"}
//           >
//             <Menu
//               index="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//               style={{ width: "100%" }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page.name} onClick={handleCloseNavMenu}>
//                   <Typography
//                     textAlign="center"
//                     fontSize={"large"}
//                     className="w-full"
//                   >
//                     {page.name}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box> */}

//           {/* desktop */}

//           <Box
//             sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
//             justifyContent={"center"}
//             gap={"16px"}
//           >
//             {pages.map((page) => {
//               return (
//                 <Link
//                   href={page.href}
//                   key={page.name}
//                   className="flex justify-center items-center"
//                 >
//                   {page.name}
//                 </Link>
//               );
//             })}
//           </Box>

//           <Link
//             href="/contact.js"
//             className="lg:hidden text-sm bg-gray-300 rounded-sm"
//           >
//             {/* <PhoneInTalkIcon fontSize="inherit" /> */}
//             <ButtonBase variant="outlined" className=" p-1 rounded-xs">
//               Book a Strategy Call
//             </ButtonBase>
//           </Link>

//           <Box
//             sx={{ flexGrow: 1, display: { sm: "none", lg: "flex" } }}
//             className="hidden lg:flex justify-center"
//           >
//             <ButtonYellow btnTxt="Book a Strategy Call" path="/contact.js" />
//           </Box>

//           {/* </IconButton> */}
//           <Box
//             sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}
//             className="lg:hidden"
//           >
//             {/* <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color=""
//             > */}
//             {/* <MenuIcon /> */}
//             <Box
//               className="ml-3 lg:hidden"
//               sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}
//             >
//               {["left"].map((anchor) => (
//                 <React.Fragment key={anchor}>
//                   {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
//                   {/* <MenuIcon

//                     className="text-green-500"
//                   /> */}
//                   <button
//                     onClick={toggleDrawer(anchor, true)}
//                     className="rounded-full lg:hidden"
//                     style={{ border: "1px solid black", padding: "5px" }}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="fill-bg dark:fill-gray-800"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                     >
//                       <path
//                         opacity=".4"
//                         d="M18.67 2h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C22 3.15 20.85 2 18.67 2ZM7.24 13.43h-1.9C3.15 13.43 2 14.58 2 16.76v1.9C2 20.85 3.15 22 5.33 22h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c.01-2.19-1.14-3.34-3.32-3.34Z"
//                         fill="curentColor"
//                       ></path>
//                       <path
//                         d="M6.29 10.58a4.29 4.29 0 1 0 0-8.58 4.29 4.29 0 0 0 0 8.58ZM17.71 22.002a4.29 4.29 0 1 0 0-8.58 4.29 4.29 0 0 0 0 8.58Z"
//                         fill="curentColor"
//                       ></path>
//                     </svg>
//                   </button>
//                   <SwipeableDrawer
//                     anchor={anchor}
//                     open={state[anchor]}
//                     onClose={toggleDrawer(anchor, false)}
//                     onOpen={toggleDrawer(anchor, true)}
//                   >
//                     {list(anchor)}
//                   </SwipeableDrawer>
//                 </React.Fragment>
//               ))}
//             </Box>
//             {/* </IconButton> */}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// // export default ResponsiveAppBar;

// import React from "react";
// import "../styles/navbar.module.css"
// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <a href="#">
//           <img src="logo.png" alt="Logo" />
//         </a>
//       </div>
//       <ul className="navbar-menu">
//         <li>
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#">About</a>
//         </li>
//         <li>
//           <a href="#">Contact</a>
//         </li>
//         <li className="navbar-dropdown">
//           <a href="#">Services</a>
//           <ul className="dropdown-menu">
//             <li>
//               <a href="#">SEO Consulting</a>
//             </li>
//             <li>
//               <a href="#">Wix SEO</a>
//             </li>
//             <li>
//               <a href="#">Local SEO</a>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </nav>
//   );
// }
