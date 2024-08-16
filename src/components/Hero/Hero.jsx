import React from "react";
import Book1 from "../../assets/books/book2.jpg";
import Book2 from "../../assets/books/book1.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Vector from "../../assets/website/blue-pattern.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "His Life will forever be Changed",
    description:
      "The Lost Stars by Hannah Cumming tells the story of our stars, who one day get fed up with being ignored by people who are much too busy to look up at the sky. ",
  },
  {
    id: 2,
    img: Book2,
    title: "Memory",
    description:
      "A memory book is a collection of photos and mementos that can help people with dementia relive and recall memories. It can facilitate connection with loved ones and allow them to make sense of daily life.",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boy",
    description:
      "The Lost Boy is the harrowing but ultimately uplifting true story of a boy's journey through the foster-care system in search of a family to love",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [imageId, setImageId] = React.useState(Book1);
  const [title, setTitle] = React.useState("If you can't be a sun, be a star.");
  const [description, setDescription] = React.useState(
    "Today a reader, tomorrow a leader."
  );

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <div
      className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      style={bgImage}
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text Content Section */}
          <div
            data-aos-once="true"
            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
          >
            <h1
              data-aos="zoom-out"
              data-aos-duration="500"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              {title}
              <p className="bg-clip-text text-transparent bg-gradient-to-b from-orange-600 text-right text-sm to-orange-800">
                Luther King Jr.
              </p>
            </h1>
            <p
              data-aos="slide-up"
              data-aos-duration="500"
              data-aos-delay="100"
              className="text-sm"
            >
              {description}
            </p>
            <div>
              <button
                onClick={handleOrderPopup}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
              >
                Order Now
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-once="true"
                src={imageId}
                alt="Book img"
                className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
              />
            </div>
            {/* Show Slider Only on Medium Screens and Above */}
            <div className="hidden lg:flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
              {ImageList.map((item) => (
                <img
                  key={item.id}
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={item.img}
                  onClick={() => {
                    setImageId(item.img);
                    setTitle(item.title);
                    setDescription(item.description);
                  }}
                  alt="Book img"
                  className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
