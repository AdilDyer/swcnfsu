"use client";
import React, { useEffect, useState } from "react";

const EventPage = ({ params }) => {
  const [clubName, setClubName] = useState(params.clubName);
  const [eventDetails, setEventDetails] = useState([]);
  useEffect(() => {
    const fetchMeetingsDetails = async () => {
      try {
        const response = await fetch(
          `/api/getEvents/${params.clubName}/${params.id}`
        );
        const data = await response.json();
        setEventDetails(data.givenEvent);
      } catch (error) {
        console.error("Error fetching past meetings:", error);
      }
    };
    fetchMeetingsDetails();
  }, [params.clubName, params.id]);

  if (!eventDetails) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading event details...
      </div>
    );
  }
  return (
    <>
      <div className="eventPage">
        <div className="imageDiv">
          {eventDetails?.eventImageUrl ? (
            <img src={eventDetails.eventImageUrl} alt="Event Cover" />
          ) : (
            <img
              src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-ydtpxgavpm-1515235604.jpg"
              alt=""
            />
          )}
        </div>
        <div className="contentDiv">
          <h1>~ Topic ~ </h1>
          <br />
          <p>
            {" "}
            {eventDetails?.name} <br />
          </p>
          <br />
          <h4>~ Discussions ~</h4>
          <br />
          <p>
            <span>Introduction</span>
            {eventDetails?.description?.Introduction}
            The latest book club meeting was held under the expansive sky of our
            college&apos;s open area, setting the perfect backdrop for an
            enriching discussion on &quot;Discovering New Genres.&quot; The
            session was filled with excitement as members gathered to explore
            the vast and diverse world of literary genres.
            <span>Agenda</span>
            {eventDetails?.description?.Agendas}
            <ol>
              <li>Introduction to Literary Genres</li>
              <li>Exploring Unfamiliar Genres</li>
              <li>Personal Experiences and Insights</li>
              <li>Group Discussions</li>
              <li>Conclusions and Takeaways</li>
            </ol>
            {eventDetails?.description?.DetailedPoints}
            <span> 1. Introduction to Literary Genres</span> We began the
            meeting with a brief introduction to the concept of literary genres.
            Genres are categories that define a book based on its narrative
            style, content, and form. The main purpose was to understand the
            different genres and how they can shape our reading experiences.
            <span>Key Points:</span>
            <ol>
              <li> Definition of literary genres.</li>
              <li>Importance of genres in literature.</li>
              <li>
                Examples of major genres: Fiction, Non-Fiction, Mystery,
                Fantasy, Science Fiction, Historical Fiction, Romance, and more.
              </li>
            </ol>
            <span>2. Exploring Unfamiliar Genres</span>
            Each member was encouraged to delve into genres they had little to
            no experience with. This segment aimed to broaden our literary
            horizons and introduce us to new and exciting forms of storytelling.
            <span>Highlighted Genres:</span>
            <ul>
              <li>
                Cyberpunk: A sub-genre of science fiction focused on futuristic,
                dystopian societies dominated by computer technology and
                hackers.
              </li>
              <li>
                Magical Realism: A genre that blends magical elements with the
                real world, making the extraordinary seem ordinary.
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
                Cli-Fi (Climate Fiction): Fiction that deals with climate change
                and global warming.
              </li>
            </ul>
            <span>Books and Authors Discussed:</span>
            <ul>
              <li>
                One Hundred Years of Solitude by Gabriel Garcia Marquez (Magical
                Realism)
              </li>
              <li>Neuromancer by William Gibson (Cyberpunk)</li>
              <li>Frankenstein by Mary Shelley (Gothic Fiction)</li>
              <li>The Water Knife by Paolo Bacigalupi (Cli-Fi)</li>
            </ul>
            <span>3. Personal Experiences and Insights</span>
            Members shared their personal experiences with the new genres they
            explored. This was a highly interactive session where we learned
            from each other&apos;s reading journeys.
            {eventDetails?.description?.InsightsShared}
            <span>Insights:</span>
            <ul>
              <li>
                Magical Realism: Many found it fascinating how magical elements
                were woven into the fabric of everyday life, challenging the
                boundary between reality and fantasy.
              </li>
              <li>
                Cyberpunk and Biopunk: These genres were appreciated for their
                thought-provoking takes on future societies and ethical dilemmas
                posed by technological advancements.
              </li>
              <li>
                Gothic Fiction: The haunting atmospheres and complex characters
                were a hit, with many members expressing newfound appreciation
                for the genre.
              </li>
              <li>
                Cli-Fi: Discussions highlighted the genre&apos;s ability to
                raise awareness about environmental issues through engaging
                storytelling.
              </li>
            </ul>
            {eventDetails?.description?.GroupFindings}
            <span>4. Group Discussions</span>
            In smaller groups, we discussed the potential impact of these genres
            on our perspectives and reading habits. Each group was tasked with
            identifying how these genres could influence our understanding of
            literature and the world.
            <span>Group Findings:</span>
            <ul>
              <li>
                Expanded Perspectives: Exposure to new genres broadened our
                understanding of diverse cultural and philosophical ideas.
              </li>
              <li>
                Enhanced Appreciation: Members expressed a greater appreciation
                for the creativity and innovation involved in genre fiction.
              </li>
              <li>
                Increased Curiosity: The session ignited a curiosity to explore
                more genres and discover new favorite authors and books.
              </li>
            </ul>
            {eventDetails?.description?.KeyTakeaways}
            <span>5. Conclusions and Takeaways</span>
            We concluded the meeting by summarizing our discoveries and
            discussing how we could incorporate this newfound knowledge into our
            future reading endeavors.
            <span>Key Takeaways:</span>
            <ul>
              <li>
                Open-Minded Reading: Embracing new genres can significantly
                enrich our reading experiences and knowledge.
              </li>
              <li>
                Continuous Exploration: Literature is vast and ever-evolving;
                there&apos;s always something new to discover.
              </li>
              <li>
                Community Learning: Sharing and discussing books within a
                community can enhance our understanding and enjoyment of
                literature.
              </li>
            </ul>
            <span>
              {eventDetails?.description?.FinalThoughts}
              Final Thoughts <br />
              <br /> The meeting was a resounding success, with everyone leaving
              inspired to continue exploring new genres. The open-air setting of
              our Indian college campus provided a refreshing and stimulating
              environment, making the experience even more memorable. As we
              parted ways, there was a shared sense of excitement about the
              endless possibilities that await us in the world of books.
            </span>
          </p>
          <br />
          <h4>~ Event Gallery ~ </h4>
          <br />
          <br />
          <div className="eventGallery">
            {eventDetails?.eventGalleryImages?.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}

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
    </>
  );
};

export default EventPage;
