export default function CutSentence(sentence) {
    if (sentence.length > 7) {
      return sentence.substring(0, 7) + "...";
    }
    return sentence;
  }
  