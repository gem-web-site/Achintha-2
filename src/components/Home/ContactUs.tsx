"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/Home/ContactUs.module.css";

const ServicesSection = () => {
  const services = [
    {
      title: "Cryptocurrency Sales",
      description: "We provide secure and reliable cryptocurrency sales services.",
      image: "/service1.jpg",
    },
    {
      title: "Liquor Distribution & Export",
      description: "Global distribution and export of premium liquors.",
      image: "/service2.jpg",
    },
    {
      title: "Commodity Supply & Sourcing",
      description: "Efficient sourcing and supply of commodities worldwide.",
      image: "/service3.jpg",
    },
    {
      title: "Service 4",
      description: "Description for Service 4.",
      image: "/service4.jpg",
    },
    {
      title: "Service 5",
      description: "Description for Service 5.",
      image: "/service5.jpg",
    },
    {
      title: "Service 6",
      description: "Description for Service 6.",
      image: "/service6.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  const getPosition = (index: number) => {
    const total = services.length;
    const left = (currentIndex - 1 + total) % total;
    const right = (currentIndex + 1) % total;

    if (index === currentIndex) return "middle";
    if (index === left) return "left";
    if (index === right) return "right";
    return "hidden";
  };

  return (
    <section className={styles.servicesSection}>
      <h2>Our Services</h2>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => {
          const position = getPosition(index);

          return (
            <div
              key={index}
              className={`${styles.serviceCard} ${styles[position]}`}
            >
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;