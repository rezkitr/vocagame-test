import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

const ENCRYPTION_KEY = "vocaapproved";

export const setUserCookies = (data) => {
    const encryptedPayload = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        ENCRYPTION_KEY
    ).toString();
    const currentTime = new Date();
    const expiredTime = currentTime.setTime(currentTime.getTime() + 1000 * 60);
    Cookies.set("user", encryptedPayload, { expires: new Date(expiredTime) });
};

export const removeUserCookies = () => Cookies.remove("user");
