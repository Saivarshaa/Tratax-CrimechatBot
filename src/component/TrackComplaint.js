class TrackComplaint extends HTMLElement {
	constructor() {
	  super();
	  this.innerHTML = `
		<div class="container">
		  <div class="track-container">
			<div class="track-title">🚨 Track Your Complaint</div>
			<form>
			  <div class="form-group">
				<label for="cid">Complaint ID</label>
				<input type="text" id="cid" name="CId" class="form-control" placeholder="Enter your complaint ID" required>
			  </div>
			  <div class="form-group">
				<label for="dob">Date of Birth</label>
				<input type="date" id="dob" name="Dob" class="form-control" required>
			  </div>
			  <button type="submit" class="btn btn-submit">Submit</button>
			</form>
		  </div>
		</div>
  
		<style>
		  body {
			background: linear-gradient(to right, #e0f7fa, #ffffff);
			font-family: 'Segoe UI', sans-serif;
		  }
		  .track-container {
			max-width: 600px;
			margin: 80px auto;
			background-color: #ffffff;
			border-radius: 12px;
			box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
			padding: 40px;
		  }
		  .track-title {
			font-size: 28px;
			font-weight: 600;
			color: #007bff;
			margin-bottom: 25px;
			text-align: center;
		  }
		  label {
			font-size: 16px;
			font-weight: 500;
		  }
		  .form-control {
			height: 45px;
			border-radius: 6px;
		  }
		  .btn-submit {
			border-radius: 6px;
			padding: 12px 24px;
			font-size: 16px;
			width: 100%;
			background-color: #28a745;
			color: white;
			font-weight: 500;
		  }
		  .btn-submit:hover {
			background-color: #218838;
		  }
		  .form-group {
			margin-bottom: 20px;
		  }
		</style>
	  `;
	}
  }
  
  // 👇 Register and export the custom element class
  export default TrackComplaint;
  