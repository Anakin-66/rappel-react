import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../component/Nav";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CocktailCard from "../component/CocktailCard";

function CocktailDetailsPage() {

    const { id } = useParams();

    const [cocktails, setCocktails] = useState(null);

    useEffect(() => {

        (async () => {
            const reponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            const data = await reponse.json();
            setCocktails(data.drinks)
        })()

    }, [])



    return (
        <>
        <Header />
        <Nav />
        <main>

            {cocktails ? (
                <>
                    {cocktails.map((cocktail) => {
                        return (
                            <CocktailCard cocktailProps={cocktail} />
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

export default CocktailDetailsPage;