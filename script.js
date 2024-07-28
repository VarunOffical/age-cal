function calculateDateDifference() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    
    if (day && month && year) {
        const inputDate = new Date(`${year}-${month}-${day}`);
        const currentDate = new Date();
        
        let years = currentDate.getFullYear() - inputDate.getFullYear();
        let months = currentDate.getMonth() - inputDate.getMonth();
        let days = currentDate.getDate() - inputDate.getDate();
        
        if (days < 0) {
            months--;
            days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        }
        
        if (months < 0) {
            years--;
            months += 12;
        }
        
        document.getElementById('years').innerText = `${years} years`;
        document.getElementById('months').innerText = `${months} months`;
        document.getElementById('days').innerText = `${days} days`;
    } else {
        alert('Please fill in all fields');
    }
}
