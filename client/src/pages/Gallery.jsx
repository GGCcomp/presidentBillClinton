
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import galleryData from "../components/galleryData";
import heroMobile from "/assests/heroDesktop3.png";

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: {
    scale: 1.04,
    boxShadow: "0 8px 32px rgba(40,90,160,0.15)",
    y: -8,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(18,22,34,0.90),rgba(20,28,36,0.96)), url(${heroMobile})`,
        fontFamily: "'EB Garamond', ui-serif, Georgia, serif",
      }}
    >
      {/* POPUP OVERLAY */}
       {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-[95vw] h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="preview"
              className="max-w-full max-h-full w-auto h-auto rounded-lg shadow-2xl object-contain"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-white hover:bg-gray-100 text-gray-800 font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Close"
            >
              ×
            </button>
          </motion.div>
        </div>
      )}

      <div className="bg-[#091D32]/20 pt-[120px] rounded-xl shadow-2xl">
        <main className="w-full max-w-7xl mx-auto py-14 text-white font-serif">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="text-3xl md:text-4xl text-center mb-12 font-bold tracking-widest"
          >
            Gallery
          </motion.h1>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {galleryData.map(({ id, title, caption, image, link }) => (
              <motion.div
                key={id}
                className="relative rounded-2xl overflow-hidden bg-[#13213a]/80 border border-[#436baa]/20 shadow-xl flex flex-col group transition duration-200 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-900">
                  <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    draggable="false"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold mb-1 leading-tight group-hover:text-[#bcd6fa] transition">{title}</h2>
                  <p className="text-gray-300 flex-1 mb-4 text-sm leading-relaxed">{caption}</p>
                  {link && (
                    <a
                      href={link}
                      className="self-start inline-block py-1 px-2 mt-auto text-[15px] text-blue-200 hover:text-white border border-blue-200 hover:bg-blue-300/20 rounded transition underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>
    </section>
  );
}
