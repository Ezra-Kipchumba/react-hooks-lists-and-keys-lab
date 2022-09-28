import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkToSites = links.map((link,index) => {
    return (
      <nav key={index}>
        <a href={"#" + link}>{link}</a>
      </nav>
    );
  })
  

  return <nav>{linkToSites}</nav>;
}

export default NavBar;
