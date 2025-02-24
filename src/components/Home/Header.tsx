"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home/Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Left Navigation Links */}
        <nav className={styles.leftNav}>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
        </nav>

        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={150} height={50} />
          </Link>
        </div>

        {/* Right Navigation Links */}
        <nav className={styles.rightNav}>
        <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog & News</Link>
        </nav>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar1 : ""}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar2 : ""}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar3 : ""}`}></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>

        <div className={styles.mobileLogo}>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={150} height={50} />
          </Link>
        </div>

        {/* Mobile Navigation Links */}
        <nav className={styles.mobileNav}>
          <Link href="/about" onClick={closeMenu}>About Us</Link>
          <Link href="/services" onClick={closeMenu}>Services</Link>
          <Link href="/blog" onClick={closeMenu}>Blog/News</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;