import "./Article.css"
import moment from "moment/moment"

const Article = ({index, name, version, created, fixes, changes}) => {

    return <div key={index} className="article">
        <h1>{name}</h1>
        <h2>{version}</h2>
        <p>{moment(created).format('MMMM Do YYYY, h:mm:ss a')}</p>

        <div className="fixes">
            <h3>Fixes</h3>
            <ul>
                {fixes.map( (fix) => {
                    return <li>{fix}</li>
                })}
            </ul>
        </div>
        
        <div className="changes">
            <h3>Changes</h3>
            <ul>
                {changes.map( (change) => {
                    return <li>{change}</li>
                })}
            </ul>
        </div>
        
    </div>
}

export default Article
