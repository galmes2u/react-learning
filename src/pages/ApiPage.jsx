import { useEffect, useState } from "react"

const ApiPage = (props) => {

  const [ apiResults, setApiResults ] = useState([])
  const [ search, setSearch ] = useState("")

  const fetchApi = async (query="puppies") => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}$&api_key=zGTBO65XtIkTWFiBcgVCxJX7x8FveHfA&limit=20`)
    const data = await response.json()
    setApiResults(data.data)
    setSearch("")
  }

  const searchButtonHandler = () => {
    fetchApi(search)
  }

  useEffect(() => {
    console.log("useEffect: a new api query has been run")
  }, [apiResults])

  useEffect(() => {
    fetchApi()
  },[])

  return (
    <div style={{ padding: "40px" }}>
        <div style={{ display: "flex", gap: "1em", width: "60%", marginBottom: "2em" }}>
          <input className="form-control" placeholder="Try a search!" name="search" value={search} onChange={(e)=>setSearch(e.target.value)} />
          <button className="btn btn-success" onClick={searchButtonHandler}>Submit</button>
        </div>

        <div style={{ display: "flex", justifyContent:"flex-start", alignItems: "flex-start", flexWrap: "wrap", gap: "2em" }}>
          { apiResults.map( img => (
            <div 
              key={img.id} 
              style={{ 
                width: "8em", 
                height: "8em", 
                border: "1px solid white", 
                backgroundImage: `url(${img.images.preview_gif.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
            >
              {/* <img src={img.images.preview_gif.url} alt={img.title} /> */}
            </div>
          ))}
        </div>
      </div>
  )
}

export default ApiPage