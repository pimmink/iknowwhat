export type EpisodeType = {
  broadcastWindowEndDate: number;
  broadcastWindowStartDate: number;
  contentId: string;
  episodeCode: string;
  openDate: number;
  state: string;
  totalScore: number;
}

type Group = {
  amountCorrect: number;
  amountParticipated: number;
  group: string;
  groupType: string;
  totalScore: number;
}

type Phase = {
  name: string,
  offset: number;
}

type Answer = {
  code: string;
  text: string;
}

type Block = {
  clientMetaData: object;
  duration: number;
}

type Stats = {
  amountParticipated: number;
  totalAnswerDeviation: number;
};

type ClientMetaData = {
  episodeId: string;
};

type Event = {
  content: {
    answers: Answer[];
    correctAnswer: string;
    eventProperties: object;
    score: number;
    text: string;
  };
  eventId: string;
  finalized: boolean;
  finalizedDate: number;
  offset: number;
  phases: Phase[];
  stats: {
    groups: Group[];
    averageStats: Stats;
  };
  type: string;
  weekGameBlockNr: number;
}

export type EpisodeDataType = {
  audioSyncType: string;
  blockIndex: number;
  blocks: Block[];
  broadcastWindowEndDate: string;
  broadcastWindowStartDate: string;
  canAudioSync: boolean;
  clientMetaData: ClientMetaData;
  contentId: string;
  contentVersion: number;
  crowdSync: boolean;
  episodeCode: string;
  events: Event[];
  interactionTiming: string;
  openDate: number;
  state: string;
  stats: {
    groups: Group[];
    averageStats: Stats;
  };
  timingVersion: number
  totalScore: number;
  version: number;
}
