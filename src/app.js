import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");


  // GENERADOR NOMBRES DE DOMINIO
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extension = ['.com', '.net', '.org', '.io', '.es'];

  let domain = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < extension.length; e++) {
          domain.push(pronoun[i] + adj[a] + noun[n] + extension[e]);
        } 
      }
    }
  }

  
  //console.log(domain);

  function printList(list) {
    for (let i = 0; i < list.length; i++) {
      console.log(`[${i+1}]: ${list[i]}`);
    }
  }
  console.log(`\nLista de DOMAINS (x${domain.length} encontrados):`);
  printList(domain);


};
