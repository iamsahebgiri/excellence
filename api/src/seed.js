/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
// const mongoose = require('mongoose');
// const config = require('./config/config');
// const { Course, Class, Subject } = require('./models');

// const courses = [
//   { _id: 1, name: 'CBSE' },
//   { _id: 2, name: 'Entrance Exam' },
//   { _id: 3, name: 'Competitive Exams' },
//   { _id: 4, name: 'ICSE & ISC' },
//   { _id: 5, name: 'Others' },
// ];

// const classes = [
//   { _id: 1, courseId: 1, name: 'Class 01' },
//   { _id: 2, courseId: 1, name: 'Class 02' },
//   { _id: 3, courseId: 1, name: 'Class 03' },
//   { _id: 4, courseId: 1, name: 'Class 04' },
//   { _id: 5, courseId: 1, name: 'Class 05' },
//   { _id: 6, courseId: 1, name: 'Class 06' },
//   { _id: 7, courseId: 1, name: 'Class 07' },
//   { _id: 8, courseId: 1, name: 'Class 08' },
//   { _id: 9, courseId: 1, name: 'Class 09' },
//   { _id: 10, courseId: 1, name: 'Class 10' },
//   { _id: 11, courseId: 1, name: 'Class 11' },
//   { _id: 12, courseId: 1, name: 'Class 12' },

//   { _id: 13, courseId: 2, name: 'JEE main' },
//   { _id: 14, courseId: 2, name: 'NEET-UG' },

//   { _id: 15, courseId: 3, name: 'SSC CGL' },
//   { _id: 16, courseId: 3, name: 'NDA' },

//   { _id: 17, courseId: 4, name: 'Class 01' },
//   { _id: 18, courseId: 4, name: 'Class 02' },
//   { _id: 19, courseId: 4, name: 'Class 03' },
//   { _id: 20, courseId: 4, name: 'Class 04' },
//   { _id: 21, courseId: 4, name: 'Class 05' },
//   { _id: 22, courseId: 4, name: 'Class 06' },
//   { _id: 23, courseId: 4, name: 'Class 07' },
//   { _id: 24, courseId: 4, name: 'Class 08' },
//   { _id: 25, courseId: 4, name: 'Class 09' },
//   { _id: 26, courseId: 4, name: 'Class 10' },
//   { _id: 27, courseId: 4, name: 'Class 11' },
//   { _id: 28, courseId: 4, name: 'Class 12' },

//   { _id: 29, courseId: 5, name: 'Others' },
// ];

// const subjects = [
//   { _id: 1, classId: 1, name: 'English' },
//   { _id: 2, classId: 1, name: 'Hindi' },
//   { _id: 3, classId: 1, name: 'Mathematics' },
//   { _id: 4, classId: 1, name: 'EVS' },
//   { _id: 5, classId: 1, name: 'General Knowledge' },
//   { _id: 6, classId: 1, name: 'Computer' },
//   { _id: 7, classId: 1, name: 'Regional Language' },
//   { _id: 8, classId: 1, name: 'English - Marigold' },
//   { _id: 9, classId: 1, name: 'Mathematics - Math Magic' },
//   { _id: 10, classId: 1, name: 'हिंदी - रिमझिम' },
//   { _id: 11, classId: 1, name: 'Other Subjects' },

//   { _id: 12, classId: 2, name: 'English' },
//   { _id: 13, classId: 2, name: 'Hindi' },
//   { _id: 14, classId: 2, name: 'Mathematics' },
//   { _id: 15, classId: 2, name: 'EVS' },
//   { _id: 16, classId: 2, name: 'Other Subjects' },
//   { _id: 17, classId: 2, name: 'General Knowledge' },
//   { _id: 18, classId: 2, name: 'Computer' },
//   { _id: 19, classId: 2, name: 'Regional Language' },
//   { _id: 20, classId: 2, name: 'Mathematics - Math Magic' },
//   { _id: 21, classId: 2, name: 'English - Marigold' },
//   { _id: 22, classId: 2, name: 'हिंदी - रिमझिम' },

