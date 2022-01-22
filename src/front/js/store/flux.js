const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      backEndUrl: process.env.BACKEND_URL,
      loggedUser: {},
      recipeList: [],
      favoritesList: [],
    },
    actions: {
      /*User Login & LogOut--------------------------------------------------*/
      updateUser: (loginInfo) => {
        setStore({ loggedUser: loginInfo });
      },
      logout: () => setStore({ loggedUser: null }),
      /*Get Recipes----------------------------------------------------------*/
      getRecipes: (id) => {
        fetch(`${getStore().backEndUrl}/api/recipe/user/${id}`)
          .then((res) => res.json())
          .then((data) => setStore({ recipeList: data }))
          .catch((err) => console.error(err));
      },
      /*Update Recipe---------------------------------------------------------*/
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
      /*Add Recipe------------------------------------------------------------*/
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
      /*Delete Recipes--------------------------------------------------------*/
      deleteRecipe: (id) => {
        fetch(`${getStore().backEndUrl}/api/recipe/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => setStore({ recipeList: data }))
          .catch((err) => console.error("Error:", err));
      },
      /*Add Favorite-----------------------------------------------------------*/
      addFavorites: (id) => {
        let favsList = getStore().favoritesList;
        if (!getStore().favoritesList.find((item) => item == id)) {
          favsList.push(id);
        }
        setStore({ favoritesList: favsList });
      },
      /*Delete Favorite---------------------------------------------------------*/
      deleteFavorite: (id) => {
        let filterFavorites = getStore().favoritesList.filter(
          (favoriteToRemove, index) => id != favoriteToRemove
        );
        setStore({ favoritesList: filterFavorites });
      },
      /*Update User Profile------------------------------------------------------*/
      updateUserProfile: (updatedProfile, id) => {
        fetch(`${getStore().backEndUrl}/api/user/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedProfile),
        })
          .then((response) => response.json())
          .then((data) => setStore({ loggedUser: data }))
          .catch((err) => console.error("Error:", err));
      },
    },
  };
};

export default getState;
