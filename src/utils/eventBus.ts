const eventBus = {
  on(event: string, callback?: (...args: any[]) => void) {
    document.addEventListener(event, (e: any) => {
      if (callback) {
        callback(e?.detail);
      }
    });
  },
  dispatch(event: string, data?: unknown) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  remove(event: string, callback: (...args: any[]) => void) {
    document.removeEventListener(event, callback);
  },
};

export default eventBus;
