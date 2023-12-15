function CocktailCard({cocktailProps}) {
    return (

        <article>
            <h2> {cocktailProps.strDrink} </h2>
            <img src={cocktailProps.strDrinkThumb} />
        </article>
    )
}

export default CocktailCard;