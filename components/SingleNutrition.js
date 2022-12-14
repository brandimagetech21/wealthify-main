import Image from "next/image";
import React from "react";
import Wrappers from "../assets/wrappers/SingleNutrition";
import mongo from "../assets/image/mongo.jpeg";
import searchIcon from "../assets/image/searchIcon.svg";
const SingleNutrition = () => {
  return (
    <Wrappers>
      <div className="">
        <div class="searchbar">
          <form method="get">
            <span class="searchrec"></span>
            <div className="search-icon">
              <Image src={searchIcon} />
            </div>
            <input type="search-bar" typeof="text" placeholder="Search" />
            <input class="button" type="submit" value="SEARCH " />
          </form>
        </div>

        <div>
          <h1>Mango</h1>
          <div class="flex">
            <div class="content top">
              <p>
                In some parts of the world, mango (Mangifera indica) is called
                the “king of fruits” (1Trusted Source).
              </p>
              <p>
                It’s a drupe, or stone fruit, which means that it has a large
                seed in the middle.
              </p>
              <p>
                It’s a drupe, or stone fruit, which means that it has a large
                seed in the middle.rum.
              </p>
            </div>

            <Image src={mongo} height={"377px"} width={"620px"} />
          </div>
          <div class="content">
            <p>Packed with nutrients</p>
            <p>
              Many people love mango — not only because it’s delicious but also
              because it’s very nutritious.
            </p>
            <p>
              One cup (165 grams) of fresh mango provides (3Trusted Source):
            </p>
            <div class="list">
              <ul>
                <ul>Calories: 99</ul>
                <ul>Protein: 1.4 grams</ul>
                <ul>Carbs: 24.7 grams</ul>
                <ul>Fat: 0.6 grams</ul>
                <ul>Fiber: 2.6 grams</ul>
                <ul>Sugar: 22.5 grams</ul>
                <ul>Vitamin C: 67% of the Daily Value (DV)</ul>
              </ul>

              <ul>
                <ul>Copper: 20% of the DV</ul>
                <ul>Folate: 18% of the DV</ul>
                <ul>Vitamin B6: 12% of the DV</ul>
                <ul>Vitamin A: 10% of the DV</ul>
                <ul>Vitamin E: 10% of the DV</ul>
                <ul>Vitamin K: 6% of the DV</ul>
                <ul>Niacin: 7% of the DV</ul>
              </ul>
              <ul>
                <ul>Potassium: 6% of the DV</ul>
                <ul>Riboflavin: 5% of the DV</ul>
                <ul>Magnesium: 4% of the DV</ul>
                <ul>Thiamine: 4% of the DV</ul>
              </ul>
            </div>

            <p>
              One of its most impressive nutrient facts is that just 1 cup (165
              grams) of fresh mango provides nearly 67% of the DV for vitamin C.
              This water-soluble vitamin aids your immune system, helps your
              body absorb iron, and promotes cell growth and repair (1Trusted
              Source, 4Trusted Source, 5Trusted Source, 6Trusted Source).
            </p>

            <p>
              Mango is also a good source of the minerals copper and folate,
              which are especially important nutrients during pregnancy, as they
              support healthy fetal growth and development (7Trusted Source,
              8Trusted Source, 9Trusted Source, 10Trusted Source).
            </p>
          </div>
        </div>
      </div>
    </Wrappers>
  );
};

export default SingleNutrition;