//   { _id: 23, classId: 3, name: 'Mathematics' },
//   { _id: 24, classId: 3, name: 'Science' },
//   { _id: 25, classId: 3, name: 'Social Science' },
//   { _id: 26, classId: 3, name: 'English - Marigold' },
//   { _id: 27, classId: 3, name: 'हिंदी - रिमझिम' },
//   { _id: 28, classId: 3, name: 'EVS - Looking Around' },
//   { _id: 29, classId: 3, name: 'Mathematics - Math Magic' },
//   { _id: 30, classId: 3, name: 'General Knowledge' },
//   { _id: 31, classId: 3, name: 'Computer' },
//   { _id: 32, classId: 3, name: 'Regional Language' },
//   { _id: 33, classId: 3, name: 'EVS' },
//   { _id: 34, classId: 3, name: 'Other Subjects' },

//   { _id: 35, classId: 4, name: 'Mathematics' },
//   { _id: 36, classId: 4, name: 'Social Science' },
//   { _id: 37, classId: 4, name: 'Science' },
//   { _id: 38, classId: 4, name: 'English - Marigold' },
//   { _id: 39, classId: 4, name: 'हिंदी - रिमझिम' },
//   { _id: 40, classId: 4, name: 'Mathematics - Math Magic' },
//   { _id: 41, classId: 4, name: 'EVS - Looking Around' },
//   { _id: 42, classId: 4, name: 'General Knowledge' },
//   { _id: 43, classId: 4, name: 'Computer' },
//   { _id: 44, classId: 4, name: 'Regional Language' },
//   { _id: 45, classId: 4, name: 'EVS' },
//   { _id: 46, classId: 4, name: 'Other Subjects' },

//   { _id: 47, classId: 5, name: 'Mathematics' },
//   { _id: 48, classId: 5, name: 'Science' },
//   { _id: 49, classId: 5, name: 'Social Science' },
//   { _id: 50, classId: 5, name: 'English - Marigold' },
//   { _id: 51, classId: 5, name: 'हिंदी - रिमझिम' },
//   { _id: 52, classId: 5, name: 'Mathematics - Math Magic' },
//   { _id: 53, classId: 5, name: 'EVS - Looking Around' },
//   { _id: 54, classId: 5, name: 'General Knowledge' },
//   { _id: 55, classId: 5, name: 'Computer' },
//   { _id: 56, classId: 5, name: 'Regional Language' },
//   { _id: 57, classId: 5, name: 'EVS' },
//   { _id: 58, classId: 5, name: 'Other Subjects' },

//   { _id: 59, classId: 6, name: 'Mathematics' },
//   { _id: 60, classId: 6, name: 'Science' },
//   { _id: 61, classId: 6, name: 'Social Science' },
//   { _id: 62, classId: 6, name: 'English' },
//   { _id: 63, classId: 6, name: 'हिंदी (वसंत और बाल राम कथा)' },
//   { _id: 64, classId: 6, name: 'Other Subjects' },
//   { _id: 65, classId: 6, name: 'Sanskrit' },
//   { _id: 66, classId: 6, name: 'Computer' },
//   { _id: 67, classId: 6, name: 'French' },
//   { _id: 68, classId: 6, name: 'German' },
//   { _id: 69, classId: 6, name: 'Regional Language' },

//   { _id: 70, classId: 7, name: 'Mathematics' },
//   { _id: 71, classId: 7, name: 'Science' },
//   { _id: 72, classId: 7, name: 'Social Science' },
//   { _id: 73, classId: 7, name: 'English' },
//   { _id: 74, classId: 7, name: 'हिंदी (वसंत और बाल महाभारत कथा)' },
//   { _id: 75, classId: 7, name: 'Other Subjects' },
//   { _id: 76, classId: 7, name: 'Sanskrit' },
//   { _id: 77, classId: 7, name: 'Computer' },
//   { _id: 78, classId: 7, name: 'French' },
//   { _id: 79, classId: 7, name: 'German' },
//   { _id: 80, classId: 7, name: 'Regional Language' },

