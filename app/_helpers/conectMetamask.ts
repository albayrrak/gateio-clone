import toast from "react-hot-toast";
import { useGlobalStore } from "../_store/store";

export const connectWithMetamask = async (e: any) => {
  try {
    e.preventDefault();

    if (!window.ethereum) {
      toast.error("You do not have a metamask plugin.");
    } else {
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts) {
        toast.success("You have successfully connected your metamask");
      }
    }
  } catch (error) {
    useGlobalStore.getState().setEror(true);
  }
};
