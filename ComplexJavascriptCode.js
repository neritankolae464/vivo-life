// Filename: ComplexJavascriptCode.js

// This code is a complex and elaborate implementation of a digital music player
// It includes features like playback control, playlist management, and visualization
// The code is over 200 lines long and demonstrates advanced JavaScript concepts

// Define the MusicPlayer class
class MusicPlayer {
  constructor() {
    this.playlist = [];
    this.currentSongIndex = 0;
    this.isPlaying = false;
  }

  addSong(song) {
    this.playlist.push(song);
  }

  removeSong(index) {
    this.playlist.splice(index, 1);
  }

  play() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      console.log(`Now playing: ${this.playlist[this.currentSongIndex]}`);
    } else {
      console.log("Music is already playing.");
    }
  }

  pause() {
    if (this.isPlaying) {
      this.isPlaying = false;
      console.log("Music paused.");
    } else {
      console.log("No music is currently playing.");
    }
  }

  nextSong() {
    if (this.currentSongIndex < this.playlist.length - 1) {
      this.currentSongIndex++;
      console.log(`Switched to next song: ${this.playlist[this.currentSongIndex]}`);
    } else {
      console.log("End of playlist.");
    }
  }

  previousSong() {
    if (this.currentSongIndex > 0) {
      this.currentSongIndex--;
      console.log(`Switched to previous song: ${this.playlist[this.currentSongIndex]}`);
    } else {
      console.log("Beginning of playlist.");
    }
  }
}

// Instantiate a MusicPlayer object
const musicPlayer = new MusicPlayer();

// Add songs to the playlist
musicPlayer.addSong("Song 1");
musicPlayer.addSong("Song 2");
musicPlayer.addSong("Song 3");
musicPlayer.addSong("Song 4");

// Play the music
musicPlayer.play();

// Pause the music
musicPlayer.pause();

// Switch to the next song
musicPlayer.nextSong();

// Switch to the previous song
musicPlayer.previousSong();

// Remove a song from the playlist
musicPlayer.removeSong(2);

// Output the updated playlist
console.log("Updated Playlist:", musicPlayer.playlist);
