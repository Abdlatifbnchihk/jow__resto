import React from "react";
import { Icon } from "@iconify/react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Icon icon="fa6-solid:tree" />,
      title: "Outdoor Seating Areas",
      description:
        "Enjoy your meal in our spacious outdoor areas with fresh air and scenic views.",
      buttonText: "Reserve Spot",
      href: "#contact",
    },
    {
      icon: <Icon icon="ion:fast-food" />,
      title: "Takeaway Food",
      description:
        "Grab your favorite dishes to go with our convenient takeaway options.",
      buttonText: "Order Takeaway",
      href: "#menu",
    },
    {
      icon: <Icon icon="fa6-solid:truck" />,
      title: "Delivery Service",
      description:
        "Get our delicious meals delivered straight to your door with fast service.",
      buttonText: "Order Delivery",
      href: "#menu",
    },
    {
      icon: <Icon icon="ion:home" />,
      title: "Sitting Inside the Place",
      description:
        "Relax in our cozy indoor seating, perfect for any weather or occasion.",
      buttonText: "Book Table",
      href: "#contact",
    },

    {
      icon: <Icon icon="fa6-solid:calendar-check" />,
      title: "Reservations Accepted",
      description:
        "Book your table in advance for a smooth dining experience.",
      buttonText: "Reserve Now",
      href: "#services",
    },
    {
      icon: <Icon icon="mdi:cake" />,
      title: "Wonderful Sweets",
      description:
        "Indulge in our delightful selection of homemade sweets and desserts.",
      buttonText: "View Sweets",
      href: "#menu",
    },
    {
      icon: <Icon icon="fa:coffee" />,
      title: "Great Coffee",
      description:
        "Savor expertly brewed coffee made from premium beans.",
      buttonText: "Try Coffee",
      href: "#menu",
    },
    {
      icon: <Icon icon="fa6-solid:child" />,
      title: "Suitable for Children",
      description:
        "Family-friendly environment with kid-approved menus and activities.",
      buttonText: "Visit with Kids",
      href: "#contact",
    },
  ];

  return (
    <section id="services" className="py-25 pb-15 md:py-20 bg-white h-auto">
      <div className="mx-auto px-4 max-w-6xl">
        
        <h1
          className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-20 logo-font"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Our <span className="text-amber-500"> Services</span>
        </h1>

        <div className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-lg shadow-[0_0_25px_0px_rgba(0,0,0,0.2)] overflow-hidden text-center group"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 bg-amber-200 transform -translate-y-full group-hover:translate-y-0 rounded-lg transition-transform duration-500 ease-in-out"></div>

                <div className="relative z-10">
                  <div className="text-6xl text-gray-800 group-hover:text-black mb-4 flex justify-center transition-colors duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 group-hover:text-black/80 transition-colors duration-300">
                    {service.description}
                  </p>

                  <div className="flex justify-center">
                    <a href={service.href} className="bg-[var(--secondary-color)] hover:bg-transparent hover:border border-gray-900 hover:text-[var(--secondary-color)] text-black px-4 py-3 group-hover:bg-white rounded-full font-semibold transition duration-300 cursor-pointer block"
                      rel="noopener noreferrer"
                    >
                    {service.buttonText} →
                  </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;