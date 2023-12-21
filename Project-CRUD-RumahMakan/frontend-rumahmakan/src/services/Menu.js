import axios from "axios";
import { config } from "../config/config";

export const MenuService = {
  getAllMenu: () => {
    const result = axios
      .get(config.apiUrl + `api/menuproduct`)
      .then((response) => {
        return {
          success: response.data.success,
          data: response.data.data,
        };
      })
      .catch((error) => {
        return {
          success: false,
          data: error,
        };
      });
    return result;
  },
};
