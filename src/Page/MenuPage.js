import Data from "../Data";
import Card from "../Card";
import Buttons from "../Buttons";
import React, { useState } from "react";

const MenuPage = () => {
    const [item, setItem] = useState(Data);

    const menuItems = [...new Set(Data.map((Val) => Val.category))];

    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        });

        setItem(newItem);
    };
    
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="col-12 text-center my-3 fw-bold">Food Filtering App</h1>
                    <Buttons
                        filterItem={filterItem}
                        setItem={setItem}
                        menuItems={menuItems}
                    />
                    <Card item={item} />
                </div>
            </div>
        </>
    );
};

export default MenuPage;
