import { SmallCard } from "../SmallCard/SmallCard"
import axios from 'axios'
import { useEffect, useState } from "react"
import { CreatePlayer } from "../CreatePlayer/CreatePlayer"


export function Home(){

    // const users = [
    //     {name: "juano", img:'', ranking:1},
    //     {name: "cande", img:'', ranking:2},
    //     {name: "carlos", img:'', ranking:3}
    // ]

    const [topThree, setTopThree] = useState([])
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

    useEffect(() => {
        topThreeHandler()
    },[])

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
    </div>
}