export default function StatsSection() {
  const stats = [
    { label: "Happy Customers", count: "10K+" },
    { label: "Products Sold", count: "50K+" },
    { label: "Award Wins", count: "25+" },
    { label: "Years Experience", count: "5+" },
  ];

  return (
    <section className="py-16 bg-purple-300 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-4xl font-bold mb-2">{stat.count}</h3>
            <p className="text-gray-950">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}