//   { _id: 81, classId: 8, name: 'Mathematics' },
//   { _id: 82, classId: 8, name: 'Science' },
//   { _id: 83, classId: 8, name: 'Social Science' },
//   { _id: 84, classId: 8, name: 'Sanskrit' },
//   { _id: 85, classId: 8, name: 'Computer' },
//   { _id: 86, classId: 8, name: 'French' },
//   { _id: 87, classId: 8, name: 'German' },
//   { _id: 88, classId: 8, name: 'Regional Language' },
//   { _id: 89, classId: 8, name: 'English' },
//   { _id: 90, classId: 8, name: 'हिंदी (वसंत और भारत की खोज)' },
//   { _id: 91, classId: 8, name: 'Other Subjects' },

//   { _id: 92, classId: 9, name: 'Science' },
//   { _id: 93, classId: 9, name: 'Mathematics' },
//   { _id: 94, classId: 9, name: 'Information Technology (402)' },
//   { _id: 95, classId: 9, name: 'German' },
//   { _id: 96, classId: 9, name: 'Regional Language' },
//   { _id: 97, classId: 9, name: 'Social Science' },
//   { _id: 98, classId: 9, name: 'सामाजिक विज्ञान' },
//   { _id: 99, classId: 9, name: 'English' },
//   { _id: 100, classId: 9, name: 'Hindi A' },
//   { _id: 101, classId: 9, name: 'Hindi B' },
//   { _id: 102, classId: 9, name: 'Computer Applications' },
//   { _id: 103, classId: 9, name: 'JSTSE Scholarship' },
//   { _id: 104, classId: 9, name: 'संस्कृत (शेमुषी)' },
//   { _id: 105, classId: 9, name: 'French' },
//   { _id: 106, classId: 9, name: 'Painting' },
//   { _id: 107, classId: 9, name: 'Home Science' },
//   { _id: 108, classId: 9, name: 'Music' },
//   { _id: 109, classId: 9, name: 'Other Subjects' },

//   { _id: 110, classId: 10, name: 'Mathematics' },
//   { _id: 111, classId: 10, name: 'Science' },
//   { _id: 112, classId: 10, name: 'विज्ञान' },
//   { _id: 113, classId: 10, name: 'Information Technology (402)' },
//   { _id: 114, classId: 10, name: 'German' },
//   { _id: 115, classId: 10, name: 'Regional Language' },
//   { _id: 116, classId: 10, name: 'Social Science' },
//   { _id: 117, classId: 10, name: 'सामाजिक विज्ञान' },
//   { _id: 118, classId: 10, name: 'English' },
//   { _id: 119, classId: 10, name: 'Hindi A' },
//   { _id: 120, classId: 10, name: 'Hindi B' },
//   { _id: 121, classId: 10, name: 'Computer Applications' },
//   { _id: 122, classId: 10, name: 'NTSE Scholarship' },
//   { _id: 123, classId: 10, name: 'संस्कृत (शेमुषी)' },
//   { _id: 124, classId: 10, name: 'French' },
//   { _id: 125, classId: 10, name: 'Painting' },
//   { _id: 126, classId: 10, name: 'Home Science' },
//   { _id: 127, classId: 10, name: 'Music' },
//   { _id: 128, classId: 10, name: 'Other Subjects' },

