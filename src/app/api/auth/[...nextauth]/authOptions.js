import GoogleProvider from "next-auth/providers/google";
import User from "../../../../lib/models/user";
import dbConnect from "../../../../lib/db";
import ClubCoordinator from "../../../../lib/models/clubcoordinator";
// Function to check if the user is registered
const checkIsRegistered = async (email) => {
  try {
    await dbConnect(); // Ensure DB connection
    const user = await User.findOne({ email }); // Fetch user by email
    return user ? true : false; // Return true if user exists
  } catch (error) {
    console.error("Error checking registration status:", error);
    return false; // Return false in case of an error
  }
};

// Function to add course if available
const addCourseIfAvailable = async (email) => {
  try {
    await dbConnect(); // Ensure DB connection
    const user = await User.findOne({ email }); // Fetch user by email
    return user?.course ?? ""; // Return course if found, else empty string
  } catch (error) {
    console.error("Error fetching course:", error);
    return ""; // Return empty string in case of error
  }
};

// Function to check if the user is a club coordinator
const checkIsClubCoordinator = async (email) => {
  try {
    await dbConnect(); // Ensure DB connection

    // Fetch coordinator by user email
    const result = await ClubCoordinator.findOne({})
      .populate({
        path: "userId", // Populates the user data
        match: { email }, // Filters by the user's email
      })
      .populate("clubId"); // Populates the club data (including name)

    // If userId is populated and found, the user is a club coordinator
    // If userId and clubId are found, return the club name
    if (result && result.userId && result.clubId) {
      return {
        isClubCoordinator: true,
        clubName: result.clubId.name, // Assuming `name` field exists in the Club schema
      };
    } else {
      return { isClubCoordinator: false, clubName: null };
    }
  } catch (error) {
    console.error("Error checking club coordinator status:", error);
    return false; // Return false in case of an error
  }
};

// NextAuth configuration
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        // Set admin flag if email matches
        session.user.isAdmin = session.user.email === process.env.ADMIN_EMAIL;

        // Check if the user is registered
        session.user.isRegistered = await checkIsRegistered(session.user.email);

        // Add course information if available
        session.user.course = await addCourseIfAvailable(session.user.email);

        // Check if the user is a club coordinator and get the club name
        const { isClubCoordinator, clubName } = await checkIsClubCoordinator(
          session.user.email
        );

        // Update session object with club information
        session.user.isClubCoordinator = isClubCoordinator;
        session.user.clubName = clubName;

        return session; // Return modified session
      } catch (error) {
        console.error("Error in session callback:", error);
        return session; // Return session even in case of an error
      }
    },
  },
};
