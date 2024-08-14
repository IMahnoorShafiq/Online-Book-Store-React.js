import React from "react";
import Img1 from "../../assets/books/book2.jpg";
import Img2 from "../../assets/books/book1.jpg";
import Img3 from "../../assets/books/book3.jpg";
import Img4 from "../../assets/books/book4.jpg"; 
import Img5 from "../../assets/books/book5.jpg"; 
import Img6 from "../../assets/books/book6.jpg"; 
import Img7 from "../../assets/books/book7.jpg";
import Img8 from "../../assets/books/book8.jpg";
import Img9 from "../../assets/books/book9.jpg";
import { FaStar } from "react-icons/fa";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    title: "The Past Rising",
    description:
      "The novel tells the story of Derek Fallon, a mischievous twelve-year-old boy who finds reading difficult because of his reading disability. ",
  },
  {
    id: 2,
    img: Img2,
    title: "Memory",
    description:
      "In There There, Tommy Orange traces the intersecting lives of 12 characters from Native communities whose voices and perspectives converge and conflict and reach across generations.",
  },
  {
    id: 3,
    img: Img3,
    title: "Lost Boy",
    description:
      "Lost Boy is a dark retelling of Peter Pan from the point of view of the boy who would become Captain Hook. And it's fantastic.",
  },
  {
    id: 4,
    img: Img4,
    title: "Never Ending Sky",
    description:
      "Explore the vast possibilities that lie ahead when we embrace change and venture into the unknown.",
  },
  {
    id: 5,
    img: Img5,
    title: "All This Times",
    description:
      "Delve into the secrets and stories hidden within the annals of history, bringing forgotten tales to life.",
  },
  {
    id: 6,
    img: Img6,
    title: "Dreams Of Stacy",
    description:
      "Uncover the mysteries that lie just out of reach, inviting readers to explore the unseen and the unknown.",
  },
  {
    id: 7,
    img: Img7,
    title: "Carrie Annes World",
    description:
      "A tale that transcends time, weaving together stories from the past, present, and future.",
  },
  {
    id: 8,
    img: Img8,
    title: "The Tide",
    description:
      "Dive into the complex and intricate thoughts of a mind on the edge, where reality and imagination blur.",
  },
  {
    id: 9,
    img: Img9,
    title: "Times School",
    description:
      "Embark on a journey through a world where dreams and reality collide in a spectacular adventure.",
  },
];

const Services = ({ handleOrderPopup }) => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Books are important for the mind, heart, and soul.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-orange-500 dark:hover:bg-orange-600 hover:text-white relative shadow-xl duration-high group max-w-[300px] p-4 mb-12" // Added mb-12 for spacing
              >
                <div className="h-[200px] flex justify-center items-center">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="max-w-[100px] sm:max-w-[150px] block mx-auto transform -translate-y-12 group-hover:scale-105 duration-300 shadow-md"
                  />
                </div>
                <div className="text-center mt-4">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold mt-2">{service.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2 mt-2">
                    {service.description}
                  </p>
                  <button
                    className="bg-orange-500 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-gray-200 group-hover:text-orange-700"
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
