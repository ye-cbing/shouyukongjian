// ======================
// 发送端代码 (A.html)
// ======================

// 更改视频源函数
function changeVideoSource(videoUrl, videoName) {
    // 创建要发送的数据对象
    const videoData = {
        url: videoUrl,
        name: videoName,
        timestamp: new Date().toISOString()
    };
    
    // 将数据存储到localStorage
    localStorage.setItem('videoSource', JSON.stringify(videoData));
    
    // 更新状态显示
    if (document.getElementById('current-video')) {
        document.getElementById('current-video').textContent = videoName;
    }
    
    if (document.getElementById('last-update')) {
        document.getElementById('last-update').textContent = new Date().toLocaleTimeString();
    }
    
    // 添加视觉反馈
    const statusEl = document.getElementById('com-status');
    if (statusEl) {
        statusEl.textContent = "更新已发送!";
        statusEl.style.color = "#f1c40f";
        
        setTimeout(() => {
            statusEl.textContent = "正常";
            statusEl.style.color = "#2ecc71";
        }, 2000);
    }
}

// 绑定事件监听器（可选）
document.addEventListener('DOMContentLoaded', function() {
    // 如果页面上有视频控制按钮
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-url');
            const videoName = this.getAttribute('data-name');
            if (videoUrl && videoName) {
                changeVideoSource(videoUrl, videoName);
            }
        });
    });
});

// 此文件已被弃用
// 视频功能已迁移到嵌入式播放器实现
