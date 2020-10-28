let initialState = {
  topclothes: "",
  botclothes: "",
  shoes: "",
  handbags: "",
  necklaces: "",
  hairstyle: "",
  background: "images/background/background_998.jpg",
};

const SetClothesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CLOTHES": {
      return { ...state, [payload.type]: payload.img };
    }
    default:
      return state;
  }
};

export default SetClothesReducer;
