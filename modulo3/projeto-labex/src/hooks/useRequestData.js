import { useState, useEffect } from "react";
import axios from "axios";
import { ALUNO, BASE_URL } from "../constant/url";

export const useRequestData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getTrips = () => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}${ALUNO}/trips`)
      .then((res) => {
        setIsLoading(false);
        setData(res.data.trips);
      })
      .catch((err) => {
        alert(err.response);
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    getTrips()
  }, []);

  return [data, isLoading, error];
};