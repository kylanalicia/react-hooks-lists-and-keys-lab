import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navigation = links.map((tags) => {
    return (
      <a href={"#" + tags} key={tags}>
        {tags}
      </a>
    );
  });

  return <nav>{navigation} </nav>;
}

export default NavBar;