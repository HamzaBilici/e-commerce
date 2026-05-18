const stats = [
  { id: 1, value: "15K", label: "Happy Customers" },
  { id: 2, value: "150K", label: "Monthly Visitors" },
  { id: 3, value: "15", label: "Countries Worldwide" },
  { id: 4, value: "100+", label: "Top Partners" },
];

const StatsArea = () => {
  return (
    <section className="bg-white py-20 lg:py-24 font-montserrat">
      <div className="max-w-274 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-24 lg:gap-y-0 text-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center"
            >
              <h3 className="text-[58px] font-bold text-[#252B42] leading-[80px] tracking-[0.2px]">
                {stat.value}
              </h3>

              <p className="text-[16px] font-bold text-[#737373] tracking-[0.1px] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsArea;
