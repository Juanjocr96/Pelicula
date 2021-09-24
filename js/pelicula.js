'use strict'

//console.log('Cargado JS')
class Pelicula{
  constructor(){
    //console.log('Se ha creado una película')
    //this es el objeto que ejecuta el código
    this.titulo = 'Tiroteo en Mississipi'
    this.pueblo = new Pueblo('TodoPolvo', 'muy polvoriento, en mitad del desierto de Arizona y a donde nadie querría llegar.')
    this.narrador = new Narrador()
    this.paco = new PersonajeBueno('Paco')
    this.maria = new PersonajeBueno('María')
    this.morgan = new PersonajeMalo('Morgan Ojo Morao')

    this.iniciar()
  }
  iniciar(){
    document.write(`<h1>${this.titulo}</h1>`)
    document.write(`<p>${this.pueblo.nombre} era un pueblo ${this.pueblo.descripcion}</p>`)
    this.narrador.hablar(`Era una soleada mañana.`)
    this.paco.hablar(`Hola ${this.maria.nombre}. Hoy hace un día espléndido.`)
    this.maria.hablar(`Hola ${this.paco.nombre}, la verdad es que sí.`)
    this.narrador.hablar(`Ambos se miraron en un instante y siguieron su camino...`)
    this.morgan.hablar(`Vaya pueblo más... polvoriento`)
    this.morgan.hablar(`¡Eh, tú! ¡Pringao! Dame tu caballo y la cartera.`)
    this.morgan.arma.disparar()
    his.paco.hablar(`!Me ha dado¡.`)
    this.morgan.arma.disparar()
    this.maria.hablar(`!nO¡.`)
    this.morgan.arma.disparar()
    this.paco.hablar(`Me muero...`)
    this.morgan.hablar(`¡Gracias por tus cosas!`)
    this.narrador.hablar(`-Y así termina la historia.`)
  }
}

class Pueblo{
  constructor(nombre, descripcion){
    this.nombre = nombre
    this.descripcion = descripcion
  }
}

class Narrador{
  hablar(texto){
    document.write(`- ${texto}`)
  }

}

class Personaje{
  constructor(nombre){
    this.nombre = nombre
    this.arma = new Arma()
  }
  hablar(texto){
    document.write(`<p class = personaje><span>${this.nombre}: </span>${texto}<p/>`)
  }

}

class PersonajeBueno extends Personaje{
  hablar(texto){
    document.write(`<p class = bueno><span>${this.nombre}: </span>${texto}<p/>`)
  }

}

class PersonajeMalo extends Personaje{
  hablar(texto){
    document.write(`<p class = malo><span>${this.nombre}: </span>GRRRRRRR...${texto}<p/>`)
  }
}

class Arma{
  constructor(cargador, balas){
    this.cargador = cargador
    this.balas = balas
  }

  disparar(disparo){
    document.write(`<p>¡¡PUM!!</p>`)
  }

}

new Pelicula() 
