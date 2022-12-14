import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Wrappers from "../assets/wrappers/NutiritionDb";
import fruit from "../assets/image/fruit.jpeg";
import searchIcon from "../assets/image/searchIcon.svg";
import Link from "next/link";
import { useAppcontext } from "../context/appContext";

const NutritionDb = () => {
  const { getRecipe, recipeData } = useAppcontext();

  const [searchInput, setSearchInput] = useState("");

  // console.log("input",searchInput);
  console.log("appcontextres", recipeData);

  const handleChange = (e) => {
    const newData = { ...searchInput };
    newData[e.target.id] = e.target.value;
    setSearchInput(newData);
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipe("nutrition", {
      api_key: "get",
      data: { item_name: searchInput.search },
    });
  };

  useEffect(() => {
    getRecipe("nutrition", {
      api_key: "get",
      data: { item_name: "" },
    });
  }, []);

  useEffect(() => {
    setSearchInput(searchInput);
  }, []);

  if (!recipeData || recipeData == []) {
    return;
  }
  console.log("length", recipeData.length);

  return (
    <Wrappers>
      <div className="Nutrition">
        {/* <!-- <span className="cover1" style="background-image: url(/images/Path.png); "></span>
         <span className="cover1" style=" background-image: url(/images/Path1.png);"></span> --> */}
        <h3>Nutrition Database</h3>
      </div>

      <div className="searchbar" onSubmit={(e) => handleSubmit(e)}>
        <form method="post">
          <span className="searchrec"></span>
          <div className="search-icon">
            <Image src={searchIcon} />
          </div>
          <i className="fa fa-search fa-xl icon" aria-hidden="true"></i>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            id="search"
            value={searchInput.search}
            placeholder="Search"
          />
          <button className="button" type="submit" value="SEARCH ">
            Search
          </button>
        </form>
      </div>

      {/* <!-- grid 3 * 4 --> */}

      <div className="fruitgrid">
        {recipeData.map((data, array) => {
          console.log("data", data);
          return (
            <Link href={"singleNutritionDb"}>
              <div className="grid11">
                <Image src={fruit} />
                <p>
                  {data.name}
                  {array}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* <Link href={"singleNutritionDb"}>
          <div className="grid12">
            <div className="fruitimg">
              <Image src={fruit} />
            </div>
            <p>imagename</p>
          </div>
        </Link>

        <Link href={"singleNutritionDb"}>
          <div className="grid13">
            <Image src={fruit} />
            <p>imagename</p>
          </div>
        </Link>

        <Link href={"singleNutritionDb"}>
          <div className="grid14">
            <Image src={fruit} />
            <p>imagename</p>
          </div>
        </Link>
      </div>

      {/* <!--grid copy-->
      <div className="fruitgrid">
        <Link href={"singleNutritionDb"}>
          <div className="grid11">
            <Image src={fruit} />
            <p>imagename</p>
          </div>
        </Link>

        <Link href={"singleNutritionDb"}>
          <div className="grid12">
            <Image src={fruit} />

            <p>imagename</p>
          </div>
        </Link>

        <Link href={"singleNutritionDb"}>
          <div className="grid13">
            <Image src={fruit} />

            <p>imagename</p>
          </div>
        </Link>

        <Link href={"singleNutritionDb"}>
          <div className="grid14">
            <Image src={fruit} />

            <p>imagename</p>
          </div>
        </Link>
      </div>

      <div className="fruitgrid">
        <Link href={"singleNutritionDb"}>
          <div className="grid11">
            <Image src={fruit} />

            <p>imagename</p>
          </div>
        </Link>

        <Link href={"singleNutritionDb"}>
          <div className="grid12">
            <Image src={fruit} />

            <p>imagename</p>
          </div>
        </Link>

        <Link href={"singleNutritionDb"}>
          <div className="grid13">
            <Image src={fruit} />

            <p>imagename</p>
          </div>
        </Link>

        <Link href={"singleNutritionDb"}>
          <div className="grid14">
            <Image src={fruit} />

            <p>imagename</p>
          </div>
        </Link>
      </div> */}
    </Wrappers>
  );
};

export default NutritionDb;
