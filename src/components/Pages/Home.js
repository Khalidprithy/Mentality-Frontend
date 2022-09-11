import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart, AiOutlineLogin } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import AddPost from "./AddPost";
import usePost from "../Hooks/usePost";
import ShowPost from "./ShowPost";


const Home = () => {

    const [posts] = usePost()

    // const [user, setUser] = useAuthState(auth);

    const menus = [
        { name: "Home", link: "/", icon: MdOutlineDashboard },
        { name: "User", link: "/", icon: AiOutlineUser },
        { name: "Messages", link: "/", icon: FiMessageSquare },
        { name: "Analytics", link: "/", icon: TbReportAnalytics, margin: true },
        { name: "File Manager", link: "/", icon: FiFolder },
        { name: "Cart", link: "/", icon: FiShoppingCart },
        { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
        { name: "Setting", link: "/", icon: RiSettings4Line },
        { name: "Sign Up", link: "/signup", icon: AiOutlineLogin },
    ];
    const [open, setOpen] = useState(true);

    return (
        <div>
            <section className="flex gap-6">
                <div
                    className={`bg-primary min-h-screen z-40 fixed ${open ? "w-60" : "w-16"
                        } duration-700 text-gray-100 px-4`}
                >
                    <div className="py-3 flex justify-end">
                        <HiMenuAlt3
                            size={26}
                            className="cursor-pointer"
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                    <div className="mt-4 flex flex-col gap-4 relative">
                        {menus?.map((menu, i) => (
                            <Link
                                to={menu?.link}
                                key={i}
                                className={` ${menu?.margin && "mt-5"
                                    } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                            >
                                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                                <h2
                                    style={{
                                        transitionDelay: `${i + 3}00ms`,
                                    }}
                                    className={`whitespace-pre duration-700 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                        }`}
                                >
                                    {menu?.name}
                                </h2>
                                <h2
                                    className={`${open && "hidden"
                                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                                >
                                    {menu?.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={` ${!open && "hidden"} m-3 text-2xl text-white duration-500 ease-in-out font-semibold absolute left-14 z-50 `}>
                    Mentality
                </div>
                <div>
                </div>
            </section>
            <div class="flex justify-center w-screen h-screen px-4 text-gray-700">
                <div class={`flex w-full ${open ? "ml-56" : "ml-12"} `}>
                    <div class="flex flex-col flex-grow border-l border-r border-gray-300">
                        <div class="flex justify-between flex-shrink-0 px-8 py-4 border-b border-gray-300 bg-primary">
                            <h1 class="text-xl text-white font-semibold">Feed Title</h1>
                            <button class="flex items-center h-8 px-2 text-sm bg-gray-300 rounded-sm hover:bg-gray-400">New post</button>
                        </div>
                        <div class="flex-grow h-0 overflow-auto">
                            <AddPost></AddPost>
                            {
                                posts.map(post => <ShowPost
                                    key={post._id}
                                    post={post}
                                ></ShowPost>)
                            }
                        </div>
                    </div>
                    <div class={`flex flex-col ${open ? "hidden" : "block"} flex-shrink-0 w-1/4 py-4 pl-4`}>
                        <section class="flex items-center h-8 px-2 border border-gray-500 rounded-sm" type="search" Placeholder="Search…">
                            <div>
                                <h3 class="mt-6 font-semibold">Trending</h3>
                                <div class="flex w-full py-4 border-b border-gray-300">
                                    <span class="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
                                    <div class="flex flex-col flex-grow ml-2">
                                        <div class="flex text-sm">
                                            <span class="font-semibold">Username</span>
                                            <span class="ml-1">@username</span>
                                        </div>
                                        <p class="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore magna aliqua. <a class="underline" href="#">#hashtag</a></p>
                                    </div>
                                </div>
                                <div class="flex w-full py-4 border-b border-gray-300">
                                    <span class="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
                                    <div class="flex flex-col flex-grow ml-2">
                                        <div class="flex text-sm">
                                            <span class="font-semibold">Username</span>
                                            <span class="ml-1">@username</span>
                                        </div>
                                        <p class="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore magna aliqua. <a class="underline" href="#">#hashtag</a></p>
                                    </div>
                                </div>
                                <div class="flex w-full py-4 border-b border-gray-300">
                                    <span class="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
                                    <div class="flex flex-col flex-grow ml-2">
                                        <div class="flex text-sm">
                                            <span class="font-semibold">Username</span>
                                            <span class="ml-1">@username</span>
                                        </div>
                                        <p class="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore magna aliqua. <a class="underline" href="#">#hashtag</a></p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
