const loadingPace = () => {
  // Check if we're in the browser environment
  if (typeof window === 'undefined') return;

  // Helper function to toggle loading state
  const toggleLoadingState = (isDone) => {
    const preloader = document.querySelector("#preloader");
    const loading = document.querySelector(".loading");
    
    if (preloader) {
      if (isDone) {
        preloader.classList.add("isdone");
      } else {
        preloader.classList.remove("isdone");
      }
    }
    
    if (loading) {
      if (isDone) {
        loading.classList.add("isdone");
      } else {
        loading.classList.remove("isdone");
      }
    }
  };

  // Initialize Pace events if Pace is available
  if (window.Pace) {
    window.Pace.on("start", () => toggleLoadingState(false));
    window.Pace.on("done", () => toggleLoadingState(true));

    // Check if page is already loaded
    if (document.querySelector("body")?.classList.contains("pace-done")) {
      toggleLoadingState(true);
    }
  } else {
    // If Pace is not available, set a short delay to show loading then hide
    setTimeout(() => toggleLoadingState(true), 500);
  }

  // Fallback for window load event (cleanup)
  const handleLoad = () => {
    toggleLoadingState(true);
    const paceRunning = document.querySelector('.pace-running');
    if (paceRunning) {
      paceRunning.classList.remove('pace-running');
    }
  };

  // Remove existing listener to prevent duplicates
  window.removeEventListener("load", handleLoad);
  window.addEventListener("load", handleLoad);
};

export default loadingPace;
