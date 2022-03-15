const list_series = "https://api.themoviedb.org/3/tv/";
const providers = "https://api.themoviedb.org/3/watch/providers/tv";
const api_key = "4aa8e677f96955810316cf47526a309a";
const search_result = "https://api.themoviedb.org/3/search/tv";
const search_network = "https://api.themoviedb.org/3/discover/tv";
const language= "es-MX";
export const getListProvider = () => `${providers}?api_key=${api_key}&language=${language}`;
export const getListSeries = () => `${list_series}popular?api_key=${api_key}&language=${language}&page=1`;
export const searchSeries = (query) => `${search_result}?api_key=${api_key}&language=${language}&query=${query}&include_adult=false`;
export const searchNetwork = (query) => `${search_network}?api_key=${api_key}&language=${language}&sort_by=popularity.desc&with_networks=${query}`;
export const getSerieDetails = (query) => `${list_series}${query}?api_key=${api_key}&language=${language}`
export const getDescription = (query) => `${list_series}${query}/translations?api_key=${api_key}`