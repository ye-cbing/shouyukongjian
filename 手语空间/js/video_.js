// 获取DOM元素
const video = document.getElementById('main-video');
const playPauseBtn = document.querySelector('.play-pause');
const centerPlayBtn = document.querySelector('.center-btn');
const progressBar = document.querySelector('.progress-bar');
//const currentTimeElem = document.querySelector('.current-time');
//const durationElem = document.querySelector('.duration');
const volumeBtn = document.querySelector('.volume-btn');
const volumeSlider = document.querySelector('.volume-slider');
const volumeLevel = document.querySelector('.volume-level');
const fullscreenBtn = document.querySelector('.fullscreen-btn');
const loader = document.querySelector('.loader');
const progressContainer = document.querySelector('.progress-container');

// 格式化时间 (秒 -> mm:ss)
//function formatTime(seconds) {
//    const minutes = Math.floor(seconds / 60);
//    seconds = Math.floor(seconds % 60);
//    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//}

// 初始化视频
function initVideo() {
    // 设置视频时长
    //video.addEventListener('loadedmetadata', function() {
    //    durationElem.textContent = formatTime(video.duration);
    //});
    
    // 更新播放进度
    video.addEventListener('timeupdate', function() {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${percent}%`;
        //currentTimeElem.textContent = formatTime(video.currentTime);
    });
    
    // 显示加载动画
    video.addEventListener('waiting', function() {
        loader.style.display = 'block';
    });
    
    // 隐藏加载动画
    video.addEventListener('playing', function() {
        loader.style.display = 'none';
    });
    
    // 播放结束事件
    video.addEventListener('ended', function() {
        playPauseBtn.textContent = '▶';
        centerPlayBtn.textContent = '▶';
    });
}

// 播放/暂停视频
function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = '⏸';
        centerPlayBtn.textContent = '⏸';
    } else {
        video.pause();
        playPauseBtn.textContent = '▶';
        centerPlayBtn.textContent = '▶';
    }
}

// 点击进度条跳转
progressContainer.addEventListener('click', function(e) {
    const progressWidth = this.clientWidth;
    const clickX = e.offsetX;
    const duration = video.duration;
    
    video.currentTime = (clickX / progressWidth) * duration;
});

// 设置音量
volumeSlider.addEventListener('click', function(e) {
    const volumeWidth = this.clientWidth;
    const clickX = e.offsetX;
    let volume = clickX / volumeWidth;
    
    // 确保音量在0-1之间
    volume = volume < 0 ? 0 : volume;
    volume = volume > 1 ? 1 : volume;
    
    video.volume = volume;
    volumeLevel.style.width = `${volume * 100}%`;
    
    // 更新音量图标
    if (volume > 0.5) {
        volumeBtn.textContent = '🔊';
    } else if (volume > 0) {
        volumeBtn.textContent = '🔈';
    } else {
        volumeBtn.textContent = '🔇';
    }
});

// 静音切换
volumeBtn.addEventListener('click', function() {
    if (video.volume > 0) {
        video.volume = 0;
        volumeLevel.style.width = '0%';
        volumeBtn.textContent = '🔇';
    } else {
        video.volume = 0.7;
        volumeLevel.style.width = '70%';
        volumeBtn.textContent = '🔊';
    }
});

// 全屏切换
function toggleFullScreen() {
    const playerContainer = document.querySelector('.player-container');
    
    if (!document.fullscreenElement) {
        if (playerContainer.requestFullscreen) {
            playerContainer.requestFullscreen();
        } else if (playerContainer.mozRequestFullScreen) { // Firefox
            playerContainer.mozRequestFullScreen();
        } else if (playerContainer.webkitRequestFullscreen) { // Chrome, Safari and Opera
            playerContainer.webkitRequestFullscreen();
        } else if (playerContainer.msRequestFullscreen) { // IE/Edge
            playerContainer.msRequestFullscreen();
        }
        fullscreenBtn.textContent = '⛶';
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
        fullscreenBtn.textContent = '⛶';
    }
}

// 只在全屏按钮存在时添加事件监听器
if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', toggleFullScreen);
}

// 播放按钮事件
playPauseBtn.addEventListener('click', togglePlayPause);
centerPlayBtn.addEventListener('click', togglePlayPause);

// 视频点击播放/暂停
video.addEventListener('click', togglePlayPause);

// 初始化播放器
initVideo();

// 移除了Font Awesome加载代码