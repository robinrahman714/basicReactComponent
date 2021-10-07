import React from "react";
const Album = (props) => {
  console.log(props);
  const { id, name, image, artist, release, budget } = props.album;
  return (
    <div
      className=" g-1
         rounded col-3 ps-1 ms-4"
    >
      <div className="card-group mb-3 shadow">
        <div className="card">
          <img src={image} className="card-img-top img-fluid h-50" alt="..." />
          <div className="card-body text-center">
            <h2 className="card-title ">{name}</h2>
            <h5>Artist: {artist}</h5>
            <h5>First Release: {release}</h5>
            <h5>Price : ${budget}</h5>
            <button
              onClick={() => props.handleAddToCart(props.album)}
              className="btn btn-outline-info mt-4"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
