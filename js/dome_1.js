/**
 * Created by Administrator on 2017/5/15.
 */
window.onload = function () {
    
    (function () {
        function init() {
            var audioPlayer = new window.audioPlayer.AudioPlayer('#audioPlayer');
            audioPlayer.duration(function (duration) {
                console.log(duration)
            })
            document.querySelector('.controlButton').onclick = function () {
                var isPlay = this.textContent == "播放"?true:false;
                audioPlayer.controls(isPlay);
                this.textContent = this.textContent == "播放"?"暂停":"播放";
                document.querySelector(".volumeValue").onchange = function () {
                    audioPlayer.changeVolume(this.value);
                    
                }
            };
        }
        init()
    }())
};