// Axios to fetch Flickr API
import axios from "axios"

// API Config
import {URL, FORMAT_FEED} from "../API/config.js"

// getFedd From Flickr API
export const getFeed = async (req, res) => {
    try {
        await axios
        .get(
            `${URL}/services/feeds/photos_public.gne?${FORMAT_FEED}$nojsoncallback=1`
        )
        .then((response) => {
            res.send(response.data)
        })
        .catch((err) => {
            res.send({err})
        })
    } catch (error) {
        res.status(500).json("Error")
    }
}