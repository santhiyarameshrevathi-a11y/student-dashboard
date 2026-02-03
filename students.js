export const students = [
  { id: 1, name: "Daniel Perez", major: "Education", year: "Sophomore", email: "student1@university.edu", gpa: 3.70, attendance: 62.6, credits: 116, status: "probation" },
  { id: 2, name: "Matthew Brown", major: "Psychology", year: "Senior", email: "student2@university.edu", gpa: 3.51, attendance: 97.9, credits: 44, status: "active" },
  { id: 3, name: "Lucas Smith", major: "Economics", year: "Junior", email: "student3@university.edu", gpa: 2.64, attendance: 71.0, credits: 47, status: "active" },
  { id: 4, name: "Ethan Hernandez", major: "Chemistry", year: "Junior", email: "student4@university.edu", gpa: 3.85, attendance: 60.4, credits: 40, status: "leave" },
  { id: 5, name: "Evelyn Lewis", major: "Biology", year: "Junior", email: "student5@university.edu", gpa: 3.24, attendance: 92.3, credits: 26, status: "active" },
  { id: 6, name: "William Smith", major: "Nursing", year: "Freshman", email: "student6@university.edu", gpa: 2.91, attendance: 88.6, credits: 91, status: "active" },
  { id: 7, name: "Jackson Martinez", major: "Mathematics", year: "Senior", email: "student7@university.edu", gpa: 2.14, attendance: 79.6, credits: 112, status: "leave" },
  { id: 8, name: "Ava Williams", major: "Art", year: "Freshman", email: "student8@university.edu", gpa: 2.15, attendance: 61.3, credits: 33, status: "active" },
  { id: 9, name: "Harper Johnson", major: "Mathematics", year: "Junior", email: "student9@university.edu", gpa: 3.11, attendance: 67.3, credits: 10, status: "active" },
  { id: 10, name: "Ethan Davis", major: "Art", year: "Sophomore", email: "student10@university.edu", gpa: 3.92, attendance: 94.7, credits: 8, status: "active" },
  { id: 11, name: "Amelia Anderson", major: "Political Science", year: "Senior", email: "student11@university.edu", gpa: 3.73, attendance: 86.2, credits: 102, status: "active" },
  { id: 12, name: "Sophia Gonzalez", major: "Mathematics", year: "Sophomore", email: "student12@university.edu", gpa: 2.19, attendance: 78.4, credits: 13, status: "active" },
  { id: 13, name: "Charlotte Smith", major: "Engineering", year: "Senior", email: "student13@university.edu", gpa: 3.99, attendance: 95.3, credits: 120, status: "active", scholarship: 13702, paymentDue: 46382, paymentStatus: "pending" },
  { id: 14, name: "Benjamin Smith", major: "Psychology", year: "Freshman", email: "student14@university.edu", gpa: 3.89, attendance: 88.1, credits: 98, status: "active", paymentDue: 41061, paymentStatus: "pending" },
  { id: 15, name: "Abigail Clark", major: "Nursing", year: "Sophomore", email: "student15@university.edu", gpa: 3.45, attendance: 91.5, credits: 85, status: "active", scholarship: 13702, paymentDue: 32075, paymentStatus: "pending" },
  { id: 16, name: "Henry Brown", major: "Business", year: "Junior", email: "student16@university.edu", gpa: 3.22, attendance: 84.2, credits: 67, status: "active", paymentDue: 38500, paymentStatus: "pending" },
  { id: 17, name: "Ethan Gonzalez", major: "Computer Science", year: "Senior", email: "student17@university.edu", gpa: 3.78, attendance: 89.9, credits: 115, status: "active", paymentDue: 35200, paymentStatus: "pending" },
  { id: 18, name: "Elizabeth Martinez", major: "Chemistry", year: "Sophomore", email: "student18@university.edu", gpa: 3.34, attendance: 87.3, credits: 52, status: "active", paymentDue: 29800, paymentStatus: "pending" },
  { id: 19, name: "Olivia Clark", major: "Biology", year: "Junior", email: "student19@university.edu", gpa: 3.99, attendance: 96.8, credits: 78, status: "active" },
  { id: 20, name: "Sebastian Hernandez", major: "Economics", year: "Senior", email: "student20@university.edu", gpa: 3.97, attendance: 93.2, credits: 110, status: "active" },
  { id: 21, name: "Charlotte Hernandez", major: "Business", year: "Freshman", email: "student21@university.edu", gpa: 3.98, attendance: 90.5, credits: 28, status: "active" },
  { id: 22, name: "Noah Ramirez", major: "Biology", year: "Sophomore", email: "student22@university.edu", gpa: 3.97, attendance: 92.1, credits: 55, status: "active" },
  { id: 23, name: "Abigail Clark", major: "Political Science", year: "Junior", email: "student23@university.edu", gpa: 3.97, attendance: 88.7, credits: 72, status: "active" },
  { id: 24, name: "Evelyn Robinson", major: "Mathematics", year: "Freshman", email: "student24@university.edu", gpa: 3.45, attendance: 60.1, credits: 40, status: "active" },
  { id: 25, name: "Jackson Brown", major: "Chemistry", year: "Junior", email: "student25@university.edu", gpa: 2.88, attendance: 60.2, credits: 75, status: "active" }
];

// Generate more students to reach 500
for (let i = 26; i <= 500; i++) {
  const majors = ["Computer Science", "Engineering", "Psychology", "Biology", "Mathematics", "Chemistry", "Political Science", "History", "Nursing", "Business", "Economics", "Art", "Education"];
  const years = ["Freshman", "Sophomore", "Junior", "Senior"];
  const statuses = ["active", "probation", "leave"];
  const firstNames = ["James", "Emma", "Oliver", "Sophia", "William", "Ava", "Lucas", "Isabella", "Henry", "Mia", "Alexander", "Charlotte", "Benjamin", "Amelia", "Sebastian", "Harper"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas"];
  
  students.push({
    id: i,
    name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
    major: majors[Math.floor(Math.random() * majors.length)],
    year: years[Math.floor(Math.random() * years.length)],
    email: `student${i}@university.edu`,
    gpa: parseFloat((Math.random() * 2 + 2).toFixed(2)),
    attendance: parseFloat((Math.random() * 40 + 60).toFixed(1)),
    credits: Math.floor(Math.random() * 120) + 10,
    status: statuses[Math.floor(Math.random() * statuses.length)]
  });
}