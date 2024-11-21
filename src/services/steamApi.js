import axios from 'axios';
const STORE_URL = 'https://store.steampowered.com/api';

const BASE_URL = '/store-api/api';

export const getAppDetails = async (appId) => {
  try {
    const response = await axios.get(`${BASE_URL}/appdetails?appids=${appId}`);
    return response.data[appId].data;
  } catch (error) {
    console.error(`Error fetching details for appId ${appId}:`, error);
    throw error;
  }
};
export const getAppList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/ISteamApps/GetAppList/v2/`);
    return response.data.applist.apps;
  } catch (error) {
    console.error('Error 404 app list:', error);
    throw error;
  }
};
// Lista simulada de juegos destacados
export const getFeaturedGames = async () => {
  const featuredGameIds = [107410, 570, 440, 730, 578080]; // IDs de juegos populares
  const promises = featuredGameIds.map((id) => getAppDetails(id));
  return Promise.all(promises);
};
