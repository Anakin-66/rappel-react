import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Nav from "../component/Nav";

function CocktailPage() {

    const [cocktails, setCocktails] = useState(null);

    useEffect(() => {

        (async () => {
            const reponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
            const data = await reponse.json();
            setCocktails(data.drinks)
        })()

    }, [])



    return (
        <>
        <Header />
        <Nav />
        <main>
            {/* Est-ce que cocktail contient quelque chose ? */}
            {cocktails ? (
                <>
                    {/* Je fais un array map pour récupérer les cocktails grâce à la variable cocktails de useState */}
                    {cocktails.map((cocktail) => {
                        return (
                            <article>
                                <h2> {cocktail.strDrink} </h2>
                                <Link to={`/cocktails/details/${cocktail.idDrink}`}>
                                    <p>Voir les détails des cocktails</p>
                                </Link>
                            </article>
                        )

                    })}
                </>

            ) : (

                <p>Cocktails en cours de chargement</p>

            )}
        </main>
        <Footer />
        </>

    )
}
export default CocktailPage;