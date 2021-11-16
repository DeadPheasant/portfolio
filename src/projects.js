import { useState, React } from 'react'
import Background from './images/main_background.jpg'
import { FaDownload } from 'react-icons/fa'


const Projects = () => {
    const [box_n, setBox_n] = useState(["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8"])
    const box = (index) => {
        return(
            <div className="box">
            <div className="view">
                <a href=""><img src={Background} alt="" /></a>
            </div>
            <div className="text">
                <div className="details">
                    <h2><a href="">Project {index + 1}</a></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perferendis mollitia ducimus. Incidunt rerum nobis assumenda amet nam sit? Optio sequi vel sint veniam aspernatur rerum et laborum eveniet natus, fugit nobis ad numquam. Ipsa fuga hic repudiandae tempore deleniti ullam modi quia at similique dolores dicta natus pariatur quo, nisi aperiam architecto delectus necessitatibus? Voluptas numquam velit, doloremque dolorem ab laboriosam? Accusamus suscipit consectetur illum veritatis doloremque voluptate? Maxime, dicta ullam pariatur molestiae, corrupti accusamus rerum autem sit neque, at veritatis doloribus qui? Possimus, explicabo esse rem, accusamus deserunt totam nisi doloribus similique eveniet, tempora nihil assumenda beatae dolor?</p>
                </div>

                <div className="links">
                    <div className="icon"><a href=""><FaDownload /></a></div>
                    <div className="link"><a href="">Code</a></div>
                </div>
            </div>
        </div>
        )
    }

    return (
        <div className="Projects">
            <div className="pro">
                <div className="boxes">
                {
                    box_n.map((value, index) => {
                        if(index < 4) return box(index)
                    })
                }
                </div>

                <input id="more_item" type="checkbox" />
                <div className="next more"><label for="more_item">+ More Projects</label></div>

                <div className="boxes extra">
                {
                    box_n.map((value, index) => {
                        if(index > 3) return box(index)
                    })
                }
                </div>
                <div className="next less"><label for="more_item">- Less Projects</label></div>
            </div>

            <div className="footer">
                <div className=" foot foot1">
                    <span><b>PROJECTS</b></span>
                    <br />
                    <ul>
                        <li><a href="">Project1</a></li>
                        <li><a href="">Project2</a></li>
                        <li><a href="">Project3</a></li>
                        <li><a href="">Project4</a></li>
                        <li><a href="">Project5</a></li>
                        <li><a href="">Project6</a></li>
                        <li><a href="">Project7</a></li>
                        <li><a href="">Project8</a></li>
                    </ul>
                </div>

                <div className=" foot foot2">
                    <span><b>CONTACT</b></span>
                    <br />
                    <ul>
                        <li><a href="">Mail</a></li>
                        <li><a href="">Linkedin</a></li>
                    </ul>
                </div>

                <div className=" foot foot3">
                    <span><b>SKILLS</b></span>
                    <br />
                    <li><span>HTML</span></li>
                    <li><span>CSS</span></li>
                    <li><span>JavaScript</span></li>
                    <li><span>React</span></li>
                </div>

                <div className=" foot foot4">
                    <span><b>ABOUT</b></span>
                    <br />
                    <li><span>Pursuing BE (2019-2023)</span></li>

                </div>
            </div>
        </div>
    )
}

export default Projects