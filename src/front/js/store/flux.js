const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      backEndUrl: process.env.BACKEND_URL,
      loggedUser: {},
      recipeList: [],
      favoritesList: [],
      filteredRecipes: [],
    },
    actions: {
      updateUser: (loginInfo) => {
        setStore({ loggedUser: loginInfo });
      },
      logout: () => setStore({ loggedUser: null }),
      getRecipes: () => {
        fetch(`${getStore().backEndUrl}/api/recipe/user/1`)
          .then((res) => res.json())
          .then((data) => setStore({ recipeList: data }))
          .catch((err) => console.error(err));
      },
      addRecipe: (newRecipe) => {
        fetch(`${getStore().backEndUrl}/api/recipe`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newRecipe),
        })
          .then((response) => response.json())
          .then((data) => setStore({ recipeList: data }))
          .catch((err) => console.error("Error:", err));
      },
      updateRecipe: (updatedRecipe) => {
        fetch(`${getStore().backEndUrl}/api/recipe/1`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedRecipe),
        })
          .then((response) => response.json())
          .then((data) => setStore({ recipeList: data }))
          .catch((err) => console.error("Error:", err));
      },
      deleteRecipe: (id) => {
        fetch(`${getStore().backEndUrl}/api/recipe/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => setStore({ recipeList: data }))
          .catch((err) => console.error("Error:", err));
      },
      filterByTitle: (title) => {
        let filterTitle = getStore().recipeList;
        filterRecipes = filterTitle.filter((item) => title !== item);
        setStore({ filteredRecipes: filterRecipes });
      },
      addFavorites: (name) => {
        let favsList = getStore().favoritesList;
        if (!getStore().favoritesList.find((item) => item == name)) {
          favsList.push(name);
        }
        setStore({ favoritesList: favsList });
      },
      deleteFavorite: (name) => {
        let filterFavorites = getStore().favoritesList.filter(
          (favoriteToRemove, index) => name != favoriteToRemove
        );
        setStore({ favoritesList: filterFavorites });
      },
    },
  };
};

export default getState;
