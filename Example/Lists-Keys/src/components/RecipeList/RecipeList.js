// Component : RecipeList.js
import React from "react";
import "./RecipeList.css";

const RecipeList = () => {
	const recipes = [
		{
			id: 1,
			name: "Spaghetti Carbonara",
			ingredients: [
				"Spaghetti",
				"Bacon",
				"Eggs",
				"Parmesan cheese",
				"Black pepper",
			],
		},
		{
			id: 2,
			name: "Chicken Alfredo",
			ingredients: [
				"Fettuccine pasta",
				"Chicken breast",
				"Heavy cream",
				"Parmesan cheese",
				"Garlic",
			],
		},
		{
			id: 3,
			name: "Margherita Pizza",
			ingredients: [
				"Pizza dough",
				"Tomato sauce",
				"Mozzarella cheese",
				"Fresh basil",
			],
		},
		{
			id: 4,
			name: "Caesar Salad",
			ingredients: [
				"Romaine lettuce",
				"Croutons",
				"Parmesan cheese",
				"Caesar dressing",
			],
		},
	];
	return (
		<div>
			<h2>Recipe List with Keys</h2>
			<ul className="recipe-list">
				{/* Hiển thị công thức */}
				{recipes.map((recipe) => (
					<li key={recipe.id}>
						<h3>{recipe.name}</h3>
						{/* Hiển thị thành phần nấu ăn */}
						<ul>
							{recipe.ingredients.map((ingredient, index) => (
								<li key={index}>{ingredient}</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};

export default RecipeList;
