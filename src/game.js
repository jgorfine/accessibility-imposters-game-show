import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

window.Stimulus = Application.start()

Stimulus.register("game", class extends Controller {
  static targets = [ "control", "timer", "liveregion" ]
  static values = { index: Number }

  // Navigation 

  next() {
    const visibleControls = this.controlTargets;
    console.log("next, visible controls", visibleControls);
    const newIndex = (this.indexValue + 1) % visibleControls.length;
    this.indexValue = newIndex;
  }

  prev() {
    const visibleControls = this.controlTargets;
    console.log("prev, visible controls", visibleControls);
    const newIndex = ((this.indexValue - 1) + visibleControls.length) % visibleControls.length;
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

  toggleCountdownVisible() {
    if (window.getComputedStyle(this.timerTarget).display === "block") {
      this.timerTarget.focus();
    }
  }

  toggleCountdown() {
    console.log("toggling countdown running")
  }

  toggleReveal() {
    console.log("toggling impostor")
  }
})

Stimulus.register("thing", class extends Controller {
  static targets = [ "button", "on", "off" ]
  static values = { active: Boolean }

  toggle() {
    this.activeValue = !this.activeValue;
  }

  activeValueChanged() {
    this.onTarget.hidden = this.activeValue === true;
    this.offTarget.hidden = this.activeValue === false;
  }
})

