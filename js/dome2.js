/**
 * Created by Administrator on 2017/5/15.
 */
window.onload = function () {
    window.audioPlayer = window.audioPlayer ||{};
    (function () {
        function AudioPlayer(audioID) {
            // if (audioID){
            //     this.audioEle = document.querySelector(audioID);
            // }else {
            //     this.audioEle = document.createElement('audio');
            // }
            this.audioEle = audioID?document.querySelector(audioID):document.createElement('audio')

        }
        AudioPlayer.prototype.setAudioSrc = function (src) {
            this.audioEle.src = src;
        };
        AudioPlayer.prototype.controls = function (isPlay) {
             isPlay?this.audioEle.play():this.audioEle.pause();
            //control控制播放 开始暂停的方法
            //isPlay：是否播放 true调用播放的方法false调用暂停的方法
        };
        AudioPlayer.prototype.changeVolume = function (volume) {
              this.audioEle.volume = volume>1?volume/100:volume;
        };
        //音频总时长
        //必须等元数据加载成功之后 才可以获取到
        AudioPlayer.prototype.duration = function (callback) {
            this.audioEle.addEventListener("loadedmetadata",function () {
                console.log(this.audioEle.duration);
                callback(this.audioEle.duration)
            }.bind(this));
            if(callback){
                callback(this.audioEle.duration);
            }

        };
        window.audioPlayer.AudioPlayer=AudioPlayer;


        // function init() {
        //     var audioEle = document.querySelector('#audioPlayer');
        //         // audioEle.volume ;
        //     var volumeValue  =document.querySelector('.volumeValue');
        //     var btn = document.querySelector('.controlButton');
        //     volumeValue.onchange=function () {
        //        this.textContent = audioEle.volume = 0;
        //     };
        //     btn.onclick=function () {
        //         // audioEle.pause();\
        //
        //         this.textContent == "播放"?audioEle.play():audioEle.pause();
        //         this.textContent =this.textContent == "播放"?"暂停":"播放";
        //     }
        // }
        // init()
    }());
};
