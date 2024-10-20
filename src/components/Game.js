import React from 'react';
import './Game.css';
import CrashImage from '../images/games/crash.jpg';
import { FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { useFetch } from '../useFetch';

const GameChart = ({ game }) => {

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;

    // const { data, loading, error } = useFetch(`./test.json`);
    // const game = data?.find((game) => game.id === id);
    return (
        <div className="container">
            <div className="imageContainer">
                <img
                    src={game.image}
                    alt=''
                    className="gameImage"
                />
            </div>
            <div className="detailsContainer">
                <h2 className="gameTitle">{game.name}</h2>
                <p className="releaseInfo">
                    `{game.releaseDate} / {game.developer}`
                </p>
                <div className="rating">
                    <div className='starsContainer'>
                        {Array.from({ length: game.rating }, (_, index) => (
                            <span key={index}>⭐</span>
                        ))}
                    </div>
                    <div className="priceContainer">
                        <span className="price">${game.price}</span>
                    </div>
                </div>
                <div className="platforms">
                    <div>
                        {game.os.includes("Mac") ? <span className="platformIcon"><FaApple /></span> : null}
                        {game.os.includes("Windows") ? <span className="platformIcon"><FaWindows /></span> : null}
                        {game.os.includes("Linux") ? <span className="platformIcon"><FaLinux /></span> : null}
                    </div>
                    <button className="addButton">Add <BsCart4 className='shoppingCart' /></button>
                </div>



            </div>
        </div>
    );
};

export default GameChart;
