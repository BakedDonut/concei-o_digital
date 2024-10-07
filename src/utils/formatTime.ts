export function formatTime(time: string){
    let formattedText = time.replace(/[^\d]/g, '');
    if (formattedText.length > 2) {
      formattedText = `${formattedText.slice(0, 2)}:${formattedText.slice(2, 4)}`;
    }
    return formattedText;
}