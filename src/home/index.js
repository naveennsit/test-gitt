import React, {Fragment,useCallback} from 'react';


const Home =(props) => {

   const clickAppLink = ()=>{
       props.history.push('/dth/agency-list');
   }


    return (
        <Fragment>

           <button onClick={()=>clickAppLink()}>click</button>
        </Fragment>
    );
};

export default Home;
