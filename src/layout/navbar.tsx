import {
  Phone,
  Mail,
  Search,
  User,
  Heart,
  List,
  LogOut,
  ChevronDown,
} from "lucide-react";
import NavDropdown from "../components/navDropdown";
import { useState, useMemo } from "react";
import clsx from "clsx";
import { Link, useHistory } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { setUser } from "../store/actions/clientActions";
import { toast } from "react-toastify";
import CartDropdown from "../components/cartDropdown";
import md5 from "blueimp-md5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const history = useHistory();

  const user = useAppSelector((state) => state.client.user);

  const gravatarUrl = useMemo(() => {
    if (!user?.email) return "";

    const hash = md5(user.email.trim().toLowerCase());

    return `https://www.gravatar.com/avatar/${hash}?d=mp`;
  }, [user?.email]);

  const handleLogout = () => {
    dispatch(setUser(null));
    localStorage.removeItem("token");
    toast.info("Logged out successfully.");
    history.push("/");
  };

  return (
    <nav className="w-full flex flex-col justify-center gap-3 items-center relative z-50">
      <div className="px-6 justify-between items-center max-w-360 w-full flex bg-[#252B42] font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-white max-lg:hidden">
        <div className="flex gap-2.5">
          <button className="flex items-center gap-1 m-2.5">
            <Phone size={16} /> (225) 555-0118
          </button>

          <button className="flex items-center gap-1 m-2.5">
            <Mail size={16} /> michelle.rivera@example.com
          </button>
        </div>

        <h6 className="m-2.5">Follow Us and get a chance to win 80% off</h6>

        <div className="flex gap-5 m-2.5">
          <span>Follow Us :</span>
        </div>
      </div>

      <div
        className={clsx(
          "px-9 items-center max-w-360 w-full flex gap-10 max-lg:flex-col transition-all duration-500",
          isOpen ? "max-lg:max-h-200" : "max-lg:h-17 max-lg:overflow-hidden",
        )}
      >
        <div className="py-4.5 font-montserrat font-bold text-[24px] leading-8 tracking-[0.1px] text-[#252B42] flex max-lg:w-full max-lg:justify-between items-center">
          <Link to="/" className="w-46.75 block">
            Bandage
          </Link>

          <button
            className="hidden max-lg:block"
            onClick={() => setIsOpen(!isOpen)}
          >
            <List />
          </button>
        </div>

        <div className="flex flex-row justify-between grow max-lg:flex-col max-lg:gap-7.5 w-full">
          <div className="flex items-center max-lg:flex-col">
            <ul className="flex flex-row font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-center text-[#737373] gap-4 max-lg:flex-col max-lg:text-[30px] max-lg:gap-7.5 max-lg:font-normal">
              <li>
                <Link to="/">Home</Link>
              </li>

              <NavDropdown />

              <li>
                <Link to="/aboutus">About</Link>
              </li>

              <li>Blog</li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <li>Pages</li>
            </ul>
          </div>

          <div className="text-[#23A6F0]">
            <ul className="flex flex-row max-lg:flex-col max-lg:items-center justify-end h-full">
              {user?.name ? (
                <li className="flex max-lg:flex-col items-center gap-3 m-4 max-lg:gap-4">
                  <div className="relative group flex items-center gap-2 bg-gray-50 max-lg:bg-transparent px-3 py-1.5 rounded-full border border-gray-100 max-lg:border-none cursor-pointer pb-2 lg:pb-1.5">
                    {gravatarUrl && (
                      <img
                        src={gravatarUrl}
                        alt={user.name}
                        className="w-7 h-7 max-lg:w-12 max-lg:h-12 rounded-full object-cover border border-gray-200"
                      />
                    )}

                    <span className="font-montserrat font-bold text-[14px] text-[#252B42] max-lg:text-[30px] max-lg:font-normal flex items-center gap-1 select-none">
                      {user.name}
                      <ChevronDown
                        size={14}
                        className="text-gray-500 max-lg:hidden"
                      />
                    </span>

                    <div
                      className="absolute top-full right-0 mt-2 w-44 bg-white border border-gray-100 rounded-md shadow-lg hidden group-hover:block max-lg:group-hover:hidden z-50 py-1
                      before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3"
                    >
                      <Link
                        to="/orders"
                        className="block px-4 py-2.5 text-xs font-bold text-gray-700 hover:bg-gray-50 hover:text-[#23A6F0] transition-colors text-left"
                      >
                        Siparişlerim
                      </Link>
                    </div>
                  </div>

                  <Link
                    to="/orders"
                    className="hidden max-lg:block font-montserrat font-bold text-[30px] text-[#23A6F0] py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Siparişlerim
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1 text-sm font-bold text-red-500 hover:text-red-700 transition-colors border border-red-200 px-2.5 py-1.5 rounded-[5px] hover:bg-red-50 max-lg:text-[24px] max-lg:px-6 max-lg:py-3"
                  >
                    <LogOut size={14} className="max-lg:w-6 max-lg:h-6" />
                    Logout
                  </button>
                </li>
              ) : (
                <li className="flex gap-1.5 m-4 items-center">
                  <User />

                  <Link
                    to="/login"
                    className="font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-center max-lg:text-[30px]"
                  >
                    Login
                  </Link>

                  <span className="text-gray-300 max-lg:hidden">/</span>

                  <Link
                    to="/register"
                    className="font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-center max-lg:hidden"
                  >
                    Register
                  </Link>
                </li>
              )}

              <li className="flex gap-1.5 m-4 items-center">
                <Search size={20} />
              </li>

              <li className="flex gap-1.5 m-4 items-center">
                <CartDropdown />
              </li>

              <li className="flex gap-1.5 m-4 items-center">
                <Heart size={20} />

                <span className="font-bold text-xs bg-blue-100 lg:bg-transparent px-2 py-0.5 rounded-full lg:p-0">
                  1
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
