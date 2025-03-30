import { RequestHandler, response } from "express";


export  const main: RequestHandler= async (req,res)=> {

    // const api = fetch("https://telaflixapi.com/e/movie?title=tesouro&year=2024").then(response => {
    //     if (!response.ok) {
    //         throw new Error('Erro na requisição:' + response.status);
    //     }
    //     return response.json();
    // }).then(data => {
    //     console.log(data);
    // }).catch(error => {
    //     console.error('Error', error);
    // });
    res.render("../../../views/home/main", {
        //  filme: api
    })


};