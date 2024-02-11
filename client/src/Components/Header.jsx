import { Button, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useLocation } from "react-router-dom";
export default function Header() {
  const location = useLocation().pathname;
  return (
    <>
      <Navbar className="border-b-2">
        <Link
          to="/"
          className=" flex items-center whitespace-nowrap text-sm sm:text-xl"
        >
          <span className="px-2 py-1 bg-gradient-to-r  from-indigo-500 rounded-lg text-white via-purple-500 to-pink-500">
            Amiir
          </span>
          <span>Blog</span>
        </Link>
        <form>
          <TextInput
            type="text"
            className="hidden lg:flex"
            placeholder="Search Here.."
            rightIcon={AiOutlineSearch}
          />
          <Button className="w-12 h-10  lg:hidden " color="gray" pill>
            <AiOutlineSearch />
          </Button>
        </form>
        <div className="flex gap-2  md:order-1">
          <Button
            className="w-10 h-10 rounded-full hidden sm:flex "
            color="gray"
          >
            <FaMoon />
          </Button>
          <Button className="bg-red-900  bg-gradient-to-r from-purple-500 to-blue-500">
            Sign Up
          </Button>
          <Navbar.Toggle></Navbar.Toggle>
        </div>

        <Navbar.Collapse>
          <Navbar.Link active={location === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={location === "/about"} as={"div"}>
            <Link to="/about">about</Link>
          </Navbar.Link>
          <Navbar.Link active={location === "/sign-in"} as={"div"}>
            <Link to="/sign-in">Sign In</Link>
          </Navbar.Link>
          <Navbar.Link active={location === "/sign-up"} as={"div"}>
            <Link to="/sign-up">Sign Up</Link>
          </Navbar.Link>
          <Navbar.Link active={location === "/projects"} as={"div"}>
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}