//1

// let url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
// axios.get(url)
//     .then(res => {
//         let {suit,value} = res.data.cards[0];
//         console.log(`${value} OF ${suit}`)
//     })
//     .catch(err => console.log('Rejected!!!', err))

//2

// let url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
// let firstCard = null;
// axios.get(url)
//     .then(res => {
//         firstCard = res.data.cards[0];
//         let deckId = res.data.deck_id;
//         return axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
//     })
//     .then(res => {
//         let secondCard = res.data.cards[0];
//         [firstCard, secondCard].forEach(function(card) {
//             console.log(`${card.value} OF ${card.suit}`)
//         })
//     })
//     .catch(err => console.log('Rejected!!!', err))

//3
