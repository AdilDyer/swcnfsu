"use client";
import React, { useEffect, useRef, useState } from "react";
import Footer from "@/app/components/Footer";
import useWindowSize from "@/app/utils/useWindowSize";
const EventPage = () => {
  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef();

  const skewConfigs = {
    ease: 0.06,
    //ease : default :: 0.1 :: given
    // adjust this downwards to have more auto slide after the scroll down , more smoothening
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    //variables

    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d( 0,-${skewConfigs.rounded}px,0) `;
    //removed the skew segment from transform  :: skewY(${skew}deg)
    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };
  return (
    <>
      <div ref={app} className="BigScrollContainer">
        <div className="scrollContainer" ref={scrollContainer}>
          <div className="eventPage">
            <div className="imageDiv">
              <img
                src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-ydtpxgavpm-1515235604.jpg"
                alt=""
              />
            </div>
            <div className="contentDiv">
              <h1>~ Core theme ~ </h1>
              <br />
              <p>Discovering new Genres !</p>
              <br />
              <h4>~ Discussions ~</h4>
              <br />
              <p>
                <span>Introduction</span>
                The latest book club meeting was held under the expansive sky of
                our college&apos;s open area, setting the perfect backdrop for
                an enriching discussion on &quot;Discovering New Genres.&quot;
                The session was filled with excitement as members gathered to
                explore the vast and diverse world of literary genres.
                <span>Agenda</span>
                <ol>
                  <li>Introduction to Literary Genres</li>
                  <li>Exploring Unfamiliar Genres</li>
                  <li>Personal Experiences and Insights</li>
                  <li>Group Discussions</li>
                  <li>Conclusions and Takeaways</li>
                </ol>
                <span> 1. Introduction to Literary Genres</span> We began the
                meeting with a brief introduction to the concept of literary
                genres. Genres are categories that define a book based on its
                narrative style, content, and form. The main purpose was to
                understand the different genres and how they can shape our
                reading experiences.
                <span>Key Points:</span>
                <ol>
                  <li> Definition of literary genres.</li>
                  <li>Importance of genres in literature.</li>
                  <li>
                    Examples of major genres: Fiction, Non-Fiction, Mystery,
                    Fantasy, Science Fiction, Historical Fiction, Romance, and
                    more.
                  </li>
                </ol>
                <span>2. Exploring Unfamiliar Genres</span>
                Each member was encouraged to delve into genres they had little
                to no experience with. This segment aimed to broaden our
                literary horizons and introduce us to new and exciting forms of
                storytelling.
                <span>Highlighted Genres:</span>
                <ul>
                  <li>
                    Cyberpunk: A sub-genre of science fiction focused on
                    futuristic, dystopian societies dominated by computer
                    technology and hackers.
                  </li>
                  <li>
                    Magical Realism: A genre that blends magical elements with
                    the real world, making the extraordinary seem ordinary.
                  </li>
                  <li>
                    Biopunk: A genre similar to cyberpunk but focusing on
                    biotechnology and genetic manipulation.
                  </li>
                  <li>
                    Gothic Fiction: A genre characterized by dark, mysterious
                    settings, and themes of horror and romance.
                  </li>
                  <li>
                    Cli-Fi (Climate Fiction): Fiction that deals with climate
                    change and global warming.
                  </li>
                </ul>
                <span>Books and Authors Discussed:</span>
                <ul>
                  <li>
                    One Hundred Years of Solitude by Gabriel Garcia Marquez
                    (Magical Realism)
                  </li>
                  <li>Neuromancer by William Gibson (Cyberpunk)</li>
                  <li>Frankenstein by Mary Shelley (Gothic Fiction)</li>
                  <li>The Water Knife by Paolo Bacigalupi (Cli-Fi)</li>
                </ul>
                <span>3. Personal Experiences and Insights</span>
                Members shared their personal experiences with the new genres
                they explored. This was a highly interactive session where we
                learned from each other&apos;s reading journeys.
                <span>Insights:</span>
                <ul>
                  <li>
                    Magical Realism: Many found it fascinating how magical
                    elements were woven into the fabric of everyday life,
                    challenging the boundary between reality and fantasy.
                  </li>
                  <li>
                    Cyberpunk and Biopunk: These genres were appreciated for
                    their thought-provoking takes on future societies and
                    ethical dilemmas posed by technological advancements.
                  </li>
                  <li>
                    Gothic Fiction: The haunting atmospheres and complex
                    characters were a hit, with many members expressing newfound
                    appreciation for the genre.
                  </li>
                  <li>
                    Cli-Fi: Discussions highlighted the genre&apos;s ability to
                    raise awareness about environmental issues through engaging
                    storytelling.
                  </li>
                </ul>
                <span>4. Group Discussions</span>
                In smaller groups, we discussed the potential impact of these
                genres on our perspectives and reading habits. Each group was
                tasked with identifying how these genres could influence our
                understanding of literature and the world.
                <span>Group Findings:</span>
                <ul>
                  <li>
                    Expanded Perspectives: Exposure to new genres broadened our
                    understanding of diverse cultural and philosophical ideas.
                  </li>
                  <li>
                    Enhanced Appreciation: Members expressed a greater
                    appreciation for the creativity and innovation involved in
                    genre fiction.
                  </li>
                  <li>
                    Increased Curiosity: The session ignited a curiosity to
                    explore more genres and discover new favorite authors and
                    books.
                  </li>
                </ul>
                <span>5. Conclusions and Takeaways</span>
                We concluded the meeting by summarizing our discoveries and
                discussing how we could incorporate this newfound knowledge into
                our future reading endeavors.
                <span>Key Takeaways:</span>
                <ul>
                  <li>
                    Open-Minded Reading: Embracing new genres can significantly
                    enrich our reading experiences and knowledge.
                  </li>
                  <li>
                    Continuous Exploration: Literature is vast and
                    ever-evolving; there&apos;s always something new to
                    discover.
                  </li>
                  <li>
                    Community Learning: Sharing and discussing books within a
                    community can enhance our understanding and enjoyment of
                    literature.
                  </li>
                </ul>
                <span>
                  Final Thoughts <br />
                  <br /> The meeting was a resounding success, with everyone
                  leaving inspired to continue exploring new genres. The
                  open-air setting of our Indian college campus provided a
                  refreshing and stimulating environment, making the experience
                  even more memorable. As we parted ways, there was a shared
                  sense of excitement about the endless possibilities that await
                  us in the world of books.
                </span>
              </p>
              <br />
              <h4>~ Event Gallery ~ </h4>
              <br />
              <br />
              <div className="eventGallery">
                <img
                  src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
                  alt=""
                />
                <img
                  src="https://static.theprint.in/wp-content/uploads/2023/06/Feature-Image-2023-06-16T173850.793-696x392.png?compress=true&quality=80&w=376&dpr=2.6"
                  alt=""
                />
                <img
                  src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-gmmnzcbahj-1515235636.jpg"
                  alt=""
                />
                <img
                  src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-phuyaetcqt-1515235713.jpg"
                  alt=""
                />
                <img
                  src="https://sc0.blr1.digitaloceanspaces.com/large/864062-78419-sljzqajxij-1515235504.JPG"
                  alt=""
                />
                <img
                  src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/02214837/LittleLoveLibrary1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default EventPage;
