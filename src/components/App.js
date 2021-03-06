import React, {useEffect, useState} from 'react';
import NavbarIndex from "./NavbarIndex";
import useLoader from "./Hooks/useLoader";
import GetPokemon from "./GetPokemon";
import FavoritePokemon from "./FavoritePokemon";
import SearchPokemon from "./SearchPokemon";
import About from "./About";
import FooterIndex from "./FooterIndex";
import "./Style/App.css"
import "./Style/NavbarIndex.css"
import "./Style/PokemonModal.css"

const App = () => {

    //Declared React Hooks used in this Component
    const [Gen1Pokemon, setGen1Pokemon] = useState([]);
    const [Gen2Pokemon, setGen2Pokemon] = useState([]);
    const [Gen3Pokemon, setGen3Pokemon] = useState([]);
    const [Gen4Pokemon, setGen4Pokemon] = useState([]);
    const [Gen5Pokemon, setGen5Pokemon] = useState([]);
    const [Gen6Pokemon, setGen6Pokemon] = useState([]);
    const [Gen7Pokemon, setGen7Pokemon] = useState([]);
    const [Gen8Pokemon, setGen8Pokemon] = useState([]);
    const [loader, showLoader, hideLoader] = useLoader();
    const [showGetPokemon, setShowGetPokemon] = useState(true);
    const [showFavoritePokemon, setShowFavoritePokemon] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [aboutPage, setAboutPage] = useState(false);

    const getListByGen = async url => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    resolve(data)
                })
        });
    }

    const getData = async () => {
        const pokeUrls = [
            "https://pokeapi.co/api/v2/pokemon?limit=151",
            "https://pokeapi.co/api/v2/pokemon?offset=151&limit=100",
            "https://pokeapi.co/api/v2/pokemon?offset=251&limit=135",
            "https://pokeapi.co/api/v2/pokemon?offset=386&limit=108",
            "https://pokeapi.co/api/v2/pokemon?offset=495&limit=154",
            "https://pokeapi.co/api/v2/pokemon?offset=649&limit=72",
            "https://pokeapi.co/api/v2/pokemon?offset=721&limit=88",
            "https://pokeapi.co/api/v2/pokemon?offset=809&limit=89",
        ];
        showLoader()
        for (let url of pokeUrls) {
            let response = await getListByGen(url)
            await renderPokemon(response.results);
        }
        hideLoader()
    }

    useEffect(() => {
        getData()
    }, []);

    const getEachPokemon = url => {
        return new Promise((resolve, reject) => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        resolve(data);
                    })
                    .catch(err => {
                        console.log(err);
                    })
        });
    }

    let counter = 0;
    const renderPokemon = async data => {
        let pokeList = await Promise.all(data.map(async pokemon => {
            let getPokemon = await getEachPokemon(pokemon.url)
            return getPokemon;
        }))
        counter++;
        let listOfPokemon = {
                allPokemon: []
            }
        ;
        switch (counter) {
            case 1 :
                setGen1Pokemon(pokeList);
                listOfPokemon.allPokemon.push(pokeList);
                break;
            case 2 :
                setGen2Pokemon(pokeList);
                break;
            case 3 :
                setGen3Pokemon(pokeList);
                break;
            case 4 :
                setGen4Pokemon(pokeList);
                break;
            case 5 :
                setGen5Pokemon(pokeList);
                break;
            case 6 :
                setGen6Pokemon(pokeList);
                break;
            case 7 :
                setGen7Pokemon(pokeList);
                break;
            case 8 :
                setGen8Pokemon(pokeList);
                break;
            default :
                break;
        }
    }

    const toggleAboutPage = (aboutPage) => {
        setAboutPage(aboutPage)
        setShowGetPokemon(true);
    }

    const inputValue = (searchValue) => {
        setSearchValue(searchValue);
    }

    const toggleFavorites = (showFavoritePokemon) => {
        setShowFavoritePokemon(showFavoritePokemon);
    }

    const getOrFavoriteOrSearchPokeBlock = () => {
        if (showFavoritePokemon === false && searchValue === "" && showGetPokemon === true) {
            return (<GetPokemon className={showGetPokemon}
                                Gen1Pokemon={Gen1Pokemon}
                                Gen2Pokemon={Gen2Pokemon}
                                Gen3Pokemon={Gen3Pokemon}
                                Gen4Pokemon={Gen4Pokemon}
                                Gen5Pokemon={Gen5Pokemon}
                                Gen6Pokemon={Gen6Pokemon}
                                Gen7Pokemon={Gen7Pokemon}
                                Gen8Pokemon={Gen8Pokemon}
                                showFavoritePokemon={showFavoritePokemon}
                                searchValue={searchValue}
            />)
        } else if (showFavoritePokemon === true) {
            if (searchValue === "" && showFavoritePokemon === true) {
                return (<FavoritePokemon/>)
            } else if (searchValue !== "") {
                return (<SearchPokemon
                    Gen1Pokemon={Gen1Pokemon}
                    Gen2Pokemon={Gen2Pokemon}
                    Gen3Pokemon={Gen3Pokemon}
                    Gen4Pokemon={Gen4Pokemon}
                    Gen5Pokemon={Gen5Pokemon}
                    Gen6Pokemon={Gen6Pokemon}
                    Gen7Pokemon={Gen7Pokemon}
                    Gen8Pokemon={Gen8Pokemon}
                    searchValue={searchValue}/>);
            }
        } else {
            return (<SearchPokemon
                Gen1Pokemon={Gen1Pokemon}
                Gen2Pokemon={Gen2Pokemon}
                Gen3Pokemon={Gen3Pokemon}
                Gen4Pokemon={Gen4Pokemon}
                Gen5Pokemon={Gen5Pokemon}
                Gen6Pokemon={Gen6Pokemon}
                Gen7Pokemon={Gen7Pokemon}
                Gen8Pokemon={Gen8Pokemon}
                searchValue={searchValue}/>);
        }
    }


    return (
        <div>
            <NavbarIndex 
                showFavoritePokemon={showFavoritePokemon} 
                onFavoritesClick={toggleFavorites}
                searchValue={searchValue} 
                onInputChange={inputValue}
                //test commenting out aboutPage and removing from NavbarIndex.js
                aboutPage={aboutPage}
                onAboutClick={toggleAboutPage}
            />
            {loader}
            {aboutPage === false ? (getOrFavoriteOrSearchPokeBlock()) : (<About/>)}
            <FooterIndex 
                aboutPage={aboutPage}
                onAboutClick={toggleAboutPage} 
            />
        </div>
    )
}

export default App;