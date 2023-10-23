// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// Trasformare la stringa foto in una immagine effettiva
// BONUS :
// Organizzare i singoli membri in card/schede
// Aggiungere un nuovo membro al team
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!




// milestone 0
const ourTeam = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        picture: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        picture: 'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        picture: 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        picture: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        picture: 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        picture: 'barbara-ramos-graphic-designer.jpg'
    }

]

// Milestone 1

for (let i = 0; i < ourTeam.length; i++){
    // console.group()
    // console.log(ourTeam[i].name)
    // console.log(ourTeam[i].role)
    // console.log(ourTeam[i].picture)
    // console.groupEnd()
}



// Milestone 2

    //mi sono preso il contetiore 
const containerEl = document.querySelector('.container')
console.log(containerEl)

    //ci ho appeso un div e gli do la classe row
const rowEl = document.createElement('div')
containerEl.append(rowEl)
rowEl.classList.add('row')

    //console.log(rowEl)

    //creo un ciclo for e stampo le informzazioni e aggiungo la classe col ai vari div
for (i = 0; i < ourTeam.length; i++ ){
    const colEl = document.createElement('div')
    rowEl.append(colEl)
    colEl.classList.add('col-4')
}

// bonus 
// 3 input collegati ad un bottone 


// */