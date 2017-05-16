/**
 * Created by Administrator on 2017/5/15.
 */

    window.audioPlayer = window.audioPlayer ||{};

    (function () {
        //构造函数
        function AudioPlayer(audioID) {
            this.audioEle = audioID?document.querySelector(audioID):document.createElement('audio');
        }
        //路径
        AudioPlayer.prototype.setAudioSrc = function (src) {
          this.audioEle.src = src;
        };
        //开始，暂停
        AudioPlayer.prototype.controls = function (isPlay) {
            isPlay?this.audioEle.play():this.audioEle.pause();
        };
        //音量
        AudioPlayer.prototype.changeVolume = function (volume) {
            this.audioEle.volume = volume>1?volume/100:volume;
        };
        //快进
        AudioPlayer.prototype.audioKj = function () {
            // isPlay?this.audioEle.play():this.audioEle.pause();
            // this.audioEle.currentTime =currentTime>this.?;
        };
        //循环
        AudioPlayer.prototype.setAudioLoo = function () {

        };
        //设置随机
        AudioPlayer.prototype.setAudioRandom = function () {

        };
        //单曲循环
        AudioPlayer.prototype.setAudiodanqu = function () {
            // isDanqu?this.audioEle.load:this.audioEle.play()
        };
        AudioPlayer.prototype.duration = function (callback) {
            this.audioEle.addEventListener("loadedmetadata",function () {
                console.log(this.audioEle.duration);
                callback(this.audioEle.duration)
            }.bind(this));
            if(callback){
                callback(this.audioEle.duration);
            }

        };
        window.audioPlayer.AudioPlayer = AudioPlayer;
       
    }());
