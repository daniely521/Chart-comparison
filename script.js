function showPage(pageId) {
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(pageId).style.display = 'block';

    if (pageId === 'bar') {
        createBarChart();
    } else if (pageId === 'line') {
        createLineChart();
    } else if (pageId === 'pie') {
        createPieChart();
    }
}

function createBarChart() {
    const ctx = document.getElementById('barChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 153, 0, 0.2)', // Orange 
                    'rgba(0, 153, 255, 0.2)', // Blue
                    'rgba(255, 255, 0, 0.2)', // Yellow
                    'rgba(0, 153, 0, 0.2)', // Green
                    'rgba(153, 0, 255, 0.2)', // Purple
                    'rgba(255, 153, 0, 0.2)', // Orange 
                ],
                borderColor: [
                    'rgba(255, 153, 0, 1)', 
                    'rgba(0, 153, 255, 1)', 
                    'rgba(255, 255, 0, 1)', 
                    'rgba(0, 153, 0, 1)', 
                    'rgba(153, 0, 255, 1)', 
                    'rgba(255, 153, 0, 1)', 
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function createLineChart() {
    const ctx = document.getElementById('lineChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgba(0, 153, 0, 1)', // Green
                tension: 0.1
            }]
        }
    });
}

function createPieChart() {
    const ctx = document.getElementById('pieChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Red', 'Blsue', 'Yellow'],
            datasets: [{
                label: '# of Votes',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgba(255, 0, 0, 0.8)', // Red
                    'rgba(0, 0, 255, 0.8)', // Blue
                    'rgba(255, 255, 0, 0.8)', // Yellow
                ],
                hoverOffset: 4
            }]
        }
    });
}