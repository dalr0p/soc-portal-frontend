const API_BASE_URL = "https://api-worker-sentinel.marcos-foley-sanchez.workers.dev"; // PASTE YOUR URL HERE

async function renderCharts() {
    const analystResponse = await fetch(`${API_BASE_URL}/api/alerts-per-analyst`);
    const analystData = await analystResponse.json();
    new Chart(document.getElementById('analystChart'), {
        type: 'doughnut',
        data: {
            labels: analystData.map(d => d.analyst_name),
            datasets: [{ data: analystData.map(d => d.count) }],
        },
    });

    const typeResponse = await fetch(`${API_BASE_URL}/api/alerts-by-type`);
    const typeData = await typeResponse.json();
    new Chart(document.getElementById('typeChart'), {
        type: 'pie',
        data: {
            labels: typeData.map(d => d.alert_type),
            datasets: [{ data: typeData.map(d => d.count) }],
        },
    });
}
renderCharts();
