import "./LoadingSpinner.css";

function LoadingSpinner({ size = "medium", fullscreen = false }) {
  const spinnerClass = `spinner spinner-${size}`;

  if (fullscreen) {
    return (
      <div className="spinner-fullscreen">
        <div className={spinnerClass} role="status" aria-label="Loading">
          <div className="spinner-inner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={spinnerClass} role="status" aria-label="Loading">
      <div className="spinner-inner"></div>
    </div>
  );
}

export default LoadingSpinner;
