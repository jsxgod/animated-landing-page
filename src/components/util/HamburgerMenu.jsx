import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../../assets/arrow-up-circle.svg";
import { animateScroll as scroll } from "react-scroll";

let tl = gsap.timeline();

const HamburgerMenu = ({ history }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setMenuOpened(false);
    });

    if (menuOpened) {
      // run open menu animation
      gsap.to("nav", {
        css: { display: "block" },
      });

      gsap.to("body", {
        css: { overflow: "hidden" },
      });

      tl.to(".App", {
        duration: 1,
        y: "70vh",
        ease: "expo.inOut",
      })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -0.6,
          scaleX: 0,
          transformOrigin: "50% 0%",
        })
        .to(".hamburger-menu-close", {
          duration: 0,
          delay: -0.4,
          css: {
            display: "block",
          },
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.4,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.4,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.4,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to("#circle", {
          duration: 0.4,
          delay: -0.4,
          css: {
            strokeDashoffset: 0,
          },
        });
    } else {
      // run close menu animation
      tl.to(".App", {
        duration: 1,
        y: 0,
        ease: "expo.inOut",
      })
        .to("#circle", {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: -200,
            strokeDasharray: 200,
          },
        })
        .to("#Path_1", {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Path_2", {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Line_1", {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to(".hamburger-menu span", {
          duration: 0.4,
          delay: -0.4,
          scaleX: 1,
          transformOrigin: "50% 0%",
        })
        .to(".hamburger-menu-close", {
          duration: 0,
          delay: -0.4,
          css: {
            display: "none",
          },
        })
        .to("body", {
          duration: 0,
          css: {
            overflow: "auto",
          },
        })
        .to("nav", {
          duration: 0,
          delay: -0.4,
          css: {
            display: "none",
          },
        });
    }
  }, [menuOpened]);

  const openMenu = async () => {
    await scroll.scrollToTop({
      smooth: true,
    });
    setMenuOpened(true);
  };

  return (
    <div className="nav-toggle">
      <div onClick={() => openMenu()} className="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        onClick={() => setMenuOpened(false)}
        className="hamburger-menu-close"
      >
        <UpArrow />
      </div>
    </div>
  );
};

export default withRouter(HamburgerMenu);
