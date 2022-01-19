import React from "react";
import AboutImage from "../images/photo.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic rerum
          natus, unde possimus explicabo modi ut dolorem quod error ad maiores
          voluptatem beatae! Harum et odit non laudantium. Beatae laboriosam
          illum, quis eligendi inventore impedit modi nihil laudantium vero
          tempora ea omnis totam maiores nisi minima praesentium dignissimos
          nesciunt. Facilis veritatis nam ipsam aspernatur eaque, temporibus
          nulla iusto perspiciatis aut. Vitae, doloribus consequuntur itaque
          dolore rem natus, possimus sapiente, consequatur illum voluptatem
          suscipit. Omnis aut explicabo ipsam labore quo. Deserunt perferendis
          quae modi sint quaerat dolore ex quasi possimus consequatur distinctio
          dicta, illo, quisquam perspiciatis numquam, qui nobis assumenda ullam!
        </p>
      </div>
    </div>
  );
}

export default About;
