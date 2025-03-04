"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/Contact/Herosection.module.css";

const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg"];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.hero}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      <div className={styles.content}>
        <h2>Get in Touch with</h2>
        <h1>World-Wise International</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
          dignissimos similique, optio ab atque possimus eius autem fugit quos
          dolore?
        </p>
        <button>Contact Us Now</button>
      </div>
    </div>
  );
}
