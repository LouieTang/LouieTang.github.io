import { ReactNode } from 'react';

function Highlight({ children }: { children: ReactNode }) {
  return <span className="highlight">{children}</span>;
}

export default Highlight;