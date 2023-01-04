import React from "react";
import Navi2 from "./Template2/Navi2";
import Food1 from "./Template2/Food1";

const styles = {
    main: {
        marginTop: 100
    }
}

function App5() {
    return(
        <div className={"container"} style={styles.main}>
            <Navi2 />
            <Food1 />
        </div>
    );
}

export default App5;