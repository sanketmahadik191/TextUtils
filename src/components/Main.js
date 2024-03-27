import "./Main.css"

export const Main = ({
  text,
  darkMode,
  handleTextChange,
  clearText,
  toUppercase,
  toLowercase,
  removeExtraSpaces,
  wordCount,
  charCount,
  readingTime,
  toggleTheme,
}) => {
  return (
    <div className="main">
      <p className="heading">TextUtils - Word Counter, Character Counter, Remove Extra Space</p>
      <div className="inputTextArea">
        <h2>Enter Your Text Here</h2>
        <textarea value={text} onChange={handleTextChange}></textarea>
        <div className="btns">
          <button type="button" className="btn btn-primary" onClick={toUppercase}>
            Convert Uppercase
          </button>
          <button type="button" className="btn btn-primary" onClick={toLowercase}>
            Convert Lowercase
          </button>
          <button type="button" className="btn btn-danger" onClick={clearText}>
            Clear Text
          </button>
          <button type="button" className="btn btn-success" onClick={removeExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button type="button" className="btn btn-primary" onClick={() => navigator.clipboard.writeText(text)}>
            Copy To Clipboard
          </button>
          <button type="button" className="btn btn-primary" onClick={toggleTheme}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
      <div className="summary">
        <h1>Summary Of Your Text</h1>
        <p>Number of words: {wordCount}</p>
        <p>Number of characters: {charCount}</p>
        <p>Reading Time: {readingTime} minutes</p>
      </div>
    </div>
  );
};