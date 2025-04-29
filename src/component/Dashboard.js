import police from '../img/police.png';
import firebase from './InitializeDatabase';
import 'firebase/firebase-firestore';
import $ from "jquery";
var CryptoJS = require("crypto-js");

class Dashboard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <style>
        .card-section {
          padding: 20px;
          max-width: 900px;
          margin: auto;
        }
        .card {
          background: #f9f9f9;
          padding: 20px;
          margin-bottom: 15px;
          border-left: 5px solid #007bff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        .badge {
          padding: 5px 10px;
          font-size: 13px;
          border-radius: 5px;
        }
        .badge-resolved {
          background-color: #28a745;
          color: white;
        }
        .badge-active {
          background-color: #ffc107;
          color: black;
        }
        .badge-pending {
          background-color: #dc3545;
          color: white;
        }
      </style>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <a class="navbar-brand" style="font-size: 30px;" href="#">Dashboard</a>
        <form class="form-inline">
          <li class="nav-item pr-2" style="list-style: none;">
            <img src='${police}' width="40px" height="40px">
          </li>
          <li class="nav-item" style="list-style: none;">
            <div class="btn-group">
              <button type="button" class="btn btn-secondary dropdown-toggle bg-dark" style="border: none;" data-toggle="dropdown">
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item">Signed in as:<br><strong>Admin</strong></button>
                <hr>
                <button class="dropdown-item">Profile</button>
                <button class="dropdown-item">Messages</button>
                <button class="dropdown-item">Change password</button>
                <button class="dropdown-item" style="color: red;"><strong>Sign out</strong></button>
              </div>
            </div>
          </li>
        </form>
      </nav>

      <h2 class="text-center p-4" style="background: #eee;">Complaint Overview</h2>

      <div class="card-section" id="complaint-list">
        <!-- Complaint cards will be dynamically inserted here -->
      </div>
    `;
  }

  connectedCallback() {
    var database = firebase.firestore().collection('complaints');
    database.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var CrimeData = doc.data();
        var bytes = CryptoJS.AES.decrypt(CrimeData.data, process.env.ENCRYPTION_KEY);
        var decryptedCrimeDataObject = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        // Determine complaint status (this is based on your logic; adjust as needed)
        let statusBadgeClass = "badge-pending"; // Default status is pending
        let statusText = "Pending";
        if (decryptedCrimeDataObject.status === "resolved") {
          statusBadgeClass = "badge-resolved";
          statusText = "Resolved";
        } else if (decryptedCrimeDataObject.status === "active") {
          statusBadgeClass = "badge-active";
          statusText = "Active";
        }

        var template = `
          <div class="card">
            <h5>Complaint No: ${decryptedCrimeDataObject.ComplaintNo} <span class="badge ${statusBadgeClass}">${statusText}</span></h5>
            <p><strong>Name:</strong> ${decryptedCrimeDataObject.name}</p>
            <p><strong>Subject:</strong> ${decryptedCrimeDataObject.Subject}</p>
            <p><strong>Description:</strong> ${decryptedCrimeDataObject.Description}</p>
          </div>
        `;

        $("#complaint-list").append(template);
      });
    });
  }
}

export default Dashboard;