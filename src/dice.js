import DiceBox from '@3d-dice/dice-box'
import { DisplayResults, AdvancedRoller, BoxControls } from '@3d-dice/dice-ui'

let Box = new DiceBox("#root",{
  assetPath: '/assets/dice-box/',
})

document.addEventListener("DOMContentLoaded", async() => {

  Box.init().then(() => {
    // create display overlay
    const Display = new DisplayResults("#root")

    // create Roller Input
    const Roller = new AdvancedRoller({
      target: '#root',
      onSubmit: (notation) => Box.roll(notation),
      onClear: () => {
        Box.clear()
        Display.clear()
      },
      onReroll: (rolls) => {
        // loop through parsed roll notations and send them to the Box
        rolls.forEach(roll => Box.add(roll))
      },
      onResults: (results) => {
        Display.showResults(results)
      }
    })

    // pass dice rolls to Advanced Roller to handle
    Box.onRollComplete = (results) => {
      Roller.handleResults(results)
    }
  }) // end Box.init
}) // end DOMContentLoaded