import { createContext, useState, useContext } from "react";
import axios from "axios";

const ResultContext = createContext();
const baseUrl = "https://google-api31.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParam, setSearchParam] = useState("Google");
  const [errorMsg, setErrorMsg] = useState(null);

  const getResults = async (type) => {
    setIsLoading(true);

    const options = {
      method: "POST",
      url: `${baseUrl}${type}`,
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "google-api31.p.rapidapi.com",
      },
      data: {
        text: searchParam,
        safesearch: "off",
        timelimit: "",
        region: "wt-wt",
        max_results: 25,
      },
    };

    if (type === "/imagesearch") {
      options.data = {
        text: searchParam,
        safesearch: "off",
        region: "wt-wt",
        color: "",
        size: "",
        type_image: "",
        layout: "",
        max_results: 25,
      };
    } else if (type === "/videosearch") {
      options.data = {
        text: searchParam,
        safesearch: "off",
        timelimit: "",
        duration: "",
        resolution: "",
        region: "wt-wt",
        max_results: 25,
      };
    } else if (type === "") {
      options.data = {
        text: searchParam,
        region: "wt-wt",
        max_results: 25,
      };
    }
    const response = await axios
      .request(options)
      .then((res) => {
        const data = response.data;
        console.log(data);
        setResults(data);
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg(error.response.data.message);
      });
      setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchParam, setSearchParam, isLoading, errorMsg }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
