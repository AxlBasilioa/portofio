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
                <p className="nameHeader">Axl Basilio</p>
                <p className="nameSub">Multiplatform Software Engineer</p>
                <p>Hi there! i build some Multi-platform Software</p>
            </section>
        </section>
    );
}
export default Home;