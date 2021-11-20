import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fakeData from "../../fakeData";

const Inventory = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const productData = {
      name: data.name,
      quantity: data.quantity,
      price: data.price,
      imageURL: imageURL,
    };
    const url = `https://arcane-retreat-03047.herokuapp.com/addProduct`;
    console.log(productData);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log("server site responding", res));
  };
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "a2ef7b72158ccce1b07bf3dc534e6da0");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="my-5 shadow text-center w-50% h-50% border">
        <div className="d-flex flex-column justify-content-start">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" placeholder="Product name" ref={register} />
            <br />
            <input
              className="my-3"
              name="quantity"
              placeholder="Product quantity"
              ref={register}
            />
            <br />
            <input name="price" placeholder="Product price" ref={register} />
            <br />
            <input
              className="my-3"
              name="exampleRequired"
              type="file"
              onChange={handleImageUpload}
            />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Inventory;
