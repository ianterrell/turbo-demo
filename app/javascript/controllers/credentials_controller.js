import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="credentials"
export default class extends Controller {
  connect() {
    console.log("CONNECTED")
  }

  create() {
    console.log("CREATED")
  }
}