//   { _id: 129, classId: 11, name: 'Physics' },
//   { _id: 130, classId: 11, name: 'Chemistry' },
//   { _id: 131, classId: 11, name: 'Mathematics' },
//   { _id: 132, classId: 11, name: 'Biology' },
//   { _id: 133, classId: 11, name: 'Accountancy' },
//   { _id: 134, classId: 11, name: 'Economics' },
//   { _id: 135, classId: 11, name: 'अर्थशास्त्र' },
//   { _id: 136, classId: 11, name: 'Business Studies' },
//   { _id: 137, classId: 11, name: 'व्यवसाय अध्ययन' },
//   { _id: 138, classId: 11, name: 'Applied Mathematics' },
//   { _id: 139, classId: 11, name: 'Painting' },
//   { _id: 140, classId: 11, name: 'Computer Science' },
//   { _id: 141, classId: 11, name: 'Informatics Practices' },
//   { _id: 142, classId: 11, name: 'English Core' },
//   { _id: 143, classId: 11, name: 'English Elective NCERT' },
//   { _id: 144, classId: 11, name: 'Hindi Core' },
//   { _id: 145, classId: 11, name: 'Hindi Elective' },
//   { _id: 146, classId: 11, name: 'History' },
//   { _id: 147, classId: 11, name: 'इतिहास' },
//   { _id: 148, classId: 11, name: 'Political Science' },
//   { _id: 149, classId: 11, name: 'राजनीति विज्ञान' },
//   { _id: 150, classId: 11, name: 'Geography' },
//   { _id: 151, classId: 11, name: 'भूगोल' },
//   { _id: 152, classId: 11, name: 'Sociology' },
//   { _id: 153, classId: 11, name: 'समाजशास्त्र' },
//   { _id: 154, classId: 11, name: 'Engineering Graphics' },
//   { _id: 155, classId: 11, name: 'Home Science' },
//   { _id: 156, classId: 11, name: 'Physical Education' },
//   { _id: 157, classId: 11, name: 'शारीरिक शिक्षा' },
//   { _id: 158, classId: 11, name: 'Multimedia and Webtech' },
//   { _id: 159, classId: 11, name: 'Entrepreneurship' },
//   { _id: 160, classId: 11, name: 'Sanskrit Core' },
//   { _id: 161, classId: 11, name: 'Sanskrit Elective' },
//   { _id: 162, classId: 11, name: 'Psychology' },
//   { _id: 163, classId: 11, name: 'Biotechnology' },
//   { _id: 164, classId: 11, name: 'Legal Studies' },
//   { _id: 165, classId: 11, name: 'Financial Market Management' },
//   { _id: 166, classId: 11, name: 'Other Subjects' },

//   { _id: 167, classId: 12, name: 'Physics' },
//   { _id: 168, classId: 12, name: 'Chemistry' },
//   { _id: 169, classId: 12, name: 'Mathematics' },
//   { _id: 170, classId: 12, name: 'Applied Mathematics' },
//   { _id: 171, classId: 12, name: 'Biology' },
//   { _id: 172, classId: 12, name: 'Accountancy' },
//   { _id: 173, classId: 12, name: 'Economics' },
//   { _id: 174, classId: 12, name: 'अर्थशास्त्र' },
//   { _id: 175, classId: 12, name: 'Business Studies' },
//   { _id: 176, classId: 12, name: 'व्यवसाय अध्ययन' },
//   { _id: 177, classId: 12, name: 'Painting' },
//   { _id: 178, classId: 12, name: 'Computer Science' },
//   { _id: 179, classId: 12, name: 'Informatics Practices' },
//   { _id: 180, classId: 12, name: 'English Core' },
//   { _id: 181, classId: 12, name: 'English Elective NCERT' },
//   { _id: 182, classId: 12, name: 'हिंदी कोर' },
//   { _id: 183, classId: 12, name: 'हिंदी ऐच्छिक' },
//   { _id: 184, classId: 12, name: 'History' },
//   { _id: 185, classId: 12, name: 'इतिहास' },
//   { _id: 186, classId: 12, name: 'Political Science' },
//   { _id: 187, classId: 12, name: 'राजनीति विज्ञान' },
//   { _id: 188, classId: 12, name: 'Geography' },
//   { _id: 189, classId: 12, name: 'भूगोल' },
//   { _id: 190, classId: 12, name: 'Sociology' },
//   { _id: 191, classId: 12, name: 'समाजशास्त्र' },
//   { _id: 192, classId: 12, name: 'Engineering Graphics' },
//   { _id: 193, classId: 12, name: 'Home Science' },
//   { _id: 194, classId: 12, name: 'Physical Education' },
//   { _id: 195, classId: 12, name: 'शारीरिक शिक्षा' },
//   { _id: 196, classId: 12, name: 'Multimedia and Webtech' },
//   { _id: 197, classId: 12, name: 'Entrepreneurship' },
//   { _id: 198, classId: 12, name: 'संस्कृत कोर (भास्वती)' },
//   { _id: 199, classId: 12, name: 'संस्कृत ऐच्छिक' },
//   { _id: 200, classId: 12, name: 'Psychology' },
//   { _id: 201, classId: 12, name: 'Biotechnology' },
//   { _id: 202, classId: 12, name: 'Legal Studies' },
//   { _id: 203, classId: 12, name: 'Financial Market Management' },
//   { _id: 204, classId: 12, name: 'Other Subjects' },

