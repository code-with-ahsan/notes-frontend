export interface INote {
  text: string;
  link: string;
  thumbnailUrl?: string;
}

const DUMMY_NOTES: INote[] = [
  {
    text: "Ahsan's Twitch",
    link: "https://twitch.tv/codewithahsan",
    thumbnailUrl: "",
  },
  { text: "Get a job", link: "https://rozee.pk", thumbnailUrl: "" },
];

export default DUMMY_NOTES;