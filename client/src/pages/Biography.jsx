import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Entry from "../components/BioGraphyEntery";


const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Biography = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);

  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-stretch justify-start relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(20,28,36,0.3), rgba(20,28,36,0.6)), url('/assests/biography-bg.jpg')`,
        fontFamily: "'EB Garamond', ui-serif, Georgia, serif",
      }}
    >
      <div className="flex items-start w-full">
        <motion.div
          className="relative text-white px-6 pt-32 md:px-[90px] md:pb-[80px] max-w-7xl w-full"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <div className="border-s border-white">
            {/* Title */}
            <div className="py-4 ps-6 text-4xl font-semibold">
              <p>Shri Alok Anand Tripathi</p>
            </div>

            {/* First Entry → 4 Images */}
            <Entry
              year="Mid 80’s — Birth & Family"
              text={`Born on April 11 during the Mahakumbh in the family of Zamindar Pt Shivbalak
Tripathi, father of Pt Raghubar Dayal Tripathi & Pt Vishweshwar Dayal Tripathi, who were also
official mahants of Shri Kashi Vishwanath Temple Varanasi from the year 1900, owning lands
across Varanasi measuring over 100 acres. Great Grandson of Pt Bhavani Shankar Tripathi,
who was business partner and Chief of Bhuvalika group Calcutta owning 9 major coal mines in
surrounding areas of Calcutta. Grandson of Pt RamaShankar Tripathi (Sahitya Ratna - BHU).
Son of Anandkumar Tripathi (IIT, MBA). `}
              // images={[
              //   "https://picsum.photos/200/300?1",
              //   "https://picsum.photos/200/300?2",
              //   "https://picsum.photos/200/300?3",
              //   "https://picsum.photos/200/300?4",
              // ]}
            />

            {/* Other Entries → Default (2 images) */}
            <Entry
              year="2000 — Music Achievement"
              text="Achieved Sangeet & Tabla Visharad."
            />

            <Entry
              year="2011 — Education"
              text="Completed B.Tech in Industrial Engineering."
            />

            <Entry
              year="2013 — Vedic Studies"
              text="Received Official Guru Diksha from Shri Ramendra Pandey (Founder-Sthapatyam). Same year started Vedic studies and Veda path in Ghanna."
            />

            <Entry
              year="2013 — Astrology"
              text="Began Astrological consulting and demonstrated the ability to prepare accurate horoscope of any individual just by looking at their face."
            />

            <Entry
              year="2013 — Daiv-Prashna"
              text="Joined Daiv-Prashna and started free astrology consultancy to everyone in India and abroad. Began providing astrology consultancy to top personalities in India (ongoing)."
            />

            <Entry
              year="2015 — Higher Studies"
              text="Completed MBA from London."
            />

            <Entry
              year="~2016 — Professional Journey"
              text={`Founded Invent-Tree (Political consultancy firm).
Joined True Elements (Marico then Sanjiv Goenka Group) as HOD - Sales & Marketing.`}
            />

            <Entry
              year="2017 — Guru Diksha"
              text="Received Guru Diksha under Shri Neelkanth Shastry and started professional astrology consultancy."
            />

            <Entry
              year="2019 — Leadership & Entrepreneurship"
              text={`Upon passing away of his Guru, appointed Custodian of Daiv-Prashna. Co-founded Golden Ghaf Clothing Company on April 15. Married Shriya Raghuvanshi in Dec’19`}
            />

            <Entry
              year="~2025 onwards — Social Service"
              text="Formation of Anandvan Trust and appointment as president of the trust."
            />

            <Entry
              year="24th October 2025"
              text="Meeting with Minister O. P. Rajbhar at his residence – 20 Gautam Palli, Lucknow."
              images={[
               "/assests/alokji_with_cm.jpeg",
               "/assests/alokji_with_cm.jpeg"
              ]}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Biography;
