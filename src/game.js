import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

window.Stimulus = Application.start()

Stimulus.register("game", class extends Controller {
  static targets = [ "control", "liveregion" ]
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
  toggleReveal() {
    console.log("toggling impostor")
  }
})

Stimulus.register("timelimit", class extends Controller {
  static targets = [ "container", "thing2", "input"]
  static values = { active: Boolean }

  toggle() {
    this.containerTarget.hidden = this.inputTarget.checked === false;
    this.thing2Target.hidden = this.inputTarget.checked === false;
  }
})

Stimulus.register("timer", class extends Controller {
  static targets = [ "on", "off", "countdown", "format", "initial" ]
  static values = { active: Boolean }

  start() {
    let additionalOptions;

    const now = new Date();
    const nowPlus3Mins = new Date(now.setMinutes(now.getMinutes() + 3));

    const year = nowPlus3Mins.getFullYear();
    const month = nowPlus3Mins.getMonth() + 1;
    const day = nowPlus3Mins.getDate();
    const hours = nowPlus3Mins.getHours();
    const minutes = nowPlus3Mins.getMinutes();

    const options = {
      year,
      month,
      day,
      hours,
      minutes
    }

    const optionsA = {
      inline: true,
      inlineSeparator: ', ',
      removeZeroUnits: true,
    }

    window.sharedObject2 = optionsA;

    const optionsB = {
      plural: false,
      zeroPad: true,
    }

    window.sharedObject3 = optionsB;

    console.log("format", this.formatTarget.checked);

    additionalOptions = this.formatTarget.checked ? optionsA : optionsB;

    this.initialTarget.remove();

    const countdown = simplyCountdown(this.countdownTarget, {...options, ...additionalOptions});

    window.sharedObject = countdown;

    // this.offTarget.firstChild().focus();

    this.activeValue = !this.activeValue;
  }

  pause() {
    console.log("pausing", window.sharedObject);
    if (window.sharedObject) {
      const state = window.sharedObject.getState();
      if (state.isPaused) {
        window.sharedObject.resumeCountdown();
      } else {
        window.sharedObject.stopCountdown();
      }
    }
  }

  formatValueChanged() {
    console.log('format value changed', this.formatTarget.checked);
    if (window.sharedObject && window.sharedObject2 && window.sharedObject3) {
      const newOptions = this.formatTarget.checked ? window.sharedObject2 : window.sharedObject3;
      window.sharedObject.updateCountdown(newOptions);
    }
  }

  activeValueChanged() {
    this.onTarget.hidden = this.activeValue === true;
    this.offTarget.hidden = this.activeValue === false;
  }
})

