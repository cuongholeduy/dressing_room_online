let initialState = "topclothes";

const ChosenCategories = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHOOSE_CATEGORIES": {
      return payload;
    }
    default:
      return state;
  }
};

export default ChosenCategories;
