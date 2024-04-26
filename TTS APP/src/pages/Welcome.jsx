import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Welcome = () => {
  const [voices, setVoices] = useState([]);
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const [filteredVoices, setFilteredVoices] = useState([]);
  const voiceIdRef = useRef();
  const textRef = useRef();
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const voicesBoxRef = useRef(null);
  const [apiError, setApiError] = useState("");
  const apiKey = import.meta.env.API_KEY;
  
  const [selectedVoice, setSelectedVoice] = useState(
    voicesLoaded ? voices[0] : { name: "" }
  );
  const [formData, setFormData] = useState({
    text: "",
  });
  const [selectedVoiceName, setSelectedVoiceName] = useState({
    name: voices[0],
  });

  useEffect(() => {
    const getVoices = async () => {
      const options = { method: "GET" };
      try {
        const response = await fetch(
          "https://api.elevenlabs.io/v1/voices",
          options
        );
        const voicesData = await response.json();
        setVoices(voicesData.voices);
        setFilteredVoices(voicesData.voices);
        setVoicesLoaded(true);
      } catch (error) {
        console.error(error);
        setVoicesLoaded(true);
      }
    };

    getVoices();
  }, []);

  const handleSelectVoice = (e, voice_index) => {
    if (!e.target.classList.contains("audio") && voicesLoaded) {
      setSelectedVoice(filteredVoices[voice_index]);
      setSelectedVoiceName(filteredVoices[voice_index]);
      voicesBoxRef.current.classList.add("d-none");
    }
  };

  const handleInputClick = () => {
    voicesBoxRef.current.classList.remove("d-none");
  };

  const handleChange = (e) => {
    searchVoice(e);
    setSelectedVoiceName({ name: e.target.value });
    voicesBoxRef.current.classList.remove("d-none");
  };
  const searchVoice = (e) => {
    const query = e.target.value;

    // Update selectedVoice name
    setSelectedVoice({ name: query });

    // Filter voices based on search query
    const newFilteredVoices = voices.filter((voice) =>
      voice.name.toLowerCase().includes(query.toLowerCase())
    );

    // Update filtered voices state
    setFilteredVoices(newFilteredVoices);
  };

  const handleChangeForInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const CHUNK_SIZE = 1024;
    const url =
      "https://api.elevenlabs.io/v1/text-to-speech/" + selectedVoice.voice_id;

    const headers = {
      Accept: "audio/mpeg",
      "Content-Type": "application/json",
      "xi-api-key": apiKey,
    };

    const data = {
      text: formData.text,
      model_id: "eleven_monolingual_v1",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.5,
      },
    };

    try {
      setLoading(true);
      const response = await axios.post(url, data, {
        headers,
        responseType: "blob",
      });
      const blob = response.data;
      const audioUrl = URL.createObjectURL(blob);
      setAudioUrl(audioUrl);
    } catch (error) {
      console.error("Error:", error);
      if (
        error.response.request.status === 401 ||
        error.response.request.status === 402
      ) {
        setApiError(
          "Oops! It looks like we've reached the limit for our free API usage"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-content">
      <div className="section-content">
        <div className="heading">Speech Synthesis</div>
      </div>

      <div className="info my-4">
        <form onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <div className="field">
                <label className="title">
                  Select Voice <span className="text-danger">*</span>
                </label>
                <div className="wrapper">
                  <input
                    type="text"
                    ref={voiceIdRef}
                    data-voice-id={selectedVoice?.voice_id || ""}
                    value={selectedVoiceName.name}
                    onClick={handleInputClick}
                    onChange={handleChange}
                  />
                  <div className="icon">
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>

                <ul className="voices d-none" ref={voicesBoxRef}>
                  {filteredVoices.map((voice, i) => (
                    <li key={i}>
                      <input
                        required
                        type="radio"
                        name="voices"
                        id={`${voice.voice_id}`}
                        className="voices__check"
                      />
                      <label
                        className="voices__single"
                        htmlFor={`${voice.voice_id}`}
                        onClick={(e) => {
                          handleSelectVoice(e, i);
                        }}
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
                          </div>
                        </div>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="field">
                <label className="title">
                  Text <span className="text-danger">*</span>
                </label>
                <textarea
                  required
                  maxLength={50}
                  className="pe-3"
                  rows="6"
                  name="text"
                  ref={textRef}
                  onChange={handleChangeForInput}
                >
                  {formData.text}
                </textarea>
              </div>
            </div>
            <div className="col-lg-12">
              <button className="themeBtn themeBtn--full">
                <div className="fixed-height">
                  {!loading ? (
                    "Convert"
                  ) : (
                    <img
                      src="./src/assets/images/loading.gif"
                      className="loader loader--white"
                      alt="Loading"
                    />
                  )}
                </div>
              </button>
            </div>
            {audioUrl && (
              <div className="col-lg-12 my-3">
                <div className="output-audio section-content text-center">
                  <div className="heading mb-4 ">Output Audio</div>
                  <audio src={audioUrl} controls></audio>
                </div>
              </div>
            )}
            {apiError && (
              <div className="col-lg-12 my-3">
                <div className="output-audio section-content text-center">
                  <p>{apiError}</p>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
