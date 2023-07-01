import {useState} from "react";
import WorkingWithStates from "./assets/components/_WorkingWithStates/WorkingWithStates.jsx";
import Counter from "./assets/components/_Counter/Counter.jsx";
import ClassCounter from "./assets/components/_ClassCounter/ClassCounter.jsx";

import Stylization from "./assets/components/_Stylization/Stylization.jsx";
import PostsList from "./assets/components/_Stylization/PostsList.jsx";
import PostItem from "./assets/components/_Stylization/PostItem.jsx";
import PostItem2 from "./assets/components/_Stylization/PostItem2.jsx";

import './assets/styles/App.css'
import ParentComponent from "./assets/components/_CreateContext/ParentComponent.jsx";
import FormComponent from "./assets/components/Learn/FormConmponent/FormComponent.jsx";


function App() {

    return (
        <>
            {/*<WorkingWithStates/>*/}

            {/*<Counter/>*/}

            {/*<ClassCounter/>*/}

            {/*<PostItem/>*/}
            <PostItem2/>
            {/*<h1>Using Context API in React</h1>*/}
            {/*<ParentComponent />*/}


            <FormComponent/>
        </>
    )
}

export default App
