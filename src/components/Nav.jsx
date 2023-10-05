import { useEffect, useState } from "react";
import { hamburger, closeIcon } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <header
      className='
        padding-x
        py-8
        absolute
        z-30
        w-full
      '
    >
      <nav
        className='
          flex
          justify-between
          max-container
        '
      >
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='
              m-0 
              w-[129px] 
              h-[29px]
              relative
              z-30
            '
          />
        </a>

        <div
          className="
            hidden
            lg:flex
            lg:items-center
          "
        >
          <ul
            className="
              flex
              justify-center
              items-center
              gap-16
            "
          >
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="
                    font-montserrat 
                    leading-normal 
                    text-lg 
                    text-slate-gray
                  "
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <img
            src={menuOpen ? closeIcon : hamburger}
            alt={menuOpen ? "close icon" : "hamburger icon"}
            width={25}
            height={25}
            onClick={toggleMenu}
            className="
              cursor-pointer 
              relative
              z-30
            "
          />
        </div>

        {menuOpen && (
          <div
            className="
              fixed
              top-0
              left-0
              w-full
              h-full
              bg-white
              overflow-y-auto
            "
          >
            <ul
              className="
                flex
                flex-col
                items-center
                justify-center
                h-full
                space-y-8
              "
            >
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="
                      font-montserrat 
                      text-3xl 
                      font-bold
                      text-slate-gray
                    "
                    onClick={toggleMenu}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      
    </header>
  );
};

export default Nav;