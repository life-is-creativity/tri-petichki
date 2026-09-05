const records = [...document.querySelectorAll(".record-button")];
const resetButton = document.querySelector(".reset-button");
const startedRecords = new Set();

function setInactive(record, { pause = false } = {}) {
  const video = record.querySelector("video");

  video.muted = true;
  if (pause) video.pause();

  record.classList.remove("active");
  record.setAttribute("aria-pressed", "false");
}

function updateCollectionState() {
  const hasActiveRecord = records.some((record) => record.classList.contains("active"));
  document.body.classList.toggle("has-active", hasActiveRecord);
}

records.forEach((record) => {
  const video = record.querySelector("video");

  record.addEventListener("click", async () => {
    const isCurrentRecord = record.classList.contains("active");

    // Повторный клик выключает выбранную пластинку и снимает активное состояние.
    if (isCurrentRecord) {
      setInactive(record, { pause: true });
      updateCollectionState();
      return;
    }

    // Перед включением новой пластинки гарантированно выключаем звук у всех остальных.
    records.forEach((otherRecord) => {
      setInactive(otherRecord);
    });

    // При первом выборе каждая пластинка всегда начинает звучать с самого начала.
    if (!startedRecords.has(record)) {
      video.currentTime = 0;
      startedRecords.add(record);
    }

    video.muted = false;
    record.classList.add("active");
    record.setAttribute("aria-pressed", "true");
    updateCollectionState();

    try {
      await video.play();
    } catch (error) {
      // Если браузер не разрешил воспроизведение со звуком, возвращаем безопасное muted-состояние.
      setInactive(record, { pause: true });
      updateCollectionState();
      console.warn("Не удалось запустить пластинку:", error);
    }
  });
});

resetButton.addEventListener("click", () => {
  records.forEach((record) => {
    const video = record.querySelector("video");

    setInactive(record, { pause: true });

    if (video.readyState > 0) {
      video.currentTime = 0;
    } else {
      video.addEventListener("loadedmetadata", () => {
        video.currentTime = 0;
      }, { once: true });
    }
  });

  startedRecords.clear();
  updateCollectionState();
});

// При уходе со страницы не оставляем звук играть в фоне.
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    records.forEach((record) => setInactive(record, { pause: true }));
    updateCollectionState();
  }
});