//   { _id: 205, classId: 13, name: 'Physics' },
//   { _id: 206, classId: 13, name: 'Chemistry' },
//   { _id: 207, classId: 13, name: 'Mathematics' },

//   { _id: 208, classId: 14, name: 'Physics' },
//   { _id: 209, classId: 14, name: 'Chemistry' },
//   { _id: 210, classId: 14, name: 'Biology' },

//   { _id: 211, classId: 15, name: 'Intelligence and Reasoning' },
//   { _id: 212, classId: 15, name: 'General Awareness' },
//   { _id: 213, classId: 15, name: 'Quantitative Aptitude' },
//   { _id: 214, classId: 15, name: 'English Comprehension' },

//   { _id: 215, classId: 16, name: 'Mathematics' },
//   { _id: 216, classId: 16, name: 'English' },
//   { _id: 217, classId: 16, name: 'General Knowledge' },

//   { _id: 218, classId: 17, name: 'Others' },
//   { _id: 219, classId: 18, name: 'Others' },
//   { _id: 220, classId: 19, name: 'Others' },
//   { _id: 221, classId: 20, name: 'Others' },
//   { _id: 222, classId: 21, name: 'Others' },

//   { _id: 223, classId: 22, name: 'English' },
//   { _id: 224, classId: 22, name: 'Hindi' },
//   { _id: 225, classId: 22, name: 'Mathematics' },
//   { _id: 226, classId: 22, name: 'History & Civics' },
//   { _id: 227, classId: 22, name: 'Geography' },
//   { _id: 228, classId: 22, name: 'Physics' },
//   { _id: 229, classId: 22, name: 'Chemistry' },
//   { _id: 230, classId: 22, name: 'Biology' },
//   { _id: 231, classId: 22, name: 'Computer Studies' },
//   { _id: 232, classId: 22, name: 'Others' },

//   { _id: 233, classId: 23, name: 'English' },
//   { _id: 234, classId: 23, name: 'Hindi' },
//   { _id: 235, classId: 23, name: 'Mathematics' },
//   { _id: 236, classId: 23, name: 'History & Civics' },
//   { _id: 237, classId: 23, name: 'Geography' },
//   { _id: 238, classId: 23, name: 'Physics' },
//   { _id: 239, classId: 23, name: 'Chemistry' },
//   { _id: 240, classId: 23, name: 'Biology' },
//   { _id: 241, classId: 23, name: 'Computer Studies' },
//   { _id: 242, classId: 23, name: 'Others' },

//   { _id: 243, classId: 24, name: 'English' },
//   { _id: 244, classId: 24, name: 'Hindi' },
//   { _id: 245, classId: 24, name: 'Mathematics' },
//   { _id: 246, classId: 24, name: 'History & Civics' },
//   { _id: 247, classId: 24, name: 'Geography' },
//   { _id: 248, classId: 24, name: 'Physics' },
//   { _id: 249, classId: 24, name: 'Chemistry' },
//   { _id: 250, classId: 24, name: 'Biology' },
//   { _id: 251, classId: 24, name: 'Computer Studies' },
//   { _id: 252, classId: 24, name: 'Others' },

