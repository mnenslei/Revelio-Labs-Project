import React, {useState, useEffect} from "react";
import { connect } from 'react-redux'
import axios from "axios";

import '../styling/index.css'
import '../styling/Body.css'
import star1 from '../stars/star1.svg'
import star2 from '../stars/star2.svg'

import ShowMore from "./ShowMore";
import { addFavorite, removeFavorite } from "../actions/favoritesActions"

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
    const { newArtArr, newArtArr2, addFavorite, removeFavorite } = props;
    const [data, setData] = useState([])
    const [isShow, setIsShown] = useState(false)
    const [hide, setHide] = useState(false)
    const [show, setShow] = useState('show more')

    const changeText = (show) => {
        setShow(show)
    }

    const handleClick = (e) => {
        setHide(prev => !prev);
        setIsShown(current => !current);
        changeText('show less')
    }

    const handleFave = () => {
        addFavorite(data.data.title)
    }

    axios.all(newArtArr.map((article) => axios.get(article))).then((data) => {setData(data)}, [data])

    return(
        <div className='body-container'>
            {data.map((data, i) => (
            <ol key={i}>
            <div className='top-line-container'>
                <h4>{i+1}.</h4>
                <h3>{data.data.title}</h3>
                <p><a target="_blank" rel="noreferrer" href={data.data.url}>({data.data.url})</a></p>
            </div>
            <div className='bottom-line-container'>
                <p>{data.data.score} points by {data.data.by} {timeCheck(ts, data.data.time)} | {kidsCheck(data.data.kids)} comments | <span onClick={handleFave} className='star'><img src={star1} alt='white star'/> save </span></p>
            </div>
            </ol>
            ))}
            {isShow && <ShowMore newArtArr2={newArtArr2}/>}
            <button className='show-more' onClick={handleClick}>{show}</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, {addFavorite})(Body);