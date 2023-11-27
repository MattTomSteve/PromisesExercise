// 1
// let url = 'http://numbersapi.com/42?json'
// axios.get(url)
//     .then(res => {
//         console.log(res.data)
//     })
//     .catch(err => console.log('Rejected!!!', err))

//2
// let url = 'http://numbersapi.com/1..3,42?json'
// axios.get(url)
//     .then(res => {
//         console.log(res.data)
//     })
//     .catch(err => console.log('Rejected!!!', err))

//3
// let url = 'http://numbersapi.com/42?json'
// for (let i = 1; i < 5; i++) {
//     axios.get(url)
//         .then(res => {
//             console.log(res.data.text)
//         })
//         .catch(err => console.log('Rejected!!!', err))
//     }