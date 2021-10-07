import React, { useEffect, useState } from "react";
import Cart from "../cart/cart";
import Album from "../album/album";
const Albums = () => {
  const [allAlbums, setAllAlbums] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./fakedata.JSON")
      .then((res) => res.json())
      .then((data) => {
        console.log(
          "showing all meals data line 11 in Meals.jsx component",
          data.albums
        );
        setAllAlbums(data.albums);
      });
  }, []);
  // Event Handler
  const handleAddToCart = (cast) => {
    // console.log(cast)
    const newCart = [...cart, cast]; // react immutable
    setCart(newCart);
  };
  return (
    <div className="row">
      <div className="col-10  row">
        {allAlbums.map((album) => (
          <Album
            key={album.id}
            handleAddToCart={handleAddToCart}
            album={album}
          />
        ))}
      </div>
      <div className="col-2 text-center mt-1">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Albums;
