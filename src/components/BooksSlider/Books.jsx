import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Book4 from "../../assets/books/book4.jpg";
import Book5 from "../../assets/books/book5.jpg";
import Book6 from "../../assets/books/book6.jpg";
import Book7 from "../../assets/books/book7.jpg";
import Book8 from "../../assets/books/book8.jpg";
import Book9 from "../../assets/books/book9.jpg";
import Book10 from "../../assets/books/book10.jpg";
import Book11 from "../../assets/books/book11.jpg";
import Book12 from "../../assets/books/book12.jpg";
import Book13 from "../../assets/books/book13.jpg";
import Book14 from "../../assets/books/book14.jpg"; 
import Book15 from "../../assets/books/book15.jpg"; 
import { FaStar } from "react-icons/fa";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Memory",
    rating: 5.0,
    author: "Stella",
  },
  {
    id: 2,
    img: Book2,
    title: "The Past is Rising",
    rating: 4.5,
    author: "John",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
  },
  {
    id: 4,
    img: Book4,
    title: "Never Ending Sky",
    rating: 4.4,
    author: "Someone",
  },
  {
    id: 5,
    img: Book5,
    title: "All this Time",
    rating: 4.5,
    author: "Maria",
  },
 
  {
    id: 6,
    img: Book6,
    title: "Dreams of Stacy",
    rating: 4.8,
    author: "Mark",
  },
  {
    id: 7,
    img: Book7,
    title: "Carrie Annes World",
    rating: 4.6,
    author: "Mark Whiteway",
  },
  {
    id: 8,
    img: Book8,
    title: "The Tide",
    rating: 4.9,
    author: "Imagination",
  },
  {
    id: 9,
    img: Book9,
    title: "Time School",
    rating: 4.3,
    author: "Traveler",
  },
  {
    id: 10,
    img: Book10,
    title: "Summer Of Brave",
    rating: 4.7,
    author: "Chronos",
  },
  {
    id: 11,
    img: Book11,
    title: "The Summer of June",
    rating: 4.5,
    author: "Echo Writer",
  },
  {
    id: 12,
    img: Book12,
    title: "Lone Wolf Adventure",
    rating: 4.6,
    author: "Explorer",
  },
  {
    id: 13,
    img: Book13,
    title: "The Power Light",
    rating: 4.8,
    author: "Alexa Taylor",
  },
  
  {
    id: 14,
    img: Book14,
    title: "A Teaspoon of Earth ",
    rating: 4.4,
    author: "Dina Nayeri",
  },
  {
    id: 15,
    img: Book15,
    title: "Stars In The Night",
    rating: 4.7,
    author: "Past Whisperer",
  },
];

const Books = () => {
  return (
    <>
    <span id='Books'></span>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent text-bold bg-gradient-to-r from-orange-500 to-orange-600">
              Top Books for you
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
              Books are important for the mind, heart, and soul.
            </p>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt={title}
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div  className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer bg-orange-600 text-white py-1 px-5 rounded-md">
                View All Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
