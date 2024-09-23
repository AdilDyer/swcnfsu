import { NextResponse } from "next/server";
const coursesData = [
  {
    name: "B.Tech - M.Tech. Computer Science and Engineering (Cyber Security)",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "M. Tech. Cyber Security",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "M. Sc. Cyber Security",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "M. Sc. Digital Forensics and Information Security",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "M. Tech. Robotics and Automation",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "M. Tech. Applied Data Science and Artificial Intelligence",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "PG Diploma Semiconductor Security and Forensic Investigation",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "PG Diploma Cyber Physical System",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "PG Diploma Internet Governance",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "B.Sc.; LL.B. (Hons.)",
    school: { name: "School of Law, Forensic Justice and Policy Studies" },
  },
  {
    name: "LL. B. (Hons.)",
    school: { name: "School of Law, Forensic Justice and Policy Studies" },
  },
  {
    name: "LL. M. (Criminal Law and Criminal Justice Administration)",
    school: { name: "School of Law, Forensic Justice and Policy Studies" },
  },
  {
    name: "LL. M. (Cyber Law and Cyber Crime Investigation)",
    school: { name: "School of Law, Forensic Justice and Policy Studies" },
  },
  {
    name: "PG Diploma in Cyber Laws",
    school: { name: "School of Law, Forensic Justice and Policy Studies" },
  },
  {
    name: "B.A. - M.A. Criminology",
    school: { name: "School of Behavioural Forensics" },
  },
  {
    name: "PG Diploma Investigative Psychology",
    school: { name: "School of Behavioural Forensics" },
  },
  {
    name: "PG Diploma Cyber Psychology",
    school: { name: "School of Behavioural Forensics" },
  },
  {
    name: "M. Phil. Clinical Psychology",
    school: { name: "School of Behavioural Forensics" },
  },
  {
    name: "M. Sc. Clinical Psychology",
    school: { name: "School of Behavioural Forensics" },
  },
  {
    name: "M. Sc. Neuropsychology",
    school: { name: "School of Behavioural Forensics" },
  },
  {
    name: "M. Sc. Forensic Psychology",
    school: { name: "School of Behavioural Forensics" },
  },
  {
    name: "M.A Criminology (with specialization in Forensic Psychology)",
    school: { name: "School of Behavioural Forensics" },
  },
  {
    name: "PG Diploma Industrial Safety, Hygiene & Environmental Management",
    school: { name: "School of Pharmacy" },
  },
  {
    name: "M. Pharm. Pharmaceutical Quality Assurance (PCI Approved)",
    school: { name: "School of Pharmacy" },
  },
  {
    name: "M. Pharm. Forensic Pharmacy",
    school: { name: "School of Pharmacy" },
  },
  {
    name: "M. Sc. Pharmaceutical Chemistry",
    school: { name: "School of Pharmacy" },
  },
  {
    name: "M. Sc. Environmental Science (with specialization in Environmental Forensics)",
    school: { name: "School of Pharmacy" },
  },
  {
    name: "M. Sc. Chemistry (with specialization in Forensic Analytical Chemistry)",
    school: { name: "School of Pharmacy" },
  },
  {
    name: "BBA-MBA (with Specialization in Forensic Accounting and Fraud Investigation / Financial Management/ Business Analytics and Intelligence)",
    school: { name: "School of Management Studies" },
  },
  {
    name: "Foreign Language",
    school: { name: "School of Management Studies" },
  },
  {
    name: "MBA Forensic Accounting and Fraud Investigation",
    school: { name: "School of Management Studies" },
  },
  {
    name: "MBA Cyber Security Management",
    school: { name: "School of Management Studies" },
  },
  {
    name: "MBA Hospital and Healthcare Management",
    school: { name: "School of Management Studies" },
  },
  {
    name: "MBA Business Analytics and Intelligence",
    school: { name: "School of Management Studies" },
  },
  {
    name: "Certificate Course on Network Forensics",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Certificate Course on Fundamentals of Windows Malware Analysis",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Certificate Course on Foundation of IoT Security & Forensics",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Introduction to Cyber Security and Cyber Attacks",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Certificate Course on Mobile Forensics (CCMF)",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Practical Machine Learning for Cyber Security",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Introduction to Forensic Microbiology",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Confluence of Science & Justice for Introductory Course on Narcotic Drugs & Psychotropic Substances",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Foundation Course - Forensic Science",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Basic of Fingreprint Science",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Fundamentals of Forensic Accounting",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Forensic Linguistics:Analysis language for Legal and Investigative Purposes",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Certificate Course on Installation Security",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Introduction to Sports Law and Forensic Science",
    school: { name: "School of Open Learning" },
  },
  {
    name: "M. Sc. Forensic Nursing",
    school: { name: "School of Medico-Legal Studies" },
  },
  {
    name: "M. Sc. Toxicology",
    school: { name: "School of Medico-Legal Studies" },
  },
  {
    name: "M. Sc. Forensic Dentistry",
    school: { name: "School of Medico-Legal Studies" },
  },
  {
    name: "PG Diploma Disaster Victim Identification",
    school: { name: "School of Medico-Legal Studies" },
  },
  {
    name: "PG Diploma Humanitarian Forensics (in association with ICRC)",
    school: { name: "School of Medico-Legal Studies" },
  },
  {
    name: "B.Sc. - M.Sc. Forensic Science",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "M. Sc. Forensic Science",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "M. Sc. Forensic Biotechnology",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "M. Sc. Multimedia Forensics",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "M.A. Mass Communication and Forensic Journalism",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "PG Diploma Fingerprint Science",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "PG Diploma in Forensic Document Examination",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "PG Diploma Forensic Journalism (Online Mode)",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "PG Diploma Crime Scene Management",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "M. Sc. Homeland Security",
    school: { name: "School of Police Science and Security Studies" },
  },
  {
    name: "M.A. Police & Security Studies",
    school: { name: "School of Police Science and Security Studies" },
  },
  {
    name: "PG Diploma Security Studies",
    school: { name: "School of Police Science and Security Studies" },
  },
  {
    name: "M. Sc. Food Technology (Specialization in Forensic Food Analysis)",
    school: { name: "School of Engineering and Technology" },
  },
  {
    name: "M. Sc. Nanotechnology (Specialization in Forensic Nanotechnology)",
    school: { name: "School of Engineering and Technology" },
  },
  {
    name: "M. Tech. Civil Engineering (Specialization in Forensic Structural Engineering)",
    school: { name: "School of Engineering and Technology" },
  },
  {
    name: "Doctor of Philosophy",
    school: { name: "School of Doctoral Studies and Research" },
  },
  {
    name: "Doctor of Philosophy (Professional Category)",
    school: { name: "School of Doctoral Studies and Research" },
  },
  {
    name: "B.Tech - M.Tech. Computer Science and Engineering (Cyber Security)",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "M. Tech. Cyber Security",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "M. Sc. Cyber Security",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "M. Sc. Digital Forensics and Information Security",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "M. Tech. Robotics and Automation",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "M. Tech. Applied Data Science and Artificial Intelligence",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "PG Diploma Semiconductor Security and Forensic Investigation",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "PG Diploma Cyber Physical System",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "PG Diploma Internet Governance",
    school: { name: "School of Cybersecurity and Digital Forensics" },
  },
  {
    name: "B.Sc.; LL.B. (Hons.)",
    school: { name: "School of Law, Forensic Justice and Policy Studies" },
  },
  {
    name: "LL. B. (Hons.)",
    school: { name: "School of Law, Forensic Justice and Policy Studies" },
  },
  {
    name: "LL. M. (Criminal Law and Criminal Justice Administration)",
    school: { name: "School of Law, Forensic Justice and Policy Studies" },
  },
  {
    name: "LL. M. (Cyber Law and Cyber Crime Investigation)",
    school: { name: "School of Law, Forensic Justice and Policy Studies" },
  },
  {
    name: "PG Diploma in Cyber Laws",
    school: { name: "School of Law, Forensic Justice and Policy Studies" },
  },
  {
    name: "B.A. - M.A. Criminology",
    school: { name: "School of Behavioural Forensics" },
  },
  {
    name: "PG Diploma Investigative Psychology",
    school: { name: "School of Behavioural Forensics" },
  },
  {
    name: "PG Diploma Cyber Psychology",
    school: { name: "School of Behavioural Forensics" },
  },
  {
    name: "M. Phil. Clinical Psychology",
    school: { name: "School of Behavioural Forensics" },
  },
  {
    name: "M. Sc. Clinical Psychology",
    school: { name: "School of Behavioural Forensics" },
  },
  {
    name: "M. Sc. Neuropsychology",
    school: { name: "School of Behavioural Forensics" },
  },
  {
    name: "M. Sc. Forensic Psychology",
    school: { name: "School of Behavioural Forensics" },
  },
  {
    name: "M.A Criminology (with specialization in Forensic Psychology)",
    school: { name: "School of Behavioural Forensics" },
  },
  {
    name: "PG Diploma Industrial Safety, Hygiene & Environmental Management",
    school: { name: "School of Pharmacy" },
  },
  {
    name: "M. Pharm. Pharmaceutical Quality Assurance (PCI Approved)",
    school: { name: "School of Pharmacy" },
  },
  {
    name: "M. Pharm. Forensic Pharmacy",
    school: { name: "School of Pharmacy" },
  },
  {
    name: "M. Sc. Pharmaceutical Chemistry",
    school: { name: "School of Pharmacy" },
  },
  {
    name: "M. Sc. Environmental Science (with specialization in Environmental Forensics)",
    school: { name: "School of Pharmacy" },
  },
  {
    name: "M. Sc. Chemistry (with specialization in Forensic Analytical Chemistry)",
    school: { name: "School of Pharmacy" },
  },
  {
    name: "BBA-MBA (with Specialization in Forensic Accounting and Fraud Investigation / Financial Management/ Business Analytics and Intelligence)",
    school: { name: "School of Management Studies" },
  },
  {
    name: "Foreign Language",
    school: { name: "School of Management Studies" },
  },
  {
    name: "MBA Forensic Accounting and Fraud Investigation",
    school: { name: "School of Management Studies" },
  },
  {
    name: "MBA Cyber Security Management",
    school: { name: "School of Management Studies" },
  },
  {
    name: "MBA Hospital and Healthcare Management",
    school: { name: "School of Management Studies" },
  },
  {
    name: "MBA Business Analytics and Intelligence",
    school: { name: "School of Management Studies" },
  },
  {
    name: "Certificate Course on Network Forensics",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Certificate Course on Fundamentals of Windows Malware Analysis",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Certificate Course on Foundation of IoT Security & Forensics",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Introduction to Cyber Security and Cyber Attacks",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Certificate Course on Mobile Forensics (CCMF)",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Practical Machine Learning for Cyber Security",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Introduction to Forensic Microbiology",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Confluence of Science & Justice for Introductory Course on Narcotic Drugs & Psychotropic Substances",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Foundation Course - Forensic Science",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Basic of Fingreprint Science",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Fundamentals of Forensic Accounting",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Forensic Linguistics:Analysis language for Legal and Investigative Purposes",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Certificate Course on Installation Security",
    school: { name: "School of Open Learning" },
  },
  {
    name: "Introduction to Sports Law and Forensic Science",
    school: { name: "School of Open Learning" },
  },
  {
    name: "M. Sc. Forensic Nursing",
    school: { name: "School of Medico-Legal Studies" },
  },
  {
    name: "M. Sc. Toxicology",
    school: { name: "School of Medico-Legal Studies" },
  },
  {
    name: "M. Sc. Forensic Dentistry",
    school: { name: "School of Medico-Legal Studies" },
  },
  {
    name: "PG Diploma Disaster Victim Identification",
    school: { name: "School of Medico-Legal Studies" },
  },
  {
    name: "PG Diploma Humanitarian Forensics (in association with ICRC)",
    school: { name: "School of Medico-Legal Studies" },
  },
  {
    name: "B.Sc. - M.Sc. Forensic Science",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "M. Sc. Forensic Science",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "M. Sc. Forensic Biotechnology",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "M. Sc. Multimedia Forensics",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "M.A. Mass Communication and Forensic Journalism",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "PG Diploma Fingerprint Science",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "PG Diploma in Forensic Document Examination",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "PG Diploma Forensic Journalism (Online Mode)",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "PG Diploma Crime Scene Management",
    school: { name: "School of Forensic Science" },
  },
  {
    name: "M. Sc. Homeland Security",
    school: { name: "School of Police Science and Security Studies" },
  },
  {
    name: "M.A. Police & Security Studies",
    school: { name: "School of Police Science and Security Studies" },
  },
  {
    name: "PG Diploma Security Studies",
    school: { name: "School of Police Science and Security Studies" },
  },
  {
    name: "M. Sc. Food Technology (Specialization in Forensic Food Analysis)",
    school: { name: "School of Engineering and Technology" },
  },
  {
    name: "M. Sc. Nanotechnology (Specialization in Forensic Nanotechnology)",
    school: { name: "School of Engineering and Technology" },
  },
  {
    name: "M. Tech. Civil Engineering (Specialization in Forensic Structural Engineering)",
    school: { name: "School of Engineering and Technology" },
  },
  {
    name: "Doctor of Philosophy",
    school: { name: "School of Doctoral Studies and Research" },
  },
  {
    name: "Doctor of Philosophy (Professional Category)",
    school: { name: "School of Doctoral Studies and Research" },
  },
];
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const schoolName = searchParams.get("school");

    if (!schoolName) {
      return NextResponse.json({
        error: "School name is required",
        status: 400,
      });
    }

   
    let filteredCourses = coursesData;

    if (schoolName) {
      filteredCourses = coursesData.filter((course) =>
        course.school.name.toLowerCase().includes(schoolName.toLowerCase())
      );
    }

    if (filteredCourses.length === 0) {
      return NextResponse.json({
        error: "No courses found for the specified school",
        status: 404,
      });
    }

    return NextResponse.json({ filteredCourses, status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
