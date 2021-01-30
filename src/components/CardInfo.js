import React, {useCallback, useEffect, useState} from 'react';

const CardInfo = ({id, height, weight, type1, type2}) => {
    const capType = (type) => { return type.charAt(0).toUpperCase() + type.substr(1)}

    return (
            <div className={"right-card"}>
            <p>Dex Entry: {id}</p>
            <p>Height: {Math.round((height * .1) * 100 + Number.EPSILON) / 100} meters</p>
            <p>Weight: {Math.round((weight * .1) * 100 + Number.EPSILON) / 100} kg</p>
            <div>
                <p>Type:</p>
                <div>
                    <div className={type1}>
                        {capType(type1)}
                    </div>
                    {type2 !== "" ?
                        (
                            <div className={type2}>
                                {capType(type2)}
                            </div>
                        ) : (
                            <div className={"noSecondaryType"}>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )

}

export default CardInfo;