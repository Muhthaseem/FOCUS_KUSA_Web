const fs = require('fs');
const htmlPath = 'd:\\\\M3 Projects\\\\FOCUS KUSA Website\\\\projects.html';
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

const projectReplacements = {
    'pi-challenge': {
        meta: [
            { icon: "calendar--v1", text: "Round 1: July 5 | Round 2: July 19 | Final: Aug 2, 2025" },
            { icon: "marker", text: "T/Kin/Al-Hira M.G.M.V. & Library Hall" },
            { icon: "crowd", text: "300+ Students (Grades 6-11)" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p>FOCUS KUSA proudly presented <strong>Pi Challenge 2025 — Think Smart. Solve Fast.</strong>, a dynamic mathematics Olympiad uniting participants from across the Kinniya Educational Zone in Junior, Intermediate, and Senior categories.</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>Two Competitive Rounds:</strong> Round 1 selected the Top 20, and Round 2 narrowed it down to the Top 3 winners.</li><li><strong>Preparation Sessions:</strong> Conducted Intro & Guide sessions and detailed problem-solving explanation sessions.</li><li><strong>Bilingual Accessibility:</strong> The contest featured both Tamil and English mediums.</li><li><strong>Grand Finale:</strong> Awarding Ceremony honored by Chief Guest Mrs. Z.M.M. Naleem (Zonal Director of Education).</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>This competition ignited curiosity, sharpened analytical thinking, and fostered a spirit of academic excellence. With robust turnout and expert coaching, the Pi Challenge marked a milestone in empowering student potential through mathematics.</p>"
            }
        ]
    },
    'focus-stride': {
        meta: [
            { icon: "calendar--v1", text: "24th August – 16th September 2024" },
            { icon: "marker", text: "Kinniya, Mutur & Kantale Zones" },
            { icon: "crowd", text: "A/L Science Stream Students" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p>The <strong>Focus Stride - Pilot Examination Series</strong> was a preparatory initiative designed to strengthen the readiness of A/L Science stream students ahead of their official examinations across Kinniya, Mutur, and Kantale Zones.</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>Exam Centers:</strong> Held across 4 major schools in 3 zones.</li><li><strong>Comprehensive Subjects:</strong> Covered Combined Mathematics, Biology, Physics, and Chemistry (Parts 1 & 2) over multiple weekends.</li><li><strong>Real Exam Environment:</strong> Simulated time-bound sessions to enhance time management skills.</li><li><strong>Public Access:</strong> All exam papers were made publicly accessible, and official results were released online for self-benchmarking.</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>The pilot series was a resounding success, providing hundreds of students with a unique opportunity to refine strategies, identify improvement areas, and boost confidence before the final A/L exams.</p>"
            }
        ]
    },
    'univision-2025': {
        meta: [
            { icon: "calendar--v1", text: "3rd May 2025" },
            { icon: "marker", text: "Al-Aqsa National School" },
            { icon: "crowd", text: "2024 A/L Pass Students" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p><strong>Uni Vision 25'</strong> was a 100% free student guidance program designed for students preparing for university entrance in 2025. It provided clarity and expert advice for students asking: \"Which course is the right one for me?\"</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>Step-by-Step Guidance:</strong> Covered how to apply for university and set the priority order of courses strategically.</li><li><strong>Course Analysis:</strong> Explained the pros and cons of different degrees.</li><li><strong>Stream-Wise Mentoring:</strong> Separate guidance sessions for Science, Mathematics, Commerce, Arts, and Technology.</li><li><strong>Direct Interaction:</strong> Students interacted directly with university undergraduates from prestigious institutions.</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>The inspiring sessions led by undergraduates unpacked practical insights into degree programs and career opportunities. Their voices sparked hope, clarity, and motivation, helping students step confidently into their future.</p>"
            }
        ]
    },
    'univision-2024': {
        meta: [
            { icon: "calendar--v1", text: "15th June 2024" },
            { icon: "marker", text: "Kinniya Public Library Hall" },
            { icon: "crowd", text: "A/L Pass Students" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p><strong>UniVision 2024</strong> was a special guidance event designed to support students in navigating the complex process of university selection, course prioritization, and application procedures.</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>Program-Based Approach:</strong> Emphasized structured learning pathways and aligning choices with long-term career goals.</li><li><strong>Stream-Wise Breakouts:</strong> Interactive sessions for Science, Commerce, Arts, and Technology streams.</li><li><strong>Expert Execution:</strong> All sessions were led by FOCUS KUSA volunteer undergraduates who shared practical strategies and experiences.</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>The program concluded successfully with strong participation, proving to be an invaluable step in helping students avoid unnecessary courses and make informed, strategic decisions about their academic futures.</p>"
            }
        ]
    },
    'univision-2023': {
        meta: [
            { icon: "calendar--v1", text: "17th September 2023" },
            { icon: "marker", text: "Kinniya Central College Main Hall" },
            { icon: "crowd", text: "200+ A/L Pass Students" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p>FOCUS KUSA successfully launched the very first <strong>UniVision program in 2023</strong>. This inaugural event marked the beginning of an initiative that has since become an annual tradition for university guidance.</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>A New Platform:</strong> Brought together over 200 A/L graduates for stream-wise university course guidance.</li><li><strong>Direct Engagement:</strong> Volunteers from various state universities shared real-world insights and campus experiences.</li><li><strong>Community Support:</strong> Special sponsorship from Sumra Poultry Farm contributed to the smooth execution of the event.</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>The event was filled with enthusiasm and vibrant interaction. It set a tremendously strong foundation for future UniVision events and received overwhelmingly positive feedback from the participants.</p>"
            }
        ]
    },
    'explore-al-2025': {
        meta: [
            { icon: "calendar--v1", text: "5th April 2025" },
            { icon: "marker", text: "Abdul Majeed Hall, Kinniya Central College" },
            { icon: "crowd", text: "O/L Graduates" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p><strong>Explore A/L 2025</strong> further strengthened the stream guidance initiative, drawing an even larger gathering of O/L students and evolving from an introductory program into a comprehensive guidance platform.</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>Broader Streams:</strong> Provided deeper insights into all six major A/L streams.</li><li><strong>Expert Sessions:</strong> Featured speakers from diverse academic and professional fields.</li><li><strong>Interactive Format:</strong> Included Q&A sessions, personalized guidance, and open discussions.</li><li><strong>Career Focus:</strong> Highlighted future academic and career opportunities linked to each subject combination.</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>Students left with clearer direction, stronger motivation, and practical tools to shape their A/L journey. The event empowered them to choose streams confidently and reaffirmed FOCUS KUSA's commitment to supporting academic aspirations.</p>"
            }
        ]
    },
    'explore-al-2024': {
        meta: [
            { icon: "calendar--v1", text: "19th May 2024" },
            { icon: "marker", text: "Kinniya Central College Hall" },
            { icon: "crowd", text: "O/L Graduates" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p><strong>Explore A/L 2024</strong> was an essential educational initiative guiding students transitioning from O/L to A/L studies, expanding to cover a highly structured framework of ten essential topics.</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>Ten-Topic Framework:</strong> Explored interests, research options, sought guidance, developed study habits, and focused on extracurriculars, exam prep, networking, and persistence.</li><li><strong>Stream Deep-Dive:</strong> Introduced Biological/Physical Science, Arts, Commerce, Engineering, and Bio System Technology.</li><li><strong>University Mentors:</strong> KUSA volunteers delivered experience-based mentoring.</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>With enthusiastic participation from across the Kinniya Zone, the program successfully equipped students with decision-making tools to confidently select paths suited to their skills and future university admission requirements.</p>"
            }
        ]
    },
    'explore-al-2023': {
        meta: [
            { icon: "calendar--v1", text: "18th June 2023" },
            { icon: "marker", text: "Kinniya Central College Hall" },
            { icon: "crowd", text: "200 O/L Graduates" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p>The foundational <strong>Explore A/L 2023</strong> program welcomed nearly 200 O/L graduates to help them understand different subject streams and prepare for the academic journey ahead.</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>Motivational Focus:</strong> Centered on inspiring students to explore their personal interests and match them with appropriate A/L streams.</li><li><strong>Early Interventions:</strong> Provided critical insights into how O/L subject choices lay the groundwork for long-term career success.</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>The event was a resounding success, filled with energy and enthusiasm. It provided the necessary spark for students to step into their Advanced Level studies with purpose and confidence.</p>"
            }
        ]
    },
    'uni-registration': {
        meta: [
            { icon: "calendar--v1", text: "11th May 2025" },
            { icon: "marker", text: "ITDLH Kinniya, T/Kin Al-Haj Ehuthar Vidyalaya" },
            { icon: "crowd", text: "New Undergraduates (2024/2025)" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p>In collaboration with ITDLH Kinniya, the <strong>University Registration Program</strong> assisted students selected for state universities to complete their UGC online registration entirely free of charge.</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>Systematic Process:</strong> Students reserved slots online via token numbers to ensure a smooth, organized flow.</li><li><strong>Logistical Support:</strong> High-speed internet and technical assistance were provided by ITDLH facilities.</li><li><strong>Volunteer Crew:</strong> The FOCUS KUSA Registration Crew managed the entire student-friendly process.</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>By removing technical and financial barriers, this initiative ensured that new undergraduates from Kinniya could securely and confidently secure their places in state universities, continuing the tradition of empowering education.</p>"
            }
        ]
    },
    'ilm-jaaiz': {
        meta: [
            { icon: "calendar--v1", text: "Throughout Ramadan 2025" },
            { icon: "marker", text: "Online (Social Media & WhatsApp)" },
            { icon: "crowd", text: "Island-wide Participants" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p><strong>Ilm Jaa’iz 2025</strong> was a Ramadan special quiz competition designed to inspire learning, test Islamic and general knowledge, and foster healthy competition among participants across Sri Lanka.</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>Multi-Round Format:</strong> Round 1 featured daily MCQs; Round 2 tested with one-word answers; Round 3 served as the grand finale.</li><li><strong>Broad Reach:</strong> Open to all age groups, bringing together participants from Kinniya, Puttalam, Matale, and beyond.</li><li><strong>Prize Pool:</strong> Daily cash prizes awarded, culminating in a LKR 3,000 award for the Grand Champion, Riskhan Mohamed.</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>The competition successfully blended learning with fun, fostering a sense of unity and intellectual growth during the blessed month, and witnessing an engaging display of quick thinking from a large online audience.</p>"
            }
        ]
    },
    'freshers-welcome': {
        meta: [
            { icon: "calendar--v1", text: "22nd February 2025" },
            { icon: "marker", text: "Zonal Office Hall, Kinniya" },
            { icon: "crowd", text: "2023 A/L Batch Undergraduates" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p>The <strong>Annual Freshers Welcome 2025</strong> was a celebratory event hosted to honor and officially induct the newest members of the FOCUS family from the 2023 A/L batch heading to state universities.</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>Official Induction:</strong> 38 male students across all academic streams were officially listed, recognized, and warmly welcomed into FOCUS KUSA.</li><li><strong>Community Bonding:</strong> Created vital opportunities for new members to bond, share aspirations, and connect with senior alumni.</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>The celebration not only marked the beginning of their university journeys with joy and inspiration but also reaffirmed FOCUS KUSA's mission to guide, empower, and uplift students at every stage of their academic path.</p>"
            }
        ]
    },
    'arduino': {
        meta: [
            { icon: "calendar--v1", text: "17th January 2024" },
            { icon: "marker", text: "Kinniya Zonal Office Hall" },
            { icon: "crowd", text: "Grades 9–13 Students" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p>In collaboration with the Rotaract Club of the University of Moratuwa, the <strong>Arduino Robotic Seminar 2024</strong> was an inspiring hands-on program empowering school students with practical knowledge in embedded systems.</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>Hands-On Training:</strong> Students engaged directly with Arduino hardware, microcontrollers, and sensors.</li><li><strong>Live Demonstrations:</strong> Showcased real robotic systems and automation projects.</li><li><strong>Expert Facilitation:</strong> Complex concepts were simplified by experienced engineering undergraduates.</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>The seminar successfully bridged the gap between theory and real-world technology. It sparked creativity, problem-solving, and excitement, giving youth early exposure to potential careers in robotics and engineering.</p>"
            }
        ]
    },
    'science-seminar': {
        meta: [
            { icon: "calendar--v1", text: "23rd December 2023" },
            { icon: "marker", text: "KCC Multimedia Hall, Kinniya" },
            { icon: "crowd", text: "GCE A/L Science Students" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p>The first phase of the <strong>A/L Science Stream Support Seminar Series</strong> was a free, focused guidance session dedicated to preparing GCE A/L students for the Physics examination.</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>Paper Discussions:</strong> Comprehensive review and breakdown of Physics support seminar papers.</li><li><strong>Doubt Clearance:</strong> Targeted sessions to solve difficult problems and strengthen exam strategies.</li><li><strong>Guest Speakers:</strong> Mentoring from pre-medical and pre-engineering student speakers from leading state universities.</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>The seminar created an enriching learning environment, helping students unlock complex Physics concepts and providing a crucial boost in confidence in the final stretch before the national exams.</p>"
            }
        ]
    },
    'ol-math-seminar': {
        meta: [
            { icon: "calendar--v1", text: "30th December 2023" },
            { icon: "marker", text: "Abdul Majeed Hall, Kinniya Central College" },
            { icon: "crowd", text: "GCE O/L Students" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p>A collaborative effort between University of Moratuwa Majlis Ul Islam, FOCUS KUSA, and the KCC Old Boys' Association, this free full-day <strong>O/L Mathematics Seminar</strong> targeted improving exam readiness.</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>Full-Day Coverage:</strong> Intensive sessions focusing on key areas, conceptual understanding, and problem-solving skills for O/L Maths.</li><li><strong>Community Collaboration:</strong> KCC OBA generously provided refreshments, hall arrangements, and sound setups.</li><li><strong>Dedicated Mentoring:</strong> Academic volunteers provided high-quality guidance at no cost.</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>By offering accessible, top-tier instruction, the event strengthened students' foundational skills and confidence for national examinations, highlighting the power of unified community support in academic achievement.</p>"
            }
        ]
    },
    'brilliant-brushes': {
        meta: [
            { icon: "calendar--v1", text: "7th January 2023" },
            { icon: "marker", text: "AMV & Zonal Office Kinniya" },
            { icon: "crowd", text: "70 School Students" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p>Hosted at T/Kin/Abdul Majeed Vidyalayam, <strong>Brilliant Brushes</strong> was a vibrant art competition organized by FOCUS-KUSA to celebrate inspiration, talent, and artistic expression among youth.</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>Professional Evaluation:</strong> All 70 paintings were carefully assessed by a panel of professional artists.</li><li><strong>Valuable Prizes:</strong> Cash rewards for top winners (1st: Rs. 10,000, 2nd: Rs. 5,000, 3rd: Rs. 3,000) alongside participation certificates for all.</li><li><strong>Grand Ceremony:</strong> A formal prize-giving event held at the Kinniya Zonal Office to honor achievements publicly.</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>The competition successfully provided a dedicated platform for young artists to showcase their creativity, encouraging an enduring interest in painting and the fine arts within the school community.</p>"
            }
        ]
    },
    'math-classes': {
        meta: [
            { icon: "calendar--v1", text: "October 2022 – January 2023" },
            { icon: "marker", text: "Kurinchakerny Arafa M.V. & Periya Kinniya Boys’ School" },
            { icon: "crowd", text: "70 Grade 11 Students" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p>The <strong>Mathematics Class Series</strong> was a sustained weekly initiative aimed at enhancing the mathematical knowledge and problem-solving skills of Grade 11 students leading up to their O/L exams.</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>Continuous Support:</strong> Ran over four months using model papers and past papers.</li><li><strong>Interactive Approach:</strong> Student-teacher collaborative discussions with on-the-spot paper corrections immediately after mock exams.</li><li><strong>School Backing:</strong> All paper materials and budgets were generously provided by the respective school administrations.</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>Through engaging presentations and constant practice, the program nurtured a deeper understanding of mathematics, transforming anxiety into confidence and significantly improving the mock exam scores of the participants.</p>"
            }
        ]
    },
    'zero-w': {
        meta: [
            { icon: "calendar--v1", text: "Launched 14th August 2023" },
            { icon: "marker", text: "Millipithana, Dharus Salam & Siraj M.V." },
            { icon: "crowd", text: "O/L Mathematics Students" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p>The <strong>Zero W Project</strong> is an ambitious, ongoing mission initiated by FOCUS KUSA Primary and zonal teachers aiming to reduce the number of 'W' (Failure) grades in G.C.E. O/L Mathematics strictly to zero.</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>Rural Focus:</strong> Successfully launched across three village schools to transform them into vibrant math learning centers.</li><li><strong>Innovative Teaching:</strong> Introduced focused guidance techniques and dynamic teaching methodologies.</li><li><strong>Teacher-Student Synergy:</strong> Created structured, long-lasting opportunities for direct collaboration and mentoring.</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>This long-term movement has empowered rural students with newfound confidence. It is actively eradicating the stigma of failure in mathematics, fostering a culture of excellence, and elevating the educational standards across Kinniya.</p>"
            }
        ]
    },
    'path-finder': {
        meta: [
            { icon: "calendar--v1", text: "4th September 2022" },
            { icon: "marker", text: "Abdul Majeed Hall, Kinniya Central College" },
            { icon: "crowd", text: "68 A/L Students" }
        ],
        sections: [
            {
                heading: "Overview",
                content: "<p><strong>Path Finder 2022</strong> was a foundational career guidance program that provided crucial direction for the 2021 A/L batch as they prepared to step into higher education and professional journeys.</p>"
            },
            {
                heading: "Highlights",
                content: "<ul><li><strong>Expert Advice:</strong> Chief Guest Mr. S.H. Mahroos (Deputy Registrar, Trincomalee Campus) delivered an inspiring keynote on academic growth.</li><li><strong>Practical Insights:</strong> Resource Person Brother Manasir shared real-life undergraduate experiences.</li><li><strong>Alumni Mentoring:</strong> Volunteers played key roles in organizing breakout guidance and sharing firsthand knowledge.</li></ul>"
            },
            {
                heading: "Impact",
                content: "<p>The interactive discussions equipped the participating students with a clear understanding of university options and professional aspirations, empowering them to map out and pursue their future pathways with confidence.</p>"
            }
        ]
    }
};

