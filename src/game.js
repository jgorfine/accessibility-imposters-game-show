import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

window.Stimulus = Application.start()

Stimulus.register("game", class extends Controller {
  static targets = [ "control", "timer", "liveregion" ]
  static values = { index: Number }

  // Navigation 

  next() {
    const newIndex = (this.indexValue + 1) % this.controlTargets.length;
    this.indexValue = newIndex;
  }

  prev() {
    const newIndex = ((this.indexValue - 1) + this.controlTargets.length) % this.controlTargets.length;
    this.indexValue = newIndex;
  }

  indexValueChanged() {
    this.focusControl();
    this.updateTabIndices();
  }

  focusControl() {
    this.controlTargets[this.indexValue].focus();
  }

  updateTabIndices() {
    this.controlTargets.forEach((element, index) => {
      element.tabIndex = index === this.indexValue ? "0" : "-1";
    })
  }

  // Actions

  toggleSound() {
    alert("toggling sound")
  }

  toggleTimer() {

  }

  toggleReveal() {

  }
})
