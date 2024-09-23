/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Timestamp: { input: any; output: any; }
};

export type AbsoluteMediaHttp = {
  __typename?: 'AbsoluteMediaHttp';
  id: Scalars['ID']['output'];
  uri: Scalars['String']['output'];
  uri_absolute: Scalars['String']['output'];
};

export type ApplicationHttp = {
  __typename?: 'ApplicationHttp';
  algorithmicTaskFile: Scalars['String']['output'];
  algorithmicTaskLink: Scalars['String']['output'];
  authorId: Scalars['ID']['output'];
  createdAt: Scalars['Timestamp']['output'];
  creativeTaskFile: Scalars['String']['output'];
  creativeTaskLink: Scalars['String']['output'];
  engineeringTaskCloudLink: Scalars['String']['output'];
  engineeringTaskFile: Scalars['String']['output'];
  engineeringTaskVideo: Scalars['String']['output'];
  engineeringTaskVideoCloudLink: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  nomination: Scalars['String']['output'];
  note: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type ApplicationPayloadHttp = {
  __typename?: 'ApplicationPayloadHttp';
  algorithmicTaskFile: Scalars['String']['output'];
  algorithmicTaskLink: Scalars['String']['output'];
  author: UserHttp;
  creativeTaskFile: Scalars['String']['output'];
  creativeTaskLink: Scalars['String']['output'];
  engineeringTaskCloudLink: Scalars['String']['output'];
  engineeringTaskFile: Scalars['String']['output'];
  engineeringTaskVideo: Scalars['String']['output'];
  engineeringTaskVideoCloudLink: Scalars['String']['output'];
  nomination: Scalars['String']['output'];
  note: Scalars['String']['output'];
};

export type CountryHttp = {
  __typename?: 'CountryHttp';
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type CountryHttpList = {
  __typename?: 'CountryHttpList';
  countRows: Scalars['Int']['output'];
  countries: Array<CountryHttp>;
};

export type CourseApiMediaCollectionHttp = {
  __typename?: 'CourseAPIMediaCollectionHttp';
  banner_image?: Maybe<AbsoluteMediaHttp>;
  course_image?: Maybe<MediaHttp>;
  course_video?: Maybe<MediaHttp>;
  id: Scalars['ID']['output'];
  image?: Maybe<ImageHttp>;
};

export type CourseHttp = {
  __typename?: 'CourseHttp';
  blocks_url: Scalars['String']['output'];
  course_id: Scalars['String']['output'];
  effort: Scalars['String']['output'];
  end: Scalars['Timestamp']['output'];
  enrollment_end: Scalars['Timestamp']['output'];
  enrollment_start: Scalars['Timestamp']['output'];
  hidden: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  invitation_only: Scalars['Boolean']['output'];
  media: CourseApiMediaCollectionHttp;
  mobile_available: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  number: Scalars['String']['output'];
  org: Scalars['String']['output'];
  overview?: Maybe<Scalars['String']['output']>;
  pacing: Scalars['String']['output'];
  short_description: Scalars['String']['output'];
  start: Scalars['Timestamp']['output'];
  start_display: Scalars['String']['output'];
  start_type: Scalars['String']['output'];
};

export type CoursesListHttp = {
  __typename?: 'CoursesListHttp';
  countRows: Scalars['Int']['output'];
  courses: Array<CourseHttp>;
};

export type ImageHttp = {
  __typename?: 'ImageHttp';
  id: Scalars['ID']['output'];
  large: Scalars['String']['output'];
  raw: Scalars['String']['output'];
  small: Scalars['String']['output'];
};

export type MediaHttp = {
  __typename?: 'MediaHttp';
  id: Scalars['ID']['output'];
  uri: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ConfirmActivation: SignInResponse;
  CreateApplication: ApplicationHttp;
  CreateParentRel: Response;
  CreateProjectPage: ProjectPageHttp;
  CreateUser: UserHttp;
  DeleteParentRel: Response;
  DeleteProjectPage: Response;
  DeleteUser: Response;
  ForgotPassword: Response;
  RefreshToken: SignInResponse;
  ResetPassword: Response;
  SetActivationByLink: Response;
  SetIsBanned: Response;
  SetUserIsActive: Response;
  SignIn: SignInResponse;
  SignUp: Response;
  UpdateProjectPage: ProjectPageHttp;
  UpdateUser: UserHttp;
};


export type MutationConfirmActivationArgs = {
  activationLink: Scalars['String']['input'];
};


export type MutationCreateApplicationArgs = {
  input: NewApplication;
};


export type MutationCreateParentRelArgs = {
  childID: Scalars['ID']['input'];
  parentId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  input: NewUser;
};


export type MutationDeleteParentRelArgs = {
  childID: Scalars['ID']['input'];
  parentId: Scalars['ID']['input'];
};


export type MutationDeleteProjectPageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  resetLink: Scalars['String']['input'];
};


export type MutationSetActivationByLinkArgs = {
  activationByLink: Scalars['Boolean']['input'];
};


export type MutationSetIsBannedArgs = {
  isBanned: Scalars['Boolean']['input'];
  projectPageId: Scalars['ID']['input'];
};


export type MutationSetUserIsActiveArgs = {
  id: Scalars['ID']['input'];
  isActive: Scalars['Boolean']['input'];
};


export type MutationSignInArgs = {
  input: SignIn;
};


export type MutationSignUpArgs = {
  input: SignUp;
};


export type MutationUpdateProjectPageArgs = {
  input: UpdateProjectPage;
};


export type MutationUpdateUserArgs = {
  input: UpdateUser;
};

export type NewApplication = {
  algorithmicTaskFile?: InputMaybe<Scalars['String']['input']>;
  algorithmicTaskLink?: InputMaybe<Scalars['String']['input']>;
  creativeTaskFile?: InputMaybe<Scalars['String']['input']>;
  creativeTaskLink?: InputMaybe<Scalars['String']['input']>;
  engineeringTaskCloudLink?: InputMaybe<Scalars['String']['input']>;
  engineeringTaskFile?: InputMaybe<Scalars['String']['input']>;
  engineeringTaskVideo?: InputMaybe<Scalars['String']['input']>;
  engineeringTaskVideoCloudLink?: InputMaybe<Scalars['String']['input']>;
  nomination: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
};

export type NewUser = {
  birthdate: Scalars['Timestamp']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  fullNameNative: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Role;
};

export type NewUserResponse = {
  __typename?: 'NewUserResponse';
  birthdate: Scalars['Timestamp']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  fullNameNative: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role: Scalars['Int']['output'];
};

export type NominationHttp = {
  __typename?: 'NominationHttp';
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  maxAge: Scalars['Int']['output'];
  minAge: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type NominationHttpList = {
  __typename?: 'NominationHttpList';
  countRows: Scalars['Int']['output'];
  nominations: Array<NominationHttp>;
};

export type ProjectPageHttp = {
  __typename?: 'ProjectPageHttp';
  authorId: Scalars['ID']['output'];
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  instruction: Scalars['String']['output'];
  isBanned: Scalars['Boolean']['output'];
  isShared: Scalars['Boolean']['output'];
  linkToScratch: Scalars['String']['output'];
  notes: Scalars['String']['output'];
  projectId: Scalars['ID']['output'];
  projectUpdatedAt: Scalars['Timestamp']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type ProjectPageHttpList = {
  __typename?: 'ProjectPageHttpList';
  countRows: Scalars['Int']['output'];
  projectPages: Array<ProjectPageHttp>;
};

export type Query = {
  __typename?: 'Query';
  GetAllCountries: CountryHttpList;
  GetAllNominations: NominationHttpList;
  GetAllProjectPagesByAccessToken: ProjectPageHttpList;
  GetAllProjectPagesByAuthorId: ProjectPageHttpList;
  GetAllUsers: UsersList;
  GetChildrenByParent: UsersList;
  GetCourseById: CourseHttp;
  GetCoursesByUser: CoursesListHttp;
  GetParentsByChild: UsersList;
  GetProjectPageById: ProjectPageHttp;
  GetSettings: Settings;
  GetUserByAccessToken: UserHttp;
  GetUserById: UserHttp;
  Me: UserHttp;
};


export type QueryGetAllCountriesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllNominationsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllProjectPagesByAccessTokenArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllProjectPagesByAuthorIdArgs = {
  id: Scalars['ID']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllUsersArgs = {
  active: Scalars['Boolean']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  roles: Array<Role>;
};


export type QueryGetChildrenByParentArgs = {
  parentId: Scalars['ID']['input'];
};


export type QueryGetCourseByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetParentsByChildArgs = {
  childId: Scalars['ID']['input'];
};


export type QueryGetProjectPageByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID']['input'];
};

export type Response = {
  __typename?: 'Response';
  ok: Scalars['Boolean']['output'];
};

export enum Role {
  Anonymous = 'Anonymous',
  Parent = 'Parent',
  Student = 'Student',
  SuperAdmin = 'SuperAdmin',
  Teacher = 'Teacher',
  UnitAdmin = 'UnitAdmin'
}

export type Settings = {
  __typename?: 'Settings';
  activationByLink: Scalars['Boolean']['output'];
};

export type SignIn = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type SignUp = {
  birthdate: Scalars['Timestamp']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  fullNameNative: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateProjectPage = {
  id: Scalars['ID']['input'];
  instruction: Scalars['String']['input'];
  isShared: Scalars['Boolean']['input'];
  notes: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type UpdateUser = {
  birthdate: Scalars['Timestamp']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  fullNameNative: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type UserHttp = {
  __typename?: 'UserHttp';
  birthdate: Scalars['Timestamp']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['Timestamp']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  fullNameNative: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  password: Scalars['String']['output'];
  role: Role;
  updatedAt: Scalars['Timestamp']['output'];
};

export type UsersList = {
  __typename?: 'UsersList';
  countRows: Scalars['Int']['output'];
  users: Array<UserHttp>;
};
