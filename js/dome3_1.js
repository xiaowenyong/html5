/**
 * Created by Administrator on 2017/5/15.
 */
window.onload = function () {

    function init() {
        var audioPlayer = new window.audioPlayer.AudioPlayer('#audioPlayer');
        audioPlayer.duration(function (duration) {
            console.log(duration);
            document.querySelector('#sp2').innerHTML = duration;
        });
        //播放
        document.querySelector('.controlButton').onclick = function () {
            var isPlay = this.textContent == '播放' ? true : false;
            audioPlayer.controls(isPlay);
            this.textContent = this.textContent == "播放" ? "暂停" : "播放";
            // console.log(this.textContent);
            };
        //音量
        document.querySelector('.volumeValue').onchange = function () {
            audioPlayer.changeVolume( this.value);
            document.querySelector('#sp1').innerHTML = this.value;
            // audioPlayer.volume
            // document.querySelector('.volumeValue').volume
        };
        //快进
        document.querySelector('.audioKj').onclick = function () {
            // audio.currentTime +=10;
            audioPlayer.audioKj();
            // audioPlayer.currentTime()
        }
        }

    init();
}


