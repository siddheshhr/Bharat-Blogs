import { Link } from "react-router-dom";
import { Navbar, TextInput, Button, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from 'react-icons/fa';
import { useLocation } from "react-router-dom";

const Header = () => {
  const path=useLocation().pathname;
  return (
    <Navbar className="border-b-2 flex justify-between items-center">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Siddhesh
        </span>Blog
      </Link>
      <form className="relative hidden lg:block">
        <TextInput
          type="text"
          placeholder="search"
          className="pr-10"
          rightIcon={AiOutlineSearch}
        />
       
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex items-center gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:block" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/signin">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </Link>
        <NavbarToggle/>
      </div>
      <NavbarCollapse>
            <NavbarLink active={path==="/"}  as={'div'}>
              <Link to='/'>
              Home
              </Link>
            </NavbarLink>
            <NavbarLink active={path==="/about"} as={'div'}>
              <Link to='/about'>
              About
              </Link>
            </NavbarLink>
            <NavbarLink active={path==="/projects"}  as={'div'}>
              <Link to='/projects'>
              Project
              </Link>
            </NavbarLink>
          </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
