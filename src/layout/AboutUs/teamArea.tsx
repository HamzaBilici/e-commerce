import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Username",
    profession: "Profession",
    img: "https://placehold.co/600x450",
  },
  {
    id: 2,
    name: "Username",
    profession: "Profession",
    img: "https://placehold.co/600x450",
  },
  {
    id: 3,
    name: "Username",
    profession: "Profession",
    img: "https://placehold.co/600x450",
  },
];

const TeamArea = () => {
  return (
    <section className="bg-white py-16 lg:py-24 font-montserrat">
      <div className="max-w-262 mx-auto px-6">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-[40px] font-bold text-[#252B42] mb-4">
            Meet Our Team
          </h2>
          <p className="text-[14px] text-[#737373] max-w-112.5 mx-auto leading-5">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="w-full aspect-4/3 lg:aspect-square overflow-hidden mb-6">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center space-y-2 mb-4">
                <h4 className="text-[16px] font-bold text-[#252B42]">
                  {member.name}
                </h4>
                <p className="text-[14px] font-bold text-[#737373]">
                  {member.profession}
                </p>
              </div>

              <div className="flex items-center gap-5">
                <a
                  href="#"
                  className="text-[#335CA5] hover:opacity-80 transition-opacity"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-[#E51F5E] hover:opacity-80 transition-opacity"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-[#23A6F0] hover:opacity-80 transition-opacity"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamArea;
