document.addEventListener('DOMContentLoaded', function () {
    const recipeList = document.getElementById('recipe-list');
    const addRecipeBtn = document.getElementById('add-recipe-btn');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const recipeForm = document.getElementById('recipe-form');

    addRecipeBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    recipeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('recipe-ingredients').value;

        if (name && ingredients) {
            const recipe = createRecipeCard(name, ingredients);
            recipeList.appendChild(recipe);

            modal.style.display = 'none';
            recipeForm.reset();
        }
    });

    function createRecipeCard(name, ingredients) {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe');

        const nameElement = document.createElement('h3');
        nameElement.textContent = name;

        const ingredientsElement = document.createElement('p');
        ingredientsElement.textContent = ingredients;

        recipeCard.appendChild(nameElement);
        recipeCard.appendChild(ingredientsElement);

        return recipeCard;
    }
});
