import React from "react";

function Menu() {
    return(
        <div className={"col-sm-6 me-3"} id={"menu"}>
            <h1 className={"text-center"}>Our Menu</h1>
            <br/>
            <h4>Bread Basket</h4>
            <p className={"text-secondary mt-3"}>Assortment of fresh baked fruit breads and muffins 5.50</p>
            <br/>
            <h4>Honey Almond Granola with Fruits</h4>
            <p className={"text-secondary mt-3"}>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
            <br/>
            <h4>Belgian Waffle</h4>
            <p className={"text-secondary mt-3"}>Vanilla flavored batter with malted flour 7.50</p>
            <br/>
            <h4>Scrambled eggs</h4>
            <p className={"text-secondary mt-3"}>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
            <br/>
            <h4>Blueberry Pancakes</h4>
            <p className={"text-secondary mt-3"}>With syrup, butter and lots of berries 8.50</p>
        </div>
    );
}

export default Menu