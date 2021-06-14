import React from "react";
import Surf from "../surfsup.jpg";
import Appa from "../appatixer.jpg";
import Fit from "../fitness-tracker.jpg";

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
              <a href="https://app-a-tizer.herokuapp.com/" target="_blank">
                App-A-Tizer(Click to Visit Live Site)
              </a>
            </h3>
            <p className="mb-4">
            This app allows the user to search through a database of well over 1000 recipes and save them to their profile. They can search different key words and ingredients to find just the recipe they are looking for with detailed instructions on how to prepare the dish. The user is also free to add their own recipes to the database, which will be automatically saved to their profile. From there, this app provides a meal planning page that allows the user to add recipes from their saved recipes to each day of the week, and generate a pdf with each recipe's title and ingredients to make shopping for the week much easier..{" "}
            </p>

            <a
              href="https://github.com/JakeRoberts/Recipeasy.git"
              className="font-bold mb-2 hover:text-red-600"
              target="_blank"
            >
              Visit the Repo
            </a>
          </article>

          <article className="relative rounded-lg shadow-lg bg-white p-16 mt-10"></article>
          <img src={Appa} />
            <h3 className="text-gray-800 text-2xl font-bold mb-2 hover:text-red-600">
              <a href="https://retail-hut.herokuapp.com/" target="_blank">
                RetailHut(Click to Visit Live Site)
              </a>
            </h3>
            <p className="mb-4">
            Retailhut is an ecommerce app for small businesses! Small businesses can sign up (with proof of business license) and host their products, users can sign up and sign in to purchase and add products to their wishlists.{" "}
            </p>

            <a
              href="https://github.com/JakeRoberts/retail-hut"
              className="font-bold mb-2 hover:text-red-600"
              target="_blank"
            >
              Visit the Repo
            </a>

          <article className="relative rounded-lg shadow-lg bg-white p-16 mt-10">
            <img src={Fit} />
            <h3 className="text-gray-800 text-2xl font-bold mb-2 hover:text-red-600">
              <a href="https://fitn3ss-tr4ck3r.herokuapp.com/" target="_blank">
                Fitness Tracker (Click to Visit Live Site)
              </a>
            </h3>
            <p className="mb-4">
              Fitness Tracker app was created to help track one's workouts.{" "}
            </p>

            <a
              href="https://github.com/JakeRoberts/fitness_tracker.git"
              className="font-bold mb-2 hover:text-red-600"
              target="_blank"
            >
              Visit the Repo
            </a>
          </article>

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
        </div>
      </section>
    </main>
  );
}
