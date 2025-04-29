const Notfound = () => {
    // Create the container for the dashboard
    const dashboardContainer = document.createElement('div');
    dashboardContainer.id = 'dashboard-container';
    
    // Add styles
    const style = document.createElement('style');
    style.innerHTML = `
      /* Global Styles */
      body {
        font-family: 'Segoe UI', sans-serif;
        margin: 0;
        background-color: #f4f6f9;
        color: #333;
      }
  
      #dashboard-container {
        padding: 40px;
        text-align: center;
        min-height: 100vh;
      }
  
      .dashboard-header {
        margin-bottom: 30px;
      }
  
      .dashboard-header h2 {
        font-size: 2.5em;
        color: #333;
        margin-bottom: 15px;
        font-weight: bold;
      }
  
      .dashboard-header p {
        font-size: 1.2em;
        color: #777;
      }
  
      .stats-grid {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 40px;
        flex-wrap: wrap;
      }
  
      .stat-box {
        background: white;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        text-align: center;
        width: 200px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
  
      .stat-box:hover {
        transform: translateY(-10px);
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
      }
  
      .stat-box h3 {
        font-size: 30px;
        color: #444;
        margin-bottom: 10px;
        font-weight: 600;
      }
  
      .stat-box p {
        font-size: 18px;
        color: #777;
      }
  
      #complaintChartContainer {
        max-width: 800px;
        margin: auto;
        background: #fff;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 50px;
      }
  
      #complaintChart {
        max-width: 100%;
        margin: 20px auto;
      }
  
      .chart-location {
        font-size: 1.1em;
        color: #555;
        margin-top: 10px;
        margin-bottom: 20px;
      }
  
      /* For Small Screens */
      @media (max-width: 768px) {
        .stats-grid {
          flex-direction: column;
        }
  
        .stat-box {
          width: 90%;
          margin-bottom: 20px;
        }
      }
    `;
    document.head.appendChild(style);
  
    // Create dashboard content
    const header = document.createElement('div');
    header.classList.add('dashboard-header');
    header.innerHTML = `
      <h2>Crime Case Dashboard</h2>
      <p>Current status overview of registered complaints</p>
    `;
  
    // Create statistics grid
    const statsGrid = document.createElement('div');
    statsGrid.classList.add('stats-grid');
    statsGrid.innerHTML = `
      <div class="stat-box" style="border-left: 5px solid #ffc107;">
        <h3>5</h3>
        <p>Active Cases</p>
      </div>
      <div class="stat-box" style="border-left: 5px solid #28a745;">
        <h3>0</h3>
        <p>Resolved Cases</p>
      </div>
      <div class="stat-box" style="border-left: 5px solid #dc3545;">
        <h3>5</h3>
        <p>Pending Cases</p>
      </div>
    `;
  
    // Create complaint chart container
    const chartContainer = document.createElement('div');
    chartContainer.id = 'complaintChartContainer';
    chartContainer.innerHTML = `
      <h4>Complaint Status Summary</h4>
      <div class="chart-location">📍 Hyderabad District</div>
      <canvas id="complaintChart" width="400" height="300"></canvas>
    `;
  
    // Append all elements to the dashboard container
    dashboardContainer.appendChild(header);
    dashboardContainer.appendChild(statsGrid);
    dashboardContainer.appendChild(chartContainer);
  
    // Add dashboard container to the body
    document.body.appendChild(dashboardContainer);
  
    // Chart.js and Geolocation Logic
    setTimeout(() => {
      const ctx = document.getElementById('complaintChart');
      if (ctx && window.Chart) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Active', 'Resolved', 'Pending'],
            datasets: [{
              label: 'Number of Cases',
              data: [5, 0, 5],
              backgroundColor: ['#ffc107', '#28a745', '#dc3545'],
              borderRadius: 6
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            },
            plugins: {
              legend: {
                display: false
              },
              title: {
                display: true,
                text: 'Crime Complaint Status'
              }
            }
          }
        });
      }
  
      const locationDiv = document.querySelector('.chart-location');
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude.toFixed(4);
            const lon = position.coords.longitude.toFixed(4);
            locationDiv.textContent = '📍 Your location: Lat ${lat}, Lon ${lon}';
          },
          (err) => {
            locationDiv.textContent = "📍 Location unavailable " ;
          }
        );
      } else {
        locationDiv.textContent = "📍 Geolocation not supported by your browser.";
      }
    }, 100);
  
    return dashboardContainer;
  };
  
  export default Notfound;