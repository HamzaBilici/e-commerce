const teamMembers = [
  {
    name: "Jacob Jones",
    role: "Mitsubishi",
    img: "https://placehold.co/200x200",
  },
  {
    name: "Kathryn Murphy",
    role: "Mitsubishi",
    img: "https://placehold.co/200x200",
  },
  {
    name: "Eleanor Pena",
    role: "Mitsubishi",
    img: "https://placehold.co/200x200",
  },
  {
    name: "Marvin McKinney",
    role: "Mitsubishi",
    img: "https://placehold.co/200x200",
  },
  {
    name: "Floyd Miles",
    role: "Mitsubishi",
    img: "https://placehold.co/200x200",
  },
  {
    name: "Jenny Wilson",
    role: "Mitsubishi",
    img: "https://placehold.co/200x200",
  },
  {
    name: "Ronald Richards",
    role: "Mitsubishi",
    img: "https://placehold.co/200x200",
  },
  {
    name: "Dianne Russell",
    role: "Mitsubishi",
    img: "https://placehold.co/200x200",
  },
  {
    name: "Devon Lane",
    role: "Mitsubishi",
    img: "https://placehold.co/200x200",
  },
];

const Team = () => {
  return (
    <section className="bg-white py-16 lg:py-24 font-montserrat">
      <div className="max-w-262.5 mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-[40px] font-bold text-[#252B42] mb-4">
            Meet Our Team
          </h2>
          <p className="text-[14px] text-[#737373] max-w-112.5 mx-auto leading-5">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex items-center lg:flex-row gap-5 mx-auto lg:mx-0 w-full max-w-75 lg:max-w-none"
            >
              <div className="w-32 h-32 lg:w-17.5 lg:h-17.5 shrink-0 overflow-hidden rounded-full">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-left">
                <h4 className="text-[16px] font-bold text-[#252B42]">
                  {member.name}
                </h4>
                <p className="text-[14px] font-medium text-[#737373]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