let scriptUpdatedCount = 0;

for (const [id, content] of Object.entries(projectReplacements)) {
    // Find the exact location of the project key in the file
    let searchKey1 = `"${id}": {`;
    let searchKey2 = `'${id}': {`;
    let searchKey3 = `${id}: {`;

    let startIndex = htmlContent.indexOf(searchKey1);
    if (startIndex === -1) startIndex = htmlContent.indexOf(searchKey2);
    if (startIndex === -1) startIndex = htmlContent.indexOf(searchKey3);

    if (startIndex !== -1) {
        // Find meta section within this block
        let blockStr = htmlContent.substring(startIndex);
        let metaStart = blockStr.indexOf('meta: [');
        let linksStart = blockStr.indexOf('links: [');
        let imagesStart = blockStr.indexOf('images: [');

        // Sections array ends exactly before either links: or images:
        let endIdx = -1;
        if (linksStart !== -1 && (imagesStart === -1 || linksStart < imagesStart)) {
            endIdx = linksStart;
        } else if (imagesStart !== -1) {
            endIdx = imagesStart;
        }

        if (metaStart !== -1 && endIdx !== -1) {
            // Replace everything from metaStart to endIdx with our new string
            let oldContentToReplace = blockStr.substring(metaStart, endIdx);

            const metaStr = 'meta: ' + JSON.stringify(content.meta, null, 10).replace(/"([^"]+)"\s*:/g, '$1:');
            const sectionsStr = 'sections: ' + JSON.stringify(content.sections, null, 10).replace(/"([^"]+)"\s*:/g, '$1:');

            // Format to match indentation of surrounding code
            let newReplacement = `${metaStr},\n        ${sectionsStr},\n        `;

            htmlContent = htmlContent.replace(oldContentToReplace, newReplacement);
            scriptUpdatedCount++;
        }
    } else {
        console.log(`Failed to locate target project ID: ${id}`);
    }
}

fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log(`Successfully updated ${scriptUpdatedCount} projects in projects.html`);
