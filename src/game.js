import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

window.Stimulus = Application.start()

Stimulus.register("toolbar", class extends Controller {
  static targets = [ "control" ]
  static values = { index: Number }

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

  toggle(event) {
    const switchElement = event.target.closest("[role='switch']");
    const isChecked = switchElement.getAttribute('aria-checked') === 'true';
    switchElement.setAttribute('aria-checked', !isChecked);
  }

  focusControl() {
    this.controlTargets[this.indexValue].focus();
  }

  updateTabIndices() {
    this.controlTargets.forEach((element, index) => {
      element.tabIndex = index === this.indexValue ? "0" : "-1";
    })
  }

  indexValueChanged() {
    this.focusControl();
    this.updateTabIndices();
  }
})

/**
 * Timer formatting credit
 * @author JavaScript Development Space
 * @see {@link https://jsdev.space/howto/convert-seconds-js/|Convert Seconds to Time Format in JavaScript}
 */

Stimulus.register("timer", class extends Controller {
  static targets = [ "switch", "display", "announcement", "liveregion" ]
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
      this.switchTarget.setAttribute("aria-checked", "false");
      this.liveregionTarget.textContent = "Time's up! Use 'Reveal impostor' button to see the answer.";
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

  toggle() {
    const isChecked = this.switchTarget.getAttribute('aria-checked') === 'true';
    !isChecked ? this.start() : this.pause();
    this.switchTarget.setAttribute('aria-checked', !isChecked);
  }
})

