import { atom, useAtom } from 'jotai';

export type MODAL_VIEW = 'WALLET_CONNECT_VIEW' | 'REQUEST_MEMBERSHIP_VIEW' | 'MEMBERSHIP_PROFILE_VIEW';
const modalAtom = atom({ isOpen: false, view: 'WALLET_CONNECT_VIEW' });

export function useModal() {
  const [state, setState] = useAtom(modalAtom);
  const openModal = (view: MODAL_VIEW) =>
    setState({ ...state, isOpen: true, view });
  const closeModal = () => setState({ ...state, isOpen: false });

  return {
    ...state,
    openModal,
    closeModal,
  };
}
