import { combineReducers } from "redux";
import CategoriesReducer from "./categoies";
import ProductsReducer from "./products";
import ChosenCategoriesReducer from "./chosenCategories";
import SetClothesReducer from "./setClothes";

const RootReducer = combineReducers({
  // Reducer Management
  CategoriesReducer,
  ProductsReducer,
  ChosenCategoriesReducer,
  SetClothesReducer,
});

export default RootReducer;
