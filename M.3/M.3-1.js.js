let array1 = []
console.log(array1);

function callPrompts(){ 
    let persona = {nom: "", cognom: "", edat:""}
    persona.nom = prompt('Com et dius?')
    array1.push(persona.nom)
    persona.cognom = prompt('Quin és el teu cognom?')
    array1.push(persona.cognom)
    persona.edat = Number(prompt('Quina edat tens?')) 
    array1.push(persona.edat) 
    
    document.getElementById("exe1").innerHTML = `Em dic ${persona.nom} ${persona.cognom} i tinc ${persona.edat} anys ` ;        
}

function showPrompts (){
    let nom = array1[0]
    let cognom = array1[1]
    let edat = array1[2]
    document.getElementById("exe2").innerHTML = `Em dic ${nom} ${cognom} i tinc ${edat} anys ` ;

}

document.getElementById("exe3").innerHTML = `Em dic ${array1[0]} ${array1[1]} i tinc ${array1[2]} anys ` ; //surt com a undefined i no se pq



