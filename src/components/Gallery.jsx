import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Gallery({ character }) {
  const [showPopover, setShowPopover] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  if (!character) return null;

  return (
    <>
      <motion.div
        ref={ref}
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
      >
        <div
          className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg cursor-pointer"
          onClick={() => setShowPopover(true)}
        >
          <div className="relative flex items-center justify-center">
            <span className="bg-gray-800 rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center absolute top-2 right-2">
              {character.status === "Alive" ? (
                <span className="bg-green-500 rounded-full w-2 h-2 mr-2"></span>
              ) : (
                <span className="bg-red-500 rounded-full w-2 h-2 mr-2"></span>
              )}
              {character.status}
            </span>
            <img
              src={character.image}
              alt={character.name}
              className="rounded-t-lg"
            />
          </div>
          <div className="relative px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{character.species}</span>
            <div className="flex justify-between">
              <h1 className="block font-semibold text-lg">{character.name}</h1>
            </div>
          </div>
        </div>
      </motion.div>

      {showPopover && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowPopover(false)}
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
              onClick={() => setShowPopover(false)}
              aria-label="Cerrar"
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <img
                src={character.image}
                alt={character.name}
                className="w-32 h-32 rounded-full mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{character.name}</h2>
              <p className="mb-1"><span className="font-semibold">Status:</span> {character.status}</p>
              <p className="mb-1"><span className="font-semibold">Species:</span> {character.species}</p>
              <p className="mb-1"><span className="font-semibold">Type:</span> {character.type || "N/A"}</p>
              <p className="mb-1"><span className="font-semibold">Gender:</span> {character.gender}</p>
              <p className="mb-1"><span className="font-semibold">Origin:</span> {character.origin?.name}</p>
              <p className="mb-1"><span className="font-semibold">Location:</span> {character.location?.name}</p>
              <a
                href={character.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-blue-600 underline"
              >
                Ver en API
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Gallery;