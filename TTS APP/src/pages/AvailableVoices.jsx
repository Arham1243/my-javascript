import React, { useState, useEffect } from "react";

const Welcome = () => {
  const [voices, setVoices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getVoices = async () => {
      const options = { method: "GET" };
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.elevenlabs.io/v1/voices",
          options
        );
        const voicesData = await response.json();
        setVoices(voicesData.voices);
        setFilteredVoices(voicesData.voices);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getVoices();
  }, []);

  const copyVoiceId = (e) => {
    const button = e.target;
    const content = button.getAttribute("tooltip-content");
    const voiceId = content;

    // Copy content to clipboard
    navigator.clipboard
      .writeText(content)
      .then(() => {
        // Update tooltip content
        button.setAttribute("tooltip-content", "Copied Voice ID");
        setTimeout(() => {
          button.setAttribute("tooltip-content", voiceId);
        }, 1500);
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  const [filteredVoices, setFilteredVoices] = useState([]);

  const searchVoice = (e) => {
    const query = e.target.value;
    
    // Filter voices based on search query
    const newFilteredVoices = voices.filter((voice) =>
      voice.name.toLowerCase().includes(query.toLowerCase())
    );

    // Update filtered voices state
    setFilteredVoices(newFilteredVoices);
  };


  return (
    <div className="page-content">
      <div className="searchWrapper">
        <div className="section-content">
          <div className="heading mb-0">Available Voices</div>
        </div>
        <div className="field mb-0">
          <div className="wrapper">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => searchVoice(e)}
            />
            <div className="icon">
              <i className="fa-solid fa-search"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="info my-4">
        <div className="row no-gutters">
          <div className="col-lg-12">
            <ul className="voices voices--listing">
              {loading ? (
                <img
                  src="./src/assets/images/loading.gif"
                  className="loader"
                  alt="Loading"
                />
              ) : (
                filteredVoices.map((voice, i) => (
                  <li key={i}>
                    <input
                      required
                      type="radio"
                      name="voices"
                      // id={`${voice.voice_id}`}
                      className="voices__check"
                    />
                    <label
                      className="voices__single"
                      htmlFor={`${voice.voice_id}`}
                    >
                      <button type="button" className="audio">
                        <audio src={voice.preview_url} controls></audio>
                      </button>

                      <div className="info">
                        <div className="title">
                          {voice.name}

                          <div className="tags">
                            <span className="tag">
                              {voice.labels["accent"]}
                            </span>
                            <span className="tag">
                              {voice.labels["gender"]}
                            </span>
                            <span className="tag">
                              {voice.labels["description"]}
                            </span>
                            <span className="tag">
                              {voice.labels["use case"]}
                            </span>
                          </div>
                          <button
                            type="button"
                            className="voice-id"
                            onClick={(e) => copyVoiceId(e)}
                            tooltip-content={voice.voice_id}
                          >
                            ID
                          </button>
                        </div>
                      </div>
                    </label>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
