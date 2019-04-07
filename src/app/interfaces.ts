export interface Slot {
  time?:             string;
  activity?:         string;
}

export interface User {
  bpm?:             string;
  location?: {
    lat:            string;
    lon:            string;
  };
  alert?:           boolean;
  schedule?:        Slot[];
}
