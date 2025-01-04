import { create } from "zustand";
import axios from "axios";

const api = "http://wajik-anime-api.vercel.app/samehadaku";

const useStore = create((set) => ({
  anime: [],
  recentAnime: [],
  batchAnime: [],
  movieAnime: [],

  fetchHome: async () => {
    try {
      const response = await axios.get(`${api}/home`);
      const recent = response.data.data.recent.episodeList;
      const batch = response.data.data.batch.batchList;
      const movie = response.data.data.movie.animeList;
      set({ recentAnime: recent, batchAnime: batch, movieAnime: movie });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  },

  fetchbyEpisodeId: async (id) => {
    try {
      const response = await axios.get(`${api}/episode/${id}`);
      const recent = response.data.data.recent.episodeList;

      set({ recentAnime: recent, batchAnime: batch, movieAnime: movie });
      // set({ recentAnime: recent });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  },
}));

export default useStore;
