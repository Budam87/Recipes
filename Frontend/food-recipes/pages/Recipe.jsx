import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import '../css/Recipe.css';

export function Recipe() {
    return (
        <>
            <div className="recipe-wrapper">
                <div className="main-info">
                    <h1></h1>
                    <img src="" alt="" />
                </div>
                <div className="ingridients"></div>
            </div>
        </>
    )
}