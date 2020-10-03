import axios from "axios";

export const getData = async () => {
  try {
    const res = await axios.get(process.env.REACT_APP_URL);
    return res.data;
  } catch (error) {
    return { error: "unable to get Data" };
  }
};
