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
  static targets = [ "display", "format" ]
  static values = { active: Boolean }

  connect () {
    const now = new Date();
    const future = new Date(now.setMinutes(now.getMinutes() + 3));
    window.timeFromNow = future.getTime();
  }

  setUpTimer() {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = window.timeFromNow - now;

    // Time calculations for days, hours, minutes and seconds
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const current = minutes + "m " + seconds + "s ";
    console.log({ current });

    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    const currentFormatted = `${formattedMinutes}:${formattedSeconds}`;
    console.log({ currentFormatted });

    // Display the result in the element with id="demo"
    // this.displayTarget.innerHTML = minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    // if (distance < 0) {
    //   clearInterval(x);
    //   this.displayTarget.innerHTML = "Finished!";
    // }
  }

  start() {
    window.foo = setInterval(this.setUpTimer, 1000);
  }

  pause() {
    clearInterval(window.foo);
    window.foo = null; // helps track if the interval is currently running
  }

  toggle() {
    if (window.foo) {
      pauseInterval(); // If running, pause it
    } else {
      startInterval(); // If paused, start it
    }
  }

  disconnect() {
    delete window.foo;
  }
})

