function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const mins = now.getMinutes().toString().padStart(2, '0');
    const secs = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('mins').innerHTML = mins;
    document.getElementById('secs').innerHTML = secs;

    setTimeout(updateTime, 1000);
}

updateTime();     function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // Định dạng thời gian để có 2 chữ số
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Hiển thị thời gian trên đồng hồ
    var clockDiv = document.getElementById('clock');
    clockDiv.innerText = hours + ':' + minutes + ':' + seconds;
    
    // Gọi lại hàm updateClock mỗi giây
    setTimeout(updateClock, 1000);
}

// Khởi động đồng hồ khi trang đã được load
window.onload = function() {
    updateClock();
};