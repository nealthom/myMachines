import axios from "axios";

export const getData = async () => {
  try {
    const res = await axios.get(
      "https://arcane-oasis-30423.herokuapp.com/machines"
    );
    return res;
  } catch (error) {
    return { error: "unable to get Data" };
  }
};
