import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Gallery from "./Gallery";

function ListGallery() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchData(page) {
      setLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters((prev) => [...prev, ...data.results]);
      setHasMore(data.info.next !== null);
      setLoading(false);
    }

    fetchData(currentPage);
  }, [currentPage]);

  if (loading && characters.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 sm:h-96">
        <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 md:px-10 space-y-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence>
          {characters.map((character) => (
            <Gallery key={character.id} character={character} />
          ))}
        </AnimatePresence>
      </div>

      {hasMore && !loading && (
        <div className="flex justify-center pt-4 mb-5 col-span-full">
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="border cursor-pointer border-white text-white px-5 py-2 text-sm sm:text-base rounded-md hover:bg-white hover:text-black transition duration-300 font-[Poppins]"
          >
            Más Imágenes
          </button>
        </div>
      )}

      {loading && characters.length > 0 && (
        <div className="flex justify-center items-center py-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}

export default ListGallery;
