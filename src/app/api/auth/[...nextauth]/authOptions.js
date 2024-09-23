import GoogleProvider from "next-auth/providers/google";
import User from "../../../../lib/modals/user";
import dbConnect from "../../../../lib/db";
import ClubCoordinator from "../../../../lib/modals/clubcoordinator";
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
    const result = await ClubCoordinator.findOne({}).populate({
      path: "userId", // Populates the user data
      match: { email }, // Filters by the user's email
    });

    // If userId is populated and found, the user is a club coordinator
    if (result && result.userId) {
      return true;
    } else {
      return false;
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

        session.user.isClubCoordinator = await checkIsClubCoordinator(
          session.user.email
        );

        return session; // Return modified session
      } catch (error) {
        console.error("Error in session callback:", error);
        return session; // Return session even in case of an error
      }
    },
  },
};
