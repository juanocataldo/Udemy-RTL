import { SmallCard } from "../SmallCard/SmallCard"
import axios from 'axios'
import { useEffect, useState } from "react"
import { CreatePlayer } from "../CreatePlayer/CreatePlayer"


export function Home(){

    const [topThree, setTopThree] = useState([])
    const [search, setSearch] = useState('')
    const [topTen, setTopTen] = useState([
        { name: 'Cande', img: '' , ranking:2},
        { name: 'Carlos', img: '' , ranking:3},
        { name: 'Juano', img: '', ranking:1 },
        { name: 'Pedro', img: '', ranking:4 },
        { name: 'Maxi', img: '', ranking:7 },
        { name: 'Francisco', img: '', ranking:5 },
        { name: 'Julian', img: '', ranking:6 },
        { name: 'Michael', img: '', ranking:8 },
        { name: 'Franco', img: '', ranking:9 },
        { name: 'Santino', img: '', ranking:10 }
    ])
    const [error, setError] = useState(false)

    const topThreeHandler = () => {
        fetch('http://localhost:3030/toptres')
        .then(data => data.json())
        .then(res => {
            setError(false)
            console.log(res)
            setTopThree(res)
        })
        .catch(error => setError(true))
    }
    const topTenHandler = () => {
        fetch('http://localhost:3030/topten')
        .then(data => data.json())
        .then(res => {
            setTopTen(res)
        })
        .catch(error => setError(true))
    }

    useEffect(() => {
        topThreeHandler()
        topTenHandler()
    },[])

    const searchPlayer = () => {
        const filter = topTen.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
        setTopTen(filter)
        console.log(filter)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return <div>
        HOME
        <img src="" alt="home_img" />
        
        <h1>Top 3</h1>
        <div className="topthree">
            
            {error ? 'No players were found' : 
            <>
                {topThree && topThree.map(u => <SmallCard img={u.img} name={u.name} ranking={u.ranking} key={u.ranking} />)}            
            </>
            }
        </div>

        <img src="" alt="topThree_img" />

        <h1>Carouse</h1>
        <div className="carousel">
            carousel
        </div>


        <h1>Gallery</h1>
        <img src="" alt="player_img1" />
        <img src="" alt="player_img2" />
        <img src="" alt="player_img3" />
        <img src="" alt="player_img4" />
        <img src="" alt="player_img5" />

        <CreatePlayer />

        <h1>Top 10</h1>
        <label>Filter by name</label>
        <input type="text" placeholder="playername" onChange={handleSearch} />
        <button onClick={searchPlayer}>Search</button>
        <hr />
        <ul>
            {topTen && topTen.map(p => <li>{p.name}</li>)}
        </ul>
    </div>
}