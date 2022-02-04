const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      backEndUrl: process.env.BACKEND_URL,
      loggedUser: {},
      recipeList: [],
      allRecipes: [],
      favorites: [],
    },
    actions: {
      /*Get All Recipes---------------------------------------------------------*/
      getAllRecipes: () => {
        fetch(`${getStore().backEndUrl}/api/recipe`)
          .then((res) => res.json())
          .then((data) => setStore({ allRecipes: data }))
          .catch((err) => console.error(err));
      },
      /*Get User Recipes-------------------------------------------------------*/
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
      /*Yes Favorite-----------------------------------------------------------*/
      yesFavorite: (yesFavoriteStatus, id) => {
        fetch(`${getStore().backEndUrl}/api/recipe/yesFavorite/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(yesFavoriteStatus),
        })
          .then((response) => response.json())
          .catch((err) => console.error("Error:", err));
      },
      /*No Favorite---------------------------------------------------------*/
      noFavorite: (noFavoriteStatus, id) => {
        fetch(`${getStore().backEndUrl}/api/recipe/noFavorite/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(noFavoriteStatus),
        })
          .then((response) => response.json())
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
      /*User Login & LogOut--------------------------------------------------*/
      updateUser: (loginInfo) => {
        setStore({ loggedUser: loginInfo });
      },
      logOut: () => {
        setStore({ loggedUser: {} });
        setStore({ listOfVehicles: [] });
        setStore({ acceptedRequests: [] });
      },
    },
  };
};

export default getState;