//   { _id: 253, classId: 25, name: 'English' },
//   { _id: 254, classId: 25, name: 'Hindi' },
//   { _id: 255, classId: 25, name: 'Mathematics' },
//   { _id: 256, classId: 25, name: 'History & Civics' },
//   { _id: 257, classId: 25, name: 'Geography' },
//   { _id: 258, classId: 25, name: 'Physics' },
//   { _id: 259, classId: 25, name: 'Chemistry' },
//   { _id: 260, classId: 25, name: 'Biology' },
//   { _id: 261, classId: 25, name: 'Computer Studies' },
//   { _id: 262, classId: 25, name: 'Others' },

//   { _id: 263, classId: 26, name: 'Physics' },
//   { _id: 264, classId: 26, name: 'Chemistry' },
//   { _id: 265, classId: 26, name: 'Mathematics' },
//   { _id: 266, classId: 26, name: 'Biology' },
//   { _id: 267, classId: 26, name: 'Economics' },
//   { _id: 268, classId: 26, name: 'Literature in English' },
//   { _id: 269, classId: 26, name: 'English Language' },
//   { _id: 270, classId: 26, name: 'History and Civics' },
//   { _id: 271, classId: 26, name: 'Geography' },
//   { _id: 272, classId: 26, name: 'Hindi' },
//   { _id: 273, classId: 26, name: 'Other Subjects' },

//   { _id: 274, classId: 27, name: 'Physics' },
//   { _id: 275, classId: 27, name: 'Chemistry' },
//   { _id: 276, classId: 27, name: 'Mathematics' },
//   { _id: 277, classId: 27, name: 'Biology' },
//   { _id: 278, classId: 27, name: 'Accountancy' },
//   { _id: 279, classId: 27, name: 'Economics' },
//   { _id: 280, classId: 27, name: 'Business Studies' },
//   { _id: 281, classId: 27, name: 'Literature in English' },
//   { _id: 282, classId: 27, name: 'English Language' },
//   { _id: 283, classId: 27, name: 'Hindi' },
//   { _id: 284, classId: 27, name: 'History' },
//   { _id: 285, classId: 27, name: 'Political Science' },
//   { _id: 286, classId: 27, name: 'Geography' },
//   { _id: 287, classId: 27, name: 'Other Subjects' },

//   { _id: 288, classId: 28, name: 'Physics' },
//   { _id: 289, classId: 28, name: 'Chemistry' },
//   { _id: 290, classId: 28, name: 'Mathematics' },
//   { _id: 291, classId: 28, name: 'Biology' },
//   { _id: 292, classId: 28, name: 'Accountancy' },
//   { _id: 293, classId: 28, name: 'Economics' },
//   { _id: 294, classId: 28, name: 'Business Studies' },
//   { _id: 295, classId: 28, name: 'Literature in English' },
//   { _id: 296, classId: 28, name: 'English Language' },
//   { _id: 297, classId: 28, name: 'Hindi' },
//   { _id: 298, classId: 28, name: 'History' },
//   { _id: 299, classId: 28, name: 'Political Science' },
//   { _id: 300, classId: 28, name: 'Geography' },
//   { _id: 301, classId: 28, name: 'Other Subjects' },

//   { _id: 302, classId: 29, name: 'Others' },
// ];

// const seedDb = async () => {
//   mongoose.connect(config.mongoose.url, config.mongoose.options);

//   await Course.insertMany(courses, () => {
//     console.log('course done...');
//   });
//   await Class.insertMany(classes, () => {
//     console.log('class done...');
//   });
//   await Subject.insertMany(subjects, () => {
//     console.log('subject done...');
//   });
// };

// seedDb();

const seedCategory = async () => {
  const dataDirectory = path.join(__dirname, '../data/all.json');
  fs.readFile(dataDirectory, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(JSON.parse(data).categories[0]);
  });
  // await Category.create()
};

seedCategory();
