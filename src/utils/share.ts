import { copyToClipboard } from './clipboard';

export async function shareMessage(message: string): Promise<void> {
  // Check if Web Share API is supported and we're in a secure context
  if (navigator.share && window.isSecureContext) {
    try {
      await navigator.share({
        text: message,
      });
    } catch (error) {
      // Ignore AbortError (user cancelled)
      if (error instanceof Error && error.name !== 'AbortError') {
        // Fallback to clipboard
        await copyToClipboard(message);
      }
    }
  } else {
    // Fallback to clipboard
    await copyToClipboard(message);
  }
}