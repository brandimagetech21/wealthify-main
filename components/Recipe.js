import Image from "next/image.js";
import React from "react";
import Wrappers from "../assets/wrappers/Recipe.js";
import fruit from "../assets/image/fruit.jpeg";
import Link from "next/link.js";
import searchIcon from "../assets/image/searchIcon.svg";
import { useEffect } from "react";
import { useAppcontext } from "../context/appContext.js";
import { useState } from "react";
const Recipe = () => {
  const { getRecipe, recipeData } = useAppcontext();

  // const [searchInput, setSearchInput] = useState("");
  console.log({ recipeData });
  const [searchInput, setSearchInput] = useState("");

  console.log("appcontextres", recipeData);

  const handleChange = (e) => {
    // event.preventDefault()
    // setSearchInput(event.target.value)
    // console.log("SI",searchInput);
    // ---- nov 13 10.45
    const newdata = { ...searchInput };
    newdata[e.target.id] = e.target.value;
    setSearchInput(newdata);
    e.preventDefault();
    console.log(newdata);

    // ----
    // const value = e.target.value
    // console.log(value);
    // e.preventDefault()
    // setSearchInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipe("recipe", {
      api_key: "get",
      data: { item_name: searchInput.search },
    });
  };
  const obj = { key: searchInput };

  console.log("Input", searchInput);

  useEffect(() => {
    setSearchInput(searchInput);
  }, []);

  useEffect(() => {
    getRecipe("recipe", {
      api_key: "get",
      data: { item_name: "" },
    });
  }, []);

  // console.log("RD",recipeData);
  const first3 = (str = "unknown") => {
    if (str) {
      return str.split(" ").slice(0, 3).join(" ");
    }
  };

  if (recipeData == undefined) {
    // return;
  }

  return (
    <Wrappers>
      <div className="Nutrition">
        {/* <!-- <span className="cover1" style="background-image: url(/images/Path.png); "></span>
         <span className="cover1" style=" background-image: url(/images/Path1.png);"></span> --> */}
        <h3 className="heading-font">Receipe</h3>
      </div>

      <div className="searchbar" onSubmit={(e) => handleSubmit(e)}>
        <form method="post">
          <span className="searchrec"></span>
          <span className="">
            {" "}
            <div className="search-icon">
              <Image src={searchIcon} />
            </div>
          </span>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            id="search"
            value={searchInput.search}
            placeholder="Search"
          />
          <button className="button" type="submit" value="SEARCH">
            Search
          </button>
        </form>
      </div>

      {/* <!-- grid 3 * 4 --> */}

      <div className="fruitgrid">
        <div className="category">
          <p>SORT BY</p>
          <ul> &nbsp; Name</ul>
          <hr className="line" />
          <ul>
            {" "}
            <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
            &nbsp; Cuisines
          </ul>
          <hr className="line" />
          <ul>
            {" "}
            <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
            &nbsp; Food Group
          </ul>
          <hr className="line" />
          <ul>
            {" "}
            <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
            &nbsp; Ingredient
          </ul>
          <hr className="line" />
        </div>

        <div className="gridbox">
          {recipeData.map((data, array) => {
            //mark1
            console.log("data", data, "index", array);

            if (array > 8) {
              return;
            }

            return (
              <div className="grid11">
                <div>
                  <Link href={"singleRecipe"}>
                    <Image src={fruit} />
                  </Link>
                  <p>
                    <a href={data.URL} target="_blank">
                      {data.TranslatedRecipeName}
                    </a>
                  </p>
                </div>
              </div>
              // <Link href={"singleRecipe"}>
              //       <div className="grid12">
              //         <Image src={fruit} />
              //         <p>{first3(recipeData[1].TranslatedRecipeName)}</p>
              //       </div>
              // </Link>

              //   <Link href={"singleRecipe"}>
              //     <div className="grid13">
              //       <Image src={fruit} />
              //       <p>{first3(recipeData[2]["TranslatedRecipeName"])}</p>
              //     </div>
              //   </Link>

              // // {/* 2 row */}
              // <div className="gridbox">
              // <Link href={"singleRecipe"}>
              //     <div className="grid11">
              //       <div >
              //         <Image src={fruit} />
              //         <p>{first3(recipeData[3]["TranslatedRecipeName"])}</p>
              //       </div>
              //     </div>
              // </Link>
              // <Link href={"singleRecipe"}>
              //       <div className="grid12">
              //         <Image src={fruit} />
              //         <p>{first3(recipeData[4]["TranslatedRecipeName"])}</p>
              //       </div>
              // </Link>

              //   <Link href={"singleRecipe"}>
              //     <div className="grid13">
              //       <Image src={fruit} />
              //       <p>{first3(recipeData[5]["TranslatedRecipeName"])}</p>
              //     </div>
              //   </Link>
              // </div>

              // {/* 3 row */}
              // <div className="gridbox">
              // <Link href={"singleRecipe"}>
              //     <div className="grid11">
              //       <div >
              //         <Image src={fruit} />
              //         <p>{first3(recipeData[6]["TranslatedRecipeName"])}</p>
              //       </div>
              //     </div>
              // </Link>
              // <Link href={"singleRecipe"}>
              //       <div className="grid12">
              //         <Image src={fruit} />
              //         <p>{first3(recipeData[7]["TranslatedRecipeName"])}</p>
              //       </div>
              // </Link>

              //   <Link href={"singleRecipe"}>
              //     <div className="grid13">
              //       <Image src={fruit} />
              //       <p>{first3(recipeData[8]["TranslatedRecipeName"])}</p>
              //     </div>
              //   </Link>
              // </div>
            );
          })}
        </div>
        {/* <!--grid copy-->
      <div className="fruitgrid">
        <div className="category"></div>

        <Link href={"singleRecipe"}>
          <div className="grid11">
            <Image src={fruit} />
            <p>imagename</p>
          </div>
        </Link>

        <Link href={"singleRecipe"}>
          <div className="grid12">
            <Image src={fruit} />
            <p>imagename</p>
          </div>
        </Link>

        <Link href={"singleRecipe"}>
          <div className="grid13">
            <Image src={fruit} />

            <p>imagename</p>
          </div>
        </Link>
      </div>

      <div className="fruitgrid">
        <div className="category"></div>

        <Link href={"singleRecipe"}>
          <div className="grid11">
            <Image src={fruit} />
            <p>imagename</p>
          </div>
        </Link>

        <Link href={"singleRecipe"}>
          <div className="grid12">
            <Image src={fruit} />
            <p>imagename</p>
          </div>
        </Link>

        <Link href={"singleRecipe"}>
          <div className="grid13">
            <Image src={fruit} />
            <p>imagename</p>
          </div>
        </Link>
      </div> */}
      </div>
    </Wrappers>
  );
};

export default Recipe;
