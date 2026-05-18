import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

async function md5(message: string) {
  const msgUint8 = new TextEncoder().encode(message.trim().toLowerCase());
  const hashBuffer = await crypto.subtle.digest("MD5", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

const Header: React.FC = () => {
  const user = useSelector((state: any) => state.client.user);
  const [gravatarUrl, setGravatarUrl] = useState<string>("");

  useEffect(() => {
    if (user && user.email) {
      md5(user.email).then((hash) => {
        setGravatarUrl(`https://www.gravatar.com/avatar/${hash}?d=mp`);
      });
    }
  }, [user]);

  return (
    <header className="bg-white border-b border-gray-100 py-4 px-8 font-montserrat">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#252B42]">
          Bandage
        </Link>

        <div className="flex items-center gap-6">
          {user && user.name ? (
            <div className="flex items-center gap-3">
              {gravatarUrl && (
                <img
                  src={gravatarUrl}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover border border-gray-200"
                />
              )}
              <span className="text-sm font-bold text-[#252B42]">
                {user.name}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-4 text-sm font-bold text-[#23A6F0]">
              <Link to="/login" className="hover:text-[#1a8cd1]">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-[#23A6F0] text-white px-4 py-2 rounded-[5px] hover:bg-[#1a8cd1]"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
