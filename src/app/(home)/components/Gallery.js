import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
const Gallery = () => {
  const scrollers = document.querySelectorAll(".scroller");

  // If a user hasn't opted in for recuded motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <>
      <div className="galleryLinesDiv">
        <div id="container">
          <div class="photobanner">
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div id="container">
          <div class="photobanner">
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/02214837/LittleLoveLibrary1.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/large/864062-78419-sljzqajxij-1515235504.JPG"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-phuyaetcqt-1515235713.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-gmmnzcbahj-1515235636.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://static.theprint.in/wp-content/uploads/2023/06/Feature-Image-2023-06-16T173850.793-696x392.png?compress=true&quality=80&w=376&dpr=2.6"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/02214837/LittleLoveLibrary1.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/large/864062-78419-sljzqajxij-1515235504.JPG"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-phuyaetcqt-1515235713.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-gmmnzcbahj-1515235636.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://static.theprint.in/wp-content/uploads/2023/06/Feature-Image-2023-06-16T173850.793-696x392.png?compress=true&quality=80&w=376&dpr=2.6"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div id="container">
          <div class="photobanner">
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div id="container">
          <div class="photobanner">
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/02214837/LittleLoveLibrary1.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/large/864062-78419-sljzqajxij-1515235504.JPG"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-phuyaetcqt-1515235713.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-gmmnzcbahj-1515235636.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://static.theprint.in/wp-content/uploads/2023/06/Feature-Image-2023-06-16T173850.793-696x392.png?compress=true&quality=80&w=376&dpr=2.6"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/02214837/LittleLoveLibrary1.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/large/864062-78419-sljzqajxij-1515235504.JPG"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-phuyaetcqt-1515235713.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-gmmnzcbahj-1515235636.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://static.theprint.in/wp-content/uploads/2023/06/Feature-Image-2023-06-16T173850.793-696x392.png?compress=true&quality=80&w=376&dpr=2.6"
              alt=""
              loading="lazy"
            />
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <br />
        <div className="galleryButton">
          <Link href="/gallery">
            <Button variant="warning">
              More Captured Moments &nbsp;{" "}
              <i class="fa-solid fa-diamond-turn-right"></i>
            </Button>
          </Link>
        </div>
      </div>
      {/* <div className="galleryLinesDiv">
        <div className="eventGallery">
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://static.theprint.in/wp-content/uploads/2023/06/Feature-Image-2023-06-16T173850.793-696x392.png?compress=true&quality=80&w=376&dpr=2.6"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-gmmnzcbahj-1515235636.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-phuyaetcqt-1515235713.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/large/864062-78419-sljzqajxij-1515235504.JPG"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/02214837/LittleLoveLibrary1.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://static.theprint.in/wp-content/uploads/2023/06/Feature-Image-2023-06-16T173850.793-696x392.png?compress=true&quality=80&w=376&dpr=2.6"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-gmmnzcbahj-1515235636.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-phuyaetcqt-1515235713.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/large/864062-78419-sljzqajxij-1515235504.JPG"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/02214837/LittleLoveLibrary1.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://static.theprint.in/wp-content/uploads/2023/06/Feature-Image-2023-06-16T173850.793-696x392.png?compress=true&quality=80&w=376&dpr=2.6"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-gmmnzcbahj-1515235636.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-phuyaetcqt-1515235713.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/large/864062-78419-sljzqajxij-1515235504.JPG"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/02214837/LittleLoveLibrary1.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
        </div>
        <div className="eventGallery">
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://static.theprint.in/wp-content/uploads/2023/06/Feature-Image-2023-06-16T173850.793-696x392.png?compress=true&quality=80&w=376&dpr=2.6"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-gmmnzcbahj-1515235636.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-phuyaetcqt-1515235713.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/large/864062-78419-sljzqajxij-1515235504.JPG"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/02214837/LittleLoveLibrary1.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://static.theprint.in/wp-content/uploads/2023/06/Feature-Image-2023-06-16T173850.793-696x392.png?compress=true&quality=80&w=376&dpr=2.6"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-gmmnzcbahj-1515235636.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-phuyaetcqt-1515235713.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/large/864062-78419-sljzqajxij-1515235504.JPG"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/02214837/LittleLoveLibrary1.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://static.theprint.in/wp-content/uploads/2023/06/Feature-Image-2023-06-16T173850.793-696x392.png?compress=true&quality=80&w=376&dpr=2.6"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-gmmnzcbahj-1515235636.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-phuyaetcqt-1515235713.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/large/864062-78419-sljzqajxij-1515235504.JPG"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/02214837/LittleLoveLibrary1.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
        </div>{" "}
        <div className="eventGallery">
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://static.theprint.in/wp-content/uploads/2023/06/Feature-Image-2023-06-16T173850.793-696x392.png?compress=true&quality=80&w=376&dpr=2.6"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-gmmnzcbahj-1515235636.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-phuyaetcqt-1515235713.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/large/864062-78419-sljzqajxij-1515235504.JPG"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/02214837/LittleLoveLibrary1.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://static.theprint.in/wp-content/uploads/2023/06/Feature-Image-2023-06-16T173850.793-696x392.png?compress=true&quality=80&w=376&dpr=2.6"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-gmmnzcbahj-1515235636.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-phuyaetcqt-1515235713.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/large/864062-78419-sljzqajxij-1515235504.JPG"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/02214837/LittleLoveLibrary1.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://static.theprint.in/wp-content/uploads/2023/06/Feature-Image-2023-06-16T173850.793-696x392.png?compress=true&quality=80&w=376&dpr=2.6"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-gmmnzcbahj-1515235636.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-phuyaetcqt-1515235713.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/large/864062-78419-sljzqajxij-1515235504.JPG"
            alt="Loading Image.."
            loading="lazy"
          />
          <img
            src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/02214837/LittleLoveLibrary1.jpg"
            alt="Loading Image.."
            loading="lazy"
          />
        </div>
        <br />
        <Link href="/gallery">
          <Button variant="warning">
            More Captured Moments &nbsp;{" "}
            <i class="fa-solid fa-diamond-turn-right"></i>
          </Button>
        </Link>
      </div> */}
    </>
  );
};

export default Gallery;
