import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's build something <br /> amazing together.
          </span>
          <span className="primaryText">
            Unlock new possibilities,
            <a href="mailto:navarrodebora@hotmail.com">
              reach out and let's connect!
            </a>
          </span>
        </div>
        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>+ 54 9 11 5 121 2514</p>
            <p>2026 Lake Floyd Circle, Philladelphia, DE 19146, USA</p>
          </div>
          <ul className={css.menu}>
            <li>Portfolio</li>
            <li>Experience</li>
            <li>Services</li>
            <li>Clients</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
