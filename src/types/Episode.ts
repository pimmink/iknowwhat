export type EpisodeType = {
  broadcastWindowEndDate: number;
  broadcastWindowStartDate: number;
  contentId: string;
  episodeCode: string;
  openDate: number;
  state: string;
  totalScore: number;
}

export type EpisodeDataType = {
  audioSyncType: string;
  blockIndex: number;
  blocks: [];
  broadcastWindowEndDate: string;
  broadcastWindowStartDate: string;
  canAudioSync: boolean;
  clientMetaData: object; //{episodeId: "5fe9f2f5e4b02b2f9c166481"}
  contentId: string;
  contentVersion: number;
  crowdSync: boolean;
  episodeCode: string;
  events: [];
  interactionTiming: string;
  openDate: number;
  state: string;
  stats: object;
  timingVersion: number
  totalScore: number;
  version: number;
}
