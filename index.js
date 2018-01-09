/*

active player:
  pick a div
  div on click becomes active and unclickable
  after a click you can't click
  switch active player

game on start:
  init
*/
const activeBlocks = document.getElementsByClassName('block')

class Player {
  constructor(className) {
    this.player = document.getElementById(className)
    this.active = undefined
  }

  activate() {
    this.active = true
    console.log('You are active now')
  }

  deactivate() {
    this.activate = false
    console.log('You are not active now')
  }
}

class Game {
  constructor() {
    this.state = {
      active: false,
      playerOne: new Player('player-one'),
      playerTwo: new Player('player-two')
    }
  }

  init() {
    const self = this
    self.state.playerOne.activate()

    for (const anActiveBlock of activeBlocks) {
      anActiveBlock.addEventListener('click', function(){
        if (self.state.active) {
          anActiveBlock.classList.add('active')
          console.log(document.getElementsByClassName('active'))
          self.state.active = !self.state.active
        } 
        else {
          anActiveBlock.classList.add('proactive')
          console.log(document.getElementsByClassName('proactive'))
          self.state.active = !self.state.active
        }
      })
    }
  }
}

const tictactoe = new Game()
tictactoe.init()