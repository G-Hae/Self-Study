import { atom, RecoilState } from "recoil";

export const isDarkAtom: RecoilState<boolean> = atom<boolean>({
    key:"isDark",
    default: true,
});
