import { useState, useEffect } from "react"
import Article from "./components/Article"

const App = () => {
  const [articles, setArticles] = useState([])
  const url = "https://beta.nextis.zone/api/v3/meta/articles"

  const getArticles = async () => {
    const response = await fetch(url)
    const data = await response.json()
    
    setArticles(data)
  }
  
  useEffect( () => {
    getArticles()
  }, [])
  

  return (
    <div className="articles">
      {
        articles.map( (oneArticle, index) => {
          const {name, version, created, fixes, changes} = oneArticle
          return <Article index={index} name={name} version={version} created={created} fixes={fixes} changes={changes}  />
        })
      }
    </div>
  )
}

export default App
