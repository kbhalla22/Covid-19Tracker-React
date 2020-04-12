import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";
/**
 * Will take a useeffect which takes a callback.
 * inside that we create an asynchronous function
 * },[setFetchedCountries. added a second parameter to show that it will only change when
 */
const CountryPicker = () => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
   
    fetchAPI();
  }, [setFetchedCountries]);
  console.log(fetchedCountries);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="global">Global</option>
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
