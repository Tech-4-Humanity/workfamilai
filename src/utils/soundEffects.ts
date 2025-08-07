// Sound Effects Utility for Enhanced User Experience
// Using Web Audio API for procedural sound generation

class SoundEffects {
  private audioContext: AudioContext | null = null;
  private isEnabled: boolean = true;

  constructor() {
    if (typeof window !== 'undefined' && window.AudioContext) {
      this.audioContext = new AudioContext();
    }
  }

  private createOscillator(frequency: number, type: OscillatorType = 'sine'): OscillatorNode | null {
    if (!this.audioContext || !this.isEnabled) return null;

    const oscillator = this.audioContext.createOscillator();
    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    oscillator.type = type;
    return oscillator;
  }

  private createGain(volume: number = 0.1): GainNode | null {
    if (!this.audioContext) return null;

    const gainNode = this.audioContext.createGain();
    gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
    return gainNode;
  }

  // Neural network activation sound
  playNeuralActivation(pitch: number = 1) {
    if (!this.audioContext || !this.isEnabled) return;

    const freq = 220 * pitch;
    const osc = this.createOscillator(freq, 'triangle');
    const gain = this.createGain(0.05);

    if (!osc || !gain) return;

    osc.connect(gain);
    gain.connect(this.audioContext.destination);

    // Frequency sweep
    osc.frequency.exponentialRampToValueAtTime(freq * 2, this.audioContext.currentTime + 0.1);
    osc.frequency.exponentialRampToValueAtTime(freq, this.audioContext.currentTime + 0.3);

    // Volume envelope
    gain.gain.setValueAtTime(0, this.audioContext.currentTime);
    gain.gain.linearRampToValueAtTime(0.05, this.audioContext.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.4);

    osc.start(this.audioContext.currentTime);
    osc.stop(this.audioContext.currentTime + 0.4);
  }

  // Soft UI interaction sound
  playInteraction() {
    if (!this.audioContext || !this.isEnabled) return;

    const osc = this.createOscillator(800, 'sine');
    const gain = this.createGain(0.02);

    if (!osc || !gain) return;

    osc.connect(gain);
    gain.connect(this.audioContext.destination);

    gain.gain.setValueAtTime(0, this.audioContext.currentTime);
    gain.gain.linearRampToValueAtTime(0.02, this.audioContext.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.1);

    osc.start(this.audioContext.currentTime);
    osc.stop(this.audioContext.currentTime + 0.1);
  }

  // Page transition whoosh
  playPageTransition() {
    if (!this.audioContext || !this.isEnabled) return;

    // Create noise for whoosh effect
    const bufferSize = this.audioContext.sampleRate * 0.5;
    const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
    const data = buffer.getChannelData(0);

    // Generate pink noise
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
    }

    const noise = this.audioContext.createBufferSource();
    noise.buffer = buffer;

    const filter = this.audioContext.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(300, this.audioContext.currentTime);

    const gain = this.createGain(0.03);

    if (!gain) return;

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioContext.destination);

    // Fade in and out
    gain.gain.setValueAtTime(0, this.audioContext.currentTime);
    gain.gain.linearRampToValueAtTime(0.03, this.audioContext.currentTime + 0.1);
    gain.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 0.4);

    noise.start(this.audioContext.currentTime);
    noise.stop(this.audioContext.currentTime + 0.5);
  }

  // Success chime
  playSuccess() {
    if (!this.audioContext || !this.isEnabled) return;

    const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5 chord
    const duration = 0.6;

    frequencies.forEach((freq, index) => {
      setTimeout(() => {
        const osc = this.createOscillator(freq, 'triangle');
        const gain = this.createGain(0.03);

        if (!osc || !gain) return;

        osc.connect(gain);
        gain.connect(this.audioContext!.destination);

        gain.gain.setValueAtTime(0, this.audioContext!.currentTime);
        gain.gain.linearRampToValueAtTime(0.03, this.audioContext!.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioContext!.currentTime + duration);

        osc.start(this.audioContext!.currentTime);
        osc.stop(this.audioContext!.currentTime + duration);
      }, index * 100);
    });
  }

  // Ambient neural activity (subtle background)
  playAmbientNeuralActivity() {
    if (!this.audioContext || !this.isEnabled) return;

    const frequencies = [110, 165, 220, 330]; // A2, E3, A3, E4
    
    frequencies.forEach((freq, index) => {
      setTimeout(() => {
        const osc = this.createOscillator(freq + Math.random() * 10 - 5, 'triangle');
        const gain = this.createGain(0.005 + Math.random() * 0.005);

        if (!osc || !gain) return;

        // LFO for subtle modulation
        const lfo = this.createOscillator(0.1 + Math.random() * 0.2, 'sine');
        const lfoGain = this.createGain(3);

        if (lfo && lfoGain) {
          lfo.connect(lfoGain);
          lfoGain.connect(osc.frequency);
          lfo.start(this.audioContext!.currentTime);
          lfo.stop(this.audioContext!.currentTime + 3);
        }

        osc.connect(gain);
        gain.connect(this.audioContext!.destination);

        gain.gain.setValueAtTime(0, this.audioContext!.currentTime);
        gain.gain.linearRampToValueAtTime(gain.gain.value, this.audioContext!.currentTime + 1);
        gain.gain.linearRampToValueAtTime(0, this.audioContext!.currentTime + 2.5);

        osc.start(this.audioContext!.currentTime);
        osc.stop(this.audioContext!.currentTime + 3);
      }, index * 500 + Math.random() * 1000);
    });
  }

  // Toggle sound effects
  toggle(enabled: boolean) {
    this.isEnabled = enabled;
  }

  // Resume audio context (required for user interaction)
  async resume() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
  }
}

// Create singleton instance
export const soundEffects = new SoundEffects();

// Auto-resume audio context on first user interaction
if (typeof window !== 'undefined') {
  const resumeAudio = async () => {
    await soundEffects.resume();
    document.removeEventListener('click', resumeAudio);
    document.removeEventListener('keydown', resumeAudio);
  };

  document.addEventListener('click', resumeAudio);
  document.addEventListener('keydown', resumeAudio);
}