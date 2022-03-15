import { useState } from "react";
import {
  getListSeries,
  getListProvider,
  searchSeries,
  searchNetwork,
} from "./../constants";

const useGetSerie = () => {
  const [doneFetch, setDoneFetch] = useState();
  const [doneFetchProvider, setDoneFetchProvider] = useState();
  const [title, setTitle] = useState("Series");
  const [series, setSeries] = useState([]);
  const [provider, setProvider] = useState([]);
  const [term, setTerm] = useState();
  const [active, setActive] = useState(null);
  const [providerId, setProviderId] = useState();

  const getSeries = () => {
    fetch(getListSeries())
      .then((res) => res.json())
      .then((data) => {
        setSeries(data.results);
        setTitle(data.results.length ? "Series populares" : "Sin Resultado");
        setDoneFetch(true);
      })
      .catch((err) => console.log(err));
  };
  const getProvider = () => {
    fetch(getListProvider())
      .then((res) => res.json())
      .then((data) => {
        setProvider(
          data.results
            .filter((el) => {
              return (
                el.provider_id === 8 ||
                el.provider_id === 119 ||
                el.provider_id === 384 ||
                el.provider_id === 337
              );
            })
            .sort((a, b) => (a.provider_name < b.provider_name ? -1 : 1))
        );

        setDoneFetchProvider(true);
      })
      .catch((err) => console.log(err));
  };
  const getSearch = (terms) => {
    fetch(searchSeries(terms))
      .then((res) => res.json())
      .then((data) => {
        setSeries(data.results);
        setDoneFetch(true);
      })
      .catch((err) => console.log(err));
  };

  const validateTerm = (
    e,
    terms = document
      .querySelector("#terms")
      .value.toLowerCase()
      .trim()
  ) => {
    if (e.type === "keypress" && e.key !== "Enter") return;
    const letters = terms.match(/\w+/g);
    terms = letters && letters.join(" ");
    if (terms && terms !== term) {
      setTerm(terms);
      setDoneFetch(false);
      getSearch(terms);
      getProvider();
    }
  };
  const getSeriesNetwork = (id) => {
    setProviderId(id);
    setDoneFetch(false);
    fetch(searchNetwork(id))
      .then((res) => res.json())
      .then((data) => {
        providerId !== id ? setActive(id) : setActive(null);
        setSeries(data.results);
        setDoneFetch(true);
        setTitle(data.results.length ? "Series populares..." : "Sin Resultado");
      })
      .catch((err) => console.log(err));
  };

  return {
    doneFetch,
    title,
    series,
    doneFetchProvider,
    provider,
    validateTerm,
    getSeriesNetwork,
    getSeries,
    active,
    getProvider,
  };
};
export default useGetSerie;
