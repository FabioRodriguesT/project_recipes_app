import switchConditionAPI from '../utils/switchConditionAPI';

const searchAPI = async (
  searchTerm: string,
  condition: string,
  type: 'drinks' | 'meals',
) => {
  let API = '';

  if (type === 'meals') {
    API = `https://www.themealdb.com/api/json/v1/1/${switchConditionAPI(condition)}=${searchTerm}`;
  } else if (type === 'drinks') {
    API = `https://www.thecocktaildb.com/api/json/v1/1/${switchConditionAPI(condition)}=${searchTerm}`;
  }

  try {
    const response = await fetch(API);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

export default searchAPI;
