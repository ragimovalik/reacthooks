interface NavElement {
  id: string | number;
  to: string;
  title: string;
}

export const navElements: NavElement[] = [
  { id: 'home', to: '/', title: 'Home' },
  { id: 'usestate', to: '/usestate', title: 'useState' },
  { id: 'useref', to: '/useref', title: 'useRef' },
  { id: 'useeffect', to: '/useeffect', title: 'useEffect' },
  { id: 'usecontext', to: '/usecontext', title: 'useContext' },
  { id: 'usememo', to: '/usememo', title: 'useMemo/useCallback' },
  { id: 'usereducer', to: '/usereducer', title: 'useReducer' },
];
