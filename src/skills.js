import { React } from 'react'
import { FaBook, FaBrain, FaCommentDots, FaCss3, FaHtml5, FaJs, FaReact, FaSmile, FaUsers } from 'react-icons/fa'

const Skills = () => {
    const icons = [FaHtml5, FaCss3, FaJs, FaReact, FaUsers, FaBrain, FaCommentDots, FaSmile, FaBook ]
    const icon_name = ["HTML5", "CSS3", "JavaScript", "React", "Teamwork", "Critical Thinking", "Communication", "Positive Attitude",
    "Willingness To Learn"]

    const skill = (item, key) => {
        let Icon = icons[key]
        return <div className="skill">
            <div className="icon_section"><span><Icon/></span></div>
            <span>{item}</span>
        </div>
    }
    return (
        <div>
            <div className="Skills">
                {
                    icon_name.map((item, key) => {
                        return skill(item, key)
                    })
                }
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

export default Skills