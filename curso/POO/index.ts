interface VideoPlayerElements {
    videoPlayer: HTMLVideoElement;
    playButton: HTMLButtonElement;
    stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocols {
    playToggle(): void;
    stop(): void;
    iniciarEventos(): void;
}

export class VideoPlayer implements VideoPlayerProtocols {
    private videoPlayer: HTMLVideoElement;
    private playButton: HTMLButtonElement;
    private stopButton: HTMLButtonElement;

    constructor(elements: VideoPlayerElements) {
        this.videoPlayer = elements.videoPlayer;
        this.playButton = elements.playButton;
        this.stopButton = elements.stopButton;
    }

    playToggle(): void {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerText = 'Pause';
        } else {
            this.videoPlayer.pause();
            this.playButton.innerText = 'Play';
        }
    }

    stop(): void {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.playButton.innerText = 'Play';
    }

    iniciarEventos(): void {
        this.playButton.addEventListener('click', () => this.playToggle());
        this.stopButton.addEventListener('click', () => this.stop());
    }
} 

const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('#videoPlayer') as HTMLVideoElement,
    playButton: document.querySelector('#playButton') as HTMLButtonElement,
    stopButton: document.querySelector('#stopButton') as HTMLButtonElement
});

videoPlayer.iniciarEventos();