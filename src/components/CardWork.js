import React from 'react';

export default function CardWork() {
  return (
    <div className="flex flex-col items-center  bg-white mt-5 shadow-lg overflow-hidden md:w-1/4">
      <div className="top-0 w-full h-40 shadow-sm">
        <img
          className="h-full w-full object-cover"
          src="https://picsum.photos/1000/1000?random"
          alt="logoProject"
        />
      </div>
      <div className="m-5">
        <h3 className="text-xl font-semibold">Projet 1</h3>

        <p className="text-gray-800 font-normal text-xs mb-2">
          At the end of his studies, at the age of 18, the young Quebecer Guy
          Laliberté, looking for a career in the world of show business, left
          home and decided to travel around Europe as a travelling musician.
          There he learns the trade of fire-eater. In 1979 he decided to devote
          himself to the street arts and during the summer of the same year he
          participated in the organization of a popular festival in
          Baie-Saint-Paul with two friends Daniel Gauthier and Gilles
          Sainte-Croix.
        </p>
      </div>
    </div>
  );
}
