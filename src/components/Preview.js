import "./Preview.css"

export const Preview = ({ text, darkMode }) => {
    return (
      <div className="preview">
        <h2>Preview Document</h2>
        <textarea value={text} readOnly></textarea>
      </div>
    );
  };
  
