import data from './data.json'
export const fetchData = () => {
    setTimeout(() => {
        console.log(JSON.parse(data))
    }, 1000)
}