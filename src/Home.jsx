import lene from './imgs/Animated_lene.jpg';

function Home(){
    return(
        <div>
            <div id='lene'>
                <img src={lene} alt='Artist' height="500em" width="500em"/>
            </div>
            <div id='about'>
                <h3>Welcome to the vibrant digital canvas of Ilene Hurley, where static drawings transform into animated masterpieces. Our website is a gateway into the world of dynamic art, showcasing the unique and captivating animations crafted from hand-drawn illustrations.</h3>
            </div>
        </div>
    )
}

export default Home