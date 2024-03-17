import React from "react";
import './Home.css';

function Home(){
    return(
        <section className="homeView">
            <div className="line"/>
            <div className="circle">
                <img  className="circle" src="https://media.licdn.com/dms/image/C4E03AQFJV6xFbsIdwQ/profile-displayphoto-shrink_200_200/0/1635054165311?e=2147483647&v=beta&t=3aKXejDlX4PeWGEy9vkdiLs7prR3d6TmnpSa6Dx0eYE" alt="axl basilio"/>
            </div>
            <section className="introduction">
                <p className="nameHeader">Hi there!</p>
                <p className="nameSub">Let me introduce myself (:</p>
                <p className="about">
                    I'm a Multiplatform Software Engineer and i love a lot develop stuff<br/>
                    My interests are build new technologies and bring to live new useful and<br/>
                    very powerful tools.<br/><br/>
                    Some of my fav lenguajes are Javascript, Typescript and also dev with Java or<br/> NodeJS(express) for backend functionality
                </p>
            </section>
        </section>
    );
}
export default Home;