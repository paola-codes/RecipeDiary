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
      /*User Login Fetches and Actions*/
      updateUser: (loginInfo) => {
        setStore({ loggedUser: loginInfo });
      },
      logout: () => setStore({ loggedUser: null }),
      /*Recipe Fetches and Actions (Add, Delete, Update, Filter)*/
      getRecipes: (id) => {
        fetch(`${getStore().backEndUrl}/api/recipe/user/${id}`)
          .then((res) => res.json())
          .then((data) => setStore({ recipeList: data }))
          .catch((err) => console.error(err));
      },
      updateRecipe: (updatedRecipe, id) => {
        fetch(`${getStore().backEndUrl}/api/recipe/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedRecipe),
        })
          .then((response) => response.json())
          .then((data) => setStore({ recipeList: data }))
          .catch((err) => console.error("Error:", err));
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
      /*Favorite Recipes Fetches and Actions*/
      addFavorites: (id) => {
        let favsList = getStore().favoritesList;
        if (!getStore().favoritesList.find((item) => item == id)) {
          favsList.push(id);
        }
        setStore({ favoritesList: favsList });
      },
      deleteFavorite: (id) => {
        let filterFavorites = getStore().favoritesList.filter(
          (favoriteToRemove, index) => id != favoriteToRemove
        );
        setStore({ favoritesList: filterFavorites });
      },
    },
  };
};

export default getState;
