import React, {useState, useEffect} from "react";
import axios from "axios";
import '../styling/index.css'
import '../styling/Body.css'

const kidsCheck = (str) => {
    if (str) {
        return str.length
    } else return 0
}

var ts = Math.round((new Date()).getTime() / 1000);

const timeCheck = (var1, var2) => {
    if (var1 - var2 > 31556926){
        return `${Math.floor((var1 - var2) / 31556926)} years ago`
        } else if (var1 - var2 > 2629743) {
            return `${Math.floor((var1 - var2) / 2629743)} months ago`
        } else if (var1 - var2 > 86400) {
            return `${Math.floor((var1 - var2) / 86400)} days ago`
        } else if (var1 - var2 > 3600) {
            return `${Math.floor((var1 - var2) / 3600)} hours ago`
        } else return `moments ago`
}

const Body = (props) => {
    const {newArtArr} = props
    const [data, setData] = useState([])
    const [saved, setSaved] = useState(false)

    axios.all(newArtArr.map((article) => axios.get(article))).then((data) => {setData(data)},)

    return(
        <div className='body-container'>
            {data.map((data, i) => (
            <ol>
            <div className='top-line-container'>
                <li key={i}></li> <h3>{data.data.title}</h3>
                <p><a target="_blank" rel="noreferrer" href={data.data.url}>({data.data.url})</a></p>
            </div>
            <div className='bottom-line-container'>
                <p>{data.data.score} points by {data.data.by} {timeCheck(ts, data.data.time)} | {kidsCheck(data.data.kids)} comments | {saved}</p>
            </div>
            </ol>
            ))}
        </div>
    )
}

export default Body;