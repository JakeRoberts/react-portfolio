import React from "react";
import Surf from "../surfsup.jpg";
import Appa from "../appatixer.jpg"

export default function Work() {
  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center">My Projects</h1>

        <div className="grid grid-cols lg:grid-cols-2 gap-8">
          <article className="relative rounded-lg shadow-lg bg-white p-16 mt-10">
            <img src={Surf} />
            <h3 className="text-gray-800 text-2xl font-bold mb-2 hover:text-red-600">
              <a href="https://nickverneck.github.io/Surfs-Up/" target="_blank">
                Surf's Up (Click to Visit Live Site)
              </a>
            </h3>
            <p className="mb-4">
              Surf's Up is a website created for surfers to easily check the
              local beach conditions and determine whether or not it is viable
              to surf. The website has other features such as 5 of the closest
              beaches to your local beach which will load when the website is
              opened or will load when you search for beach, then the 5 beaches
              will appear based on the beach you searched.{" "}
            </p>

            <a
              href="https://github.com/JakeRoberts/Surfs-Up.git"
              className="font-bold mb-2 hover:text-red-600"
              target="_blank"
            >
              Visit the Repo
            </a>
          </article>

          <article className="relative rounded-lg shadow-lg bg-white p-16 mt-10">
            <img src={Appa} />
            <h3 className="text-gray-800 text-2xl font-bold mb-2 hover:text-red-600">
              <a href="https://nickverneck.github.io/Surfs-Up/" target="_blank">
                App-A-Tizer(Click to Visit Live Site)
              </a>
            </h3>
            <p className="mb-4">
              Surf's Up is a website created for surfers to easily check the
              local beach conditions and determine whether or not it is viable
              to surf. The website has other features such as 5 of the closest
              beaches to your local beach which will load when the website is
              opened or will load when you search for beach, then the 5 beaches
              will appear based on the beach you searched.{" "}
            </p>

            <a
              href="https://github.com/JakeRoberts/Surfs-Up.git"
              className="font-bold mb-2 hover:text-red-600"
              target="_blank"
            >
              Visit the Repo
            </a>
          </article>

          <article className="relative rounded-lg shadow-lg bg-white p-16 mt-10"></article>

          <article className="relative rounded-lg shadow-lg bg-white p-16 mt-10"></article>

          <article className="relative rounded-lg shadow-lg bg-white p-16 mt-10"></article>

          <article className="relative rounded-lg shadow-lg bg-white p-16 mt-10"></article>
        </div>
      </section>
    </main>
  );
}
