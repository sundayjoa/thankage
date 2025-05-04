import type { Post } from "../data/postData";

export type RootStackParamList = {
    MainTabs: undefined;
    Login: undefined;
    LoginForm: undefined;
    QuizDetail: undefined;
    QuizSolo: undefined;
    Quiz: undefined;
    Explanation: undefined;
    Result: undefined;
    PostDetail: { post: Post };
    Write: { post?: Post };
};