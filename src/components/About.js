import React from 'react';

const About = () => {

    return (
        <main>
            <section className={"about-section"}>
                    <h6 className={"about-header"}>About the App</h6>
                    <p className={"about-intro"}>
                        Welcome to Poke Finder App, Poke Finder is an application built to allow users to see and favorite all pokemon ranging from the original 151 to the latest generation from the Galar region!
                        <br/><br/><span className={"about-question"}>Trying to favorite a specific pokemon?</span><br/>Click on the star beside the pokemon's name to favorite it.
                        <br/><br/><span className={"about-question"}>Want to see the pokemon you've favorited?</span><br/>Click on the Pokeball to navigate to your Favorite Pokemon page.
                        <br/><br/><span className={"about-question"}>Want to quickly find a pokemon by their name?</span><br/>Click on the magnifying glass icon and search for your desired pokemon!
                    </p>
                    <h6 className={"about-header"}>Developer Info</h6>
                    <p className={"about-intro"}>
                        Hi my name is Caleb Wheeler, I am the developer that made Poke Finder come to life!
                        <br/><br/><span className={"about-question"}>Why?</span><br/><br/>This project was a personal challenge I took on in order to push myself to learn the JavaScript Framework, ReactJS, as well as learn how to deploy a React project via Amplify AWS.
                        <br/><br/><span className={"about-question"}>What Did I Like?</span><br/><br/>What I really enjoyed about utilizing ReactJS, is the framework's implementation of components. The usage of React components reminds me a lot of Java classes in structure and allowing an Object Oriented Programming approach to Front end development. I thought it was really cool to have the ability to pass and make data available to components as properties.
                        <br/><br/><span className={"about-question"}>Biggest Challenge?</span><br/><br/>I'd say my biggest challenge while working on this project, was learning how to pass properties from parent to child components. At first it was a little mind bending trying to solve how to manipulate data and change a React Hook's state in a parent component, but after learning how to implement functions that would change a passed property value, then pass back the manipulated data from the child back to the parent component and set a React Hook's state, it was clockwork from there. React State's are completely different from what I am used to working with in Vanilla JavaScript and the JQuery library, but it is a welcomed change that I have come to enjoy implementing!
                    </p>
            </section>
        </main>
    )
}

export default About;