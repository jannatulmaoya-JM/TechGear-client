import Image from "next/image";

export default function AboutUAPage() {
  return (
    <main className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Tech Gear</h1>
          <p className="text-gray-600 text-lg">Your trusted destination for premium quality gadgets.</p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-3xl">
            <Image 
              src="/images/about.jpeg" 
              alt="About Tech Gear" 
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Tech Gear was founded with a simple mission: to provide high-quality, 
              original gadgets to tech enthusiasts. We believe that technology should 
              simplify life, and that starts with having the right tools.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over the years, we have built a community of thousands of happy customers 
              by ensuring authenticity, reliability, and top-tier customer service in 
              every transaction.
            </p>
          </div>
        </div>

       {/* 2. Our Mission  */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To deliver cutting-edge technology that empowers our customers to perform better and live smarter. We are dedicated to bringing innovation to your doorstep.
            </p>
          </div>
          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-3xl">
            <Image src="/images/mission.jpeg" alt="Our Mission" fill className="object-cover" />
          </div>
        </div>

        {/* 3. Our Vision  */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-3xl">
            <Image src="/images/vission.jpeg" alt="Our Vision" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become the most reliable and customer-centric gadget retailer in the country, setting new standards for quality and service in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}