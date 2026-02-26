// ======================
// 接收端代码 (B.html)
// ======================

// 获取DOM元素
let videoElement, sourceElement, currentSrcEl, currentVideoEl, comStatusEl, lastUpdateEl, videoTitleEl;

// 初始化函数
function initVideoPlayer() {
    videoElement = document.getElementById('main-video');
    sourceElement = document.getElementById('video-source');
    currentSrcEl = document.getElementById('current-src');
    currentVideoEl = document.getElementById('current-video');
    comStatusEl = document.getElementById('com-status');
    lastUpdateEl = document.getElementById('last-update');
    videoTitleEl = document.getElementById('current-video-title');
    
    // 初始化：检查是否有已存储的视频
    const savedVideo = localStorage.getItem('videoSource');
    if (savedVideo) {
        try {
            const videoData = JSON.parse(savedVideo);
            updateVideoSource(videoData);
        } catch (e) {
            console.error("解析视频数据失败:", e);
        }
    }
    
    // 监听storage事件
    window.addEventListener('storage', handleStorageEvent);
}

// 更新视频源函数
function updateVideoSource(videoData) {
    console.log("更新视频源:", videoData);
    
    // 保存当前播放时间
    const currentTime = videoElement ? videoElement.currentTime : 0;
    
    // 更新视频源
    if (sourceElement) {
        sourceElement.src = videoData.url;
    }
    
    // 重新加载视频
    if (videoElement) {
        videoElement.load();
        
        // 恢复播放位置
        videoElement.currentTime = currentTime;
        
        // 自动播放（可选）
        videoElement.play().catch(e => console.log("自动播放被阻止:", e));
    }
    
    // 更新显示信息
    if (currentSrcEl) {
        currentSrcEl.textContent = videoData.url;
    }
    
    if (currentVideoEl) {
        currentVideoEl.textContent = videoData.name;
    }
    
    // 更新视频标题
    if (videoTitleEl) {
        videoTitleEl.textContent = videoData.name || "未知视频";
    }
    
    if (lastUpdateEl) {
        lastUpdateEl.textContent = new Date(videoData.timestamp).toLocaleTimeString();
    }
}

// 处理storage事件
function handleStorageEvent(e) {
    if (e.key === 'videoSource') {
        try {
            // 解析存储的数据
            const videoData = JSON.parse(e.newValue);
            
            // 更新视频源
            updateVideoSource(videoData);
            
            // 更新状态显示
            if (comStatusEl) {
                comStatusEl.textContent = "已接收更新";
                comStatusEl.style.color = "#2ecc71";
                
                // 添加视觉反馈
                setTimeout(() => {
                    comStatusEl.textContent = "等待更新";
                    comStatusEl.style.color = "#fff";
                }, 2000);
            }
        } catch (error) {
            console.error("处理视频更新时出错:", error);
            if (comStatusEl) {
                comStatusEl.textContent = "错误: " + error.message;
                comStatusEl.style.color = "#e74c3c";
            }
        }
    }
}

// 初始化视频播放器
document.addEventListener('DOMContentLoaded', initVideoPlayer);