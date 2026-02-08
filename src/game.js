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


/**
 * Timer formatting credit
 * @author JavaScript Development Space
 * @see {@link https://jsdev.space/howto/convert-seconds-js/|Convert Seconds to Time Format in JavaScript}
 */

Stimulus.register("timer", class extends Controller {
  static targets = [ "display", "announcement" ]
  static values = { active: Boolean }

  formatMMSS(time) {
    if (isNaN(time) || time < 0) return "00:00";

    let secondTime = Math.floor(time);
    let minuteTime = Math.floor(secondTime / 60);

    secondTime %= 60;
    minuteTime %= 60;

    return (
      `${minuteTime.toString().padStart(2, "0")}:` +
      `${secondTime.toString().padStart(2, "0")}`
    );
  }

  formatHumanReadable(time) {
    if (isNaN(time) || time < 0) return "00 minutes, 00 seconds";

    let secondTime = Math.floor(time);
    let minuteTime = Math.floor(secondTime / 60);

    secondTime %= 60;
    minuteTime %= 60;

    return (
      `${minuteTime.toString()} minutes, ${secondTime.toString().padStart(2, "0")} seconds`
    );
  }

  connect() {
    this.countdown = new Countdown().setDuration(180);

    this.countdown.onTick = (time) => {
      this.displayTarget.textContent = this.formatMMSS(time);
      this.announcementTarget.textContent = this.formatHumanReadable(time);
    };

    this.countdown.onCompleted = () => {
      console.log('DONE');
    };
  }

  start() {
    this.countdown.start();
  }

  pause() {
    this.countdown.pause();
  }

  reset() {
    this.countdown.reset();
  }
})

