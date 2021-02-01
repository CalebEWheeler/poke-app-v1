import React from 'react';

const CardInfo = ({id, height, weight, type1, type2}) => {
    const capType = (type) => { return type.charAt(0).toUpperCase() + type.substr(1)}

    return (
            <div className={type2 === "" ? "right-card1" : "right-card2"}>
            <p className={"right-card-p"}>Height: {Math.round((height * .1) * 100 + Number.EPSILON) / 100} meters</p>
            <p className={"right-card-p"}>Weight: {Math.round((weight * .1) * 100 + Number.EPSILON) / 100} kg</p>
        </div>
    )

}

export default CardInfo;