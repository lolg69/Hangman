const getPuzzle = () =>{
    const countryCode = "IN"

    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange',(e)=>{
        if(e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText)
            console.log(data)
        }else if(e.target.readyState === 4){
            console.log('you have been gnoshed')
        }
    })


    request.open('GET','http://puzzle.mead.io/puzzle')
    request.send()
}