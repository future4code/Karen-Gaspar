import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constant/url";

export const useRequestData = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getTrips = () => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}${endpoint}`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
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