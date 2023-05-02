

export const chefsAndRecipies = async () =>{
  const chefsData = await fetch(`https://chef-recipe-server-santo1997.vercel.app/chefData`);
  const chefs = await chefsData.json();


  const recipiesData = await fetch("https://chef-recipe-server-santo1997.vercel.app/recipies");
  const recipies = await recipiesData.json();


  return {chefs , recipies};


}
