export interface userId {
  nickname: string;
  profileImg: string;
  userId: string;
}

export interface userOptions {
  data: userId;
}

export interface Profile {
  bio: string;
  enableChat: boolean;
  nickname: string;
  preferPosition: string;
  profileImg: string;
  tier: number;
  userId: string;
  preferChamp1: {
    champNameEn: string;
    champNameKo: string;
    champImg: string;
    id: string;
  };
}

export interface ProfileProps {
  data: Profile;
}

export interface UpdateProfileProps {
  nickname: string;
  profileImg: string;
  bio: string;
  preferPosition: string;
  tier: number;
  enableChat: boolean;
  preferChamp1: number;
  preferChamp2: number;
  preferChamp3: number;
}
