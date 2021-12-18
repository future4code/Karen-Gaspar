import { useEffect, useState } from "react"
import axios from "axios"

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)


    const updatePage = () => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        updatePage()
    }, [url])

    return [data, updatePage]
}

export default useRequestData