import React from "react";
import Chef from "../../assets/chef.png";
import { Star } from "lucide-react";
import { Carousel } from "@mantine/carousel";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Enthusiast",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJzfGVufDB8fDB8fHww",
    comment:
      "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Regular Customer",
    image:
      "https://media.istockphoto.com/id/980664232/photo/close-up-portrait-of-young-man-laughing-and-covering-his-mouth-with-hand-over-white-background.jpg?s=612x612&w=0&k=20&c=wcT2XSfBmjcHbhD8YX_GJV9HDTduDiJChFsRB-s0TpQ=",
    comment:
      "The fusion dishes here are a perfect blend of flavors. Every visit brings a new culinary adventure that keeps me coming back for more.",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Food Blogger",
    image:
      "https://media.istockphoto.com/id/1157139819/photo/guy-closed-eyes-put-hands-on-chest-sincerely-requesting.jpg?s=612x612&w=0&k=20&c=YjvxhTL_YdM40FWeAa8QKz3K-qdn300BYQPAYZ-KWx8=",
    comment:
      "As a food blogger, I've dined at many restaurants, but Foodi stands out with its innovative menu and exceptional service. A must-visit!",
    rating: 5,
  },
];

const CustomerFeedback = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative h-[500px]">
          {/* Background semi-circle */}
          <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-green-400 rounded-t-[40px]" />

          {/* Chef image container */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <img
              src={Chef}
              alt="Chef"
              className="h-[550px] w-auto object-contain"
              style={{ filter: "drop-shadow(0 0 20px rgba(0,0,0,0.1))" }}
            />
          </div>

          {/* Stats Card */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 w-[80%] z-10">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-green-500">15+</p>
                <p className="text-sm text-gray-600">Years of Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-500">250+</p>
                <p className="text-sm text-gray-600">Menu Items</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-500">18.6k</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="flex flex-col gap-8 mt-12 md:mt-0">
          <div>
            <p className="uppercase text-rose-500 font-medium tracking-widest text-sm">
              Testimonials
            </p>
            <h2 className="text-4xl font-bold leading-tight mt-2">
              What Our Customers Say About Us
            </h2>
          </div>

          <Carousel
            slideSize="100%"
            slideGap="md"
            loop
            withControls={false}
            withIndicators
            classNames={{
              indicator: "bg-gray-300 w-2 h-2 transition-all",
              indicators: "mt-8",
            }}
            styles={{
              indicator: {
                "&[data-active]": {
                  width: "2rem",
                  backgroundColor: "#4ADE80",
                },
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <Carousel.Slide key={testimonial.id}>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-gray-600 italic mb-6">
                    "{testimonial.comment}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">
                        {testimonial.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
