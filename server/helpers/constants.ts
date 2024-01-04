import { CONFIG } from "./config";
export const DEFAULT_NUMBER_OF_CARDS = 14;
const BASE_URL = "https://www.superheroapi.com/api.php";
const ACCESS_TOKEN = CONFIG.TOKEN;
export const URL = `${BASE_URL}/${ACCESS_TOKEN}`;
export const NULLSTRING = "null";
