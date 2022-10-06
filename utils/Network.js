import axios from "axios";
import { toast } from "react-toastify";

let host = process.env.HOST
let token = process.env.TOKEN

export async function getRequest(path) {
  try {
    const response = await axios({
        method: "GET",
        url: host+path,
        headers: {'Authorization': 'Bearer '+token}
    });
    console.log('TOKENNNNN==>>>',token)
    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    toast.error(error.message, {
      theme: "colored",
    });
  }
}

export async function postRequest(path,form) {
  try {
    const response = await axios({
        method: "POST",
        url: host+path,
        headers: {'Authorization': 'Bearer '+token},
        data: form
    });
    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    toast.error(error.message, {
      theme: "colored",
    });
  }
}